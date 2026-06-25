import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import './Footer.css'

export default function Footer() {
  const { lang, t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-icon">&lt;/&gt;</span>
            <span className="logo-text">Nomena</span>
          </Link>
          <p className="footer-desc">{t.footer.desc}</p>
        </div>
        <div className="footer-links">
          <h4 className="footer-title">{t.footer.nav}</h4>
          <Link to="/">{t.nav.home}</Link>
          <a href="/#services">{t.nav.services}</a>
          <a href="/#projet">{t.nav.projet}</a>
          <Link to="/a-propos">{t.nav.about}</Link>
          <a href="/#contact">{t.nav.contact}</a>
        </div>
        <div className="footer-links">
          <h4 className="footer-title">{t.footer.services}</h4>
          <a href="/#services">{lang === 'fr' ? 'Sites Vitrine' : 'Websites'}</a>
          <a href="/#services">E-Commerce</a>
          <a href="/#services">{lang === 'fr' ? 'Applications Web' : 'Web Apps'}</a>
          <a href="/#services">SEO</a>
          <a href="/#services">{lang === 'fr' ? 'Maintenance' : 'Maintenance'}</a>
        </div>
        <div className="footer-links">
          <h4 className="footer-title">{t.footer.contact}</h4>
          <a href="mailto:tsantanomena7049@gmail.com">tsantanomena7049@gmail.com</a>
          <a href="tel:+261388451402">038 845 1402</a>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/tsanta-ravelonjanahary" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Nomena07" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2025 Nomena. {t.footer.rights}</p>
          <div className="footer-legal">
            <a href="#">{t.footer.legal}</a>
            <a href="#">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
