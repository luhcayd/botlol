import { useEffect, useRef, useState } from 'react'
import Silk from './components/Silk.jsx'
import { Reveal, GradientText, ShinyText, TiltCard, SpotlightCard, Magnet, CountUp } from './components/bits.jsx'

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FrxMmwyrpxV5e9rD7zw9F7uElM'
const media = {
  heroImg: `${CDN}/hf_20260714_043836_ce4109a3-b78d-4d83-8496-309d32c0803a.png`,
  work: [
    {
      title: 'Oral Care',
      copy: 'Hook led problem to solution ad for a premium electric toothbrush.',
      poster: `${CDN}/hf_20260714_043837_37bfa5a1-79b0-4a92-bf66-1cc4b6226a55.png`,
      video: `${CDN}/hf_20260714_045932_6ce9418c-67f7-4719-948f-564482d2c842.mp4`,
    },
    {
      title: 'Pet Products',
      copy: 'Why I switched testimonial angle for a premium pet food brand.',
      poster: `${CDN}/hf_20260714_043839_f6c272de-8555-4421-a9f2-293648ece059.png`,
      video: `${CDN}/hf_20260714_045935_431d4baa-9d81-4d0a-8456-6b0394131ecc.mp4`,
    },
    {
      title: 'Kitchen & Home',
      copy: 'Fast demo that makes the benefit obvious in the first three seconds.',
      poster: `${CDN}/hf_20260714_043841_c190f729-7f90-4af3-8147-1d0da92480c4.png`,
      video: `${CDN}/hf_20260714_045936_5e24d8a5-44c0-4795-b3ec-f58d96d0a3c5.mp4`,
    },
  ],
}

const industries = ['Oral Care', 'Pet Products', 'Kitchen', 'Home', 'Health', 'Cleaning', 'Lifestyle', 'Beauty']
const services = [
  ['🎬', 'AI UGC Videos', 'Authentic creator style videos built to feel real, not produced.'],
  ['📦', 'Product Demos', 'Show the product in action in a way that sells the benefit.'],
  ['⚡', 'Short Form Ads', 'Scroll stopping ads for Reels, TikTok, and Shorts.'],
  ['🎯', 'Meta Ad Creatives', 'Creative built for the feed and ready to run in your ads.'],
  ['🪝', 'Hook Variations', 'Multiple openings so you can test which one pulls best.'],
  ['✍️', 'Scripts & Voiceovers', 'Written on the hook, problem, solution, benefits, CTA framework.'],
  ['💬', 'Captions', 'Clean, on brand captions baked into every video.'],
  ['✂️', 'Editing', 'Paced and cut for retention, delivered ready to publish.'],
]
const steps = [
  ['Brief', 'Quick rundown of your product and what you want to test.'],
  ['Script & concept', 'We write the hook and lock the angle before filming.'],
  ['First draft', 'You review the video and give notes.'],
  ['Revisions', 'One round of changes included so it lands right.'],
  ['Delivery', 'Final videos, ready to run on Meta and short form.'],
]
const faqs = [
  ['What exactly do I get?', 'Short product videos built like ads, not demos. Every video includes the script, voiceover, captions, and editing, delivered ready to run on Meta and short form platforms.'],
  ['How is this different from a normal UGC creator?', 'We are not just handing you a clip. Every video follows a real ad framework, hook, problem, solution, benefits, call to action, and we build multiple versions so you can test what performs.'],
  ['How fast is turnaround?', 'Most first drafts land within a couple of days. We will confirm exact timing when we scope your batch.'],
  ['Do you run the ads too?', 'Right now we focus on the creative. Media buying and creative strategy are coming as we grow, but we will always be straight with you about what we do today.'],
  ['Can I test different hooks?', 'Yes. Hook variations are an add on so you can see which opening pulls best before spending more on ads.'],
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
  const links = [['Work', '#portfolio'], ['About', '#about'], ['Services', '#services'], ['How it works', '#how'], ['Pricing', '#pricing'], ['FAQ', '#faq']]
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo"><span className="logo-mark" /><span>Studio</span></a>
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

function WorkCard({ item }) {
  const vref = useRef(null)
  return (
    <TiltCard className="work glass" max={8}>
      <div
        className="work-media"
        onMouseEnter={() => vref.current && vref.current.play().catch(() => {})}
        onMouseLeave={() => vref.current && vref.current.pause()}
      >
        <video ref={vref} muted loop playsInline poster={item.poster}>
          <source src={item.video} type="video/mp4" />
        </video>
        <span className="badge">Spec Concept</span>
      </div>
      <div className="work-body">
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
      </div>
    </TiltCard>
  )
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item glass ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen((o) => !o)}>
        <span>{q}</span><span className="plus">+</span>
      </div>
      <div className="faq-a" style={{ maxHeight: open ? 240 : 0, transition: 'max-height .35s var(--ease)' }}>
        <p style={{ paddingBottom: 20 }}>{a}</p>
      </div>
    </div>
  )
}

const ABOUT_IMG = '/about-me.jpg' // drop your photo at web/public/about-me.jpg (or swap this URL)

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
  return <img className="about-img" src={ABOUT_IMG} alt="Cayden, founder" onError={() => setOk(false)} />
}

export default function App() {
  return (
    <>
      <Silk />
      <div className="bg-veil" aria-hidden="true" />
      <div className="app" id="top">
        <Nav />

        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <Reveal className="hero-copy">
              <div className="eyebrow"><span className="pulse" /> AI UGC &amp; Paid Social Creative</div>
              <h1>Performance Creative for <GradientText>Product Brands</GradientText></h1>
              <p className="lead">We create AI UGC, product demonstrations, Meta ad creatives, and short form videos designed to help brands test more creatives and scale winning ads.</p>
              <div className="hero-actions">
                <Magnet strength={0.35}><a href="#contact" className="btn btn-primary btn-lg">Get video ideas for your brand</a></Magnet>
                <a href="#portfolio" className="btn btn-ghost btn-lg">See the work</a>
              </div>
              <div className="hero-trust">
                <span>Built like ads, not demos</span><span className="dot" />
                <span>Delivered ready to run</span><span className="dot" />
                <span>Made for testing</span>
              </div>
            </Reveal>

            <Reveal className="hero-media" delay={0.15}>
              <div className="phones">
                <div className="phone-glow" />
                <div className="phone phone-a"><video autoPlay muted loop playsInline poster={media.work[0].poster}><source src={media.work[0].video} type="video/mp4" /></video></div>
                <div className="phone phone-b"><video autoPlay muted loop playsInline poster={media.work[1].poster}><source src={media.work[1].video} type="video/mp4" /></video></div>
                <div className="phone phone-c"><video autoPlay muted loop playsInline poster={media.work[2].poster}><source src={media.work[2].video} type="video/mp4" /></video></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STRIP */}
        <section className="strip">
          <div className="strip-label">Concepts built for the kinds of brands we love</div>
          <div className="marquee">
            {[...industries, ...industries].map((n, i) => <span key={i}>{n}</span>)}
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="container stats-inner">
            {[
              [<span key="a">3 to 5</span>, 'creatives per test batch'],
              [<><CountUp key="b" value={5} /> step</>, 'ad framework in every video'],
              [<CountUp key="c" value={48} suffix="h" />, 'first draft turnaround'],
              [<CountUp key="d" value={100} prefix="$" />, 'to start your first project'],
            ].map(([n, l], i) => (
              <Reveal key={i} delay={i * 0.08}>
                <SpotlightCard className="stat">
                  <div className="stat-n grad-text">{n}</div>
                  <div className="stat-l">{l}</div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="section" id="portfolio">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a1)' }}>Selected work</div>
              <h2>Ad creative built to <GradientText>stop the scroll</GradientText></h2>
              <p className="section-sub">A few concepts across the kinds of brands we love. Spec work is clearly labeled, we never imply a brand hired us if they did not.</p>
            </Reveal>
            <div className="portfolio-grid">
              {media.work.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}><WorkCard item={item} /></Reveal>
              ))}
            </div>
            <p className="note">Hover to play. Swap these concepts for your real videos anytime.</p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <div className="about-grid">
              <Reveal>
                <TiltCard className="about-frame glass" max={7}>
                  <AboutImage />
                </TiltCard>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="about-copy">
                  <div className="eyebrow" style={{ color: 'var(--a2)' }}>About</div>
                  <h2>Hey, I'm <GradientText>Cayden</GradientText></h2>
                  <p>I create short product videos for social media and paid advertising. I started this studio because I kept watching great products lose to average ones for one reason: the average ones simply tested more creative.</p>
                  <p>That is the whole game now. The brands that win are the ones putting more ads in front of the right people and learning fast. My job is to give you more of those ads, built like real ads and not just demos, so you have more shots at a winner.</p>
                  <p>I use AI to move fast on production, but the strategy, the hooks, and the story are where the real work goes. If you make something worth showing, I would love to help you show it.</p>
                  <div className="about-actions">
                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                    <a href="#portfolio" className="btn btn-ghost">See the work</a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a2)' }}>Services</div>
              <h2>Everything you need to <GradientText>test more creative</GradientText></h2>
              <p className="section-sub">One team for the whole creative, from the first hook to the final export.</p>
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

        {/* HOW IT WORKS */}
        <section className="section" id="how">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a3)' }}>How it works</div>
              <h2>From brief to ready to run in <GradientText>five steps</GradientText></h2>
              <p className="section-sub">A simple process that keeps you in control and gets creative into your ad account fast.</p>
            </Reveal>
            <div className="flow">
              <div className="flow-line" />
              {steps.map(([t, c], i) => (
                <Reveal key={t} className="flow-step" delay={i * 0.1}>
                  <div className="flow-n">{i + 1}</div><h3>{t}</h3><p>{c}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow" style={{ color: 'var(--a1)' }}>Pricing</div>
              <h2>Simple packages, <GradientText>built for testing</GradientText></h2>
              <p className="section-sub">Introductory rates. More videos means more creatives to run against each other.</p>
            </Reveal>
            <div className="pricing-grid">
              {[
                ['Starter', '$100', '1 video', ['Script + concept', 'Voiceover & captions', 'Editing included', '1 round of revisions'], false, 'Start here', 'btn-ghost'],
                ['Growth', '$250', '3 videos', ['Everything in Starter', '3 creatives to test', 'Different angles per video', 'Ready to run on Meta'], true, 'Get started', 'btn-primary'],
                ['Scale', '$400', '5 videos', ['Everything in Growth', '5 creatives to test', 'Best for active ad accounts', 'Priority delivery'], false, 'Scale up', 'btn-ghost'],
              ].map(([name, amt, unit, feats, feat, cta, btn], i) => (
                <Reveal key={name} delay={i * 0.09}>
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
              <div className="eyebrow" style={{ color: 'var(--a2)' }}>FAQ</div>
              <h2>Good questions</h2>
            </Reveal>
            <div className="faq">
              {faqs.map(([q, a], i) => <Reveal key={q} delay={i * 0.05}><Faq q={q} a={a} /></Reveal>)}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="container narrow">
            <Reveal>
              <SpotlightCard className="contact-card">
                <div className="eyebrow" style={{ color: 'var(--a3)' }}>Contact</div>
                <h2>Tell us about your <GradientText>product</GradientText></h2>
                <p className="section-sub">Send a couple of details and we will come back with a few video ideas for your brand. No pressure, no hard sell.</p>
                {/* Formspree: replace YOUR_FORM_ID, or delete the form and use the email button */}
                <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                  <div className="field-row">
                    <label>Name<input type="text" name="name" required placeholder="Your name" /></label>
                    <label>Email<input type="email" name="email" required placeholder="you@brand.com" /></label>
                  </div>
                  <label>Brand / website<input type="text" name="brand" placeholder="brand.com" /></label>
                  <label>What are you looking to test?<textarea name="message" rows="4" placeholder="A quick note about your product and goals" /></label>
                  <button type="submit" className="btn btn-primary btn-block btn-lg">Send it over</button>
                </form>
                <div className="contact-or">or email directly</div>
                <a className="email-link" href="mailto:cayden.w.sims@gmail.com?subject=UGC%20video%20inquiry">cayden.w.sims@gmail.com</a>
              </SpotlightCard>
            </Reveal>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="logo"><span className="logo-mark" /><span>Studio</span></div>
            <p>Performance creative for product brands.</p>
            <p className="fine">All work marked "Spec Concept" is created independently and does not imply a client relationship.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
