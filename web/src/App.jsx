import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import Silk from './components/Silk.jsx'
import { Reveal, GradientText, TiltCard, SpotlightCard, Magnet } from './components/bits.jsx'

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FrxMmwyrpxV5e9rD7zw9F7uElM'
const LOGO_ICON = `${CDN}/hf_20260714_203445_9862aecc-6fa7-4066-9833-ac3a88522236.png`
const ABOUT_IMG = 'https://d2ol7oe51mr4n9.cloudfront.net/user_3FrxMmwyrpxV5e9rD7zw9F7uElM/b58038c3-68ab-453a-ad85-ba2785026a67.jpg'

const work = [
  {
    cat: 'Oral Care',
    poster: `${CDN}/hf_20260714_043837_37bfa5a1-79b0-4a92-bf66-1cc4b6226a55.png`,
    video: `${CDN}/hf_20260714_045932_6ce9418c-67f7-4719-948f-564482d2c842.mp4`,
    objective: 'Drive first purchases for a premium electric toothbrush.',
    approach: 'A hook led problem to solution ad that opens on the exact frustration, then shows the switch.',
  },
  {
    cat: 'Pet Products',
    poster: `${CDN}/hf_20260714_043839_f6c272de-8555-4421-a9f2-293648ece059.png`,
    video: `${CDN}/hf_20260714_045935_431d4baa-9d81-4d0a-8456-6b0394131ecc.mp4`,
    objective: 'Win new customers for a premium pet food brand.',
    approach: 'A why I switched testimonial angle that feels filmed by a real customer.',
  },
  {
    cat: 'Kitchen & Home',
    poster: `${CDN}/hf_20260714_043841_c190f729-7f90-4af3-8147-1d0da92480c4.png`,
    video: `${CDN}/hf_20260714_045936_5e24d8a5-44c0-4795-b3ec-f58d96d0a3c5.mp4`,
    objective: 'Make the benefit obvious for a kitchen gadget.',
    approach: 'A fast demo that lands the payoff in the first three seconds.',
  },
]

const industries = ['Oral Care', 'Pet', 'Kitchen', 'Home', 'Health', 'Cleaning', 'Beauty', 'Lifestyle']

const services = [
  ['🎯', 'Winning Meta Creatives', 'Ad creative built for the feed and made to test and scale in your account.'],
  ['⚡', 'AI Powered Production', 'More variations, produced faster, without booking a full film crew.'],
  ['🪝', 'Scroll Stopping Hooks', 'Multiple openings per concept so you find the one that actually converts.'],
  ['📦', 'Product Storytelling', 'Demos that sell the benefit and the reason to care, not just the product.'],
  ['🎬', 'UGC That Feels Real', 'Authentic creator style content that does not look or feel like an ad.'],
  ['🧪', 'Built For Testing', 'Batches of angles designed to run against each other so winners surface fast.'],
  ['✍️', 'Ready To Run', 'Script, voiceover, captions, and editing, delivered launch ready for Meta.'],
  ['🔁', 'Creative Iteration', 'We take what worked and push more angles from your winners.'],
]

const steps = [
  ['Research', 'We study your product, your buyer, and the ads already winning in your space.'],
  ['Strategy', 'We decide the angles worth testing and the hooks most likely to land.'],
  ['Creative Concepts', 'We map out distinct concepts so every video tests a different idea.'],
  ['Production', 'We produce the footage fast using an AI assisted workflow.'],
  ['Editing', 'We cut for retention and hook strength, the way performance ads are built.'],
  ['Delivery', 'You get clean, launch ready files sized for Meta and short form.'],
  ['Testing', 'You run the batch and let the audience tell you what performs.'],
  ['Iteration', 'We take the winners and spin up fresh angles to scale them further.'],
]

const faqs = [
  ['How long does production take?', 'Most first drafts land within a couple of days. We confirm exact timing when we scope your batch, and larger batches are planned out up front.'],
  ['Can you work with our existing ads?', 'Yes. We can build new hooks and angles around what is already running, or start fresh. Either way the goal is more creative to test.'],
  ['Can you create AI UGC?', 'Yes. AI UGC is core to what we do. It is produced to feel like a real creator filmed it, not like a polished ad.'],
  ['Do I need to send you products?', 'Often no. Because the work is AI assisted, we can usually start from your images and product details. If a concept genuinely needs the physical product, we will tell you up front.'],
  ['Can you manage our Meta ads?', 'Not yet. Today we focus entirely on the creative. Media buying is on our roadmap, and we will always be straight about what we do now versus later.'],
  ['How many revisions are included?', 'One round of revisions is included on every video so it lands right. Extra rounds are available as a simple add on.'],
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', on, { passive: true })
    on()
    return () => window.removeEventListener('scroll', on)
  }, [])
  const links = [['Work', '#work'], ['Approach', '#approach'], ['Services', '#services'], ['Process', '#process'], ['Pricing', '#pricing'], ['FAQ', '#faq']]
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo"><img className="logo-mark" src={LOGO_ICON} alt="" /><span>Reelo</span></a>
        <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          <a href="#contact" className="btn btn-sm btn-primary">Work with us</a>
        </nav>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

// Hero phones with mouse parallax and gentle float
function HeroPhones() {
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 })
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 })
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 26)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 22)
  }
  const reset = () => { mx.set(0); my.set(0) }
  return (
    <div className="hero-media" onMouseMove={onMove} onMouseLeave={reset}>
      <motion.div className="phones" style={{ x: mx, y: my }}>
        <div className="phone-glow" />
        {work.map((w, i) => (
          <div key={w.cat} className={`phone-pos phone-${'abc'[i]}`}>
            <div className="phone" style={{ animationDelay: `${i * -2.1}s` }}>
              <video autoPlay muted loop playsInline poster={w.poster}>
                <source src={w.video} type="video/mp4" />
              </video>
              <span className="phone-sheen" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function WorkCard({ item }) {
  const vref = useRef(null)
  return (
    <TiltCard className="case glass" max={6}>
      <div
        className="case-media"
        onMouseEnter={() => vref.current && vref.current.play().catch(() => {})}
        onMouseLeave={() => vref.current && vref.current.pause()}
      >
        <video ref={vref} muted loop playsInline poster={item.poster}>
          <source src={item.video} type="video/mp4" />
        </video>
        <span className="badge">Spec Concept</span>
      </div>
      <div className="case-body">
        <h3>{item.cat}</h3>
        <div className="case-row"><span className="case-k">Objective</span><p>{item.objective}</p></div>
        <div className="case-row"><span className="case-k">Creative</span><p>{item.approach}</p></div>
      </div>
    </TiltCard>
  )
}

function AboutImage() {
  const [ok, setOk] = useState(true)
  if (!ok) {
    return (
      <div className="about-ph">
        <div className="about-ph-ico">📸</div>
        <div>Add your photo</div>
        <small>web/public/about-me.jpg</small>
      </div>
    )
  }
  return <img className="about-img" src={ABOUT_IMG} alt="Cayden, founder of Reelo" onError={() => setOk(false)} />
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item glass ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen((o) => !o)}>
        <span>{q}</span><span className="plus">+</span>
      </div>
      <div className="faq-a" style={{ maxHeight: open ? 260 : 0 }}>
        <p>{a}</p>
      </div>
    </div>
  )
}

function ContactForm() {
  const [state, handleSubmit] = useForm('maqrnpnb')
  if (state.succeeded) {
    return (
      <div className="contact-success">
        <div className="cs-check">✓</div>
        <h3>Thanks, got it.</h3>
        <p>Your message is on its way. I will come back with a few ideas for your brand soon.</p>
      </div>
    )
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>Name<input type="text" name="name" required placeholder="Your name" /></label>
        <label>Email<input type="email" name="email" required placeholder="you@brand.com" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="fs-err" /></label>
      </div>
      <div className="field-row">
        <label>Brand<input type="text" name="brand" placeholder="Brand name" /></label>
        <label>Website<input type="text" name="website" placeholder="brand.com" /></label>
      </div>
      <div className="field-row">
        <label>Monthly ad spend
          <select name="monthly_ad_spend" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Not running ads yet</option>
            <option>Under $5k</option>
            <option>$5k to $20k</option>
            <option>$20k to $50k</option>
            <option>$50k and up</option>
          </select>
        </label>
        <label>Current ad platform
          <select name="ad_platform" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Meta</option>
            <option>TikTok</option>
            <option>Meta and TikTok</option>
            <option>Not running ads yet</option>
          </select>
        </label>
      </div>
      <label>What product are you promoting?<input type="text" name="product" placeholder="A quick description" /></label>
      <label>What are your goals?<textarea name="goals" rows="3" placeholder="What you want the creative to do" /></label>
      <label>Timeline
        <select name="timeline" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>As soon as possible</option>
          <option>This month</option>
          <option>Next quarter</option>
          <option>Just exploring</option>
        </select>
      </label>
      <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={state.submitting}>
        {state.submitting ? 'Sending' : "Let's build something that performs"}
      </button>
      <ValidationError errors={state.errors} className="fs-err" />
    </form>
  )
}

export default function App() {
  return (
    <>
      <Silk />
      <div className="bg-veil" aria-hidden="true" />
      <div className="glow-pulse" aria-hidden="true" />
      <div className="app" id="top">
        <Nav />

        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <Reveal className="hero-copy">
              <div className="eyebrow"><span className="pulse" /> Performance Creative for Ecommerce</div>
              <h1>Creative That Scales <GradientText>Winning Ads</GradientText></h1>
              <p className="lead">We create AI UGC, Meta ad creatives, and product videos designed to help brands test more creatives and scale winning ads.</p>
              <div className="hero-actions">
                <Magnet strength={0.32}><a href="#contact" className="btn btn-primary btn-lg">Get Video Ideas For Your Brand</a></Magnet>
                <a href="#work" className="btn btn-ghost btn-lg">View Our Work</a>
              </div>
              <div className="hero-proof">
                <span>Real creators</span><span className="d" />
                <span>Real creative</span><span className="d" />
                <span>Real performance</span>
              </div>
            </Reveal>
            <Reveal delay={0.15}><HeroPhones /></Reveal>
          </div>
        </section>

        {/* INDUSTRIES STRIP */}
        <section className="strip">
          <div className="strip-label">Built for ecommerce brands that live on their ad performance</div>
          <div className="marquee">{[...industries, ...industries].map((n, i) => <span key={i}>{n}</span>)}</div>
        </section>

        {/* VALUE PROPS (honest, no numbers) */}
        <section className="values container">
          {[
            ['Fast by design', 'First drafts in days, not weeks, so you keep testing while momentum is high.'],
            ['Built for testing', 'Batches of distinct angles, not one off videos, so winners surface faster.'],
            ['Truly done for you', 'Script, voiceover, captions, and editing, delivered ready to run on Meta.'],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <SpotlightCard className="value">
                <h3>{t}</h3><p>{d}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </section>

        {/* WORK / CASE STUDIES */}
        <section className="section" id="work">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a1)' }}>Selected work</div>
              <h2>Concepts built to <GradientText>win the scroll</GradientText></h2>
              <p className="section-sub">A look at how we think about creative. Every piece here is a spec concept, built independently to show the approach. We never imply a brand hired us.</p>
            </Reveal>
            <div className="cases">
              {work.map((item, i) => <Reveal key={item.cat} delay={i * 0.1}><WorkCard item={item} /></Reveal>)}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a2)' }}>What you get</div>
              <h2>Everything that goes into <GradientText>ads that perform</GradientText></h2>
              <p className="section-sub">Not a list of tasks. The pieces that actually move your results.</p>
            </Reveal>
            <div className="services-grid">
              {services.map(([ico, t, c], i) => (
                <Reveal key={t} delay={(i % 4) * 0.06}>
                  <SpotlightCard className="svc"><div className="svc-ico">{ico}</div><h3>{t}</h3><p>{c}</p></SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH / PHILOSOPHY */}
        <section className="section" id="approach">
          <div className="container">
            <div className="about-grid">
              <Reveal>
                <TiltCard className="about-frame glass" max={6}><AboutImage /></TiltCard>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="about-copy">
                  <div className="eyebrow" style={{ color: 'var(--a3)' }}>Our approach</div>
                  <h2>The brands that win are the ones testing the <GradientText>most creative</GradientText></h2>
                  <p>Performance is not a single perfect video. It is volume, speed, and iteration. The brands that scale are the ones putting more angles in front of their audience and letting the results decide.</p>
                  <p>So we built for that. We move fast, we test in batches, and we treat every ad as a hook first. When something works, we do not stop, we push more angles from the winner until it stops scaling.</p>
                  <p>AI lets us produce more, faster. But the strategy, the hooks, and the story are where the real work goes. That is the part that makes an ad actually perform.</p>
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
              <div className="eyebrow" style={{ color: 'var(--a1)' }}>Process</div>
              <h2>How a winning batch <GradientText>comes together</GradientText></h2>
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
                    <h3>{name}</h3>
                    <div className="amt">{amt}</div>
                    <div className="unit">{unit}</div>
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
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a3)' }}>FAQ</div>
              <h2>The questions brands ask</h2>
            </Reveal>
            <div className="faq">
              {faqs.map(([q, a], i) => <Reveal key={q} delay={i * 0.04}><Faq q={q} a={a} /></Reveal>)}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="container narrow">
            <Reveal>
              <SpotlightCard className="contact-card">
                <div className="eyebrow" style={{ color: 'var(--a1)' }}>Contact</div>
                <h2>Let's build something that <GradientText>performs</GradientText></h2>
                <p className="section-sub">Tell me about your brand and I will come back with a few video ideas made specifically for your product. No pressure, no hard sell.</p>
                <ContactForm />
                <div className="contact-or">or email directly</div>
                <a className="email-link" href="mailto:cayden.w.sims@gmail.com?subject=Reelo%20inquiry">cayden.w.sims@gmail.com</a>
              </SpotlightCard>
            </Reveal>
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
