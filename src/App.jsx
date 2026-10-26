import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import heroFallback from './assets/hero.png'
import './App.css'

const projects = [
  {
    type: 'PRODUCTION SYSTEM',
    title: 'Eagle Jeans Production Tracking',
    status: 'FREELANCE',
    description: 'An internal production system for tracking every garment from cutting and sewing through to completion.',
    tags: ['Laravel', 'MySQL', 'Tailwind CSS'],
    accent: 'blue',
    mark: 'EJ',
    image: '/eagle/eagle (1).jpeg',
    photos: [
      { src: '/eagle/eagle (1).jpeg', alt: 'Eagle Jeans Production Tracking login screen' },
      { src: '/eagle/eagle (2).jpeg', alt: 'Order detail and production progress screen' },
      { src: '/eagle/eagle (3).jpeg', alt: 'Eagle Jeans owner dashboard' },
      { src: '/eagle/eagle (4).jpeg', alt: 'Mobile barcode scanner for production orders' },
    ],
    caseStudy: {
      heading: 'A production system built around real garment workflows.',
      company: 'Eagle Jeans Corporation',
      role: 'Freelance — Software Developer',
      period: 'Jun 2026 — Oct 2026',
      location: 'Yogyakarta, Indonesia',
      paragraphs: [
        'Eagle Jeans is a fashion and apparel company specializing in denim products, supported by a digital system that manages business operations, transactions, customer data, and garment production workflows.',
        'The application was developed as a practical internal tool for day-to-day use, helping the team track orders from cutting and sewing through to completion while keeping operational data organized and accessible.',
      ],
      highlights: [
        'Developed and maintained a production-ready Laravel web application supporting daily business activities and end-to-end garment production tracking.',
        'Built and refined business features, CRUD modules, transaction workflows, validation rules, and database operations to improve efficiency and data accuracy.',
        'Translated client requirements into tailored features, bug fixes, clearer data management, and more intuitive user flows for real-world business processes.',
        'Managed application deployment, production troubleshooting, and ongoing maintenance to keep the system stable, functional, and reliable.',
      ],
    },
    live: '#',
    code: '#',
  },
  {
    type: 'CAMPUS PROJECT',
    title: 'ReuseMart',
    description: 'A full-stack consignment marketplace that connects buyers, consignors, warehouse staff, couriers, owners, and charity partners in one circular-economy platform.',
    tags: ['Laravel', 'MySQL', 'Laravel Sanctum', 'Tailwind CSS', 'SweetAlert2'],
    accent: 'sky',
    mark: 'RM',
    image: '/p3l/p3l (1).png',
    photos: [
      { src: '/p3l/p3l (1).png', alt: 'ReuseMart public landing page' },
      { src: '/p3l/p3l (2).png', alt: 'Charity partner donation dashboard' },
      { src: '/p3l/p3l (3).png', alt: 'Administrator staff and organization dashboard' },
      { src: '/p3l/p3l (4).png', alt: 'Buyer product catalog and category filters' },
      { src: '/p3l/p3l (5).png', alt: 'ReuseMart multi-role login screen' },
      { src: '/p3l/p3l (6).png', alt: 'Complete ReuseMart marketplace landing and catalog page' },
    ],
    caseStudy: {
      heading: 'A circular marketplace engineered for the full consignment lifecycle.',
      meta: [
        { label: 'PROJECT TYPE', value: 'Campus Project' },
        { label: 'ARCHITECTURE', value: 'MVC Architecture' },
        { label: 'ACCESS CONTROL', value: '5-Role RBAC' },
        { label: 'AUTHENTICATION', value: 'Laravel Sanctum' },
      ],
      paragraphs: [
        'ReuseMart is a campus project designed as a full-stack marketplace for quality secondhand goods. It connects buyers, consignors, operational staff, couriers, owners, and charity partners through one integrated circular-economy platform.',
        'Beyond product discovery and transactions, the system manages quality control, time-bound consignment agreements, profit sharing, digital wallets, loyalty rewards, delivery coordination, and transparent donation allocation.',
      ],
      sections: [
        {
          title: 'APPLICATION ARCHITECTURE',
          text: 'MVC architecture with five-role RBAC, stateless Laravel Sanctum token authentication, strict role guards, a 30-day consignment lifecycle, and an automated commission engine.',
        },
        {
          title: 'DATABASE SCHEMA & DESIGN',
          text: 'A relational MySQL schema covering users and role access, consignors, products, QC inspections, consignment lifecycles, orders, digital wallets, loyalty points and merchandise, plus charity proposals and donations.',
        },
      ],
      highlightsTitle: 'KEY FEATURES & ENGINEERING DELIVERABLES',
      highlights: [
        'Consignor Portal — real-time sales statistics, a 30-day consignment countdown, automatic extension and withdrawal confirmation, plus a digital wallet with CSV/Excel export.',
        'Buyer Experience — a curated catalog with category, physical-condition, and QC-status filters; Store Courier or Warehouse Pickup fulfillment; payment-proof upload; and loyalty points redeemable for merchandise.',
        'Warehouse & Operations — physical quality inspections, official consignment receipt generation, courier scheduling, and master-data management for staff and partner organizations.',
        'Charity Partners — transparent donation proposal requests and real-time tracking of allocated pre-owned items for humanitarian programs.',
        'Owner Business Intelligence — monthly and annual revenue analytics, fast-moving versus slow-moving product insights, expired-inventory recaps, and profit-sharing summaries.',
        'Security & Modern UI — stateless Laravel Sanctum authentication, strict role-based guards, responsive interfaces, and interactive SweetAlert2 modals.',
      ],
    },
    live: '#',
    code: '#',
  },
  {
    type: 'THESIS PROJECT',
    title: 'FitCatering',
    description: 'A web-based catering management platform that transforms traditional manual ordering into an efficient, organized, and user-friendly digital experience.',
    tags: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    accent: 'lime',
    mark: 'FC',
    image: '/fitcatering/fitcatering (1).png',
    photos: [
      { src: '/fitcatering/fitcatering (1).png', alt: 'FitCatering public landing page' },
      { src: '/fitcatering/fitcatering (3).png', alt: 'Catering services and package categories' },
      { src: '/fitcatering/fitcatering (2).png', alt: 'Catering package catalog and category filters' },
      { src: '/fitcatering/fitcatering (6).jpg', alt: 'FitCatering customer registration screen' },
      { src: '/fitcatering/fitcatering (1).jpg', alt: 'Customer dashboard and order history' },
      { src: '/fitcatering/fitcatering (2).jpg', alt: 'Order detail, delivery schedule, and customer review' },
      { src: '/fitcatering/fitcatering (3).jpg', alt: 'Customer profile and account security screen' },
      { src: '/fitcatering/fitcatering (4).jpg', alt: 'Payment instructions and proof upload screen' },
      { src: '/fitcatering/fitcatering (5).jpg', alt: 'Payment verification status screen' },
      { src: '/fitcatering/fitcatering (7).jpg', alt: 'FitCatering administration dashboard' },
    ],
    caseStudy: {
      heading: 'Simplifying catering management through a thoughtful digital experience.',
      meta: [
        { label: 'PROJECT TYPE', value: 'Undergraduate Thesis' },
        { label: 'ROLE', value: 'Full-Stack Developer & UI/UX Designer' },
        { label: 'YEAR', value: '2025–2026' },
        { label: 'METHODOLOGY', value: 'Design Thinking' },
      ],
      paragraphs: [
        'FitCatering is a web-based catering management platform designed to simplify online ordering and improve the overall customer experience. Developed using Laravel and MySQL, the application provides an intuitive interface for exploring catering packages, placing orders, tracking order status, managing payments, and generating digital invoices.',
        'Built with a UI/UX-focused approach using the Design Thinking methodology, FitCatering includes a comprehensive admin dashboard for managing products, customers, orders, payments, and deliveries. The platform transforms traditional manual ordering into a more efficient, organized, and user-friendly digital experience.',
      ],
      sections: [
        {
          title: 'CUSTOMER EXPERIENCE',
          text: 'A cohesive journey from package discovery and account registration to ordering, payment-proof submission, verification, delivery progress, repeat orders, invoices, profiles, and customer reviews.',
        },
        {
          title: 'ADMINISTRATION & OPERATIONS',
          text: 'A centralized administration dashboard for monitoring sales and order performance while managing users, categories, catering packages, menus, payments, deliveries, reviews, and CMS content.',
        },
      ],
      highlightsTitle: 'KEY FEATURES',
      highlights: [
        'Browsable catering catalog with package categories for snacks and hampers, events, lunch boxes, birthdays, weekly plans, and customizable daily menus.',
        'Customer authentication, registration, profile management, delivery-address information, email verification, and account-security controls.',
        'Customer dashboard with order statistics, complete order history, payment and fulfillment statuses, reorder actions, and review submission.',
        'Detailed order tracking with transaction summaries, delivery schedules, downloadable invoices, menu details, and progress indicators.',
        'Manual payment workflow with bank and digital-wallet instructions, payment-proof upload, and clear verification status updates.',
        'Administrator dashboard with business summaries and operational modules for users, products, orders, payments, deliveries, reviews, and content.',
      ],
    },
    live: '#',
    code: '#',
  },
  {
    type: 'CHURCH MANAGEMENT SYSTEM',
    title: 'Compassion',
    status: 'IN DEVELOPMENT',
    description: 'An ongoing church event and seating management platform for registration, seat reservations, attendance, and coordinated event operations.',
    tags: ['Laravel 12', 'PHP', 'MySQL', 'Livewire', 'Volt', 'Flux UI', 'Tailwind CSS'],
    accent: 'violet',
    mark: 'C',
    image: '/compassion/compassion (1).png',
    photos: [
      { src: '/compassion/compassion (1).png', alt: 'Compassion public church website landing page' },
      { src: '/compassion/compassion (7).png', alt: 'Public church event registration listing' },
      { src: '/compassion/compassion (2).png', alt: 'QR code attendance check-in screen' },
      { src: '/compassion/compassion (3).png', alt: 'Custom interactive venue layout editor' },
      { src: '/compassion/compassion (4).png', alt: 'Live event seating availability dashboard' },
      { src: '/compassion/compassion (5).png', alt: 'Church member data management screen' },
      { src: '/compassion/compassion (6).png', alt: 'Church news publishing dashboard' },
    ],
    caseStudy: {
      heading: 'Connecting church events, attendance, and seating in one evolving platform.',
      meta: [
        { label: 'STATUS', value: 'In Development — Ongoing' },
        { label: 'ROLE', value: 'Full-Stack Developer & UI/UX Designer' },
        { label: 'YEAR', value: '2026' },
        { label: 'CORE SYSTEM', value: 'Custom Interactive Seating Layout' },
      ],
      paragraphs: [
        'Compassion is an ongoing web-based church event management platform designed to streamline event registration, seat reservations, and attendance tracking. Built using Laravel, Livewire, and MySQL, it provides an integrated system for managing church events, participants, seating arrangements, and operational teams.',
        'Designed with a clean, modern, and user-friendly interface, Compassion aims to simplify church event operations while providing attendees with a seamless registration and seating experience. The platform continues to evolve as new operational workflows and event-management capabilities are developed.',
      ],
      sections: [
        {
          title: 'CUSTOM INTERACTIVE SEATING LAYOUT SYSTEM',
          text: 'Unlike a static seating image, Compassion uses event-specific venue layouts composed of seats, seat rows, stages, screens, tables, walls, doors, text labels, and custom areas. Administrators can build floor-plan templates, save layouts, monitor availability, and organize arrangements for different events.',
        },
        {
          title: 'TECHNICAL FOUNDATION',
          text: 'Laravel and MySQL persist venue layouts, layout objects, events, seats, reservations, and attendance data. Livewire with Volt manages reactive interactions, while Flux UI and Tailwind CSS provide the dashboard, editor, and responsive interface.',
        },
      ],
      highlightsTitle: 'KEY FEATURES & CURRENT DEVELOPMENT',
      highlights: [
        'Church event discovery and registration with event-specific seating arrangements and reservation workflows.',
        'Custom venue floor-plan editor with layout templates, grid snapping, zoom controls, and configurable seating and venue objects.',
        'Live seating dashboard showing total, available, selected, blocked, reserved, and occupied seats for active events.',
        'QR code-based registration and attendance check-in for faster on-site participant verification.',
        'Role-based access for church administrators, ushers, and crowd-management teams with responsibilities separated by operational need.',
        'Integrated church operations covering member data, services, communities, ministry teams, inventory, devotional materials, and news publishing.',
        'Active development focused on refining event workflows, seating interactions, operational reliability, and the attendee experience.',
      ],
    },
    live: '#',
    code: '#',
  },
  {
    type: 'GOVERNMENT INFORMATION SYSTEM',
    title: 'AnjabPro',
    status: 'INTERNSHIP',
    description: 'A government information system for managing job analysis and position evaluation data across the Government of Kulon Progo Regency.',
    tags: ['Laravel 12', 'PHP 8.2', 'MySQL', 'Blade', 'Git'],
    accent: 'blue',
    mark: 'AP',
    image: '/anjab/anjab (1).png',
    photos: [
      { src: '/anjab/anjab (1).png', alt: 'AnjabPro secure government portal login screen' },
      { src: '/anjab/anjab (3).png', alt: 'AnjabPro superadmin statistics dashboard' },
      { src: '/anjab/anjab (2).png', alt: 'Government position validation workflow' },
      { src: '/anjab/anjab (4).png', alt: 'Interactive organizational hierarchy chart' },
      { src: '/anjab/anjab (1).jpg', alt: 'Government employee management table' },
    ],
    caseStudy: {
      heading: 'Managing government job analysis and position evaluation through structured data.',
      meta: [
        { label: 'PROJECT TYPE', value: 'Internship Project' },
        { label: 'ORGANIZATION', value: 'Diskominfo Kabupaten Kulon Progo' },
        { label: 'ROLE', value: 'Backend / Full-Stack Web Developer — Development Team' },
        { label: 'YEAR', value: '2026' },
      ],
      paragraphs: [
        'ANJAB is a government information system developed to support the management of job analysis and position evaluation data across the Government of Kulon Progo Regency. The platform organizes administrative data and workflows for positions, work units, organizational structures, and evaluation processes.',
        'I worked on ANJAB during my internship at Dinas Komunikasi dan Informatika Kabupaten Kulon Progo as part of the development team, contributing to backend functionality, interface integration, database relationships, and collaborative delivery using Git.',
      ],
      sections: [
        {
          title: 'HIERARCHICAL DATA MANAGEMENT',
          text: 'Implemented parent-child relationships for organizational structures, including searchable dropdowns, pagination, and structured navigation across work units and organizational units.',
        },
        {
          title: 'EVAJAB & DATABASE INTEGRATION',
          text: 'Contributed to the position-evaluation module for managing evaluation factors, scores, periods, and results, supported by MySQL relationships, data validation, and integration between Laravel backend logic and Blade interfaces.',
        },
      ],
      highlightsTitle: 'MY INTERNSHIP CONTRIBUTIONS',
      highlights: [
        'Unit Kerja Management — developed CRUD functionality for creating, viewing, updating, and deleting work-unit data.',
        'Satuan Kerja Management — implemented CRUD workflows for managing organizational-unit records and related administrative data.',
        'Hierarchical Data Management — built parent-child organizational relationships with searchable selections and paginated data views.',
        'EVAJAB — contributed to position-evaluation workflows covering factors, scores, evaluation periods, and evaluation results.',
        'Database Integration — managed MySQL relationships, server-side validation, and integration between backend processes and Blade interfaces.',
        'Collaborative Development — used Git-based workflows and submitted pull requests to the develop branch as part of the development team.',
      ],
    },
    live: '#',
    code: '#',
  },
  {
    type: 'VILLAGE PROFILE WEBSITE',
    title: 'Padukuhan Pucung',
    status: 'COMMUNITY SERVICE (KKN)',
    description: 'A community profile website presenting Padukuhan Pucung through its local history, small businesses, activities, galleries, and profile video.',
    tags: ['Laravel', 'MySQL', 'HTML', 'CSS'],
    accent: 'sky',
    mark: 'KKN',
    image: '/kkn/kkn.png',
    photos: [
      { src: '/kkn/kkn.png', alt: 'Padukuhan Pucung community profile website landing page' },
    ],
    caseStudy: {
      heading: 'Bringing Padukuhan Pucung’s identity and local potential online.',
      meta: [
        { label: 'PROJECT TYPE', value: 'Community Service (KKN)' },
        { label: 'ROLE', value: 'Front-End Developer' },
        { label: 'DELIVERABLES', value: 'Website & Profile Video' },
        { label: 'COMMUNITY', value: 'Padukuhan Pucung' },
      ],
      paragraphs: [
        'This Community Service (KKN) project focused on creating a profile video and developing the Padukuhan Pucung website. The digital platform introduces the village, documents its local history, highlights community activities, and gives local UMKM greater visibility.',
        'I was responsible for the front-end development, translating community information into a clear and approachable website that helps residents, visitors, and wider audiences learn about Pucung’s identity, culture, activities, and economic potential.',
      ],
      sections: [
        {
          title: 'COMMUNITY PROFILE WEBSITE',
          text: 'The website brings together the village profile, local history, UMKM information, community galleries, and activity schedules through accessible navigation and a visual landing experience.',
        },
        {
          title: 'PROFILE VIDEO',
          text: 'The project also included the creation and presentation of a Padukuhan Pucung profile video, using visual storytelling to introduce the area, its environment, community values, and local potential.',
        },
      ],
      highlightsTitle: 'MY CONTRIBUTIONS',
      highlights: [
        'Developed the website’s front-end interface and translated the project’s visual direction into responsive web pages.',
        'Structured clear navigation for the home page, community profile, UMKM directory, gallery, and activity information.',
        'Presented local UMKM information to help promote community-owned businesses and products to a wider audience.',
        'Organized local history and community activities into accessible, easy-to-understand website content.',
        'Integrated the profile video into the landing experience so visitors can immediately explore Padukuhan Pucung visually.',
        'Collaborated on the profile-video deliverable and the overall digital presentation of the community.',
      ],
    },
    live: '#',
    code: '#',
  },
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
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const fallbackPhotos = [
    { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1100&q=85', alt: 'Interface concept on a laptop' },
    { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1100&q=85', alt: 'Code workspace' },
    { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1100&q=85', alt: 'Product development screen' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85', alt: 'Website on a desktop display' },
  ]
  const photos = project.photos ?? fallbackPhotos

  useEffect(() => {
    if (selectedPhoto === null) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedPhoto(null)
      if (event.key === 'ArrowLeft') setSelectedPhoto((current) => (current - 1 + photos.length) % photos.length)
      if (event.key === 'ArrowRight') setSelectedPhoto((current) => (current + 1) % photos.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedPhoto, photos.length])

  return <main className={`project-page-shell ${isDark ? 'theme-dark' : 'theme-light'}`}>
    <header className="project-page-nav">
      <a className="brand" href="#home">THEO<span>./</span></a>
      <button className="work-back" onClick={onBack}>← Back to selected work</button>
    </header>
    <section className="work project-page-work is-visible">
      <div className="section-heading">
        <div><p className="section-label">SELECTED WORK / CASE STUDY</p><h2>{project.title}<br /><span>Project detail.</span></h2></div>
        <p className="project-page-type">{project.status ? `${project.status} / ` : ''}{project.type}</p>
      </div>
      <div className="project-detail">
        <div className="detail-deck photo-deck">
          {photos.map((photo, index) => {
            const position = (index - activeDetail + photos.length) % photos.length
            return <article key={photo.src} className={`detail-card photo-card ${position > 3 ? 'detail-pos-hidden' : `detail-pos-${position}`}`} onClick={() => position === 0 ? setSelectedPhoto(index) : setActiveDetail(index)}><img src={photo.src} alt={photo.alt} /><span className="photo-zoom-hint" aria-hidden="true">VIEW FULLSCREEN ↗</span></article>
          })}
        </div>
        <div className="work-deck-footer">
          <div className="deck-pagination">{photos.map((photo, index) => <button key={photo.src} className={index === activeDetail ? 'active' : ''} onClick={() => setActiveDetail(index)} aria-label={`Show photo ${index + 1}`} aria-current={index === activeDetail} />)}</div>
          <div className="deck-controls"><button onClick={() => setActiveDetail((activeDetail - 1 + photos.length) % photos.length)} aria-label="Previous photo">←</button><button onClick={() => setActiveDetail((activeDetail + 1) % photos.length)} aria-label="Next photo">→</button></div>
        </div>
      </div>
      <div className="project-narrative">
        <p className="section-label">ABOUT THE PROJECT</p>
        <h3>{project.caseStudy?.heading ?? `${project.title} is made to feel clear from the first click.`}</h3>
        {project.caseStudy ? <>
          <div className="case-study-meta">
            {(project.caseStudy.meta ?? [
              { label: 'COMPANY', value: project.caseStudy.company },
              { label: 'ROLE', value: project.caseStudy.role },
              { label: 'PERIOD', value: project.caseStudy.period },
              { label: 'LOCATION', value: project.caseStudy.location },
            ]).map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
          </div>
          {project.caseStudy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {project.caseStudy.sections?.map((section) => <div className="case-study-section" key={section.title}><p className="section-label">{section.title}</p><p>{section.text}</p></div>)}
          <div className="project-highlights">
            <p className="section-label">{project.caseStudy.highlightsTitle ?? 'KEY CONTRIBUTIONS'}</p>
            <ul>{project.caseStudy.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
        </> : <><p>{project.description}</p><p>The direction is deliberately simple: a focused visual system, an intuitive flow, and details that help people complete their task with less friction.</p></>}
        <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </section>
    {selectedPhoto !== null && createPortal(<div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={`Photo ${selectedPhoto + 1} of ${photos.length}`} onClick={() => setSelectedPhoto(null)}><button className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close fullscreen image">×</button><button className="lightbox-nav lightbox-previous" onClick={(event) => { event.stopPropagation(); setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length) }} aria-label="Previous image">←</button><figure onClick={(event) => event.stopPropagation()}><img src={photos[selectedPhoto].src} alt={photos[selectedPhoto].alt} /><figcaption>{selectedPhoto + 1} / {photos.length} — {photos[selectedPhoto].alt}</figcaption></figure><button className="lightbox-nav lightbox-next" onClick={(event) => { event.stopPropagation(); setSelectedPhoto((selectedPhoto + 1) % photos.length) }} aria-label="Next image">→</button></div>, document.body)}
  </main>
}

function DraggableProjectRow({ rowIndex, onOpenProject }) {
  const rowRef = useRef(null)
  const positionRef = useRef(0)
  const setWidthRef = useRef(0)
  const pointerActiveRef = useRef(false)
  const draggingRef = useRef(false)
  const didDragRef = useRef(false)
  const startXRef = useRef(0)
  const lastXRef = useRef(0)
  const direction = rowIndex === 1 ? 1 : -1

  const renderPosition = (nextPosition) => {
    const setWidth = setWidthRef.current
    let normalizedPosition = nextPosition
    if (setWidth > 0) {
      while (normalizedPosition <= -setWidth) normalizedPosition += setWidth
      while (normalizedPosition > 0) normalizedPosition -= setWidth
    }
    positionRef.current = normalizedPosition
    if (rowRef.current) rowRef.current.style.transform = `translate3d(${normalizedPosition}px, 0, 0)`
  }

  useEffect(() => {
    const row = rowRef.current
    if (!row) return undefined
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrame
    let previousTime = performance.now()
    let initialized = false

    const measure = () => {
      const previousWidth = setWidthRef.current
      const nextWidth = row.scrollWidth / 2
      setWidthRef.current = nextWidth
      if (!initialized) {
        positionRef.current = direction > 0 ? -nextWidth : 0
        initialized = true
      } else if (previousWidth > 0 && nextWidth !== previousWidth) {
        positionRef.current = (positionRef.current / previousWidth) * nextWidth
      }
      renderPosition(positionRef.current)
    }

    const animate = (currentTime) => {
      const elapsed = Math.min((currentTime - previousTime) / 1000, 0.05)
      previousTime = currentTime
      if (!pointerActiveRef.current && !reducedMotion) {
        const speed = direction > 0 ? 48 : 51
        renderPosition(positionRef.current + direction * speed * elapsed)
      }
      animationFrame = window.requestAnimationFrame(animate)
    }

    measure()
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(row)
    animationFrame = window.requestAnimationFrame(animate)
    return () => {
      resizeObserver.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [direction])

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    pointerActiveRef.current = true
    draggingRef.current = false
    didDragRef.current = false
    startXRef.current = event.clientX
    lastXRef.current = event.clientX
  }

  const handlePointerMove = (event) => {
    if (!pointerActiveRef.current) return
    const travelled = event.clientX - startXRef.current
    if (!draggingRef.current && Math.abs(travelled) > 5) {
      draggingRef.current = true
      didDragRef.current = true
      rowRef.current?.classList.add('is-dragging')
      rowRef.current?.setPointerCapture(event.pointerId)
    }
    if (!draggingRef.current) return
    renderPosition(positionRef.current + event.clientX - lastXRef.current)
    lastXRef.current = event.clientX
  }

  const stopDragging = (event) => {
    pointerActiveRef.current = false
    draggingRef.current = false
    rowRef.current?.classList.remove('is-dragging')
    if (rowRef.current?.hasPointerCapture(event.pointerId)) rowRef.current.releasePointerCapture(event.pointerId)
    window.setTimeout(() => { didDragRef.current = false }, 80)
  }

  return <div
    ref={rowRef}
    className={`brick-row draggable-marquee row-${rowIndex}`}
    onPointerDown={handlePointerDown}
    onPointerMove={handlePointerMove}
    onPointerUp={stopDragging}
    onPointerCancel={stopDragging}
    style={{ transform: rowIndex === 1 ? 'translate3d(calc(0px - var(--brick-set-width)), 0, 0)' : 'translate3d(0, 0, 0)' }}
  >
    {Array.from({ length: 2 }, (_, setIndex) => <div className="brick-set" key={setIndex}>{projects.map((item, itemIndex) => <button type="button" className={`dome-project ${item.accent} ${item.image ? 'has-image' : ''}`} onClick={(event) => { event.stopPropagation(); if (!didDragRef.current) onOpenProject(itemIndex) }} key={`${item.title}-${setIndex}`} aria-label={`Open ${item.title} project details`}><span className="dome-screen">{item.image ? <img className="dome-thumbnail" src={item.image} alt="" draggable="false" /> : <i>{item.mark}</i>}{item.status && <b className="dome-status">{item.status}</b>}<small>{item.title}</small></span></button>)}</div>)}
  </div>
}

function AllProjectsPage({ isDark, onBack, onOpenProject }) {
  const collections = [
    {
      label: '01 / CLIENT WORK',
      title: 'Professional & client projects.',
      description: 'Digital products developed for real organizations, active users, and evolving operational needs.',
      titles: ['Eagle Jeans Production Tracking', 'Compassion'],
    },
    {
      label: '02 / INTERNSHIP',
      title: 'Government system experience.',
      description: 'Collaborative development work completed during an internship at Diskominfo Kulon Progo.',
      titles: ['AnjabPro'],
    },
    {
      label: '03 / ACADEMIC WORK',
      title: 'Campus & thesis projects.',
      description: 'End-to-end products shaped through coursework, research, product design, and software engineering.',
      titles: ['ReuseMart', 'FitCatering'],
    },
    {
      label: '04 / COMMUNITY',
      title: 'Community service project.',
      description: 'A digital contribution created to help a local community share its identity, activities, and businesses.',
      titles: ['Padukuhan Pucung'],
    },
  ]

  return <main className={`all-projects-page ${isDark ? 'theme-dark' : 'theme-light'}`}>
    <header className="project-page-nav">
      <a className="brand" href="#home" onClick={onBack}>THEO<span>./</span></a>
      <button className="work-back" onClick={onBack}>← Back to selected work</button>
    </header>
    <section className="all-projects-hero is-visible">
      <p className="section-label">PROJECT ARCHIVE / 06 PROJECTS</p>
      <h1>All projects,<br /><span>clearly organized.</span></h1>
      <p>A static overview of the projects I’ve built across professional work, internships, academic study, and community service.</p>
    </section>
    <div className="project-collections">
      {collections.map((collection) => {
        const collectionProjects = collection.titles.map((title) => projects.find((project) => project.title === title)).filter(Boolean)
        return <section className="project-collection" key={collection.label}>
          <div className="project-collection-heading"><p className="section-label">{collection.label}</p><h2>{collection.title}</h2><p>{collection.description}</p></div>
          <div className="all-projects-grid">
            {collectionProjects.map((project, index) => <button className="all-project-card" type="button" onClick={() => onOpenProject(projectSlug(project.title))} key={project.title}>
              <span className="all-project-card-media"><img src={project.image} alt={`Preview of ${project.title}`} /><i>{String(index + 1).padStart(2, '0')}</i>{project.status && <b>{project.status}</b>}</span>
              <span className="all-project-card-body"><small>{project.type}</small><strong>{project.title}</strong><span>{project.description}</span><span className="all-project-card-tags">{project.tags.slice(0, 3).map((tag) => <em key={tag}>{tag}</em>)}</span><span className="all-project-card-link">View project detail <Arrow /></span></span>
            </button>)}
          </div>
        </section>
      })}
    </div>
  </main>
}

function WorkShowcase({ onOpenProject, onOpenAllProjects }) {
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

  return <section id="work" className={`work section-shell work-${view}`}><div className="section-heading"><div><p className="section-label">03 / SELECTED WORK</p><h2>Projects I’m <span>proud of.</span></h2></div><button className="all-projects-button" type="button" onClick={onOpenAllProjects}>View all projects <Arrow /></button></div>
    {view === 'gallery' && <div className="project-dome brick-gallery" aria-label="Project gallery"><div className="dome-sphere">{Array.from({ length: 3 }, (_, rowIndex) => <DraggableProjectRow rowIndex={rowIndex} onOpenProject={openPreview} key={rowIndex} />)}</div><p className="dome-hint">DRAG OR SWIPE · CLICK TO VIEW DETAILS <span>↗</span></p></div>}
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
  const [openedProjectSlug, setOpenedProjectSlug] = useState(() => window.location.hash.startsWith('#project/') ? window.location.hash.replace('#project/', '') : '')
  const [showAllProjects, setShowAllProjects] = useState(() => window.location.hash === '#all-projects')
  const [projectOrigin, setProjectOrigin] = useState('selected')
  const introDragRef = useRef(null)
  const introPullRef = useRef(0)
  const copyEmail = async () => { try { await navigator.clipboard.writeText('theochrisxto@gmail.com') } catch { /* clipboard may be unavailable */ } setCopied(true); setTimeout(() => setCopied(false), 1800) }
  useEffect(() => { const onKey = (event) => event.key === 'Escape' && setMenuOpen(false); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
  useEffect(() => {
    const syncProjectRoute = () => {
      const hash = window.location.hash
      setOpenedProjectSlug(hash.startsWith('#project/') ? hash.replace('#project/', '') : '')
      setShowAllProjects(hash === '#all-projects')
    }
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
  }, [openedProjectSlug, showAllProjects])
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
  const returnToSelectedWork = () => {
    window.history.replaceState(null, '', '#work')
    setOpenedProjectSlug('')
    setShowAllProjects(false)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const workSection = document.getElementById('work')
        workSection?.classList.add('is-visible')
        workSection?.scrollIntoView({ block: 'start' })
      })
    })
  }
  const openAllProjects = () => {
    window.history.pushState(null, '', '#all-projects')
    setShowAllProjects(true)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  const openProject = (slug, origin = 'selected') => {
    setProjectOrigin(origin)
    setShowAllProjects(false)
    setOpenedProjectSlug(slug)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  const returnFromProject = () => {
    if (projectOrigin !== 'all') {
      returnToSelectedWork()
      return
    }
    window.history.replaceState(null, '', '#all-projects')
    setOpenedProjectSlug('')
    setShowAllProjects(true)
    window.scrollTo({ top: 0, behavior: 'auto' })
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
  if (openedProject) return <ProjectPage project={openedProject} isDark={isDark} onBack={returnFromProject} />
  if (showAllProjects) return <AllProjectsPage isDark={isDark} onBack={returnToSelectedWork} onOpenProject={(slug) => openProject(slug, 'all')} />
  return <>{!introDismissed && <section className={`intro-loader ${introReady ? 'is-ready' : ''}`} aria-label={introReady ? 'Portfolio is ready. Drag to enter.' : `Loading portfolio: ${introProgress}%`}><div className="intro-loader-content"><p className="intro-brand">THEO<span>./</span></p><p className="intro-kicker">ORA ET LABORA</p><h1>{introReady ? <>Ready to <em>explore?</em></> : <>Building a little <em>magic.</em></>}</h1><p className="intro-copy">Waiting for the portfolio to be ready.</p><div className="intro-progress" aria-hidden="true"><i style={{ '--intro-progress': `${introProgress}%` }} /></div><div className="intro-progress-meta"><span>{introReady ? 'SYSTEM READY' : 'PREPARING PORTFOLIO'}</span><b>{introProgress}%</b></div>{introReady && <button className="intro-pull" style={{ '--intro-pull': `${introPull}%` }} onPointerDown={startIntroPull} onPointerMove={moveIntroPull} onPointerUp={stopIntroPull} onPointerCancel={stopIntroPull} aria-label="Drag right to enter portfolio"><span>DRAG TO ENTER</span><i aria-hidden="true">→</i></button>}</div></section>}<main className={isDark ? 'theme-dark' : 'theme-light'}>
    <div className="ambient-background" aria-hidden="true"><span className="ambient-grid" /><span className="ambient-orb orb-violet" /><span className="ambient-orb orb-lime" /><span className="ambient-ring" /></div>
    <header className="nav-wrap"><a className="brand" href="#home" aria-label="Go to homepage">THEO<span>./</span></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open navigation">{menuOpen ? '×' : '☰'}</button><nav className={menuOpen ? 'nav open' : 'nav'}><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#tools" onClick={() => setMenuOpen(false)}>Toolbox</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#credentials" onClick={() => setMenuOpen(false)}>Experience</a><button className="theme-toggle" onClick={() => setAppearance(!isDark)} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>{isDark ? '☀ LIGHT' : '☾ DARK'}</button><a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow /></a></nav></header>
    <section id="home" className="hero section-shell"><div className="grid-lines" aria-hidden="true" /><div className="hero-copy"><p className="eyebrow"><i /> ORA ET LABORA - BERDOA DAN BEKERJA</p><p className="intro">Hi, I'm Theo —</p><h1>Bringing ideas<br /><em>to life.</em></h1><p className="hero-text">I’m a creative developer who enjoys turning complex problems into digital experiences that are simple, useful, and a little more delightful.</p><div className="hero-actions"><a className="button primary" href="#work">Explore selected work <Arrow /></a><a className="text-link" href="#about">Get to know me <span>↓</span></a></div></div><button className={`hero-art profile-card ${photoMode} ${isPhotoSwitching ? 'is-switching' : ''}`} onClick={switchPhotoMode} aria-label="Switch photo appearance">{previousPhotoMode && <img className={`profile-photo previous ${previousPhotoMode}`} src={previousPhotoMode === 'color' ? '/profile-color.jpeg' : '/profile-mono.jpeg'} alt="" aria-hidden="true" onError={(event) => { event.currentTarget.src = heroFallback }} />}<div className="photo-ring ring-one" /><div className="photo-ring ring-two" /><img className={`profile-photo current ${photoMode}`} src={photoMode === 'color' ? '/profile-color.jpeg' : '/profile-mono.jpeg'} alt="Theo" onAnimationEnd={() => { if (isPhotoSwitching) { setIsPhotoSwitching(false); setPreviousPhotoMode(null) } }} onError={(event) => { event.currentTarget.src = heroFallback }} /><span className="photo-badge">{photoMode === 'color' ? 'COLOR MODE' : 'MONO MODE'}</span><span className="photo-hint">CLICK TO SWITCH ↻</span><div className="spark spark-one">✦</div><div className="spark spark-two">✦</div></button><div className="scroll-tag">SCROLL TO EXPLORE <span>↓</span></div></section>
    <section id="about" className="about section-shell"><p className="section-label">01 / ABOUT ME</p><div className="about-grid"><div className="about-intro"><h2>I turn curious questions into <span>useful digital experiences.</span></h2></div><div className="about-copy"><p>I’m Jawara Theo Christo — an Informatics graduate (S.Kom.) from Universitas Atma Jaya Yogyakarta, software developer, UI/UX designer, and full-stack builder based in Yogyakarta, ready to collaborate from anywhere. I learn by building, turning real-world problems into digital experiences that feel simple, useful, and intuitive.</p><p>I’m naturally curious: always experimenting, learning, and refining. I enjoy creating web applications, UI/UX-focused products, internal business systems, and mobile applications with Flutter and Dart that make real workflows clearer and more efficient.</p><div className="about-languages"><span className="about-languages-label">LANGUAGES</span><div className="language-list"><span className="language-item"><strong>Indonesian</strong><small>Native</small></span><span className="language-item"><strong>English</strong><small>Conversational</small></span></div><a className="language-certificate" href="/EnglishScore-Certificate.pdf" target="_blank" rel="noreferrer">View EnglishScore Certificate <Arrow /></a></div><div className="about-actions"><a className="button outline" href="#contact">Let’s build something useful <Arrow /></a><a className="button resume-download" href="/Jawara-Theo-Christo-Resume.pdf" download="Jawara-Theo-Christo-CV.pdf">Download CV <span aria-hidden="true">↓</span></a></div></div></div></section>
    <section id="tools" className="toolbox section-shell"><div className="toolbox-heading"><p className="section-label">02 / TOOLBOX</p><h2>Tools behind the <span>things I build.</span></h2><p>Choose a tool to highlight it. These are living skills — always being sharpened through real projects.</p></div><div className="toolbox-content"><div className="tool-groups">{toolGroups.map((group) => <article className="tool-group" key={group.title}><div className="tool-group-copy"><span>{group.number}</span><h3>{group.title}</h3><p>{group.description}</p></div><div className="tool-buttons">{group.tools.map((tool) => <button className={selectedToolName === tool.name ? 'tool-button selected' : 'tool-button'} onClick={() => setSelectedToolName(tool.name)} aria-pressed={selectedToolName === tool.name} key={tool.name}>{tool.icon ? <img src={`https://cdn.simpleicons.org/${tool.icon}`} alt="" /> : <i aria-hidden="true">{tool.symbol}</i>}<span>{tool.name}</span></button>)}</div></article>)}</div></div></section>
    <WorkShowcase onOpenProject={(slug) => openProject(slug, 'selected')} onOpenAllProjects={openAllProjects} />
    <section id="credentials" className="credentials experience section-shell">
      <p className="section-label">04 / EXPERIENCE</p>
      <h2>Learning by <span>building.</span></h2>
      <div className="experience-list">
        <article className="experience-card">
          <div className="experience-meta"><span>01</span><p>JAN 2026 — APR 2026</p></div>
          <div className="experience-main">
            <div className="experience-photos"><img src="/diskominfo.jpeg" alt="Theo bersama tim Diskominfo Kabupaten Kulon Progo" /></div>
            <p className="experience-company">DINAS KOMUNIKASI DAN INFORMATIKA KAB. KULON PROGO</p>
            <h3>Internship — IT &amp; System Governance</h3>
            <small>Yogyakarta, Indonesia</small>
            <p className="experience-intro">A government agency responsible for information technology, communication, digital services, and public information management in Kulon Progo.</p>
            <ul>
              <li>Developed and enhanced the AnjabPRO web application with Laravel, PHP, MySQL, and Tailwind CSS.</li>
              <li>Implemented modules for job analysis, workload analysis, job requirements, hierarchy, and organizational data.</li>
              <li>Built JWT APIs, Google reCAPTCHA V3, PDF export, XLSX import/export, dashboards, and workflow validation.</li>
              <li>Tested, debugged, refined UI flows, and collaborated through GitHub branches and pull requests.</li>
            </ul>
            <div className="tags"><span>Laravel</span><span>PHP</span><span>MySQL</span><span>Tailwind CSS</span></div>
          </div>
        </article>
        <article className="experience-card">
          <div className="experience-meta"><span>02</span><p>JUN 2026 — OCT 2026</p></div>
          <div className="experience-main">
            <div className="experience-photos"><img src="/eagle-jeans.jpeg" alt="Kegiatan pengembangan sistem bersama tim Eagle Jeans" /></div>
            <p className="experience-company">EAGLE JEANS CORPORATION</p>
            <h3>Freelance — Software Developer</h3>
            <small>Yogyakarta, Indonesia</small>
            <p className="experience-intro">Eagle Jeans is a fashion and apparel company specializing in denim products, supported by a digital production-tracking system that helps manage day-to-day operations, transactions, customer data, and garment workflows.</p>
            <ul>
              <li>Developed and maintained a production-ready Laravel web application that supports Eagle Jeans’ daily business activities and tracks garment orders throughout the production process.</li>
              <li>Built and refined business features, CRUD modules, transaction workflows, validation rules, and database operations to improve process efficiency and data accuracy.</li>
              <li>Translated client requirements into practical system improvements through custom feature development, bug fixes, clearer data management, and more intuitive user flows.</li>
              <li>Managed application deployment, production troubleshooting, and ongoing maintenance to keep the system stable, functional, and reliable for real-world operations.</li>
            </ul>
            <div className="tags"><span>Laravel</span><span>CRUD</span><span>MySQL</span><span>Deployment</span></div>
          </div>
        </article>
      </div>
    </section>
    <section id="contact" className="contact section-shell"><div className="contact-inner"><p className="section-label">05 / LET’S CONNECT</p><h2>Have something<br />you want to <span>make?</span></h2><p>Whether it’s a production system, a mobile app, or something in between — let’s talk about what you need.</p><button className="mail-link" onClick={copyEmail}>theochrisxto@gmail.com <Arrow /></button>{copied && <span className="copy-toast">Email copied!</span>}<div className="socials"><a href="https://www.instagram.com/thee.ow?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href="mailto:theochrisxto@gmail.com">Email <Arrow /></a><a href="https://www.linkedin.com/in/theo-christo-629072384" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></div><div className="contact-orb">✦</div></section>
    <footer><a className="brand" href="#home">THEO<span>./</span></a><p>Designed & built with curiosity. © 2026</p><a href="#home">BACK TO TOP ↑</a></footer>
  </main></>
}
export default App
