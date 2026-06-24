import { useLanguage } from '../LanguageContext'
import './Process.css'

const icons = ['fas fa-comments', 'fas fa-drafting-compass', 'fas fa-code', 'fas fa-sync-alt', 'fas fa-rocket']

export default function Process() {
  const { t } = useLanguage()

  return (
    <section className="section process" id="processus">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">{t.process.tag}</span>
          <h2 className="section-title">{t.process.title}</h2>
          <p className="section-subtitle">{t.process.subtitle}</p>
        </div>
        <div className="process-timeline">
          {t.process.steps.map((s, i) => (
            <div className="process-step animate-on-scroll" key={i}>
              <div className="step-number">0{i + 1}</div>
              <div className="step-content">
                <div className="step-icon"><i className={icons[i]}></i></div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
