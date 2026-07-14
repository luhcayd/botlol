import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'

/* Reveal — fades/slides content in on scroll (React Bits AnimatedContent) */
export function Reveal({ children, delay = 0, y = 26, className, as = 'div' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const M = motion[as] || motion.div
  return (
    <M
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

/* GradientText — animated gradient text */
export function GradientText({ children, className = '' }) {
  return <span className={`grad-text ${className}`}>{children}</span>
}

/* ShinyText — sweeping sheen across muted text */
export function ShinyText({ children, className = '' }) {
  return <span className={`shiny ${className}`}>{children}</span>
}

/* TiltCard — 3D tilt toward the cursor (React Bits TiltedCard) */
export function TiltCard({ children, className = '', max = 10 }) {
  const ref = useRef(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * max * 2)
    rx.set(-py * max * 2)
  }
  const onLeave = () => { rx.set(0); ry.set(0) }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  )
}

/* SpotlightCard — glass card with a cursor-following glow (React Bits SpotlightCard) */
export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -200, y: -200, on: false })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, on: true })
  }
  return (
    <div
      ref={ref}
      className={`glass ${className}`}
      onMouseMove={onMove}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          opacity: pos.on ? 1 : 0, transition: 'opacity .3s',
          background: `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, rgba(124,139,255,0.16), transparent 60%)`,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</div>
    </div>
  )
}

/* Magnet — element that leans toward the cursor (React Bits Magnet) */
export function Magnet({ children, strength = 0.4, className = '' }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, display: 'inline-flex' }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}

/* CountUp — number rolls up when scrolled into view (React Bits CountUp) */
export function CountUp({ value, prefix = '', suffix = '', duration = 1.6, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const [display, setDisplay] = useState(prefix + '0' + suffix)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(prefix + v.toFixed(decimals) + suffix),
    })
    return () => controls.stop()
  }, [inView, value, prefix, suffix, duration, decimals])
  return <span ref={ref}>{display}</span>
}
