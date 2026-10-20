import { useEffect, useRef, useState } from 'react'
import heroFallback from './assets/hero.png'
import './App.css'

const projects = [
  { type: 'WEB EXPERIENCE', title: 'Nusantara Travel', description: 'A destination planner that turns holiday ideas into thoughtful routes and memorable journeys.', tags: ['React', 'Tailwind', 'Vercel'], accent: 'violet', mark: '✦', live: '#', code: '#' },
  { type: 'PRODUCTIVITY', title: 'Focusboard', description: 'A quiet workspace for organizing tasks, building habits, and finishing what matters.', tags: ['Next.js', 'Firebase', 'UI/UX'], accent: 'lime', mark: '✓', live: '#', code: '#' },
  { type: 'EXPERIMENT', title: 'Weatherwise', description: 'A weather dashboard that suggests a better plan for the conditions around you.', tags: ['API', 'JavaScript', 'CSS'], accent: 'orange', mark: '☼', live: '#', code: '#' },
  { type: 'FINANCE TOOL', title: 'Kantongku', description: 'A friendly personal finance companion for seeing where every rupiah goes.', tags: ['Laravel', 'MySQL', 'Chart.js'], accent: 'blue', mark: 'Rp', live: '#', code: '#' },
  { type: 'CAMPUS PLATFORM', title: 'KelasKita', description: 'A collaborative learning space that keeps courses, notes, and deadlines in one place.', tags: ['React', 'Node.js', 'MongoDB'], accent: 'pink', mark: '↗', live: '#', code: '#' },
  { type: 'MOBILE APP', title: 'RuangRapi', description: 'A simple home-organizing app for turning everyday routines into lighter moments.', tags: ['Flutter', 'Dart', 'Firebase'], accent: 'sky', mark: '⌂', live: '#', code: '#' },
]

const toolGroups = [
  { number: '01', title: 'Frontend', description: 'Interfaces that feel quick, clear, and satisfying to use.', tools: [
    { name: 'React', icon: 'react/61DAFB', level: 84 }, { name: 'JavaScript', icon: 'javascript/F7DF1E', level: 82 }, { name: 'Tailwind', icon: 'tailwindcss/38BDF8', level: 80 }, { name: 'CSS', icon: 'css/1572B6', level: 83 }, { name: 'Vite', icon: 'vite/646CFF', level: 78 }, { name: 'Blade', icon: 'laravel/FF2D20', level: 80 },
  ] },
  { number: '02', title: 'Design', description: 'Decisions shaped around people, clarity, and flow.', tools: [
    { name: 'Figma', icon: 'figma/F24E1E', level: 80 }, { name: 'UI/UX', symbol: '✦', level: 78 }, { name: 'Prototyping', symbol: '◇', level: 76 }, { name: 'UX Research', symbol: '◌', level: 70 },
  ] },
  { number: '03', title: 'Backend', description: 'Reliable foundations for useful, real-world products.', tools: [
    { name: 'Laravel', icon: 'laravel/FF2D20', level: 84 }, { name: 'PHP', icon: 'php/A78BFA', level: 81 }, { name: 'Node.js', icon: 'nodedotjs/7CC327', level: 70 }, { name: 'REST API', symbol: '</>', level: 78 },
  ] },
  { number: '04', title: 'Database', description: 'Structured data that keeps an application dependable.', tools: [
    { name: 'MySQL', icon: 'mysql/61DAFB', level: 76 },
  ] },
  { number: '05', title: 'Mobile Development', description: 'Cross-platform mobile apps built for everyday use.', tools: [
    { name: 'Flutter', icon: 'flutter/02569B', level: 76 }, { name: 'Dart', icon: 'dart/0175C2', level: 74 },
  ] },
]

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }

const projectSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function ProjectPage({ project, isDark, onBack }) {
  const [activeDetail, setActiveDetail] = useState(0)
  const photos = [
    { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1100&q=85', alt: 'Interface concept on a laptop' },
    { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1100&q=85', alt: 'Code workspace' },
    { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1100&q=85', alt: 'Product development screen' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85', alt: 'Website on a desktop display' },
  ]
  return <main className={`project-page-shell ${isDark ? 'theme-dark' : 'theme-light'}`}><header className="project-page-nav"><a className="brand" href="#home">THEO<span>./</span></a><button className="work-back" onClick={onBack}>← Back to selected work</button></header><section className="work project-page-work is-visible"><div className="section-heading"><div><p className="section-label">SELECTED WORK / CASE STUDY</p><h2>{project.title}<br /><span>Project detail.</span></h2></div><p className="project-page-type">{project.type}</p></div><div className="project-detail"><div className="detail-deck photo-deck">{photos.map((photo, index) => { const position = (index - activeDetail + photos.length) % photos.length; return <article key={photo.src} className={`detail-card photo-card detail-pos-${position}`} onClick={() => setActiveDetail(index)}><img src={photo.src} alt={photo.alt} /></article> })}</div><div className="work-deck-footer"><div className="deck-pagination">{photos.map((photo, index) => <button key={photo.src} className={index === activeDetail ? 'active' : ''} onClick={() => setActiveDetail(index)} aria-label={`Show photo ${index + 1}`} aria-current={index === activeDetail} />)}</div><div className="deck-controls"><button onClick={() => setActiveDetail((activeDetail - 1 + photos.length) % photos.length)} aria-label="Previous photo">←</button><button onClick={() => setActiveDetail((activeDetail + 1) % photos.length)} aria-label="Next photo">→</button></div></div></div><div className="project-narrative"><p className="section-label">ABOUT THE PROJECT</p><h3>{project.title} is made to feel clear from the first click.</h3><p>{project.description}</p><p>The direction is deliberately simple: a focused visual system, an intuitive flow, and details that help people complete their task with less friction.</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></section></main>
}

function WorkShowcase({ onOpenProject }) {
  const [view, setView] = useState('gallery')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeDetail, setActiveDetail] = useState(0)
  const project = selectedProject === null ? null : (projects[selectedProject] ?? projects[0])
  const detailCards = project ? [
    { label: '01 / OVERVIEW', title: project.title, text: project.description, mark: project.mark },
    { label: '02 / THE IDEA', title: 'Clear, useful flow.', text: `A focused experience shaped around the people who use ${project.title} every day.`, mark: '✦' },
    { label: '03 / TOOLKIT', title: project.tags.join(' · '), text: 'A lightweight stack chosen to keep the product quick, approachable, and easy to evolve.', mark: '↗' },
    { label: '04 / OUTCOME', title: 'Built with care.', text: 'A concept that turns a real need into a calmer, more delightful digital moment.', mark: '✓' },
  ] : []
  const openPreview = (index) => onOpenProject(projectSlug(projects[index].title))
  const backToGallery = () => { setView('gallery'); setSelectedProject(null) }

  return <section id="work" className={`work section-shell work-${view}`}><div className="section-heading"><div><p className="section-label">03 / SELECTED WORK</p><h2>Projects I’m <span>proud of.</span></h2></div><a className="text-link desktop-link" href="https://github.com" target="_blank" rel="noreferrer">View all on GitHub <Arrow /></a></div>
    {view === 'gallery' && <div className="project-dome brick-gallery" aria-label="Project gallery"><div className="dome-sphere">{Array.from({ length: 3 }, (_, rowIndex) => <div className={`brick-row row-${rowIndex}`} key={rowIndex}>{Array.from({ length: 2 }, (_, setIndex) => <div className="brick-set" key={setIndex}>{projects.map((item, itemIndex) => <button type="button" className={`dome-project ${item.accent}`} onClick={(event) => { event.stopPropagation(); openPreview(itemIndex) }} key={`${item.title}-${setIndex}`} aria-label={`Open ${item.title} project details`}><span className="dome-screen"><i>{item.mark}</i><small>{item.title}</small></span></button>)}</div>)}</div>)}</div></div>}
    {view === 'preview' && project && <div className="project-preview"><button className="work-back" onClick={backToGallery}>← All projects</button><div className={`preview-art ${project.accent}`}><span>{project.mark}</span><small>{project.type}</small></div><div className="preview-copy"><p className="project-type">SELECTED PROJECT / 0{selectedProject + 1}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="button preview-open" onClick={() => setView('detail')}>Open project detail <Arrow /></button></div></div>}
    {view === 'detail' && project && <div className="project-detail"><button className="work-back" onClick={() => setView('preview')}>← Back to overview</button><div className="detail-deck">{detailCards.map((card, index) => { const position = (index - activeDetail + detailCards.length) % detailCards.length; return <article key={card.label} className={`detail-card ${project.accent} detail-pos-${position}`} onClick={() => setActiveDetail(index)}><p>{card.label}</p><div className="detail-mark">{card.mark}</div><h3>{card.title}</h3><span>{card.text}</span></article> })}</div><div className="work-deck-footer"><div className="deck-pagination">{detailCards.map((card, index) => <button key={card.label} className={index === activeDetail ? 'active' : ''} onClick={() => setActiveDetail(index)} aria-label={`Show ${card.label}`} aria-current={index === activeDetail} />)}</div><div className="deck-controls"><button onClick={() => setActiveDetail((activeDetail - 1 + detailCards.length) % detailCards.length)} aria-label="Previous detail">←</button><button onClick={() => setActiveDetail((activeDetail + 1) % detailCards.length)} aria-label="Next detail">→</button></div></div></div>}
  </section>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [photoMode, setPhotoMode] = useState(() => isDark ? 'mono' : 'color')
  const [previousPhotoMode, setPreviousPhotoMode] = useState(null)
  const [isPhotoSwitching, setIsPhotoSwitching] = useState(false)
  const [selectedToolName, setSelectedToolName] = useState('Laravel')
  const [introProgress, setIntroProgress] = useState(0)
  const [introReady, setIntroReady] = useState(false)
  const [introDismissed, setIntroDismissed] = useState(true)
  const [introPull, setIntroPull] = useState(0)
  const [openedProjectSlug, setOpenedProjectSlug] = useState(() => window.location.hash.replace('#project/', ''))
  const introDragRef = useRef(null)
  const introPullRef = useRef(0)
  const copyEmail = async () => { try { await navigator.clipboard.writeText('theochrisxto@gmail.com') } catch { /* clipboard may be unavailable */ } setCopied(true); setTimeout(() => setCopied(false), 1800) }
  useEffect(() => { const onKey = (event) => event.key === 'Escape' && setMenuOpen(false); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
  useEffect(() => {
    const syncProjectRoute = () => setOpenedProjectSlug(window.location.hash.replace('#project/', ''))
    window.addEventListener('hashchange', syncProjectRoute)
    return () => window.removeEventListener('hashchange', syncProjectRoute)
  }, [])
  useEffect(() => {
    const isProjectRoute = window.location.hash.startsWith('#project/')
    if (openedProjectSlug && window.location.hash !== `#project/${openedProjectSlug}`) {
      window.history.pushState(null, '', `#project/${openedProjectSlug}`)
    } else if (!openedProjectSlug && isProjectRoute) {
      window.history.pushState(null, '', '#work')
    }
  }, [openedProjectSlug])
  useEffect(() => {
    const loadingStartedAt = performance.now()
    let windowLoaded = document.readyState === 'complete'
    let fontsLoaded = !document.fonts
    let resourcesReady = windowLoaded && fontsLoaded
    const updateResourceStatus = () => { resourcesReady = windowLoaded && fontsLoaded }
    const onLoad = () => { windowLoaded = true; updateResourceStatus() }
    const waitForFonts = document.fonts?.ready ?? Promise.resolve()
    waitForFonts.then(() => { fontsLoaded = true; updateResourceStatus() })
    window.addEventListener('load', onLoad, { once: true })

    const progressTimer = window.setInterval(() => {
      setIntroProgress((progress) => {
        const canEnter = resourcesReady && performance.now() - loadingStartedAt >= 3000
        const targetProgress = canEnter ? 100 : 88
        const nextProgress = Math.min(targetProgress, progress + Math.max(1, Math.ceil((targetProgress - progress) / 11)))
        if (nextProgress === 100) {
          window.clearInterval(progressTimer)
          setIntroReady(true)
        }
        return nextProgress
      })
    }, 68)

    return () => {
      window.clearInterval(progressTimer)
      window.removeEventListener('load', onLoad)
    }
  }, [])
  useEffect(() => {
    if (introDismissed) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    return () => { document.body.style.overflow = previousOverflow }
  }, [introDismissed])
  useEffect(() => {
    const sections = document.querySelectorAll('main > section:not(.hero)')
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [openedProjectSlug])
  const setAppearance = (darkMode) => {
    const nextPhotoMode = darkMode ? 'mono' : 'color'
    if (isPhotoSwitching || (isDark === darkMode && photoMode === nextPhotoMode)) return
    setPreviousPhotoMode(photoMode)
    setPhotoMode(nextPhotoMode)
    setIsDark(darkMode)
    setIsPhotoSwitching(true)
  }
  const switchPhotoMode = () => {
    setAppearance(photoMode === 'color')
  }
  const startIntroPull = (event) => {
    if (!introReady) return
    introDragRef.current = { pointerId: event.pointerId, startX: event.clientX }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const moveIntroPull = (event) => {
    const drag = introDragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    const nextPull = Math.max(0, Math.min(100, ((event.clientX - drag.startX) / 180) * 100))
    introPullRef.current = nextPull
    setIntroPull(nextPull)
  }
  const stopIntroPull = (event) => {
    const drag = introDragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    if (introPullRef.current >= 78) {
      event.currentTarget.closest('.intro-loader')?.classList.add('is-leaving')
      window.setTimeout(() => setIntroDismissed(true), 680)
    }
    else {
      introPullRef.current = 0
      setIntroPull(0)
    }
    introDragRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }
  const openedProject = projects.find((project) => projectSlug(project.title) === openedProjectSlug)
  if (openedProject) return <ProjectPage project={openedProject} isDark={isDark} onBack={() => setOpenedProjectSlug('')} />
  return <>{!introDismissed && <section className={`intro-loader ${introReady ? 'is-ready' : ''}`} aria-label={introReady ? 'Portfolio is ready. Drag to enter.' : `Loading portfolio: ${introProgress}%`}><div className="intro-loader-content"><p className="intro-brand">THEO<span>./</span></p><p className="intro-kicker">ORA ET LABORA</p><h1>{introReady ? <>Ready to <em>explore?</em></> : <>Building a little <em>magic.</em></>}</h1><p className="intro-copy">Waiting for the portfolio to be ready.</p><div className="intro-progress" aria-hidden="true"><i style={{ '--intro-progress': `${introProgress}%` }} /></div><div className="intro-progress-meta"><span>{introReady ? 'SYSTEM READY' : 'PREPARING PORTFOLIO'}</span><b>{introProgress}%</b></div>{introReady && <button className="intro-pull" style={{ '--intro-pull': `${introPull}%` }} onPointerDown={startIntroPull} onPointerMove={moveIntroPull} onPointerUp={stopIntroPull} onPointerCancel={stopIntroPull} aria-label="Drag right to enter portfolio"><span>DRAG TO ENTER</span><i aria-hidden="true">→</i></button>}</div></section>}<main className={isDark ? 'theme-dark' : 'theme-light'}>
    <div className="ambient-background" aria-hidden="true"><span className="ambient-grid" /><span className="ambient-orb orb-violet" /><span className="ambient-orb orb-lime" /><span className="ambient-ring" /></div>
    <header className="nav-wrap"><a className="brand" href="#home" aria-label="Go to homepage">THEO<span>./</span></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open navigation">{menuOpen ? '×' : '☰'}</button><nav className={menuOpen ? 'nav open' : 'nav'}><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#tools" onClick={() => setMenuOpen(false)}>Toolbox</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#credentials" onClick={() => setMenuOpen(false)}>Experience</a><button className="theme-toggle" onClick={() => setAppearance(!isDark)} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>{isDark ? '☀ LIGHT' : '☾ DARK'}</button><a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow /></a></nav></header>
    <section id="home" className="hero section-shell"><div className="grid-lines" aria-hidden="true" /><div className="hero-copy"><p className="eyebrow"><i /> ORA ET LABORA - BERDOA DAN BEKERJA</p><p className="intro">Hi, I'm Theo —</p><h1>Bringing ideas<br /><em>to life.</em></h1><p className="hero-text">I’m a creative developer who enjoys turning complex problems into digital experiences that are simple, useful, and a little more delightful.</p><div className="hero-actions"><a className="button primary" href="#work">Explore selected work <Arrow /></a><a className="text-link" href="#about">Get to know me <span>↓</span></a></div></div><button className={`hero-art profile-card ${photoMode} ${isPhotoSwitching ? 'is-switching' : ''}`} onClick={switchPhotoMode} aria-label="Switch photo appearance">{previousPhotoMode && <img className={`profile-photo previous ${previousPhotoMode}`} src={previousPhotoMode === 'color' ? '/profile-color.jpeg' : '/profile-mono.jpeg'} alt="" aria-hidden="true" onError={(event) => { event.currentTarget.src = heroFallback }} />}<div className="photo-ring ring-one" /><div className="photo-ring ring-two" /><img className={`profile-photo current ${photoMode}`} src={photoMode === 'color' ? '/profile-color.jpeg' : '/profile-mono.jpeg'} alt="Theo" onAnimationEnd={() => { if (isPhotoSwitching) { setIsPhotoSwitching(false); setPreviousPhotoMode(null) } }} onError={(event) => { event.currentTarget.src = heroFallback }} /><span className="photo-badge">{photoMode === 'color' ? 'COLOR MODE' : 'MONO MODE'}</span><span className="photo-hint">CLICK TO SWITCH ↻</span><div className="spark spark-one">✦</div><div className="spark spark-two">✦</div></button><div className="scroll-tag">SCROLL TO EXPLORE <span>↓</span></div></section>
    <section id="about" className="about section-shell"><p className="section-label">01 / ABOUT ME</p><div className="about-grid"><div className="about-intro"><h2>I turn curious questions into <span>useful digital experiences.</span></h2></div><div className="about-copy"><p>I’m Jawara Theo Christo — an Informatics graduate (S.Kom.) from Universitas Atma Jaya Yogyakarta, software developer, UI/UX designer, and full-stack builder based in Yogyakarta, ready to collaborate from anywhere. I learn by building, turning real-world problems into digital experiences that feel simple, useful, and intuitive.</p><p>I’m naturally curious: always experimenting, learning, and refining. I enjoy creating web applications, UI/UX-focused products, internal business systems, and mobile applications with Flutter and Dart that make real workflows clearer and more efficient.</p><a className="button outline" href="#contact">Let’s build something useful <Arrow /></a></div></div></section>
    <section id="tools" className="toolbox section-shell"><div className="toolbox-heading"><p className="section-label">02 / TOOLBOX</p><h2>Tools behind the <span>things I build.</span></h2><p>Choose a tool to highlight it. These are living skills — always being sharpened through real projects.</p></div><div className="toolbox-content"><div className="tool-groups">{toolGroups.map((group) => <article className="tool-group" key={group.title}><div className="tool-group-copy"><span>{group.number}</span><h3>{group.title}</h3><p>{group.description}</p></div><div className="tool-buttons">{group.tools.map((tool) => <button className={selectedToolName === tool.name ? 'tool-button selected' : 'tool-button'} onClick={() => setSelectedToolName(tool.name)} aria-pressed={selectedToolName === tool.name} key={tool.name}>{tool.icon ? <img src={`https://cdn.simpleicons.org/${tool.icon}`} alt="" /> : <i aria-hidden="true">{tool.symbol}</i>}<span>{tool.name}</span></button>)}</div></article>)}</div></div></section>
    <WorkShowcase onOpenProject={setOpenedProjectSlug} />
    <section id="credentials" className="credentials experience section-shell"><p className="section-label">04 / EXPERIENCE</p><h2>Learning by <span>building.</span></h2><div className="experience-list"><article className="experience-card"><div className="experience-meta"><span>01</span><p>JAN 2026 — APR 2026</p></div><div className="experience-main"><div className="experience-photos"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Office workspace placeholder" /></div><p className="experience-company">DINAS KOMUNIKASI DAN INFORMATIKA KAB. KULON PROGO</p><h3>Internship — IT &amp; System Governance</h3><small>Yogyakarta, Indonesia</small><p className="experience-intro">A government agency responsible for information technology, communication, digital services, and public information management in Kulon Progo.</p><ul><li>Developed and enhanced the AnjabPRO web application with Laravel, PHP, MySQL, and Tailwind CSS.</li><li>Implemented modules for job analysis, workload analysis, job requirements, hierarchy, and organizational data.</li><li>Built JWT APIs, Google reCAPTCHA V3, PDF export, XLSX import/export, dashboards, and workflow validation.</li><li>Tested, debugged, refined UI flows, and collaborated through GitHub branches and pull requests.</li></ul><div className="tags"><span>Laravel</span><span>PHP</span><span>MySQL</span><span>Tailwind CSS</span></div></div></article><article className="experience-card"><div className="experience-meta"><span>02</span><p>JUN 2026 — OCT 2026</p></div><div className="experience-main"><div className="experience-photos"><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" alt="Retail workspace placeholder" /></div><p className="experience-company">EAGLE JEANS CORPORATION</p><h3>Freelance — Software Developer</h3><small>Yogyakarta, Indonesia</small><p className="experience-intro">A fashion and apparel business specializing in denim products, supported by a digital system for daily operations, transactions, and customer-related processes.</p><ul><li>Developed and maintained a production Laravel application supporting real business activities.</li><li>Implemented business features, CRUD modules, transaction workflows, and database operations.</li><li>Customized features, resolved bugs, and improved data management and usability based on client needs.</li><li>Handled deployment and production maintenance to keep the application reliable for ongoing operations.</li></ul><div className="tags"><span>Laravel</span><span>CRUD</span><span>MySQL</span><span>Deployment</span></div></div></article></div></section>
    <section id="contact" className="contact section-shell"><div className="contact-inner"><p className="section-label">05 / LET’S CONNECT</p><h2>Have something<br />you want to <span>make?</span></h2><p>Whether it’s a production system, a mobile app, or something in between — let’s talk about what you need.</p><button className="mail-link" onClick={copyEmail}>theochrisxto@gmail.com <Arrow /></button>{copied && <span className="copy-toast">Email copied!</span>}<div className="socials"><a href="https://www.instagram.com/thee.ow?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href="mailto:theochrisxto@gmail.com">Email <Arrow /></a><a href="https://www.linkedin.com/in/theo-christo-629072384" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></div><div className="contact-orb">✦</div></section>
    <footer><a className="brand" href="#home">THEO<span>./</span></a><p>Designed & built with curiosity. © 2026</p><a href="#home">BACK TO TOP ↑</a></footer>
  </main></>
}
export default App
