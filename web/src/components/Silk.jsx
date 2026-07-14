import { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'

/*
  Silk — a flowing, glassy WebGL gradient background (React Bits style).
  Renders a full-screen animated silk/aurora field in the brand palette.
  Cheap: one fullscreen triangle, one fragment shader, capped DPR.
*/

const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  // smooth value noise
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p){
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i+vec2(0.0,0.0)), hash(i+vec2(1.0,0.0)), u.x),
               mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0; float a = 0.5;
    for(int i=0;i<5;i++){ v += a*noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 p = uv; p.x *= aspect;

    float t = uTime * 0.05;
    // flowing silk distortion
    float f1 = fbm(p * 2.4 + vec2(t, t * 0.6));
    float f2 = fbm(p * 3.1 - vec2(t * 0.7, t));
    float silk = fbm(p * 2.0 + vec2(f1, f2) * 1.6 + t);

    // vertical falloff so it fades toward the bottom (glassy header glow)
    float fade = smoothstep(1.05, -0.15, uv.y);

    vec3 col = mix(uColorA, uColorB, smoothstep(0.2, 0.8, silk));
    col = mix(col, uColorC, smoothstep(0.55, 1.0, f1));

    // soft banded sheen
    float sheen = 0.5 + 0.5 * sin((silk * 6.0) + uTime * 0.25);
    col += sheen * 0.05;

    float intensity = 0.4 * fade + 0.04;
    gl_FragColor = vec4(col * intensity, 1.0);
  }
`

export default function Silk() {
  const ref = useRef(null)

  useEffect(() => {
    const host = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 1.5), alpha: false })
    const gl = renderer.gl
    gl.clearColor(0.02, 0.024, 0.04, 1)
    host.appendChild(gl.canvas)
    gl.canvas.style.width = '100%'
    gl.canvas.style.height = '100%'

    const geometry = new Triangle(gl)
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
        uColorA: { value: [0.36, 0.42, 0.85] }, // periwinkle
        uColorB: { value: [0.20, 0.62, 0.68] }, // aqua
        uColorC: { value: [0.62, 0.52, 0.9] },  // lilac
      },
    })
    const mesh = new Mesh(gl, { geometry, program })

    const resize = () => {
      const w = host.clientWidth
      const h = host.clientHeight
      renderer.setSize(w, h)
      program.uniforms.uResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight]
    }
    window.addEventListener('resize', resize)
    resize()

    let raf
    const start = performance.now()
    const loop = (now) => {
      program.uniforms.uTime.value = (now - start) / 1000
      renderer.render({ scene: mesh })
      raf = requestAnimationFrame(loop)
    }
    if (reduce) {
      program.uniforms.uTime.value = 8
      renderer.render({ scene: mesh })
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas)
      const ext = gl.getExtension('WEBGL_lose_context')
      if (ext) ext.loseContext()
    }
  }, [])

  return <div ref={ref} className="bg-canvas" aria-hidden="true" />
}
