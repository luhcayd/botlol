import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import Silk from './components/Silk.jsx'
import { Reveal, GradientText, TiltCard, SpotlightCard, Magnet } from './components/bits.jsx'

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FrxMmwyrpxV5e9rD7zw9F7uElM'
const LOGO_ICON = `${CDN}/hf_20260714_203445_9862aecc-6fa7-4066-9833-ac3a88522236.png`
const ABOUT_IMG = 'https://d2ol7oe51mr4n9.cloudfront.net/user_3FrxMmwyrpxV5e9rD7zw9F7uElM/b58038c3-68ab-453a-ad85-ba2785026a67.jpg'

const V = {
  oral: `${CDN}/hf_20260714_045932_6ce9418c-67f7-4719-948f-564482d2c842.mp4`,
  pet: `${CDN}/hf_20260714_045935_431d4baa-9d81-4d0a-8456-6b0394131ecc.mp4`,
  kitchen: `${CDN}/hf_20260714_045936_5e24d8a5-44c0-4795-b3ec-f58d96d0a3c5.mp4`,
  skin: `${CDN}/hf_20260715_092249_16e481fa-9825-408c-81df-3a7f62e1329e.mp4`,
  greens: `${CDN}/hf_20260715_092250_bce85103-b31e-4d15-aeed-7023551b7dca.mp4`,
  groom: `${CDN}/hf_20260715_092252_769a2787-28d4-4663-a1fa-7cb81e24a015.mp4`,
}
const P = {
  oral: `${CDN}/hf_20260714_043837_37bfa5a1-79b0-4a92-bf66-1cc4b6226a55.png`,
  pet: `${CDN}/hf_20260714_043839_f6c272de-8555-4421-a9f2-293648ece059.png`,
  kitchen: `${CDN}/hf_20260714_043841_c190f729-7f90-4af3-8147-1d0da92480c4.png`,
}

// Floating creative wall tiles (layered, different sizes, rotations)
const wall = [
  { v: V.oral, cls: 'tile-a' },
  { v: V.skin, cls: 'tile-b' },
  { v: V.kitchen, cls: 'tile-c' },
  { v: V.greens, cls: 'tile-d' },
  { v: V.pet, cls: 'tile-e' },
  { v: V.groom, cls: 'tile-f' },
]

const chips = ['Built For Meta', 'Creator Style', 'AI Powered', 'Fast Turnaround', 'Unlimited Creative Ideas']

const work = [
  { cat: 'Oral Care', platform: 'Meta / Reels', poster: P.oral, video: V.oral, objective: 'Drive first purchases for a premium electric toothbrush.', creative: 'A hook led problem to solution ad that opens on the exact frustration, then the switch.' },
  { cat: 'Pet Products', platform: 'Meta / TikTok', poster: P.pet, video: V.pet, objective: 'Win new customers for a premium pet food brand.', creative: 'A why I switched testimonial angle that feels filmed by a real customer.' },
  { cat: 'Kitchen & Home', platform: 'Meta / Reels', poster: P.kitchen, video: V.kitchen, objective: 'Make the benefit obvious for a kitchen gadget.', creative: 'A fast demo that lands the payoff in the first three seconds.' },
]

const bento = [
  ['🎯', 'Win the feed', 'Ad creative engineered to stop the scroll and earn the click on Meta.', 'b-wide'],
  ['🪝', 'More angles', 'Multiple hooks per concept so you find what actually converts.', ''],
  ['⚡', 'Made fast', 'AI powered production means more ideas in front of your audience, sooner.', ''],
  ['🎬', 'Feels real', 'Creator style content that does not look or feel like an ad.', ''],
  ['✍️', 'Ready to run', 'Script, voiceover, captions, and editing, delivered launch ready.', ''],
  ['🔁', 'Scale the winners', 'We take what performs and push more angles to scale it further.', 'b-wide'],
]

const steps = [
  ['Research', 'We study your product, your buyer, and the ads already winning in your space.'],
  ['Concept', 'We choose the angles worth testing and the hooks most likely to land.'],
  ['Script', 'We write to a real ad framework: hook, problem, solution, benefit, call to action.'],
  ['Production', 'We produce the footage fast using an AI assisted workflow.'],
  ['Editing', 'We cut for retention and hook strength, the way performance ads are built.'],
  ['Delivery', 'You get clean, launch ready files sized for Meta and short form.'],
  ['Testing', 'You run the batch and let the audience tell you what performs.'],
  ['Iteration', 'We take the winners and spin up fresh angles to scale them.'],
]

const faqs = [
  ['How long does production take?', 'Most first drafts land within a couple of days. Larger batches are planned up front and we confirm exact timing when we scope your project.'],
  ['Can you work with our existing ads?', 'Yes. We can build new hooks and angles around what is already running, or start fresh. Either way the goal is more creative to test.'],
  ['Can you create AI UGC?', 'Yes. AI UGC is core to what we do, produced to feel like a real creator filmed it, not like a polished ad.'],
  ['Do I need to send you products?', 'Often no. Because the work is AI assisted, we can usually start from your images and product details. If a concept genuinely needs the physical product, we will tell you up front.'],
  ['Can you manage our Meta ads?', 'Not yet. Today we focus entirely on the creative. Media buying is on our roadmap, and we will always be straight about what we do now versus later.'],
  ['How many revisions are included?', 'One round of revisions is included on every video. Extra rounds are a simple add on.'],
]

const creativeConcepts = [
  ['Problem → Solution', 'Open on the exact frustration, then reveal the fix.'],
  ['Morning Routine', 'Slot the product into a relatable daily ritual.'],
  ['POV Review', 'First person, as if a friend is showing you.'],
  ['Comparison', 'Position the product against the annoying old way.'],
  ['Story', 'A short narrative arc that earns attention.'],
  ['Before & After', 'Make the transformation impossible to miss.'],
  ['Lifestyle', "Show the product living in your customer's world."],
  ['Voiceover', 'A tight script over b roll that sells the benefit.'],
  ['UGC', 'Authentic creator style that does not feel like an ad.'],
  ['Educational', 'Teach one useful thing, then earn the click.'],
  ['Funny', 'A pattern interrupt that stops the scroll with a laugh.'],
  ['Meta Hook', 'A scroll stopping opener engineered for the feed.'],
]
const categories = ['Oral Care', 'Pet', 'Cleaning', 'Kitchen', 'Health', 'Beauty', 'Tech', 'Food', 'Home', 'Other']
const adOptions = ['Running Meta Ads', 'Running TikTok Ads', 'Running Google Ads', 'Organic Only', 'No Advertising Yet']
const goalOptions = ['Increase Sales', 'Lower CPA', 'Launch Product', 'Generate UGC', 'Refresh Existing Ads', 'Need New Creatives', 'Testing New Hooks', 'Other']

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', on, { passive: true })
    on()
    return () => window.removeEventListener('scroll', on)
  }, [])
  const links = [['Work', '#work'], ['What you get', '#services'], ['Approach', '#approach'], ['Process', '#process'], ['Pricing', '#pricing'], ['FAQ', '#faq']]
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo"><img className="logo-mark" src={LOGO_ICON} alt="" /><span>Reelo</span></a>
        <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          <a href="#contact" className="btn btn-sm btn-primary">Get Video Ideas</a>
        </nav>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}><span /><span /><span /></button>
      </div>
    </header>
  )
}

function CreativeWall() {
  const mx = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 })
  const my = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 })
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 30)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 26)
  }
  const reset = () => { mx.set(0); my.set(0) }
  return (
    <div className="wall-wrap" onMouseMove={onMove} onMouseLeave={reset}>
      <div className="wall-ambient" />
      <motion.div className="wall" style={{ x: mx, y: my }}>
        {wall.map((t, i) => (
          <div key={i} className={`tile-pos ${t.cls}`}>
            <div className="tile" style={{ animationDelay: `${i * -1.6}s`, animationDuration: `${7 + (i % 3)}s` }}>
              <video autoPlay muted loop playsInline poster={t.poster}>
                <source src={t.v} type="video/mp4" />
              </video>
              <span className="tile-sheen" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function WorkCard({ item }) {
  const vref = useRef(null)
  const [expanded, setExpanded] = useState(false)
  return (
    <TiltCard className="case glass" max={5}>
      <div
        className="case-media"
        onMouseEnter={() => { setExpanded(true); vref.current && vref.current.play().catch(() => {}) }}
        onMouseLeave={() => { setExpanded(false); vref.current && vref.current.pause() }}
      >
        <video ref={vref} muted loop playsInline poster={item.poster}><source src={item.video} type="video/mp4" /></video>
        <span className="badge">Spec Concept</span>
        <div className={`case-over ${expanded ? 'show' : ''}`}>
          <div><span className="case-k">Objective</span><p>{item.objective}</p></div>
          <div><span className="case-k">Creative</span><p>{item.creative}</p></div>
          <div><span className="case-k">Platform</span><p>{item.platform}</p></div>
        </div>
      </div>
      <div className="case-body"><h3>{item.cat}</h3><span className="case-hint">Hover to preview</span></div>
    </TiltCard>
  )
}

function AboutImage() {
  const [ok, setOk] = useState(true)
  if (!ok) return <div className="about-ph"><div className="about-ph-ico">📸</div><div>Add your photo</div><small>web/public/about-me.jpg</small></div>
  return <img className="about-img" src={ABOUT_IMG} alt="Cayden, founder of Reelo" onError={() => setOk(false)} />
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item glass ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen((o) => !o)}><span>{q}</span><span className="plus">+</span></div>
      <div className="faq-a" style={{ maxHeight: open ? 260 : 0 }}><p>{a}</p></div>
    </div>
  )
}

function CreativeLibrary({ onRequest }) {
  return (
    <section className="section" id="library">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow" style={{ color: 'var(--a3)' }}>Creative library</div>
          <h2>The frameworks behind <GradientText>scroll stopping ads</GradientText></h2>
          <p className="section-sub">These are the proven angles we build from. Find one that fits your product and request it in a click.</p>
        </Reveal>
        <div className="lib-grid">
          {creativeConcepts.map(([name, desc], i) => (
            <Reveal key={name} delay={(i % 4) * 0.05}>
              <SpotlightCard className="lib-card">
                <div className="lib-top"><span className="lib-tag">Concept</span></div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <button className="lib-btn" onClick={() => onRequest(name)}>Request this creative <span aria-hidden="true">→</span></button>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckGroup({ label, name, options }) {
  return (
    <div className="check-group">
      <span className="cg-label">{label}</span>
      <div className="cg-chips">
        {options.map((o) => (
          <label key={o} className="cg-chip">
            <input type="checkbox" name={name} value={o} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function ContactForm({ prefill }) {
  const [state, handleSubmit] = useForm('maqrnpnb')
  const [concept, setConcept] = useState('')
  const [pkg, setPkg] = useState('')
  useEffect(() => {
    if (prefill.concept) setConcept(prefill.concept)
    if (prefill.pkg) setPkg(prefill.pkg)
  }, [prefill])

  if (state.succeeded) {
    return (
      <div className="contact-success">
        <div className="cs-check">✓</div>
        <h3>Thank you</h3>
        <p>Your request has been received. We will review your product and recommend creative concepts that fit your goals. If you selected a Creative Library concept, we will include ideas inspired by that framework.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="field-row">
        <label>Full name *<input type="text" name="name" required placeholder="Your name" /></label>
        <label>Company *<input type="text" name="company" required placeholder="Brand name" /></label>
      </div>
      <div className="field-row">
        <label>Business email *<input type="email" name="email" required placeholder="you@brand.com" /><ValidationError prefix="Email" field="email" errors={state.errors} className="fs-err" /></label>
        <label>Website<input type="text" name="website" placeholder="brand.com" /></label>
      </div>
      <div className="field-row">
        <label>Product name *<input type="text" name="product" required placeholder="What are you promoting?" /></label>
        <label>Product category *
          <select name="product_category" required defaultValue="">
            <option value="" disabled>Select a category</option>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
      </div>
      <label>Creative concept
        <select name="creative_concept" value={concept} onChange={(e) => setConcept(e.target.value)}>
          <option value="">Any, recommend the best fit</option>
          {creativeConcepts.map(([n]) => <option key={n}>{n}</option>)}
        </select>
      </label>
      <CheckGroup label="Current advertising" name="current_advertising" options={adOptions} />
      <CheckGroup label="Project goals" name="project_goals" options={goalOptions} />
      <label>Package
        <select name="package" value={pkg} onChange={(e) => setPkg(e.target.value)}>
          <option value="">Not sure yet</option>
          <option>Starter</option><option>Growth</option><option>Scale</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows="4" placeholder="Tell us about your product, your goals, and anything you'd like us to know." /></label>
      <label className="file-label">Attach files <span className="file-hint">product photos, logos, brand guidelines, existing ads</span>
        <input type="file" name="attachments" multiple accept="image/*,video/*,.pdf,.doc,.docx" />
      </label>
      <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={state.submitting}>{state.submitting ? 'Sending' : 'Get My Creative Strategy'}</button>
      <ValidationError errors={state.errors} className="fs-err" />
    </form>
  )
}

export default function App() {
  const [prefill, setPrefill] = useState({ concept: '', pkg: '' })
  const requestCreative = (concept) => {
    setPrefill({ concept, pkg: 'Growth' })
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <Silk />
      <div className="bg-veil" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="app" id="top">
        <Nav />

        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <Reveal className="hero-copy">
              <div className="eyebrow"><span className="pulse" /> Performance Creative For Ecommerce Brands</div>
              <h1>More Winning Ads.<br /><GradientText>Less Guesswork.</GradientText></h1>
              <p className="lead">We build AI powered UGC, Meta creatives, and product ads designed to help brands test more ideas, beat creative fatigue, and scale what works.</p>
              <div className="hero-actions">
                <Magnet strength={0.3}><a href="#contact" className="btn btn-primary btn-lg">Get Video Ideas</a></Magnet>
                <a href="#work" className="btn btn-ghost btn-lg">Watch Our Work</a>
              </div>
            </Reveal>
            <Reveal delay={0.15}><CreativeWall /></Reveal>
          </div>
        </section>

        {/* CHIPS */}
        <section className="chips-row container">
          {chips.map((c, i) => (
            <Reveal key={c} delay={i * 0.06} className="chip glass">{c}</Reveal>
          ))}
        </section>

        {/* WORK */}
        <section className="section" id="work">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a1)' }}>Selected work</div>
              <h2>Creative built to <GradientText>win the scroll</GradientText></h2>
              <p className="section-sub">How we think about ads. Every piece here is a spec concept, built independently to show the approach. We never imply a brand hired us.</p>
            </Reveal>
            <div className="cases">
              {work.map((item, i) => <Reveal key={item.cat} delay={i * 0.1}><WorkCard item={item} /></Reveal>)}
            </div>
          </div>
        </section>

        {/* CREATIVE LIBRARY */}
        <CreativeLibrary onRequest={requestCreative} />

        {/* SERVICES BENTO */}
        <section className="section" id="services">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a2)' }}>What you receive</div>
              <h2>Everything behind <GradientText>ads that perform</GradientText></h2>
              <p className="section-sub">Not a list of tasks. The things that actually move your results.</p>
            </Reveal>
            <div className="bento">
              {bento.map(([ico, t, c, cls], i) => (
                <Reveal key={t} delay={(i % 3) * 0.06} className={`bento-cell ${cls}`}>
                  <SpotlightCard className="bento-card">
                    <div className="svc-ico">{ico}</div>
                    <div className="bento-body"><h3>{t}</h3><p>{c}</p></div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH / PHILOSOPHY */}
        <section className="section approach" id="approach">
          <div className="container">
            <Reveal className="statement">
              <div className="eyebrow" style={{ color: 'var(--a3)' }}>Creative philosophy</div>
              <h2>Brands don't need one perfect ad.<br />They need <GradientText>hundreds of creative ideas.</GradientText></h2>
            </Reveal>
            <div className="phil-grid">
              {[
                ['Volume beats perfection', 'The winner is rarely the ad you expected. You find it by testing more, not by polishing one.'],
                ['Speed compounds', 'The faster you get new angles live, the faster you learn what your audience responds to.'],
                ['Hooks decide everything', 'Most ads are won or lost in the first three seconds. We build every concept hook first.'],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.08}><SpotlightCard className="phil-card"><h3>{t}</h3><p>{d}</p></SpotlightCard></Reveal>
              ))}
            </div>
            <div className="about-grid">
              <Reveal><TiltCard className="about-frame glass" max={6}><AboutImage /></TiltCard></Reveal>
              <Reveal delay={0.12}>
                <div className="about-copy">
                  <p>I started Reelo because I kept watching great products lose to average ones for a single reason: the average ones simply tested more creative. AI lets us produce more, faster, but the strategy, the hooks, and the story are where the real work goes.</p>
                  <p className="signoff">Cayden, founder of Reelo</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section" id="process">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a1)' }}>Creative workflow</div>
              <h2>How winning ads <GradientText>get built</GradientText></h2>
              <p className="section-sub">A clear path from research to results, built to keep creative flowing into your account.</p>
            </Reveal>
            <div className="timeline">
              {steps.map(([t, d], i) => (
                <Reveal key={t} className="tl-step" delay={i * 0.05}>
                  <div className="tl-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="tl-body"><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a2)' }}>Pricing</div>
              <h2>Simple packages, <GradientText>built for testing</GradientText></h2>
              <p className="section-sub">Introductory, per project pricing. More videos means more angles to run against each other.</p>
            </Reveal>
            <div className="pricing-grid">
              {[
                ['Starter', '$100', '1 video', ['One finished ad creative', 'Script and concept', 'Voiceover and captions', 'One round of revisions'], false, 'Start here', 'btn-ghost'],
                ['Growth', '$250', '3 videos', ['Three creatives to test', 'A different angle per video', 'Everything in Starter', 'Ready to run on Meta'], true, 'Get started', 'btn-primary'],
                ['Scale', '$400', '5 videos', ['Five creatives to test', 'Best for active ad accounts', 'Everything in Growth', 'Priority delivery'], false, 'Scale up', 'btn-ghost'],
              ].map(([name, amt, unit, feats, feat, cta, btn]) => (
                <Reveal key={name} delay={feat ? 0.05 : 0.12}>
                  <div className={`price glass ${feat ? 'featured' : ''}`}>
                    {feat && <div className="tag">Most popular</div>}
                    <h3>{name}</h3><div className="amt">{amt}</div><div className="unit">{unit}</div>
                    <ul>{feats.map((f) => <li key={f}>{f}</li>)}</ul>
                    <a href="#contact" className={`btn ${btn} btn-block`}>{cta}</a>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="addons">
              <span>Add ons</span>
              <div className="addon glass">Hook variations <strong>+$25</strong></div>
              <div className="addon glass">Extra revisions <strong>+$25</strong></div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container narrow">
            <Reveal className="section-head"><div className="eyebrow" style={{ color: 'var(--a3)' }}>FAQ</div><h2>The questions brands ask</h2></Reveal>
            <div className="faq">{faqs.map(([q, a], i) => <Reveal key={q} delay={i * 0.04}><Faq q={q} a={a} /></Reveal>)}</div>
          </div>
        </section>

        {/* CONTACT (split) */}
        <section className="section" id="contact">
          <div className="container">
            <div className="contact-split">
              <Reveal className="contact-left">
                <div className="eyebrow" style={{ color: 'var(--a1)' }}>Start a project</div>
                <h2>Let's build your next <GradientText>winning ad</GradientText></h2>
                <p className="section-sub">Tell us about your product and we will recommend the best creative concepts for your brand. It is the start of a creative strategy, not a generic inquiry.</p>
                <div className="contact-meta">
                  <div><span>Email</span><a className="email-link" href="mailto:cayden.w.sims@gmail.com?subject=Reelo%20inquiry">cayden.w.sims@gmail.com</a></div>
                  <div><span>Response</span><p>Usually within a day</p></div>
                </div>
              </Reveal>
              <Reveal delay={0.12} className="contact-right">
                <SpotlightCard className="contact-card"><ContactForm prefill={prefill} /></SpotlightCard>
              </Reveal>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="logo"><img className="logo-mark" src={LOGO_ICON} alt="" /><span>Reelo</span></div>
            <p>Performance creative for ecommerce brands.</p>
            <p className="fine">All work marked "Spec Concept" is created independently and does not imply a client relationship.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
