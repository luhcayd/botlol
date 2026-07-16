import { useEffect, useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Silk from './components/Silk.jsx'
import { Reveal, GradientText, TiltCard, SpotlightCard, Magnet, ScrollProgress, BlurText, ShinyText, CountUp } from './components/bits.jsx'
import { Icon, ArrowRight } from './components/icons.jsx'

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

// Hero video columns: all 6 videos, split across 3 auto-scrolling columns.
const heroCols = [
  { dur: 36, reverse: false, items: [{ v: V.oral, p: P.oral }, { v: V.skin }] },
  { dur: 46, reverse: true, items: [{ v: V.kitchen, p: P.kitchen }, { v: V.greens }] },
  { dur: 40, reverse: false, items: [{ v: V.pet, p: P.pet }, { v: V.groom }] },
]

const chips = ['Built For Meta', 'Creator Style', 'AI Powered', 'Fast Turnaround', 'Unlimited Creative Ideas']

const work = [
  { cat: 'Oral Care', platform: 'Meta / Reels', poster: P.oral, video: V.oral, objective: 'Drive first purchases for a premium electric toothbrush.', creative: 'A hook led problem to solution ad that opens on the exact frustration, then the switch.' },
  { cat: 'Pet Products', platform: 'Meta / TikTok', poster: P.pet, video: V.pet, objective: 'Win new customers for a premium pet food brand.', creative: 'A why I switched testimonial angle that feels filmed by a real customer.' },
  { cat: 'Kitchen & Home', platform: 'Meta / Reels', poster: P.kitchen, video: V.kitchen, objective: 'Make the benefit obvious for a kitchen gadget.', creative: 'A fast demo that lands the payoff in the first three seconds.' },
]

const bento = [
  ['Target', 'Win the feed', 'Ad creative engineered to stop the scroll and earn the click on Meta.'],
  ['Hook', 'More angles', 'Multiple hooks per concept so you find what actually converts.'],
  ['Bolt', 'Made fast', 'AI powered production means more ideas in front of your audience, sooner.'],
  ['Film', 'Feels real', 'Creator style content that does not look or feel like an ad.'],
  ['Pen', 'Ready to run', 'Script, voiceover, captions, and editing, delivered launch ready.'],
  ['Chart', 'Scale the winners', 'We take what performs and push more angles to scale it further.'],
]

const faqs = [
  ['How long does production take?', 'Most first drafts land within a couple of days. Larger batches are planned up front and we confirm exact timing when we scope your project.'],
  ['Can you work with our existing ads?', 'Yes. We can build new hooks and angles around what is already running, or start fresh. Either way the goal is more creative to test.'],
  ['Can you create AI UGC?', 'Yes. AI UGC is core to what we do, produced to feel like a real creator filmed it, not like a polished ad.'],
  ['Do I need to send you products?', 'Often no. Because the work is AI assisted, we can usually start from your images and product details. If a concept genuinely needs the physical product, we will tell you up front.'],
  ['Do you help with Meta campaigns?', 'Yes, on the setup and testing side. We help structure and organize campaigns for creative testing and support the launch and optimization of your creative. We are not your day to day media buyer managing spend and bidding, that stays with you or your buyer.'],
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

const metaCards = [
  ['Film', 'Creative Production', 'We create AI UGC, product demonstrations, hook variations, and performance creatives designed specifically for paid social.', ['AI UGC', 'Product Demonstrations', 'Hook Variations', 'Voiceovers', 'Scripts', 'Editing']],
  ['Grid', 'Meta Campaign Setup', 'Once the creative is ready, we help structure campaigns so your testing stays organized and scalable.', ['Campaign Structure', 'Ad Set Creation', 'Audience Setup', 'Pixel Verification (where applicable)', 'Campaign Organization', 'Creative Upload']],
  ['Flask', 'Creative Testing', 'Great advertising comes from testing. We help brands compare creatives, identify winning concepts, and improve future content.', ['Creative Testing', 'Hook Testing', 'A/B Testing Strategy', 'Performance Reviews', 'Creative Recommendations', 'Monthly Refresh Plans']],
]
const flowSteps = ['Research', 'Creative Strategy', 'Script', 'Production', 'Meta Campaign Setup', 'Launch', 'Creative Testing', 'Optimization', 'Scale']
const tradList = ['Creates one video', 'Delivers files', 'Ends after delivery', 'One creative angle', 'Limited testing']
const reeloList = ['Creates multiple ad concepts', 'Produces performance focused creative', 'Helps organize campaign launches', 'Builds multiple hooks', 'Supports creative testing', 'Plans future iterations']
const receiveItems = [
  ['Play', 'Ready to launch videos'], ['Sparkle', 'Creative strategy'], ['Pen', 'Scripts'],
  ['Mic', 'Voiceovers'], ['Hook', 'Hook variations'], ['Grid', 'Meta campaign setup'],
  ['Flask', 'Creative testing plan'], ['Folder', 'Organized delivery files'], ['Chart', 'Future optimization ideas'],
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', on, { passive: true })
    on()
    return () => window.removeEventListener('scroll', on)
  }, [])
  const links = [['Work', '#work'], ['What you get', '#services'], ['Advertising', '#scale'], ['Approach', '#approach'], ['Pricing', '#pricing'], ['FAQ', '#faq']]
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-pill">
        <a href="#top" className="logo"><img className="logo-mark" src={LOGO_ICON} alt="" /><span>Reelo</span></a>
        <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          <a href="#contact" className="btn btn-sm btn-primary nav-cta-mobile">Get Video Ideas</a>
        </nav>
        <a href="#contact" className="btn btn-sm btn-primary nav-cta">Get Video Ideas</a>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}><span /><span /><span /></button>
      </div>
    </header>
  )
}

function HeroColumns() {
  return (
    <div className="hcols" aria-hidden="true">
      {heroCols.map((col, i) => (
        <div className="hcol" key={i}>
          <div className={`hcol-track ${col.reverse ? 'rev' : ''}`} style={{ animationDuration: `${col.dur}s` }}>
            {[...col.items, ...col.items].map((it, j) => (
              <div className="hvid" key={j}>
                <video autoPlay muted loop playsInline poster={it.p}>
                  <source src={it.v} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function SectionHead({ num, label, children, sub, center = false, accent }) {
  return (
    <Reveal className={`shead ${center ? 'shead-center' : ''}`}>
      <div className="shead-top">
        {num && <span className="shead-num">{num}</span>}
        <span className="shead-label" style={accent ? { color: accent } : undefined}>{label}</span>
      </div>
      <h2>{children}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  )
}

function WorkCard({ item }) {
  const vref = useRef(null)
  const [expanded, setExpanded] = useState(false)
  return (
    <TiltCard className="case panel" max={5}>
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
  if (!ok) return <div className="about-ph"><div className="about-ph-ico"><Icon name="Film" /></div><div>Add your photo</div><small>web/public/about-me.jpg</small></div>
  return <img className="about-img" src={ABOUT_IMG} alt="Cayden, founder of Reelo" onError={() => setOk(false)} />
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen((o) => !o)}><span>{q}</span><span className="plus">+</span></div>
      <div className="faq-a" style={{ maxHeight: open ? 260 : 0 }}><p>{a}</p></div>
    </div>
  )
}

function CreativeLibrary({ onRequest }) {
  return (
    <section className="section" id="library">
      <div className="container">
        <SectionHead num="02" label="Creative library" accent="var(--a3)"
          sub="These are the proven angles we build from. Find one that fits your product and request it in a click.">
          The frameworks behind scroll stopping ads
        </SectionHead>
        <div className="lib-grid">
          {creativeConcepts.map(([name, desc], i) => (
            <Reveal key={name} delay={(i % 4) * 0.05}>
              <SpotlightCard className="lib-card">
                <div className="lib-top"><span className="lib-ico"><Icon name="Sparkle" size={18} /></span><span className="lib-tag">Concept</span></div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <button className="lib-btn" onClick={() => onRequest(name)}>Request this creative <ArrowRight size={16} /></button>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScaleSection() {
  return (
    <section className="section scale" id="scale">
      <div className="container">
        <div className="scale-top">
          <SectionHead num="04" label="Beyond the video" accent="var(--a1)">
            Scale your ads, not just your content
          </SectionHead>
          <Reveal className="scale-intro" delay={0.1}>
            <p>Most brands pour everything into one hero ad and hope it works. The brands that actually scale do the opposite: they test constantly. Reelo produces the volume of creative that testing needs, and helps you organize and launch Meta campaigns built for it, so your best ideas get found faster and your winners get pushed further.</p>
          </Reveal>
        </div>

        {/* Three cards */}
        <div className="mcards">
          {metaCards.map(([ico, t, d, list], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <SpotlightCard className="mcard">
                <div className="card-ico"><Icon name={ico} /></div>
                <h3>{t}</h3>
                <p>{d}</p>
                <ul className="mc-list">{list.map((l) => <li key={l}>{l}</li>)}</ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Workflow */}
        <Reveal className="scale-sub"><span className="scale-sub-label">System</span><h3>From idea to scale, one system</h3></Reveal>
        <div className="flowh">
          {flowSteps.map((s, i) => (
            <Reveal key={s} className="fstep" delay={i * 0.05}>
              <div className="fnum">{String(i + 1).padStart(2, '0')}</div>
              <div className="flabel">{s}</div>
            </Reveal>
          ))}
        </div>

        {/* Comparison */}
        <Reveal className="scale-sub"><span className="scale-sub-label">The difference</span><h3>Why brands choose Reelo</h3></Reveal>
        <div className="cmp">
          <Reveal className="cmp-cell">
            <div className="cmp-card panel cmp-trad">
              <span className="cmp-tag">Traditional creator</span>
              <ul>{tradList.map((l) => <li key={l} className="cmp-neutral">{l}</li>)}</ul>
            </div>
          </Reveal>
          <Reveal className="cmp-cell" delay={0.1}>
            <div className="cmp-card panel cmp-reelo">
              <span className="cmp-tag on">Reelo</span>
              <ul>{reeloList.map((l) => <li key={l} className="cmp-yes">{l}</li>)}</ul>
            </div>
          </Reveal>
        </div>

        {/* What you receive */}
        <Reveal className="scale-sub"><span className="scale-sub-label">Deliverables</span><h3>What you receive</h3></Reveal>
        <div className="receive">
          {receiveItems.map(([ico, t], i) => (
            <Reveal key={t} delay={(i % 3) * 0.06}>
              <div className="rcard panel"><span className="rcard-ico"><Icon name={ico} size={20} /></span><span>{t}</span></div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="scale-cta panel">
            <div className="scale-cta-copy">
              <h3>Ready to scale your creative?</h3>
              <p>Whether you need new ad creatives, campaign setup, or a better creative testing workflow, we will help build a system designed for long term growth.</p>
            </div>
            <div className="scale-cta-actions">
              <Magnet strength={0.28}><a href="#contact" className="btn btn-primary btn-lg">Start Your Project</a></Magnet>
              <a href="#library" className="btn btn-ghost btn-lg">Browse Creative Library</a>
            </div>
          </div>
        </Reveal>
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
    <form className="contact-form" onSubmit={handleSubmit}>
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
      <ScrollProgress />
      <div className="app" id="top">
        <Nav />

        {/* HERO */}
        <section className="hero" id="hero">
          <div className="container hero-inner">
            <Reveal className="hero-copy">
              <div className="eyebrow"><span className="pulse" /> <ShinyText>Performance Creative For Ecommerce Brands</ShinyText></div>
              <h1><BlurText text="More Winning Ads." /><br /><BlurText text="Less Guesswork." grad startDelay={0.34} /></h1>
              <p className="lead">We build AI powered UGC, Meta creatives, and product ads designed to help brands test more ideas, beat creative fatigue, and scale what works.</p>
              <div className="hero-actions">
                <Magnet strength={0.3}><a href="#contact" className="btn btn-primary btn-lg">Get Video Ideas</a></Magnet>
                <a href="#work" className="btn btn-ghost btn-lg">Watch Our Work</a>
              </div>
              <div className="hero-chips">
                {chips.map((c) => <span key={c} className="chip glass">{c}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.15} className="hero-visual"><HeroColumns /></Reveal>
          </div>
        </section>

        {/* WORK */}
        <section className="section" id="work">
          <div className="container">
            <SectionHead num="01" label="Selected work" accent="var(--a1)"
              sub="How we think about ads. Every piece here is a spec concept, built independently to show the approach. We never imply a brand hired us.">
              Creative built to <GradientText>win the scroll</GradientText>
            </SectionHead>
            <div className="cases">
              {work.map((item, i) => <Reveal key={item.cat} delay={i * 0.1}><WorkCard item={item} /></Reveal>)}
            </div>
          </div>
        </section>

        {/* CREATIVE LIBRARY */}
        <CreativeLibrary onRequest={requestCreative} />

        {/* SERVICES BENTO — two column, sticky head */}
        <section className="section" id="services">
          <div className="container">
            <div className="svc-layout">
              <div className="svc-head">
                <SectionHead num="03" label="What you receive" accent="var(--a2)"
                  sub="Not a list of tasks. The things that actually move your results.">
                  Everything behind ads that perform
                </SectionHead>
              </div>
              <div className="bento">
                {bento.map(([ico, t, c], i) => (
                  <Reveal key={t} delay={(i % 2) * 0.06} className="bento-cell">
                    <SpotlightCard className="bento-card">
                      <div className="card-ico"><Icon name={ico} /></div>
                      <div className="bento-body"><h3>{t}</h3><p>{c}</p></div>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCALE / META ADVERTISING */}
        <ScaleSection />

        {/* APPROACH / PHILOSOPHY */}
        <section className="section approach" id="approach">
          <div className="container">
            <SectionHead num="05" label="Creative philosophy" accent="var(--a3)">
              Brands don't need one perfect ad. They need <GradientText>hundreds of creative ideas.</GradientText>
            </SectionHead>
            <div className="phil-grid">
              {[
                ['Volume beats perfection', 'The winner is rarely the ad you expected. You find it by testing more, not by polishing one.'],
                ['Speed compounds', 'The faster you get new angles live, the faster you learn what your audience responds to.'],
                ['Hooks decide everything', 'Most ads are won or lost in the first three seconds. We build every concept hook first.'],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.08}><SpotlightCard className="phil-card"><span className="phil-num">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></SpotlightCard></Reveal>
              ))}
            </div>
            <div className="about-grid">
              <Reveal><TiltCard className="about-frame panel" max={6}><AboutImage /></TiltCard></Reveal>
              <Reveal delay={0.12}>
                <div className="about-copy">
                  <p>I started Reelo because I kept watching great products lose to average ones for a single reason: the average ones simply tested more creative. AI lets us produce more, faster, but the strategy, the hooks, and the story are where the real work goes.</p>
                  <p className="signoff">Cayden, founder of Reelo</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="container">
            <SectionHead num="06" label="Pricing" center accent="var(--a2)"
              sub="Introductory, per project pricing. More videos means more angles to run against each other.">
              Simple packages, built for testing
            </SectionHead>
            <div className="pricing-grid">
              {[
                ['Starter', '$100', '1 video', ['One finished ad creative', 'Script and concept', 'Voiceover and captions', 'One round of revisions'], false, 'Start here', 'btn-ghost'],
                ['Growth', '$250', '3 videos', ['Three creatives to test', 'A different angle per video', 'Everything in Starter', 'Ready to run on Meta'], true, 'Get started', 'btn-primary'],
                ['Scale', '$400', '5 videos', ['Five creatives to test', 'Best for active ad accounts', 'Everything in Growth', 'Priority delivery'], false, 'Scale up', 'btn-ghost'],
              ].map(([name, amt, unit, feats, feat, cta, btn]) => (
                <Reveal key={name} delay={feat ? 0.05 : 0.12}>
                  <div className={`price panel ${feat ? 'featured' : ''}`}>
                    {feat && <div className="tag">Most popular</div>}
                    <h3>{name}</h3><div className="amt"><CountUp value={parseInt(amt.replace(/\D/g, ''), 10)} prefix="$" duration={1.1} /></div><div className="unit">{unit}</div>
                    <ul>{feats.map((f) => <li key={f}>{f}</li>)}</ul>
                    <a href="#contact" className={`btn ${btn} btn-block`}>{cta}</a>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="addons">
              <span>Add ons</span>
              <div className="addon panel">Hook variations <strong>+$25</strong></div>
              <div className="addon panel">Extra revisions <strong>+$25</strong></div>
            </Reveal>
          </div>
        </section>

        {/* FAQ — two column, sticky head */}
        <section className="section" id="faq">
          <div className="container">
            <div className="faq-layout">
              <div className="faq-head">
                <SectionHead num="07" label="FAQ" accent="var(--a3)">
                  The questions brands ask
                </SectionHead>
              </div>
              <div className="faq">{faqs.map(([q, a], i) => <Reveal key={q} delay={i * 0.04}><Faq q={q} a={a} /></Reveal>)}</div>
            </div>
          </div>
        </section>

        {/* CONTACT (split) */}
        <section className="section" id="contact">
          <div className="container">
            <div className="contact-split">
              <Reveal className="contact-left">
                <div className="shead-top"><span className="shead-label" style={{ color: 'var(--a1)' }}>Start a project</span></div>
                <h2>Let's build your next winning ad</h2>
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
            <div className="footer-brand">
              <div className="logo"><img className="logo-mark" src={LOGO_ICON} alt="" /><span>Reelo</span></div>
              <p>Performance creative for ecommerce brands. AI UGC and Meta ad creatives built to test more and scale what works.</p>
            </div>
            <div className="footer-col">
              <span className="footer-h">Sections</span>
              <a href="#work">Work</a>
              <a href="#services">What you get</a>
              <a href="#scale">Advertising</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <span className="footer-h">Contact</span>
              <a className="email-link" href="mailto:cayden.w.sims@gmail.com?subject=Reelo%20inquiry">cayden.w.sims@gmail.com</a>
              <a href="#contact">Start a project</a>
            </div>
          </div>
          <div className="container footer-fine">
            <span>© {new Date().getFullYear()} Reelo</span>
            <p className="fine">All work marked "Spec Concept" is created independently and does not imply a client relationship.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
