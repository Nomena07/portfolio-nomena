import { useLanguage } from '../LanguageContext'
import './Testimonials.css'

const testimonials = [
  {
    fr: "Nomena a complètement transformé notre présence en ligne. Notre nouveau site vitrine a généré 60% de demandes de contact en plus dès le premier mois. Un vrai professionnel, réactif et à l'écoute.",
    en: "Nomena completely transformed our online presence. Our new website generated 60% more contact requests in the first month alone. A true professional, responsive and attentive.",
    name: "Andriamatoa David",
    role: { fr: "Directeur, Agence Immobilière Luxe", en: "Director, Luxury Real Estate Agency" },
    initials: "AD",
    gradient: "linear-gradient(135deg, #1E3A8A, #059669)"
  },
  {
    fr: "Notre boutique en ligne a vu ses ventes augmenter de 45% en seulement 3 mois après la refonte. L'expérience utilisateur est incroyable et nos clients adorent la nouvelle interface.",
    en: "Our online store saw a 45% increase in sales in just 3 months after the redesign. The user experience is incredible and our customers love the new interface.",
    name: "Fanja Rakoto",
    role: { fr: "Fondatrice, Mode Afro Boutique", en: "Founder, African Fashion Boutique" },
    initials: "FR",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)"
  },
  {
    fr: "La plateforme de réservation que Nomena a développée nous fait gagner 15 heures par semaine. L'automatisation est parfaite et le support technique est toujours disponible.",
    en: "The booking platform Nomena developed saves us 15 hours per week. The automation is perfect and technical support is always available.",
    name: "Hery Ramananarivo",
    role: { fr: "Gérant, Hôtel & Spa Royal", en: "Manager, Royal Hotel & Spa" },
    initials: "HR",
    gradient: "linear-gradient(135deg, #059669, #10B981)"
  },
  {
    fr: "En tant que photographe, j'avais besoin d'un portfolio à la hauteur de mon travail. Nomena a créé un site magnifique qui met parfaitement en valeur mes photos.",
    en: "As a photographer, I needed a portfolio that matched my work. Nomena created a beautiful website that perfectly showcases my photos.",
    name: "Mialy Rajoelina",
    role: { fr: "Photographe Professionnelle", en: "Professional Photographer" },
    initials: "MR",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)"
  }
]

export default function Testimonials() {
  const { lang, t } = useLanguage()

  return (
    <section className="section testimonials" id="temoignages">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">{t.testimonials.tag}</span>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((test, i) => (
            <div className="testimonial-card animate-on-scroll" key={i}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => <i className="fas fa-star" key={j}></i>)}
              </div>
              <p className="testimonial-text">"{test[lang]}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: test.gradient }}>
                  <span>{test.initials}</span>
                </div>
                <div className="testimonial-info">
                  <strong className="testimonial-name">{test.name}</strong>
                  <span className="testimonial-role">{test.role[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
