import { useEffect, useRef } from 'react'
import { useLanguage } from '../LanguageContext'
import './Hero.css'

export default function Hero() {
  const countersRef = useRef([])
  const { lang, t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = parseInt(el.getAttribute('data-target'))
          const duration = 2000
          const step = target / (duration / 16)
          let current = 0
          const update = () => {
            current += step
            if (current < target) {
              el.textContent = Math.floor(current)
              requestAnimationFrame(update)
            } else {
              el.textContent = target
            }
          }
          update()
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.5 })

    countersRef.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="accueil">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll">{t.hero.badge}</div>
          <h1 className="hero-title animate-on-scroll">
            {t.hero.title1}<span className="text-gradient">{t.hero.title2}</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            {t.hero.subtitle}
          </p>
          <div className="hero-cta animate-on-scroll">
            <a href="#contact" className="btn btn-primary btn-lg">
              <i className="fas fa-paper-plane"></i> {t.hero.cta1}
            </a>
            <a href="#projet" className="btn btn-secondary btn-lg">
              <i className="fas fa-eye"></i> {t.hero.cta2}
            </a>
          </div>
          <div className="hero-stats animate-on-scroll">
            <div className="stat">
              <span className="stat-number" data-target="50" ref={el => countersRef.current[0] = el}>0</span>
              <span className="stat-plus">+</span>
              <span className="stat-label">{t.hero.stat1Label}</span>
            </div>
            <div className="stat">
              <span className="stat-number" data-target="5" ref={el => countersRef.current[1] = el}>0</span>
              <span className="stat-plus">+</span>
              <span className="stat-label">{t.hero.stat2Label}</span>
            </div>
            <div className="stat">
              <span className="stat-number" data-target="98" ref={el => countersRef.current[2] = el}>0</span>
              <span className="stat-plus">%</span>
              <span className="stat-label">{t.hero.stat3Label}</span>
            </div>
          </div>
        </div>
        <div className="hero-visual animate-on-scroll">
          <div className="hero-image-wrapper">
            <div className="hero-code-block">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-title">nomena.dev</span>
              </div>
              <pre className="code-content"><code><span className="code-keyword">const</span> <span className="code-var">projet</span> = {'{\n'}
  <span className="code-prop">client</span>: <span className="code-string">{lang === 'fr' ? '"Votre entreprise"' : '"Your business"'}</span>,{'\n'}
  <span className="code-prop">objectif</span>: <span className="code-string">{lang === 'fr' ? '"Convertir"' : '"Convert"'}</span>,{'\n'}
  <span className="code-prop">resultat</span>: <span className="code-string">"+45% ventes"</span>,{'\n'}
  <span className="code-prop">satisfaction</span>: <span className="code-num">100</span> <span className="code-comment">// ✓</span>{'\n'}
{'}'};{'\n\n'}
<span className="code-keyword">function</span> <span className="code-fn">lancerProjet</span>() {'{\n'}
  <span className="code-keyword">return</span> <span className="code-string">{lang === 'fr' ? '"Succès !"' : '"Success!"'}</span>;{'\n'}
{'}'}</code></pre>
            </div>
            <div className="hero-floating-card card-1">
              <i className="fas fa-rocket"></i>
              <span>{lang === 'fr' ? 'Performance Optimale' : 'Optimal Performance'}</span>
            </div>
            <div className="hero-floating-card card-2">
              <i className="fas fa-mobile-alt"></i>
              <span>100% Responsive</span>
            </div>
            <div className="hero-floating-card card-3">
              <i className="fas fa-chart-line"></i>
              <span>SEO {lang === 'fr' ? 'Optimisé' : 'Optimized'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <a href="#services"><i className="fas fa-chevron-down"></i></a>
      </div>
    </section>
  )
}
