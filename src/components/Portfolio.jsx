import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import './Portfolio.css'

const projects = [
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Agence Immobilière Luxe', en: 'Luxury Real Estate' }, result: { fr: '+60% de demandes de contact', en: '+60% contact requests' }, icon: 'fas fa-building', gradient: 'linear-gradient(135deg, #1E3A8A, #059669)', image: `${import.meta.env.BASE_URL}immo.png`, desc: { fr: "Application web complète pour une agence immobilière de luxe. Backend avec gestion des biens, comptes utilisateurs, formulaire de contact intelligent et tableau de bord administrateur.", en: "Complete web application for a luxury real estate agency. Backend with property management, user accounts, smart contact form and admin dashboard." } },
  { cat: 'ecommerce', category: { fr: 'E-Commerce', en: 'E-Commerce' }, title: { fr: 'Boutique Mode Afro', en: 'African Fashion Store' }, result: { fr: '+45% de ventes en 3 mois', en: '+45% sales in 3 months' }, icon: 'fas fa-store', gradient: 'linear-gradient(135deg, #7C3AED, #EC4899)', desc: { fr: "Boutique en ligne complète pour une marque de mode africaine. Catalogue produits, panier intelligent, paiement sécurisé et suivi de commandes.", en: "Complete online store for an African fashion brand. Product catalog, smart cart, secure payment and order tracking." } },
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Plateforme Réservation', en: 'Booking Platform' }, result: { fr: 'Gain de 15h/semaine automatisé', en: '15h/week saved through automation' }, icon: 'fas fa-calendar-check', gradient: 'linear-gradient(135deg, #059669, #10B981)', desc: { fr: "Application de réservation en ligne pour un hôtel. Calendrier interactif, paiement en ligne, confirmation automatique par email et SMS.", en: "Online booking application for a hotel. Interactive calendar, online payment, automatic confirmation by email and SMS." } },
  { cat: 'web', category: { fr: 'Site Vitrine', en: 'Website' }, title: { fr: 'Restaurant Gastronomique', en: 'Gastronomic Restaurant' }, result: { fr: 'Notes Google 3.8 → 4.7', en: 'Google rating 3.8 → 4.7' }, icon: 'fas fa-utensils', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)', desc: { fr: "Site vitrine pour un restaurant gastronomique. Menu interactif, galerie photos, système de réservation de tables et avis clients intégrés.", en: "Showcase website for a gastronomic restaurant. Interactive menu, photo gallery, table reservation system and integrated customer reviews." } },
  { cat: 'ecommerce', category: { fr: 'E-Commerce', en: 'E-Commerce' }, title: { fr: 'Bijoux & Accessoires', en: 'Jewelry & Accessories' }, result: { fr: '2000+ followers Instagram gagnés', en: '2000+ Instagram followers gained' }, icon: 'fas fa-gem', gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', desc: { fr: "Boutique en ligne de bijoux artisanaux avec catalogue élégant, zoom sur les produits et intégration Instagram pour booster les ventes.", en: "Handmade jewelry online store with elegant catalog, product zoom and Instagram integration to boost sales." } },
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Plateforme E-Learning', en: 'E-Learning Platform' }, result: { fr: '500+ étudiants actifs en 1 mois', en: '500+ active students in 1 month' }, icon: 'fas fa-graduation-cap', gradient: 'linear-gradient(135deg, #14B8A6, #06B6D4)', desc: { fr: "Plateforme de cours en ligne avec vidéos, quiz interactifs, suivi de progression et certificats automatiques.", en: "Online course platform with videos, interactive quizzes, progress tracking and automatic certificates." } },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const { lang, t } = useLanguage()

  const filters = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'web', label: t.portfolio.filters.web },
    { key: 'ecommerce', label: t.portfolio.filters.ecommerce },
    { key: 'app', label: t.portfolio.filters.app },
  ]

  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
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
        <div className="portfolio-grid">
          {filtered.map((p, i) => (
            <div className="portfolio-card animate-on-scroll" key={`${p.title.en}-${i}`}>
              <div className="portfolio-image">
                {p.image ? (
                  <img src={p.image} alt={p.title[lang]} className="portfolio-img" />
                ) : (
                  <div className="portfolio-placeholder" style={{ background: p.gradient }}>
                    <i className={p.icon}></i>
                  </div>
                )}
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
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
