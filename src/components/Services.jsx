import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import Modal from './Modal'
import './Services.css'

const servicesData = [
  { icon: 'fas fa-laptop-code', color: '#1E3A8A', bg: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', features: { fr: ['Site vitrine moderne', 'Design sur-mesure', 'Responsive mobile', 'Optimisé Google'], en: ['Modern showcase site', 'Custom design', 'Mobile responsive', 'Google optimized'] } },
  { icon: 'fas fa-shopping-cart', color: '#059669', bg: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', features: { fr: ['Boutique en ligne', 'Paiement sécurisé', 'Gestion stocks', 'Panier intelligent'], en: ['Online store', 'Secure payment', 'Stock management', 'Smart cart'] } },
  { icon: 'fas fa-search', color: '#7C3AED', bg: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)', image: 'https://images.unsplash.com/photo-1573215865498-2d1b1c6c3d5f?w=400&h=300&fit=crop', features: { fr: ['Apparaître sur Google', 'Mots-clés ciblés', 'Contenu optimisé', 'Rapport mensuel'], en: ['Appear on Google', 'Targeted keywords', 'Optimized content', 'Monthly report'] } },
  { icon: 'fas fa-mobile-alt', color: '#EA580C', bg: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop', features: { fr: ['Application web', 'Interface intuitive', 'Automatisation', 'Scalable'], en: ['Web application', 'Intuitive interface', 'Automation', 'Scalable'] } },
  { icon: 'fas fa-tools', color: '#0891B2', bg: 'linear-gradient(135deg, #ECFEFF, #CFFAFE)', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop', features: { fr: ['Mises à jour sécurité', 'Sauvegarde auto', 'Monitoring 24/7', 'Support réactif'], en: ['Security updates', 'Auto backup', '24/7 monitoring', 'Reactive support'] } },
  { icon: 'fas fa-rocket', color: '#DC2626', bg: 'linear-gradient(135deg, #FEF2F2, #FECACA)', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop', features: { fr: ['Audit complet', 'Stratégie digitale', 'Conseil personnalisé', 'ROI mesuré'], en: ['Full audit', 'Digital strategy', 'Personalized advice', 'Measured ROI'] } },
  { icon: 'fas fa-share-alt', color: '#8B5CF6', bg: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop', features: { fr: ['Création de contenu', 'Planification posts', 'Gestion communautaire', 'Rapport performance'], en: ['Content creation', 'Post scheduling', 'Community management', 'Performance report'] } },
  { icon: 'fas fa-paint-brush', color: '#EC4899', bg: 'linear-gradient(135deg, #FDF2F8, #FCE7F3)', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop', features: { fr: ['Maquettes interactives', 'Design moderne', 'Prototypage rapide', 'Tests utilisateurs'], en: ['Interactive mockups', 'Modern design', 'Rapid prototyping', 'User testing'] } },
  { icon: 'fas fa-cogs', color: '#F59E0B', bg: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop', features: { fr: ['WordPress / Shopify', 'Formation incluse', 'Autonomie garantie', 'Support technique'], en: ['WordPress / Shopify', 'Training included', 'Guaranteed independence', 'Technical support'] } },
]

export default function Services() {
  const [modalIndex, setModalIndex] = useState(null)
  const { lang, t } = useLanguage()

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">{t.services.tag}</span>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <div className="service-card-new animate-on-scroll" key={i}>
              <div className="service-card-header">
                <img src={servicesData[i].image} alt={s.title} className="service-card-image" />
                <div className="service-card-icon" style={{ color: servicesData[i].color }}>
                  <i className={servicesData[i].icon}></i>
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-short">{s.shortDesc}</p>
                <p className="service-card-desc">{s.desc}</p>
                <ul className="service-card-features">
                  {servicesData[i].features[lang].map((f, fi) => (
                    <li key={fi}>
                      <i className="fas fa-check" style={{ color: servicesData[i].color }}></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="service-card-highlight" style={{ background: servicesData[i].bg, color: servicesData[i].color }}>
                  <i className="fas fa-star"></i> {s.highlight}
                </div>
                <button className="service-more-btn" onClick={() => setModalIndex(i)}>
                  {lang === 'fr' ? 'Détails' : 'Details'} <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalIndex !== null && (
        <Modal
          isOpen={modalIndex !== null}
          onClose={() => setModalIndex(null)}
          title={t.services.items[modalIndex].title}
          icon={servicesData[modalIndex].icon}
          color={servicesData[modalIndex].color}
          bg={servicesData[modalIndex].bg}
          fullscreen={!!t.services.items[modalIndex].detailedContent}
        >
          {t.services.items[modalIndex].detailedContent ? (
            <div className="modal-detailed">
              <p className="modal-intro">{t.services.items[modalIndex].detailedContent.intro}</p>

              <div className="modal-detailed-grid">
                <div className="modal-section">
                  <h4 className="modal-section-title" style={{ color: servicesData[modalIndex].color }}>
                    <i className="fas fa-check-circle"></i> {lang === 'fr' ? 'Ce que cela apporte' : 'What it brings'}
                  </h4>
                  <div className="modal-benefits">
                    {t.services.items[modalIndex].detailedContent.benefits.map((b, bi) => (
                      <div className="modal-benefit" key={bi}>
                        <span className="modal-benefit-icon" style={{ background: servicesData[modalIndex].bg, color: servicesData[modalIndex].color }}>✔</span>
                        <div>
                          <strong>{b.title}</strong>
                          <p>{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title" style={{ color: servicesData[modalIndex].color }}>
                    <i className="fas fa-box-open"></i> {lang === 'fr' ? 'Ce que comprend le service' : 'What the service includes'}
                  </h4>
                  <ul className="modal-includes">
                    {t.services.items[modalIndex].detailedContent.includes.map((item, ii) => (
                      <li key={ii}><i className="fas fa-check" style={{ color: servicesData[modalIndex].color }}></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-bottom-row">
                <div className="modal-example">
                  <strong><i className="fas fa-lightbulb" style={{ color: servicesData[modalIndex].color }}></i> {t.services.items[modalIndex].detailedContent.example.title}</strong>
                  {t.services.items[modalIndex].detailedContent.example.desc}
                </div>
                <div className="modal-summary" style={{ background: servicesData[modalIndex].bg, color: servicesData[modalIndex].color }}>
                  <i className="fas fa-star"></i> {t.services.items[modalIndex].detailedContent.example.summary}
                </div>
              </div>
            </div>
          ) : (
            <>
              <p className="modal-subtitle">{t.services.items[modalIndex].shortDesc}</p>
              <p className="modal-text">{t.services.items[modalIndex].longDesc}</p>
              <ul className="modal-features">
                {servicesData[modalIndex].features[lang].map((f, fi) => (
                  <li key={fi}>
                    <i className="fas fa-check" style={{ color: servicesData[modalIndex].color }}></i>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="modal-badge" style={{ background: servicesData[modalIndex].bg, color: servicesData[modalIndex].color }}>
                <i className="fas fa-star"></i> {t.services.items[modalIndex].highlight}
              </div>
            </>
          )}
        </Modal>
      )}
    </section>
  )
}
