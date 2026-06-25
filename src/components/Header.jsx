import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })
  const { lang, t, toggleLang } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">&lt;/&gt;</span>
          <span className="logo-text">Nomena</span>
        </Link>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          {isHome ? (
            <>
              <a href="#accueil" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.home}</a>
              <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
              <a href="#projet" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.projet}</a>
              <Link to="/a-propos" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.about}</Link>
              <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">{t.nav.home}</Link>
              <Link to="/a-propos" className="nav-link active">{t.nav.about}</Link>
              <Link to="/#services" className="nav-link">{t.nav.services}</Link>
              <Link to="/#projet" className="nav-link">{t.nav.projet}</Link>
              <Link to="/#contact" className="nav-link">{t.nav.contact}</Link>
            </>
          )}
        </nav>
        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <a href={isHome ? '#contact' : '/#contact'} className="btn btn-primary btn-header">
            {t.nav.contactBtn}
          </a>
        </div>
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
