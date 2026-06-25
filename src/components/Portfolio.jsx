import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import Modal from './Modal'
import './Portfolio.css'

const projects = [
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Agence Immobilière Luxe', en: 'Luxury Real Estate' }, result: { fr: '+60% de demandes de contact', en: '+60% contact requests' }, icon: 'fas fa-building', gradient: 'linear-gradient(135deg, #1E3A8A, #059669)', image: `${import.meta.env.BASE_URL}immo.png`, tech: ['Python', 'Django', 'HTML', 'CSS', 'Tailwind', 'JavaScript'], desc: { fr: "Application web complète pour une agence immobilière de luxe. Backend avec gestion des biens, comptes utilisateurs, formulaire de contact intelligent et tableau de bord administrateur.", en: "Complete web application for a luxury real estate agency. Backend with property management, user accounts, smart contact form and admin dashboard." }, details: { fr: "Plateforme complète développée avec Django pour gérer les annonces immobilières de luxe. Le système permet aux administrateurs d'ajouter, modifier et supprimer des biens avec photos, descriptions et prix. Les utilisateurs peuvent créer un compte, sauvegarder leurs favoris et contacter les agents directement. Le tableau de bord montre les statistiques de visites et les demandes en temps réel.", en: "Full platform built with Django to manage luxury real estate listings. The system allows administrators to add, edit and delete properties with photos, descriptions and prices. Users can create an account, save favorites and contact agents directly. The dashboard shows visit statistics and requests in real time." } },
  { cat: 'web', category: { fr: 'Site Vitrine', en: 'Website' }, title: { fr: 'Chumet', en: 'Chumet' }, result: { fr: '+40% de visibilité locale', en: '+40% local visibility' }, icon: 'fas fa-store', gradient: 'linear-gradient(135deg, #10B981, #3B82F6)', image: `${import.meta.env.BASE_URL}chumet.png`, tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript'], desc: { fr: "Site vitrine moderne pour Chumet. Présence en ligne professionnelle avec présentation des services, galerie photos et formulaire de contact.", en: "Modern showcase website for Chumet. Professional online presence with services presentation, photo gallery and contact form." }, details: { fr: "Site vitrine responsive conçu avec Tailwind CSS pour une entreprise locale. Le site présente l'identité de la marque, les services offerts, une galerie photos optimisée et un formulaire de contact avec validation côté client. Le design est moderne, rapide et adapté à tous les écrans.", en: "Responsive showcase site built with Tailwind CSS for a local business. The site presents the brand identity, services offered, optimized photo gallery and contact form with client-side validation. The design is modern, fast and adapted to all screens." } },
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Assistant Étudiant IA', en: 'AI Student Assistant' }, result: { fr: '+70% de productivité étudiante', en: '+70% student productivity' }, icon: 'fas fa-robot', gradient: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', image: `${import.meta.env.BASE_URL}assited.png`, tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Text Mining'], desc: { fr: "Application web intelligente assistée par IA pour aider les étudiants. Planification de cours, quiz adaptatifs, aide à la rédaction et suivi de progression personnalisé.", en: "Smart AI-powered web application to help students. Course planning, adaptive quizzes, writing assistance and personalized progress tracking." }, details: { fr: "Application web intégrant des techniques de Text Mining et d'intelligence artificielle pour assister les étudiants dans leurs études. L'analyse automatique de textes permet de générer des quiz adaptatifs, d'aider à la rédaction de résumés et de personnaliser le suivi de progression. L'interface intuitive facilite la planification des cours et l'accès aux ressources.", en: "Web application integrating Text Mining and AI techniques to assist students in their studies. Automatic text analysis enables generating adaptive quizzes, helping with summary writing and customizing progress tracking. The intuitive interface makes course planning and resource access easy." } },
  { cat: 'ecommerce', category: { fr: 'E-Commerce', en: 'E-Commerce' }, title: { fr: 'Boutique Mode Afro', en: 'African Fashion Store' }, result: { fr: '+45% de ventes en 3 mois', en: '+45% sales in 3 months' }, icon: 'fas fa-store', gradient: 'linear-gradient(135deg, #7C3AED, #EC4899)', desc: { fr: "Boutique en ligne complète pour une marque de mode africaine. Catalogue produits, panier intelligent, paiement sécurisé et suivi de commandes.", en: "Complete online store for an African fashion brand. Product catalog, smart cart, secure payment and order tracking." }, details: { fr: "E-commerce complet pour une marque de mode africaine. Le catalogue présente les produits avec photos HD, tailles et couleurs. Le panier intelligent calcule les frais de livraison automatiquement. Le paiement sécurisé intègre plusieurs méthodes. Le suivi de commande en temps réel informe les clients à chaque étape.", en: "Complete e-commerce for an African fashion brand. The catalog presents products with HD photos, sizes and colors. The smart cart calculates shipping costs automatically. Secure payment integrates multiple methods. Real-time order tracking informs customers at every step." } },
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Plateforme Réservation', en: 'Booking Platform' }, result: { fr: 'Gain de 15h/semaine automatisé', en: '15h/week saved through automation' }, icon: 'fas fa-calendar-check', gradient: 'linear-gradient(135deg, #059669, #10B981)', desc: { fr: "Application de réservation en ligne pour un hôtel. Calendrier interactif, paiement en ligne, confirmation automatique par email et SMS.", en: "Online booking application for a hotel. Interactive calendar, online payment, automatic confirmation by email and SMS." }, details: { fr: "Système de réservation complet pour hôtel avec calendrier interactif montrant les disponibilités en temps réel. Les clients peuvent réserver, payer en ligne et recevoir une confirmation automatique par email et SMS. Le back-office permet de gérer les chambres, les réservations et de générer des rapports.", en: "Complete booking system for hotels with interactive calendar showing real-time availability. Customers can book, pay online and receive automatic confirmation by email and SMS. The back-office allows managing rooms, reservations and generating reports." } },
  { cat: 'web', category: { fr: 'Site Vitrine', en: 'Website' }, title: { fr: 'Restaurant Gastronomique', en: 'Gastronomic Restaurant' }, result: { fr: 'Notes Google 3.8 → 4.7', en: 'Google rating 3.8 → 4.7' }, icon: 'fas fa-utensils', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)', desc: { fr: "Site vitrine pour un restaurant gastronomique. Menu interactif, galerie photos, système de réservation de tables et avis clients intégrés.", en: "Showcase website for a gastronomic restaurant. Interactive menu, photo gallery, table reservation system and integrated customer reviews." }, details: { fr: "Site vitrine élégant pour un restaurant gastronomique. Le menu interactif présente les plats avec photos et descriptions. La galerie photos met en valeur l'ambiance et les créations du chef. Le système de réservation permet de choisir date, heure et nombre de convives. Les avis clients Google sont intégrés pour renforcer la confiance.", en: "Elegant showcase site for a gastronomic restaurant. The interactive menu presents dishes with photos and descriptions. The photo gallery highlights the atmosphere and chef's creations. The booking system allows choosing date, time and number of guests. Google customer reviews are integrated to build trust." } },
  { cat: 'ecommerce', category: { fr: 'E-Commerce', en: 'E-Commerce' }, title: { fr: 'Bijoux & Accessoires', en: 'Jewelry & Accessories' }, result: { fr: '2000+ followers Instagram gagnés', en: '2000+ Instagram followers gained' }, icon: 'fas fa-gem', gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', desc: { fr: "Boutique en ligne de bijoux artisanaux avec catalogue élégant, zoom sur les produits et intégration Instagram pour booster les ventes.", en: "Handmade jewelry online store with elegant catalog, product zoom and Instagram integration to boost sales." }, details: { fr: "Boutique en ligne de bijoux artisanaux avec un design élégant et raffiné. Le catalogue permet de zoomer sur chaque produit pour voir les détails. L'intégration Instagram affiche les dernières publications et booste l'engagement. Le système de favoris et les notifications de disponibilité fidélisent les clients.", en: "Handmade jewelry online store with elegant and refined design. The catalog allows zooming on each product to see details. Instagram integration displays latest posts and boosts engagement. The favorites system and availability notifications retain customers." } },
  { cat: 'app', category: { fr: 'Application Web', en: 'Web App' }, title: { fr: 'Plateforme E-Learning', en: 'E-Learning Platform' }, result: { fr: '500+ étudiants actifs en 1 mois', en: '500+ active students in 1 month' }, icon: 'fas fa-graduation-cap', gradient: 'linear-gradient(135deg, #14B8A6, #06B6D4)', desc: { fr: "Plateforme de cours en ligne avec vidéos, quiz interactifs, suivi de progression et certificats automatiques.", en: "Online course platform with videos, interactive quizzes, progress tracking and automatic certificates." }, details: { fr: "Plateforme e-learning complète avec hébergement de vidéos, quiz interactifs après chaque module, barre de progression personnalisée et génération automatique de certificats. Le tableau de bord enseignant permet de suivre les résultats des étudiants et de créer de nouveaux cours facilement.", en: "Complete e-learning platform with video hosting, interactive quizzes after each module, personalized progress bar and automatic certificate generation. The teacher dashboard allows tracking student results and creating new courses easily." } },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const [modalProject, setModalProject] = useState(null)
  const { lang, t } = useLanguage()

  const filters = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'web', label: t.portfolio.filters.web },
    { key: 'ecommerce', label: t.portfolio.filters.ecommerce },
    { key: 'app', label: t.portfolio.filters.app },
  ]

  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

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
                {p.tech && (
                  <div className="portfolio-tech">
                    {p.tech.map((t, ti) => (
                      <span className="portfolio-tech-tag" key={ti}>{t}</span>
                    ))}
                  </div>
                )}
                <button className="portfolio-details-btn" onClick={() => setModalProject(p)}>
                  <i className="fas fa-info-circle"></i>
                  {lang === 'fr' ? 'Détails' : 'Details'}
                </button>
              </div>
            </div>
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
          <div className="modal-tech">
            {modalProject.tech.map((t, ti) => (
              <span className="modal-tech-tag" key={ti} style={{ background: 'rgba(30,58,138,0.08)', color: 'var(--primary)' }}>{t}</span>
            ))}
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
