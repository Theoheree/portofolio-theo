import { useEffect, useRef, useState } from 'react'
import heroFallback from './assets/hero.png'
import './App.css'

const projects = [
  { type: 'WEB EXPERIENCE', title: 'Nusantara Travel', description: 'A destination discovery platform that turns holiday plans into memorable journeys.', tags: ['React', 'Tailwind', 'Vercel'], accent: 'violet', live: '#', code: '#' },
  { type: 'PRODUCTIVITY', title: 'Focusboard', description: 'A minimal workspace for organizing tasks, building habits, and completing what matters.', tags: ['Next.js', 'Firebase', 'UI/UX'], accent: 'green', live: '#', code: '#' },
  { type: 'EXPERIMENT', title: 'Weatherwise', description: 'A weather dashboard that suggests activities based on the conditions around you.', tags: ['API', 'JavaScript', 'CSS'], accent: 'orange', live: '#', code: '#' },
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
    { name: 'MySQL', icon: 'mysql/61DAFB', level: 76 }, { name: 'Data Modeling', symbol: '▦', level: 72 },
  ] },
]

const allTools = toolGroups.flatMap((group) => group.tools)

const mascotNotes = [
  'Hey, I’m TheoBit — Theo’s curious sidekick.',
  'Sketch it. Build it. Refine it.',
  'Small details make digital experiences feel right.',
  'Let’s turn the next idea into something useful.',
]

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [score, setScore] = useState(0)
  const [orb, setOrb] = useState({ x: 66, y: 51 })
  const [musicOpen, setMusicOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [photoMode, setPhotoMode] = useState(() => isDark ? 'mono' : 'color')
  const [previousPhotoMode, setPreviousPhotoMode] = useState(null)
  const [isPhotoSwitching, setIsPhotoSwitching] = useState(false)
  const [mascotStep, setMascotStep] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [mascotHop, setMascotHop] = useState(0)
  const [mascotPosition, setMascotPosition] = useState(null)
  const [isMascotDragging, setIsMascotDragging] = useState(false)
  const [selectedToolName, setSelectedToolName] = useState('Laravel')
  const [toolFocusCompact, setToolFocusCompact] = useState(false)
  const [introProgress, setIntroProgress] = useState(0)
  const [introReady, setIntroReady] = useState(false)
  const [introDismissed, setIntroDismissed] = useState(false)
  const [introPull, setIntroPull] = useState(0)
  const spotifyEmbedRef = useRef(null)
  const spotifyControllerRef = useRef(null)
  const mascotDragRef = useRef(null)
  const ignoreMascotClickRef = useRef(false)
  const introDragRef = useRef(null)
  const introPullRef = useRef(0)
  const selectedTool = allTools.find((tool) => tool.name === selectedToolName) ?? allTools[0]
  const selectedToolGroup = toolGroups.find((group) => group.tools.some((tool) => tool.name === selectedTool.name)) ?? toolGroups[0]
  const collectOrb = () => { setScore((value) => value + 1); setOrb({ x: 12 + Math.round(Math.random() * 76), y: 16 + Math.round(Math.random() * 65) }) }
  const copyEmail = async () => { try { await navigator.clipboard.writeText('hello@theo.dev') } catch { /* clipboard may be unavailable */ } setCopied(true); setTimeout(() => setCopied(false), 1800) }
  useEffect(() => { const onKey = (event) => event.key === 'Escape' && setMenuOpen(false); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
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
    const updateToolFocusSize = () => {
      const toolbox = document.getElementById('tools')
      const focusPanel = document.querySelector('.tool-focus')
      if (!toolbox || !focusPanel || window.innerWidth > 800) return setToolFocusCompact(false)
      const toolboxBounds = toolbox.getBoundingClientRect()
      const panelBounds = focusPanel.getBoundingClientRect()
      const shouldCompact = toolboxBounds.top < 0 && toolboxBounds.bottom > 180 && panelBounds.top <= 84
      setToolFocusCompact((compact) => compact === shouldCompact ? compact : shouldCompact)
    }

    updateToolFocusSize()
    window.addEventListener('scroll', updateToolFocusSize, { passive: true })
    window.addEventListener('resize', updateToolFocusSize)
    return () => {
      window.removeEventListener('scroll', updateToolFocusSize)
      window.removeEventListener('resize', updateToolFocusSize)
    }
  }, [])
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
  }, [])
  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section')]
    let currentSection = -1
    let frameId = null
    const updateMascotPosition = () => {
      frameId = null
      const viewportCenter = window.innerHeight * 0.48
      const nextSection = sections.reduce((closest, section, index) => {
        const bounds = section.getBoundingClientRect()
        const distance = Math.abs((bounds.top + bounds.bottom) / 2 - viewportCenter)
        return distance < closest.distance ? { index, distance } : closest
      }, { index: 0, distance: Number.POSITIVE_INFINITY }).index

      if (nextSection === currentSection) return
      currentSection = nextSection
      setActiveSection(nextSection)
      setMascotHop((hop) => hop + 1)
    }
    const onScroll = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateMascotPosition)
    }

    updateMascotPosition()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
    }
  }, [])
  useEffect(() => {
    const createSpotifyPlayer = (IFrameAPI) => {
      if (!spotifyEmbedRef.current || spotifyControllerRef.current) return
      IFrameAPI.createController(spotifyEmbedRef.current, {
        uri: 'spotify:playlist:6vyohbE3i0ZqjS9bpz3L3T',
        width: '100%',
        height: window.innerWidth <= 560 ? 118 : 152,
        theme: '0',
      }, (controller) => {
        spotifyControllerRef.current = controller
        controller.addListener('playback_update', (event) => setIsPlaying(!event.data.isPaused))
      })
    }

    if (window.SpotifyIframeApi) createSpotifyPlayer(window.SpotifyIframeApi)
    else {
      const script = document.createElement('script')
      script.src = 'https://open.spotify.com/embed/iframe-api/v1'
      script.async = true
      window.onSpotifyIframeApiReady = createSpotifyPlayer
      document.body.appendChild(script)
    }

    return () => { window.onSpotifyIframeApiReady = null }
  }, [])
  const togglePlayback = () => spotifyControllerRef.current?.togglePlay()
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
  const interactWithMascot = () => setMascotStep((step) => (step + 1) % mascotNotes.length)
  const handleTheobitClick = () => {
    if (ignoreMascotClickRef.current) {
      ignoreMascotClickRef.current = false
      return
    }
    interactWithMascot()
    setMascotHop((hop) => hop + 1)
    setMusicOpen((open) => !open)
  }
  const startMascotDrag = (event) => {
    mascotDragRef.current = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, moved: false }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const moveMascot = (event) => {
    const drag = mascotDragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    if (!drag.moved && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 6) return
    drag.moved = true
    setIsMascotDragging(true)
    const x = Math.min(window.innerWidth - 165, Math.max(8, event.clientX - 70))
    const y = Math.min(window.innerHeight - 130, Math.max(55, event.clientY - 65))
    setMascotPosition({ x, y })
  }
  const stopMascotDrag = (event) => {
    const drag = mascotDragRef.current
    if (drag?.pointerId === event.pointerId && drag.moved) {
      ignoreMascotClickRef.current = true
      window.requestAnimationFrame(() => { ignoreMascotClickRef.current = false })
    }
    mascotDragRef.current = null
    setIsMascotDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }
  return <>{!introDismissed && <section className={`intro-loader ${introReady ? 'is-ready' : ''}`} aria-label={introReady ? 'Portfolio is ready. Drag to enter.' : `Loading portfolio: ${introProgress}%`}><div className="intro-loader-content"><p className="intro-brand">THEO<span>./</span></p><p className="intro-kicker">ORA ET LABORA</p><h1>{introReady ? <>Ready to <em>explore?</em></> : <>Building a little <em>magic.</em></>}</h1><p className="intro-copy">Waiting for the portfolio to be ready.</p><div className="intro-progress" aria-hidden="true"><i style={{ '--intro-progress': `${introProgress}%` }} /></div><div className="intro-progress-meta"><span>{introReady ? 'SYSTEM READY' : 'PREPARING PORTFOLIO'}</span><b>{introProgress}%</b></div>{introReady && <button className="intro-pull" style={{ '--intro-pull': `${introPull}%` }} onPointerDown={startIntroPull} onPointerMove={moveIntroPull} onPointerUp={stopIntroPull} onPointerCancel={stopIntroPull} aria-label="Drag right to enter portfolio"><span>DRAG TO ENTER</span><i aria-hidden="true">→</i></button>}</div></section>}<main className={`${isDark ? 'theme-dark' : 'theme-light'} ${toolFocusCompact ? 'tool-focus-compact' : ''}`}>
    <div className="ambient-background" aria-hidden="true"><span className="ambient-grid" /><span className="ambient-orb orb-violet" /><span className="ambient-orb orb-lime" /><span className="ambient-ring" /></div>
    <header className={`nav-wrap ${activeSection === 3 || activeSection === 6 ? 'on-dark-surface' : ''}`}><a className="brand" href="#home" aria-label="Go to homepage">THEO<span>./</span></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open navigation">{menuOpen ? '×' : '☰'}</button><nav className={menuOpen ? 'nav open' : 'nav'}><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#tools" onClick={() => setMenuOpen(false)}>Toolbox</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#credentials" onClick={() => setMenuOpen(false)}>Credentials</a><a href="#play" onClick={() => setMenuOpen(false)}>Playground</a><button className="theme-toggle" onClick={() => setAppearance(!isDark)} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>{isDark ? '☀ LIGHT' : '☾ DARK'}</button><a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow /></a></nav></header>
    <section id="home" className="hero section-shell"><div className="grid-lines" aria-hidden="true" /><div className="hero-copy"><p className="eyebrow"><i /> ORA ET LABORA - BERDOA DAN BEKERJA</p><p className="intro">Hi, I'm Theo —</p><h1>Bringing ideas<br /><em>to life.</em></h1><p className="hero-text">I’m a creative developer who enjoys turning complex problems into digital experiences that are simple, useful, and a little more delightful.</p><div className="hero-actions"><a className="button primary" href="#work">Explore selected work <Arrow /></a><a className="text-link" href="#about">Get to know me <span>↓</span></a></div></div><button className={`hero-art profile-card ${photoMode} ${isPhotoSwitching ? 'is-switching' : ''}`} onClick={switchPhotoMode} aria-label="Switch photo appearance">{previousPhotoMode && <img className={`profile-photo previous ${previousPhotoMode}`} src={previousPhotoMode === 'color' ? '/profile-color.jpeg' : '/profile-mono.jpeg'} alt="" aria-hidden="true" onError={(event) => { event.currentTarget.src = heroFallback }} />}<div className="photo-ring ring-one" /><div className="photo-ring ring-two" /><img className={`profile-photo current ${photoMode}`} src={photoMode === 'color' ? '/profile-color.jpeg' : '/profile-mono.jpeg'} alt="Theo" onAnimationEnd={() => { if (isPhotoSwitching) { setIsPhotoSwitching(false); setPreviousPhotoMode(null) } }} onError={(event) => { event.currentTarget.src = heroFallback }} /><span className="photo-badge">{photoMode === 'color' ? 'COLOR MODE' : 'MONO MODE'}</span><span className="photo-hint">CLICK TO SWITCH ↻</span><div className="spark spark-one">✦</div><div className="spark spark-two">✦</div></button><div className="scroll-tag">SCROLL TO EXPLORE <span>↓</span></div></section>
    <section id="about" className="about section-shell"><p className="section-label">01 / ABOUT ME</p><div className="about-grid"><div className="about-intro"><h2>I turn curious questions into <span>useful digital experiences.</span></h2></div><div className="about-copy"><p>I’m Jawara Theo Christo — a software developer, UI/UX designer, and full-stack builder based in Yogyakarta, ready to collaborate from anywhere. I learn by building, turning real-world problems into digital experiences that feel simple, useful, and intuitive.</p><p>I’m naturally curious: always experimenting, learning, and refining. I enjoy creating web applications, UI/UX-focused products, internal business systems, and platforms that make a real workflow clearer and more efficient.</p><a className="button outline" href="#contact">Let’s build something useful <Arrow /></a></div></div></section>
    <section id="tools" className="toolbox section-shell"><div className="toolbox-heading"><p className="section-label">02 / TOOLBOX</p><h2>Tools behind the <span>things I build.</span></h2><p>Choose a tool to see my current confidence level. These are living skills — always being sharpened through real projects.</p></div><div className="toolbox-content"><div className="tool-groups">{toolGroups.map((group) => <article className="tool-group" key={group.title}><div className="tool-group-copy"><span>{group.number}</span><h3>{group.title}</h3><p>{group.description}</p></div><div className="tool-buttons">{group.tools.map((tool) => <button className={selectedTool.name === tool.name ? 'tool-button selected' : 'tool-button'} onClick={() => setSelectedToolName(tool.name)} aria-pressed={selectedTool.name === tool.name} key={tool.name}>{tool.icon ? <img src={`https://cdn.simpleicons.org/${tool.icon}`} alt="" /> : <i aria-hidden="true">{tool.symbol}</i>}<span>{tool.name}</span></button>)}</div></article>)}</div><aside className="tool-focus" key={selectedTool.name}><p>{selectedToolGroup.title} / CURRENT CONFIDENCE</p><div className="tool-focus-title">{selectedTool.icon ? <img src={`https://cdn.simpleicons.org/${selectedTool.icon}`} alt="" /> : <i aria-hidden="true">{selectedTool.symbol}</i>}<h3>{selectedTool.name}</h3></div><strong>{selectedTool.level}<small>%</small></strong><div className="tool-progress" aria-label={`${selectedTool.name} skill level: ${selectedTool.level}%`}><i style={{ '--skill-level': `${selectedTool.level}%` }} /></div><span>Built and refined through hands-on projects.</span></aside></div></section>
    <section id="work" className="work section-shell"><div className="section-heading"><div><p className="section-label">03 / SELECTED WORK</p><h2>Projects I’m <span>proud of.</span></h2></div><a className="text-link desktop-link" href="https://github.com" target="_blank" rel="noreferrer">View all on GitHub <Arrow /></a></div><div className="project-list">{projects.map((project, index) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-number">0{index + 1}</div><div className="project-visual"><div className="screen"><span>{project.type}</span><b>{index === 0 ? '✦' : index === 1 ? '✓' : '☼'}</b><div className="screen-lines" /></div></div><div className="project-content"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.live}>Live preview <Arrow /></a><a href={project.code}>Source code <Arrow /></a></div></div></article>)}</div></section>
    <section id="credentials" className="credentials section-shell"><p className="section-label">04 / LEARNING JOURNEY</p><h2>Stay curious.<br /><span>Keep growing.</span></h2><div className="credential-grid"><article><span className="credential-icon">⌘</span><p>FREECODECAMP</p><h3>Responsive Web Design</h3><small>2025 · 300+ learning hours</small></article><article><span className="credential-icon">◆</span><p>DICODING INDONESIA</p><h3>Web Programming Fundamentals</h3><small>2025 · IDCamp Scholarship</small></article><article className="credential-more"><span>+</span><h3>The next certificate is in progress.</h3><p>There is always room to learn something new.</p></article></div></section>
    <section id="play" className="play section-shell"><div className="play-copy"><p className="section-label">05 / BEYOND CODE</p><h2>A little space to <span>play.</span></h2><p>When I’m away from the editor, I’m usually exploring visuals, listening to new music, or finding ideas through games.</p><div className="hobby-pills"><span>🎮 Gaming</span><span>🎧 Music</span><span>📷 Visuals</span><span>☕ Coffee</span></div></div><div className="game-card"><div className="game-top"><span>ORBIT COLLECTOR</span><b>SCORE: {String(score).padStart(2, '0')}</b></div><div className="game-field"><div className="game-planet">●</div><button onClick={collectOrb} className="orb-button" style={{ left: `${orb.x}%`, top: `${orb.y}%` }} aria-label="Collect orb">✦</button><p>click the star to collect energy</p></div><div className="game-bottom"><span>◉ ONLINE</span><button onClick={() => { setScore(0); setOrb({ x: 66, y: 51 }) }}>RESET GAME ↻</button></div></div></section>
    <section id="contact" className="contact section-shell"><div className="contact-inner"><p className="section-label">06 / LET’S CONNECT</p><h2>Have something<br />you want to <span>make?</span></h2><p>Whether it’s a small idea, a big project, or simply a story to share — my inbox is always open.</p><button className="mail-link" onClick={copyEmail}>hello@theo.dev <Arrow /></button>{copied && <span className="copy-toast">Email copied!</span>}<div className="socials"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="mailto:hello@theo.dev">Email <Arrow /></a></div></div><div className="contact-orb">✦</div></section>
    <footer><a className="brand" href="#home">THEO<span>./</span></a><p>Designed & built with curiosity. © 2026</p><a href="#home">BACK TO TOP ↑</a></footer>
    <aside className={`theobit-flyer section-${activeSection} hop-${mascotHop % 2} ${isMascotDragging ? 'is-manual-flight' : ''}`} style={mascotPosition ? { left: `${mascotPosition.x}px`, top: `${mascotPosition.y}px`, bottom: 'auto', transform: 'none' } : undefined} aria-label="TheoBit companion"><div className={`theobit-spotify ${musicOpen ? 'is-open' : ''}`} aria-hidden={!musicOpen}><div className="theobit-player-bar"><span className={isPlaying ? 'equalizer active' : 'equalizer'}><i /><i /><i /></span><span>THEOBIT RADIO</span><button className={`mini-play ${isPlaying ? 'is-playing' : ''}`} onClick={togglePlayback} aria-label={isPlaying ? 'Pause music' : 'Play music'} title={isPlaying ? 'Pause music' : 'Play music'}><span aria-hidden="true" /></button></div><div ref={spotifyEmbedRef} className="spotify-embed" /></div><button className={`theobit mood-${mascotStep % 2}`} onClick={handleTheobitClick} onPointerDown={startMascotDrag} onPointerMove={moveMascot} onPointerUp={stopMascotDrag} onPointerCancel={stopMascotDrag} onDoubleClick={() => setMascotPosition(null)} aria-label="Open TheoBit music player, or drag TheoBit to move it" title="Click for music · drag to move · double-click to reset"><span className="mascot-orbit" /><span className="mascot-antenna"><i /></span><span className="mascot-head"><i className="mascot-eye eye-left" /><i className="mascot-eye eye-right" /><b className="mascot-mouth" /></span><span className="mascot-body"><i /><i /><i /></span><span className="mascot-trail" /><span className="mascot-rocket"><i /><i /><i /></span><span className="mascot-spark spark-left">✦</span><span className="mascot-spark spark-right">✦</span></button><p className="mascot-note" role="status">{mascotNotes[mascotStep]} <b>Click for music · drag to move</b></p></aside>
  </main></>
}
export default App
