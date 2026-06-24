import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nom || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setForm({ nom: '', email: '', telephone: '', service: '', message: '' })
      }, 3000)
    }, 1500)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">{t.contact.tag}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>
        <div className="contact-grid">
          <div className="contact-form-wrapper animate-on-scroll">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nom">{t.contact.form.name}</label>
                <input type="text" id="nom" name="nom" placeholder={t.contact.form.namePh} value={form.nom} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t.contact.form.email}</label>
                  <input type="email" id="email" name="email" placeholder={t.contact.form.emailPh} value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone">{t.contact.form.phone}</label>
                  <input type="tel" id="telephone" name="telephone" placeholder={t.contact.form.phonePh} value={form.telephone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">{t.contact.form.service}</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  {t.contact.form.serviceOptions.map((opt, i) => (
                    <option key={i} value={i === 0 ? '' : opt.toLowerCase().replace(/\s/g, '-')}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.contact.form.message}</label>
                <textarea id="message" name="message" rows="5" placeholder={t.contact.form.messagePh} value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className={`btn btn-primary btn-lg btn-full ${status === 'sending' ? 'sending' : ''} ${status === 'sent' ? 'sent' : ''}`} disabled={status === 'sending'}>
                {status === 'sending' && <><i className="fas fa-spinner fa-spin"></i> {t.contact.form.sending}</>}
                {status === 'sent' && <><i className="fas fa-check"></i> {t.contact.form.sent}</>}
                {status === 'idle' && <><i className="fas fa-paper-plane"></i> {t.contact.form.submit}</>}
              </button>
            </form>
          </div>
          <div className="contact-info animate-on-scroll">
            <div className="contact-info-card">
              <h3 className="contact-info-title">{t.contact.otherMethods}</h3>
              <div className="contact-methods">
                <a href="mailto:tsantanomena7049@gmail.com" className="contact-method">
                  <div className="contact-method-icon"><i className="fas fa-envelope"></i></div>
                  <div className="contact-method-info">
                    <span className="contact-method-label">{t.contact.emailLabel}</span>
                    <span className="contact-method-value">tsantanomena7049@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+261388451402" className="contact-method">
                  <div className="contact-method-icon"><i className="fas fa-phone"></i></div>
                  <div className="contact-method-info">
                    <span className="contact-method-label">{t.contact.phoneLabel}</span>
                    <span className="contact-method-value">038 845 1402 / 033 491 6992</span>
                  </div>
                </a>
                <a href="https://wa.me/261334916992" className="contact-method" target="_blank" rel="noopener noreferrer">
                  <div className="contact-method-icon whatsapp"><i className="fab fa-whatsapp"></i></div>
                  <div className="contact-method-info">
                    <span className="contact-method-label">WhatsApp</span>
                    <span className="contact-method-value">{t.contact.whatsapp}</span>
                  </div>
                </a>
              </div>
              <div className="contact-social">
                <h4 className="social-title">{t.contact.followMe}</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/tsanta-ravelonjanahary" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/Nomena07" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                  <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="contact-guarantee">
              <i className="fas fa-shield-alt"></i>
              <div>
                <strong>{t.contact.guarantee}</strong>
                <p>{t.contact.guaranteeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
