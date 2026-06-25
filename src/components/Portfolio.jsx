import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'
import Modal from './Modal'
import './Portfolio.css'

const projects = [
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Agence Immobilière Luxe', en: 'Luxury Real Estate' }, result: { fr: '+60% de demandes de contact', en: '+60% contact requests' }, icon: 'fas fa-building', gradient: 'linear-gradient(135deg, #1E3A8A, #059669)', image: `${import.meta.env.BASE_URL}immo.png`, tech: ['Python', 'Django', 'HTML', 'CSS', 'Tailwind', 'JavaScript'], techRoles: { fr: { 'Python': 'Logique backend et traitement des données', 'Django': 'Framework web pour la gestion des biens et utilisateurs', 'HTML': 'Structure des pages et formulaires', 'CSS': 'Mise en page et styles visuels', 'Tailwind': 'Design responsive rapide et moderne', 'JavaScript': 'Interactivité et mises à jour dynamiques' }, en: { 'Python': 'Backend logic and data processing', 'Django': 'Web framework for property and user management', 'HTML': 'Page structure and forms', 'CSS': 'Layout and visual styling', 'Tailwind': 'Fast and modern responsive design', 'JavaScript': 'Interactivity and dynamic updates' } }, desc: { fr: "Application web complète pour une agence immobilière de luxe.", en: "Complete web application for a luxury real estate agency." }, details: { fr: "Plateforme complète développée avec Django pour gérer les annonces immobilières de luxe.", en: "Full platform built with Django to manage luxury real estate listings." } },
  { cat: 'web', category: { fr: 'Site Vitrine', en: 'Website' }, title: { fr: 'Chumet', en: 'Chumet' }, result: { fr: '+40% de visibilité locale', en: '+40% local visibility' }, icon: 'fas fa-store', gradient: 'linear-gradient(135deg, #10B981, #3B82F6)', image: `${import.meta.env.BASE_URL}chumet.png`, tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript'], techRoles: { fr: { 'HTML': 'Structure sémantique des pages', 'CSS': 'Styles et animations', 'Tailwind': 'Framework CSS pour un design responsive', 'JavaScript': 'Galerie photos et validation de formulaire' }, en: { 'HTML': 'Semantic page structure', 'CSS': 'Styles and animations', 'Tailwind': 'CSS framework for responsive design', 'JavaScript': 'Photo gallery and form validation' } }, desc: { fr: "Site vitrine moderne pour Chumet.", en: "Modern showcase website for Chumet." }, details: { fr: "Site vitrine responsive conçu avec Tailwind CSS pour une entreprise locale.", en: "Responsive showcase site built with Tailwind CSS for a local business." } },
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Plateforme E-Learning', en: 'E-Learning Platform' }, result: { fr: '+70% de productivité étudiante', en: '+70% student productivity' }, icon: 'fas fa-graduation-cap', gradient: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', image: `${import.meta.env.BASE_URL}assited.png`, tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Text Mining'], techRoles: { fr: { 'Python': 'Moteur IA et analyse de textes', 'HTML': 'Structure des pages de cours et quiz', 'CSS': 'Interface éducative moderne', 'JavaScript': 'Quiz interactifs et animations', 'Text Mining': 'Analyse automatique des contenus pour générer des quiz' }, en: { 'Python': 'AI engine and text analysis', 'HTML': 'Course and quiz page structure', 'CSS': 'Modern educational interface', 'JavaScript': 'Interactive quizzes and animations', 'Text Mining': 'Automatic content analysis for quiz generation' } }, desc: { fr: "Plateforme e-learning intelligente assistée par IA.", en: "Smart AI-powered e-learning platform." }, details: { fr: "Plateforme e-learning intégrant des techniques de Text Mining et d'IA.", en: "E-learning platform integrating Text Mining and AI techniques." } },
  { cat: 'ecommerce', category: { fr: 'E-Commerce', en: 'E-Commerce' }, title: { fr: 'Boutique Mode Afro', en: 'African Fashion Store' }, result: { fr: '+45% de ventes en 3 mois', en: '+45% sales in 3 months' }, icon: 'fas fa-store', gradient: 'linear-gradient(135deg, #7C3AED, #EC4899)', tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], techRoles: { fr: { 'HTML': 'Structure du catalogue produits', 'CSS': 'Design élégant et attractif', 'JavaScript': 'Panier dynamique et filtres produits', 'PHP': 'Backend pour la gestion des commandes', 'MySQL': 'Base de données produits et clients' }, en: { 'HTML': 'Product catalog structure', 'CSS': 'Elegant and attractive design', 'JavaScript': 'Dynamic cart and product filters', 'PHP': 'Backend for order management', 'MySQL': 'Product and customer database' } }, desc: { fr: "Boutique en ligne complète pour une marque de mode africaine.", en: "Complete online store for an African fashion brand." }, details: { fr: "E-commerce complet avec catalogue, panier intelligent et paiement sécurisé.", en: "Complete e-commerce with catalog, smart cart and secure payment." } },
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Plateforme Réservation', en: 'Booking Platform' }, result: { fr: 'Gain de 15h/semaine automatisé', en: '15h/week saved through automation' }, icon: 'fas fa-calendar-check', gradient: 'linear-gradient(135deg, #059669, #10B981)', tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'], techRoles: { fr: { 'HTML': 'Structure du calendrier et formulaires', 'CSS': 'Interface intuitive et responsive', 'JavaScript': 'Calendrier interactif et mises à jour en temps réel', 'Node.js': 'API backend pour la gestion des réservations', 'MongoDB': 'Base de données des réservations et chambres' }, en: { 'HTML': 'Calendar structure and forms', 'CSS': 'Intuitive and responsive interface', 'JavaScript': 'Interactive calendar and real-time updates', 'Node.js': 'Backend API for reservation management', 'MongoDB': 'Reservation and room database' } }, desc: { fr: "Application de réservation en ligne pour un hôtel.", en: "Online booking application for a hotel." }, details: { fr: "Système de réservation complet avec calendrier interactif et paiement en ligne.", en: "Complete booking system with interactive calendar and online payment." } },
  { cat: 'web', category: { fr: 'Site Vitrine', en: 'Website' }, title: { fr: 'Restaurant Gastronomique', en: 'Gastronomic Restaurant' }, result: { fr: 'Notes Google 3.8 → 4.7', en: 'Google rating 3.8 → 4.7' }, icon: 'fas fa-utensils', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)', tech: ['HTML', 'CSS', 'JavaScript'], techRoles: { fr: { 'HTML': 'Structure du menu et pages', 'CSS': 'Ambiance visuelle élégante', 'JavaScript': 'Menu animé et système de réservation' }, en: { 'HTML': 'Menu and page structure', 'CSS': 'Elegant visual atmosphere', 'JavaScript': 'Animated menu and booking system' } }, desc: { fr: "Site vitrine pour un restaurant gastronomique.", en: "Showcase website for a gastronomic restaurant." }, details: { fr: "Site vitrine élégant avec menu interactif et réservation de tables.", en: "Elegant showcase site with interactive menu and table booking." } },
  { cat: 'ecommerce', category: { fr: 'E-Commerce', en: 'E-Commerce' }, title: { fr: 'Bijoux & Accessoires', en: 'Jewelry & Accessories' }, result: { fr: '2000+ followers Instagram gagnés', en: '2000+ Instagram followers gained' }, icon: 'fas fa-gem', gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', tech: ['HTML', 'CSS', 'JavaScript', 'Shopify'], techRoles: { fr: { 'HTML': 'Structure du catalogue bijoux', 'CSS': 'Design raffiné et luxe', 'JavaScript': 'Zoom produit et favoris', 'Shopify': 'Plateforme e-commerce complète' }, en: { 'HTML': 'Jewelry catalog structure', 'CSS': 'Refined and luxury design', 'JavaScript': 'Product zoom and favorites', 'Shopify': 'Complete e-commerce platform' } }, desc: { fr: "Boutique en ligne de bijoux artisanaux.", en: "Handmade jewelry online store." }, details: { fr: "Boutique élégante avec zoom produit et intégration Instagram.", en: "Elegant store with product zoom and Instagram integration." } },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const [modalProject, setModalProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [clickedCard, setClickedCard] = useState(null)
  const gridRef = useRef(null)
  const { lang, t } = useLanguage()

  const filters = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'web', label: t.portfolio.filters.web },
    { key: 'ecommerce', label: t.portfolio.filters.ecommerce },
    { key: 'app', label: t.portfolio.filters.app },
  ]

  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)
  const visibleProjects = filtered.slice(currentIndex, currentIndex + 2)
  const totalVisible = Math.ceil(filtered.length / 2)

  const handleCardClick = (index) => {
    setClickedCard(index)
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const next = prev + 2
        return next >= filtered.length ? 0 : next
      })
      setClickedCard(null)
    }, 400)
  }

  const goNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 2
      return next >= filtered.length ? 0 : next
    })
  }

  const goPrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - 2
      return next < 0 ? filtered.length - 2 : next
    })
  }

  useEffect(() => {
    setCurrentIndex(0)
  }, [active])

  return (
    <>
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">{t.portfolio.tag}</span>
          <h2 className="section-title">{t.portfolio.title}</h2>
          <p className="section-subtitle">{t.portfolio.subtitle}</p>
        </div>
        <div className="portfolio-filters animate-on-scroll">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${active === f.key ? 'active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="portfolio-carousel">
          <button className="portfolio-nav-btn portfolio-nav-prev" onClick={goPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="portfolio-grid" ref={gridRef}>
            {visibleProjects.map((p, i) => (
              <div
                className={`portfolio-card animate-on-scroll ${clickedCard === i ? 'card-exit' : 'card-enter'}`}
                key={`${p.title.en}-${currentIndex}-${i}`}
                onClick={() => handleCardClick(i)}
              >
                <div className="portfolio-image">
                  {p.image ? (
                    <img src={p.image} alt={p.title[lang]} className="portfolio-img" />
                  ) : (
                    <div className="portfolio-placeholder" style={{ background: p.gradient }}>
                      <i className={p.icon}></i>
                    </div>
                  )}
                  <button className="portfolio-details-btn" onClick={(e) => { e.stopPropagation(); setModalProject(p) }}>
                    <i className="fas fa-info-circle"></i>
                    {lang === 'fr' ? 'Détails' : 'Details'}
                  </button>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{p.category[lang]}</span>
                  <div className="portfolio-title-row">
                    <h3 className="portfolio-title">{p.title[lang]}</h3>
                  </div>
                  <div className="portfolio-result">
                    <i className="fas fa-chart-line"></i>
                    <span>{p.result[lang]}</span>
                  </div>
                  {p.tech && (
                    <div className="portfolio-tech">
                      {p.tech.map((t, ti) => (
                        <span className="portfolio-tech-tag" key={ti}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="portfolio-nav-btn portfolio-nav-next" onClick={goNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="portfolio-dots">
          {Array.from({ length: totalVisible }).map((_, i) => (
            <button
              key={i}
              className={`portfolio-dot ${i === Math.floor(currentIndex / 2) ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i * 2)}
            ></button>
          ))}
        </div>
      </div>
    </section>

    {modalProject && (
      <Modal
        isOpen={modalProject !== null}
        onClose={() => setModalProject(null)}
        title={modalProject.title[lang]}
        icon={modalProject.icon}
        color="#fff"
        bg={modalProject.gradient}
      >
        <p className="modal-subtitle">{modalProject.category[lang]}</p>
        <p className="modal-text">{modalProject.desc[lang]}</p>
        {modalProject.details && (
          <p className="modal-text">{modalProject.details[lang]}</p>
        )}
        {modalProject.tech && (
          <div className="modal-tech-section">
            <h4 className="modal-section-title" style={{ color: 'var(--primary)' }}>
              <i className="fas fa-code"></i> {lang === 'fr' ? 'Technologies utilisées' : 'Technologies used'}
            </h4>
            {modalProject.techRoles ? (
              <div className="modal-tech-roles">
                {modalProject.tech.map((t, ti) => (
                  <div className="modal-tech-role" key={ti}>
                    <span className="modal-tech-tag" style={{ background: 'rgba(30,58,138,0.08)', color: 'var(--primary)' }}>{t}</span>
                    <span className="modal-tech-role-desc">{modalProject.techRoles[lang][t]}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="modal-tech">
                {modalProject.tech.map((t, ti) => (
                  <span className="modal-tech-tag" key={ti} style={{ background: 'rgba(30,58,138,0.08)', color: 'var(--primary)' }}>{t}</span>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="modal-badge" style={{ background: 'rgba(5,150,105,0.1)', color: '#059669' }}>
          <i className="fas fa-chart-line"></i> {modalProject.result[lang]}
        </div>
      </Modal>
    )}
    </>
  )
}
