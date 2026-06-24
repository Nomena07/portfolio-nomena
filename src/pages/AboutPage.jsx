import { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollAnimations from '../components/ScrollAnimations'
import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import './AboutPage.css'

const skills = {
  fr: [
    { category: 'Frontend', icon: 'fa-desktop', items: [
      { name: 'HTML5', level: 95, icon: 'fab fa-html5', desc: 'Langage de balisage pour structurer le contenu des pages web sémantiques et accessibles.' },
      { name: 'CSS3', level: 95, icon: 'fab fa-css3-alt', desc: 'Langage de style pour concevoir des mises en page modernes, responsive et animées.' },
      { name: 'JavaScript (ES6+)', level: 90, icon: 'fab fa-js-square', desc: 'Langage de programmation polyvalent pour rendre les sites web interactifs et dynamiques côté client.' },
      { name: 'React.js', level: 85, icon: 'fab fa-react', desc: 'Bibliothèque JavaScript pour construire des interfaces utilisateur réactives et performantes par composants.' },
      { name: 'Vue.js', level: 75, icon: 'fab fa-vuejs', desc: 'Framework progressif pour créer des interfaces web intuitives avec une courbe d\'apprentissage douce.' },
      { name: 'TypeScript', level: 70, icon: 'fas fa-code', desc: 'Sur-ensemble typé de JavaScript qui améliore la fiabilité et la maintenance du code.' },
      { name: 'Tailwind CSS', level: 90, icon: 'fas fa-wind', desc: 'Framework CSS utility-first pour un développement d\'interfaces rapide et maintenable.' },
      { name: 'SASS', level: 85, icon: 'fas fa-sass', desc: 'Préprocesseur CSS qui ajoute des variables, des mixins et une logique au style.' },
    ]},
    { category: 'Backend', icon: 'fa-server', items: [
      { name: 'Node.js / Express', level: 85, icon: 'fab fa-node-js', desc: 'Runtime JavaScript côté serveur pour créer des API rapides et des applications réseau performantes.' },
      { name: 'PHP', level: 80, icon: 'fab fa-php', desc: 'Langage de script côté serveur largement utilisé pour le développement web dynamique.' },
      { name: 'Laravel', level: 80, icon: 'fab fa-laravel', desc: 'Framework PHP élégant et puissant pour développer des applications web robustes et sécurisées.' },
      { name: 'Python / Django', level: 70, icon: 'fab fa-python', desc: 'Langage polyvalent et framework web pour des projets nécessitant traitement de données et IA.' },
      { name: 'REST API / GraphQL', level: 85, icon: 'fas fa-project-diagram', desc: 'Architectures de communication pour connecter frontend et backend de manière efficace.' },
      { name: 'MySQL', level: 80, icon: 'fas fa-database', desc: 'Système de gestion de bases de données relationnelles open source, fiable et performant.' },
      { name: 'PostgreSQL', level: 75, icon: 'fas fa-database', desc: 'Base de données relationnelle avancée pour des projets complexes et des données massives.' },
      { name: 'MongoDB', level: 75, icon: 'fas fa-leaf', desc: 'Base de données NoSQL flexible pour des projets nécessitant une grande scalabilité.' },
    ]},
    { category: 'Outils & DevOps', icon: 'fa-tools', items: [
      { name: 'Git / GitHub', level: 90, icon: 'fab fa-git-alt', desc: 'Outil de versionnement du code pour collaborer efficacement et tracer l\'historique des modifications.' },
      { name: 'Docker', level: 70, icon: 'fab fa-docker', desc: 'Plateforme de conteneurisation pour déployer des applications de manière cohérente et portable.' },
      { name: 'Linux / Bash', level: 80, icon: 'fab fa-linux', desc: 'Système d\'exploitation serveur et shell pour automatiser les tâches et gérer les infrastructures.' },
      { name: 'VS Code', level: 95, icon: 'fas fa-laptop-code', desc: 'Éditeur de code moderne et léger avec des milliers d\'extensions pour un développement productif.' },
      { name: 'CI/CD', level: 65, icon: 'fas fa-sync-alt', desc: 'Intégration et déploiement continus pour automatiser les tests et la mise en production.' },
    ]},
    { category: 'Plateformes', icon: 'fa-layer-group', items: [
      { name: 'WordPress', level: 85, icon: 'fab fa-wordpress', desc: 'CMS le plus populaire au monde pour créer des sites web, blogs et e-commerces facilement.' },
      { name: 'Shopify', level: 70, icon: 'fab fa-shopify', desc: 'Plateforme e-commerce complète pour créer et gérer une boutique en ligne professionnelle.' },
      { name: 'Figma', level: 75, icon: 'fab fa-figma', desc: 'Outil de design UI/UX collaboratif pour créer des maquettes et prototypes d\'interfaces.' },
      { name: 'Netlify / Vercel', level: 80, icon: 'fas fa-cloud', desc: 'Plateformes de déploiement et hébergement modernes pour sites statiques et applications.' },
    ]},
  ],
  en: [
    { category: 'Frontend', icon: 'fa-desktop', items: [
      { name: 'HTML5', level: 95, icon: 'fab fa-html5', desc: 'Markup language for structuring semantic and accessible web page content.' },
      { name: 'CSS3', level: 95, icon: 'fab fa-css3-alt', desc: 'Style language for designing modern, responsive and animated layouts.' },
      { name: 'JavaScript (ES6+)', level: 90, icon: 'fab fa-js-square', desc: 'Versatile programming language to make websites interactive and dynamic on the client side.' },
      { name: 'React.js', level: 85, icon: 'fab fa-react', desc: 'JavaScript library for building reactive and performant user interfaces with components.' },
      { name: 'Vue.js', level: 75, icon: 'fab fa-vuejs', desc: 'Progressive framework for creating intuitive web interfaces with a gentle learning curve.' },
      { name: 'TypeScript', level: 70, icon: 'fas fa-code', desc: 'Typed superset of JavaScript that improves code reliability and maintainability.' },
      { name: 'Tailwind CSS', level: 90, icon: 'fas fa-wind', desc: 'Utility-first CSS framework for fast and maintainable interface development.' },
      { name: 'SASS', level: 85, icon: 'fas fa-sass', desc: 'CSS preprocessor that adds variables, mixins and logic to styles.' },
    ]},
    { category: 'Backend', icon: 'fa-server', items: [
      { name: 'Node.js / Express', level: 85, icon: 'fab fa-node-js', desc: 'Server-side JavaScript runtime for building fast APIs and performant network applications.' },
      { name: 'PHP', level: 80, icon: 'fab fa-php', desc: 'Widely-used server-side scripting language for dynamic web development.' },
      { name: 'Laravel', level: 80, icon: 'fab fa-laravel', desc: 'Elegant and powerful PHP framework for building robust and secure web applications.' },
      { name: 'Python / Django', level: 70, icon: 'fab fa-python', desc: 'Versatile language and web framework for projects requiring data processing and AI.' },
      { name: 'REST API / GraphQL', level: 85, icon: 'fas fa-project-diagram', desc: 'Communication architectures to connect frontend and backend efficiently.' },
      { name: 'MySQL', level: 80, icon: 'fas fa-database', desc: 'Open source relational database management system, reliable and performant.' },
      { name: 'PostgreSQL', level: 75, icon: 'fas fa-database', desc: 'Advanced relational database for complex projects and massive data.' },
      { name: 'MongoDB', level: 75, icon: 'fas fa-leaf', desc: 'Flexible NoSQL database for projects requiring high scalability.' },
    ]},
    { category: 'Outils & DevOps', icon: 'fa-tools', items: [
      { name: 'Git / GitHub', level: 90, icon: 'fab fa-git-alt', desc: 'Code versioning tool for effective collaboration and change history tracking.' },
      { name: 'Docker', level: 70, icon: 'fab fa-docker', desc: 'Containerization platform for deploying applications consistently and portably.' },
      { name: 'Linux / Bash', level: 80, icon: 'fab fa-linux', desc: 'Server operating system and shell for automating tasks and managing infrastructure.' },
      { name: 'VS Code', level: 95, icon: 'fas fa-laptop-code', desc: 'Modern and lightweight code editor with thousands of extensions for productive development.' },
      { name: 'CI/CD', level: 65, icon: 'fas fa-sync-alt', desc: 'Continuous integration and deployment to automate testing and production deployment.' },
    ]},
    { category: 'Plateformes', icon: 'fa-layer-group', items: [
      { name: 'WordPress', level: 85, icon: 'fab fa-wordpress', desc: 'World\'s most popular CMS for easily creating websites, blogs and e-commerce stores.' },
      { name: 'Shopify', level: 70, icon: 'fab fa-shopify', desc: 'Complete e-commerce platform for creating and managing a professional online store.' },
      { name: 'Figma', level: 75, icon: 'fab fa-figma', desc: 'Collaborative UI/UX design tool for creating interface mockups and prototypes.' },
      { name: 'Netlify / Vercel', level: 80, icon: 'fas fa-cloud', desc: 'Modern deployment and hosting platforms for static sites and applications.' },
    ]},
  ],
}

const experiences = {
  fr: [
    { year: '2023 - Présent', title: 'Développeur Web Freelance', company: 'Indépendant', desc: 'Création de sites web et applications sur-mesure pour clients internationaux.' },
    { year: '2021 - 2023', title: 'Développeur Full-Stack', company: 'Tech Agency', desc: 'Développement d\'applications web complexes et gestion de projets digitaux.' },
    { year: '2020 - 2021', title: 'Développeur Frontend', company: 'Startup Digitale', desc: 'Intégration d\'interfaces modernes et responsive pour applications SaaS.' },
  ],
  en: [
    { year: '2023 - Present', title: 'Freelance Web Developer', company: 'Independent', desc: 'Creating custom websites and applications for international clients.' },
    { year: '2021 - 2023', title: 'Full-Stack Developer', company: 'Tech Agency', desc: 'Development of complex web applications and digital project management.' },
    { year: '2020 - 2021', title: 'Frontend Developer', company: 'Digital Startup', desc: 'Integration of modern and responsive interfaces for SaaS applications.' },
  ],
}

export default function AboutPage() {
  const scrollRefs = useRef([])
  const { lang, t } = useLanguage()

  const scrollToCard = (groupIndex, cardIndex) => {
    const container = scrollRefs.current[groupIndex]
    if (!container) return
    const card = container.children[cardIndex]
    if (!card) return
    const containerWidth = container.offsetWidth
    const cardWidth = card.offsetWidth
    const scrollLeft = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2)
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }

  const currentSkills = skills[lang]
  const currentExp = experiences[lang]

  return (
    <>
      <ScrollAnimations />
      <Header />

      {/* HERO ABOUT */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-content animate-on-scroll">
            <span className="section-tag">{t.about.tag}</span>
            <h1 className="about-hero-title">
              {t.about.title1}<span className="text-gradient">{t.about.title2}</span>{t.about.title3}
            </h1>
            <p className="about-hero-text">
              {t.about.text}
            </p>
            <div className="about-hero-stats">
              <div className="about-stat-item">
                <span className="about-stat-num">50+</span>
                <span className="about-stat-label">{t.about.stats.projects}</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-num">35+</span>
                <span className="about-stat-label">{t.about.stats.clients}</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-num">5+</span>
                <span className="about-stat-label">{t.about.stats.years}</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-num">15+</span>
                <span className="about-stat-label">{t.about.stats.techs}</span>
              </div>
            </div>
          </div>
          <div className="about-hero-visual animate-on-scroll">
            <div className="about-avatar-wrapper">
              <div className="about-avatar">
                <img src="/nomena.jpg" alt="Nomena - Développeur Web" className="about-photo" />
              </div>
              <div className="about-avatar-ring"></div>
            </div>
            <a href="/CV_Tsanta_FS.pdf" download className="btn btn-primary cv-download-btn">
              <i className="fas fa-download"></i> {t.about.downloadCv}
            </a>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="section skills-section" id="competences">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">{t.about.skillsTag}</span>
            <h2 className="section-title">{t.about.skillsTitle}</h2>
            <p className="section-subtitle">{t.about.skillsSubtitle}</p>
          </div>
          <div className="skills-grid">
            {currentSkills.map((group, gi) => (
              <div className="skill-group animate-on-scroll" key={gi}>
                <h3 className="skill-group-title">
                  <i className={`fas ${group.icon}`}></i>
                  {group.category}
                </h3>
                <div className="skill-scroll" ref={el => scrollRefs.current[gi] = el}>
                  {group.items.map((skill, si) => (
                    <div className="product-card" key={si} onClick={() => scrollToCard(gi, si)}>
                      <div className="product-image">
                        <i className={skill.icon}></i>
                        <span className="product-badge">{skill.level}%</span>
                      </div>
                      <div className="product-info">
                        <h4 className="product-name">{skill.name}</h4>
                        <p className="product-card-desc">{skill.desc}</p>
                        <div className="product-footer">
                          <div className="product-level">
                            <div className="product-level-bar">
                              <div className="product-level-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                            <span className="product-level-label">{t.about.mastery} {skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPÉRIENCES */}
      <section className="section experience-section" id="experience">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">{t.about.expTag}</span>
            <h2 className="section-title">{t.about.expTitle}</h2>
            <p className="section-subtitle">{t.about.expSubtitle}</p>
          </div>
          <div className="experience-timeline">
            {currentExp.map((exp, i) => (
              <div className="experience-item animate-on-scroll" key={i}>
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <span className="experience-year">{exp.year}</span>
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-company">{exp.company}</span>
                  <p className="experience-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container">
          <div className="about-cta-card animate-on-scroll">
            <h2>{t.about.ctaTitle}</h2>
            <p>{t.about.ctaDesc}</p>
            <div className="about-cta-btns">
              <a href="/#contact" className="btn btn-primary btn-lg">
                <i className="fas fa-paper-plane"></i> {t.about.ctaContact}
              </a>
              <Link to="/" className="btn btn-secondary btn-lg">
                <i className="fas fa-arrow-left"></i> {t.about.ctaBack}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
