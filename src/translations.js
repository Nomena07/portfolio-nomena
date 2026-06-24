const translations = {
  fr: {
    // NAV
    nav: {
      home: 'Accueil',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'À propos',
      contact: 'Contact',
      contactBtn: 'Me contacter',
    },
    // HERO
    hero: {
      badge: 'Développeur Web Freelance',
      title1: 'Je crée des sites web qui ',
      title2: 'transforment vos visiteurs en clients',
      subtitle: 'Pour les entrepreneurs et entreprises ambitieuses qui veulent une présence en ligne moderne, performante et qui convertit.',
      cta1: 'Demander un devis gratuit',
      cta2: 'Voir mes réalisations',
      stat1Label: 'Projets livrés',
      stat2Label: 'Années d\'expérience',
      stat3Label: 'Clients satisfaits',
    },
    // SERVICES
    services: {
      tag: 'Ce que je propose',
      title: 'Mes services',
      subtitle: 'Des solutions web complètes pour propulser votre business et dominer votre marché en ligne.',
      items: [
        { title: 'Sites Web Sur-Mesure', shortDesc: 'Je crée votre site internet', desc: 'Création de sites vitrines et corporate modernes, rapides et optimisés pour convertir vos visiteurs en clients fidèles.', longDesc: "Vous voulez un site internet ? Je le crée pour vous ! C'est comme construire une belle maison sur internet. Les gens peuvent la voir, découvrir ce que vous vendez, et vous contacter facilement. Tout est beau, rapide et fonctionne parfaitement sur téléphone et ordinateur.", highlight: 'Design unique & responsive', emoji: '💻', detailedContent: {
            intro: "Un site web sur mesure est un site créé spécialement pour votre activité, selon vos besoins et vos objectifs. Ce n'est pas un modèle générique : tout est pensé pour votre entreprise.",
            benefits: [
              { title: 'Une présence professionnelle en ligne', desc: 'Vos clients peuvent vous trouver facilement sur internet et découvrir vos services.' },
              { title: 'Un site adapté à votre activité', desc: 'Que vous soyez restaurant, boutique, freelance ou entreprise, le site est conçu selon votre métier.' },
              { title: 'Plus de visibilité', desc: 'Un bon site aide à attirer plus de clients grâce au référencement sur Google.' },
              { title: 'Disponible 24h/24', desc: 'Vos informations, produits ou services restent accessibles à tout moment.' },
              { title: 'Une image de confiance', desc: 'Un site propre et moderne donne plus de crédibilité à votre entreprise.' },
            ],
            includes: ['Design personnalisé', 'Site compatible téléphone, tablette et ordinateur', 'Formulaire de contact', 'Intégration de vos services ou produits', 'Optimisation de vitesse', 'Référencement de base (SEO)', 'Sécurisation du site', 'Maintenance si nécessaire'],
            example: { title: 'Exemple simple', desc: 'Si vous avez une boutique, votre site peut permettre de : montrer vos produits, afficher vos prix, recevoir des commandes, être contacté rapidement.', summary: 'Un site web sur mesure vous aide à développer votre activité, gagner du temps et toucher plus de clients.' }
          } },
        { title: 'E-Commerce', shortDesc: 'Je crée votre boutique en ligne', desc: 'Boutiques en ligne performantes avec paiement sécurisé, gestion des stocks et expérience d\'achat fluide.', longDesc: "Vous voulez vendre des choses sur internet ? C'est comme ouvrir un magasin, mais sur internet ! Les gens peuvent regarder vos produits, les mettre dans un panier, payer en ligne de façon sécurisée, et recevoir leurs achats chez eux. Je m'occupe de tout : photos, prix, paiement, livraison.", highlight: '+30% de conversions en moyenne', emoji: '🛒', detailedContent: {
            intro: "Un site e-commerce est une boutique en ligne qui permet à vos clients d'acheter vos produits ou services directement sur internet, à tout moment. Contrairement à une boutique physique, votre magasin reste ouvert 24h/24 et 7j/7.",
            benefits: [
              { title: 'Vendre partout', desc: 'Vos clients peuvent commander depuis n\'importe où.' },
              { title: 'Augmenter vos ventes', desc: 'Plus de visibilité signifie plus d\'opportunités de vente.' },
              { title: 'Gestion simple des produits', desc: 'Ajouter, modifier ou supprimer vos produits facilement.' },
              { title: 'Paiement en ligne sécurisé', desc: 'Intégration de solutions comme PayPal ou Stripe.' },
              { title: 'Suivi des commandes', desc: 'Voir les commandes, paiements et livraisons en temps réel.' },
            ],
            includes: ['Design personnalisé selon votre marque', 'Catalogue produits', 'Panier d\'achat', 'Paiement en ligne', 'Gestion de stock', 'Gestion des commandes', 'Espace client', 'Livraison / frais de transport', 'Promotions et coupons', 'Site adapté mobile', 'Sécurité et sauvegarde'],
            example: { title: 'Exemple simple', desc: 'Si vous vendez des vêtements, votre site permet de : afficher vos articles avec photos, choisir taille et couleur, payer en ligne, suivre la livraison.', summary: 'Un site e-commerce transforme votre activité en boutique accessible partout, à tout moment, pour vendre plus facilement.' }
          } },
        { title: 'SEO & Référencement', shortDesc: 'Je vous mets en haut de Google', desc: 'Optimisation pour les moteurs de recherche afin que votre site soit trouvé en tête de Google par vos clients idéaux.', longDesc: "Quand quelqu'un cherche \"restaurant\" ou \"vêtements\" sur Google, vous voulez apparaître en premier, n'est-ce pas ? Je fais en sorte que votre site soit visible tout en haut de Google. C'est comme avoir le meilleur emplacement dans la rue principale de votre ville.", highlight: 'Page 1 Google garanti', emoji: '🔍', detailedContent: {
            intro: "Le SEO (Search Engine Optimization), ou référencement naturel, consiste à améliorer votre site pour qu'il apparaisse plus facilement dans les résultats de recherche de Google. En termes simples : si quelqu'un cherche vos services sur internet, le SEO aide votre site à être trouvé plus rapidement.",
            benefits: [
              { title: 'Plus de visibilité', desc: 'Votre entreprise apparaît devant plus de clients potentiels.' },
              { title: 'Plus de visiteurs', desc: 'Un meilleur classement attire plus de trafic vers votre site.' },
              { title: 'Plus de crédibilité', desc: 'Les utilisateurs font souvent plus confiance aux sites bien positionnés.' },
              { title: 'Plus de clients sans publicité', desc: 'Le référencement naturel peut générer des clients sans payer constamment des annonces.' },
            ],
            includes: ['Optimisation des titres et descriptions', 'Amélioration de la vitesse du site', 'Optimisation mobile', 'Choix des bons mots-clés', 'Structure claire des pages', 'Optimisation des images', 'Référencement local', 'Création de contenu optimisé', 'Suivi des performances'],
            example: { title: 'Exemple simple', desc: 'Si vous avez un restaurant et qu\'un client cherche "restaurant à Antananarivo", un bon SEO augmente les chances que votre site apparaisse parmi les premiers résultats.', summary: 'Le SEO aide votre entreprise à être visible sur internet, attirer plus de visiteurs et obtenir plus de clients naturellement.' }
          } },
        { title: 'Applications Web', shortDesc: 'Je crée des outils sur-mesure', desc: 'Applications web interactives et intuitives pour automatiser vos processus et booster votre productivité.', longDesc: "Vous avez une idée d'outil spécial ? Je le crée pour vous ! C'est comme fabriquer un jouet parfaitement adapté à vos besoins. Réservation de rendez-vous, gestion de clients, suivi de ventes... Tout peut être automatisé pour vous faire gagner du temps.", highlight: 'Sur-mesure & scalable', emoji: '⚡', detailedContent: {
            intro: "Une application web est une plateforme accessible depuis un navigateur (téléphone, tablette ou ordinateur) pour réaliser des actions plus avancées qu'un simple site web. Si besoin, elle peut aussi être transformée en APK Android pour être installée directement sur un téléphone. La différence simple : un site web présente des informations, une application web permet d'interagir, gérer et automatiser.",
            benefits: [
              { title: 'Automatiser votre activité', desc: 'Gérer vos clients, commandes ou réservations plus facilement.' },
              { title: 'Accès partout', desc: 'Disponible sur téléphone, tablette et ordinateur.' },
              { title: 'Gain de temps', desc: 'Réduit les tâches manuelles.' },
              { title: 'Gestion centralisée', desc: 'Toutes les données sont regroupées dans un seul système.' },
            ],
            includes: ['Interface personnalisée', 'Tableau de bord', 'Gestion utilisateurs', 'Base de données', 'Notifications', 'Sécurité des accès', 'Sauvegarde des données', 'Version mobile (APK si nécessaire)'],
            example: { title: 'Exemples concrets', desc: 'Pour un restaurant : gestion des commandes, réservations, suivi des livraisons. Pour une école : gestion des étudiants, notes, présences. Pour une entreprise : gestion clients, factures, stock.', summary: 'Une application web aide à mieux organiser, automatiser et développer votre activité avec un outil adapté à vos besoins.' }
          } },
        { title: 'Maintenance & Support', shortDesc: 'Je veille sur votre site 24/7', desc: 'Support technique continu, mises à jour de sécurité et optimisation pour garder votre site performant 24/7.', longDesc: "Une fois votre site en ligne, je m'assure qu'il fonctionne toujours parfaitement. C'est comme avoir un gardien pour votre maison internet. Mises à jour de sécurité, sauvegardes, réparation si besoin... Vous n'avez rien à faire, je m'occupe de tout !", highlight: 'Disponible 7j/7', emoji: '🛡️', detailedContent: {
            intro: "La maintenance et le support technique permettent de garder votre site web, application ou système informatique en bon état de fonctionnement. Cela signifie corriger les problèmes, améliorer les performances et assurer la sécurité de votre plateforme.",
            benefits: [
              { title: 'Correction rapide des problèmes', desc: 'En cas de bug ou d\'erreur, une intervention rapide évite les interruptions.' },
              { title: 'Mises à jour régulières', desc: 'Votre site ou application reste moderne, stable et sécurisé.' },
              { title: 'Sécurité renforcée', desc: 'Protection contre les bugs, attaques et pertes de données.' },
              { title: 'Sauvegarde des données', desc: 'Vos informations importantes sont protégées.' },
              { title: 'Assistance en cas de besoin', desc: 'Support technique pour répondre aux questions ou résoudre des difficultés.' },
            ],
            includes: ['Correction de bugs', 'Mise à jour du site ou de l\'application', 'Surveillance des performances', 'Sauvegardes régulières', 'Renforcement de la sécurité', 'Assistance technique', 'Optimisation de vitesse', 'Vérification du bon fonctionnement'],
            example: { title: 'Exemple simple', desc: 'Si votre site ne fonctionne plus, devient lent ou rencontre un problème, le service de maintenance permet de le remettre en état rapidement pour éviter de perdre des clients.', summary: 'La maintenance garantit que votre site ou application reste fonctionnel, sécurisé et performant dans le temps.' }
          } },
        { title: 'Conseil & Stratégie', shortDesc: 'Je vous guide vers le succès', desc: 'Audit de votre présence en ligne et stratégie digitale pour maximiser votre retour sur investissement.', longDesc: "Vous ne savez pas par où commencer ? Je fais un bilan complet de votre présence sur internet et je vous donne un plan clair pour attirer plus de clients. C'est comme avoir un guide-expert qui vous montre le chemin le plus court vers le succès.", highlight: 'ROI mesurable', emoji: '🎯', detailedContent: {
            intro: "Le conseil et la stratégie digitale consistent à vous accompagner pour choisir les meilleures solutions numériques afin de développer votre activité. L'objectif n'est pas seulement de créer un site ou une application, mais de définir une stratégie efficace pour attirer des clients, améliorer votre image et augmenter vos résultats.",
            benefits: [
              { title: 'Choisir la bonne solution', desc: 'Site vitrine, e-commerce, application web ou automatisation selon vos besoins.' },
              { title: 'Développer votre visibilité', desc: 'Mettre en place une stratégie pour être plus visible sur internet.' },
              { title: 'Mieux comprendre vos clients', desc: 'Analyser leurs besoins pour mieux répondre à leurs attentes.' },
              { title: 'Optimiser votre activité', desc: 'Utiliser la technologie pour gagner du temps et mieux gérer votre entreprise.' },
              { title: 'Planifier votre croissance', desc: 'Préparer des solutions adaptées à l\'évolution de votre activité.' },
            ],
            includes: ['Analyse de vos besoins', 'Étude de votre marché', 'Choix des outils adaptés', 'Stratégie de présence en ligne', 'Conseils en référencement (SEO)', 'Optimisation du parcours client', 'Plan de développement digital', 'Recommandations techniques et marketing'],
            example: { title: 'Exemple simple', desc: 'Si vous souhaitez vendre en ligne mais ne savez pas s\'il faut créer un site e-commerce, utiliser les réseaux sociaux ou développer une application, ce service vous aide à choisir la meilleure stratégie.', summary: 'Le conseil et la stratégie digitale vous aident à prendre les bonnes décisions pour développer votre activité plus efficacement.' }
          } },
        { title: 'Gestion Réseaux Sociaux', shortDesc: 'Je booste votre visibilité', desc: 'Création de contenu engageant, planification de publications et gestion de vos comptes pour attirer et fidéliser votre audience.', longDesc: "Vous voulez être visible sur Instagram, Facebook ou TikTok ? Je m'occupe de créer du contenu attrayant, de planifier vos publications et de gérer vos comptes. C'est comme avoir un assistant dédié qui parle à vos clients sur les réseaux sociaux et les fait venir vers vous.", highlight: '+50% d\'engagement moyen', emoji: '📱', detailedContent: {
            intro: "La gestion des réseaux sociaux consiste à créer, organiser et gérer votre présence sur des plateformes comme Facebook, Instagram, TikTok et LinkedIn pour développer votre visibilité et attirer plus de clients. Aujourd'hui, beaucoup de clients découvrent une entreprise d'abord sur les réseaux sociaux avant même de visiter son site.",
            benefits: [
              { title: 'Plus de visibilité', desc: 'Votre marque devient plus visible auprès de votre cible.' },
              { title: 'Plus d\'engagement', desc: 'Créer une relation avec vos clients grâce aux publications et interactions.' },
              { title: 'Plus de crédibilité', desc: 'Une présence active donne confiance et montre que votre activité est sérieuse.' },
              { title: 'Plus de clients', desc: 'Les réseaux sociaux peuvent générer des demandes, ventes ou prises de contact.' },
              { title: 'Communication régulière', desc: 'Informer vos clients sur vos nouveautés, promotions ou services.' },
            ],
            includes: ['Création de stratégie de contenu', 'Planification des publications', 'Création de visuels et textes', 'Gestion des messages et commentaires', 'Optimisation des profils', 'Analyse des performances', 'Campagnes publicitaires', 'Développement de communauté'],
            example: { title: 'Exemple simple', desc: 'Si vous avez une boutique, vos réseaux sociaux peuvent servir à montrer vos nouveaux produits, annoncer des promotions et répondre directement aux clients.', summary: 'La gestion des réseaux sociaux aide votre entreprise à être plus visible, plus proche de ses clients et à développer son activité en ligne.' }
          } },
        { title: 'Design UI/UX', shortDesc: 'Je crée des interfaces qui ravissent', desc: 'Conception d\'expériences utilisateur intuitives et de designs modernes qui rendent vos projets faciles et agréables à utiliser.', longDesc: "Un site beau c'est bien, mais un site facile à utiliser c'est mieux ! Je crée des interfaces qui donnent envie d'utiliser votre site. C'est comme décorer une boutique : tout doit être à sa place, clair et agréable pour que vos visiteurs restent longtemps et reviennent.", highlight: 'Expérience utilisateur optimale', emoji: '🎨', detailedContent: {
            intro: "Le design UI/UX consiste à créer des interfaces belles, simples et faciles à utiliser pour vos clients. UI (User Interface) : l'apparence visuelle (couleurs, boutons, images, disposition). UX (User Experience) : l'expérience utilisateur (facilité, rapidité, logique de navigation). Un bon design ne rend pas seulement votre site ou application joli, il le rend aussi plus efficace.",
            benefits: [
              { title: 'Une meilleure première impression', desc: 'Un design professionnel inspire confiance dès la première visite.' },
              { title: 'Navigation facile', desc: 'Vos clients trouvent rapidement ce qu\'ils cherchent.' },
              { title: 'Plus d\'engagement', desc: 'Une bonne expérience garde les visiteurs plus longtemps.' },
              { title: 'Plus de conversions', desc: 'Un parcours simple aide à obtenir plus de ventes, contacts ou réservations.' },
              { title: 'Adapté à tous les écrans', desc: 'Ordinateur, tablette et téléphone.' },
            ],
            includes: ['Recherche et analyse des besoins', 'Création de wireframes', 'Maquettes visuelles', 'Prototype interactif', 'Design responsive', 'Optimisation du parcours utilisateur', 'Amélioration de l\'ergonomie', 'Tests utilisateur'],
            example: { title: 'Exemple simple', desc: 'Si un client visite votre site pour acheter un produit, un bon UI/UX lui permet de trouver le produit, l\'ajouter au panier et payer facilement sans confusion.', summary: 'Le design UI/UX permet de transformer une idée en une expérience claire, moderne et agréable pour vos utilisateurs.' }
          } },
        { title: 'Intégration CMS', shortDesc: 'Je connecte vos outils', desc: 'Intégration et configuration de systèmes de gestion de contenu pour vous donner le contrôle total de votre site.', longDesc: "Vous voulez pouvoir modifier votre site vous-même sans coder ? Je configure un système de gestion de contenu pour vous. C'est comme avoir une télécommande pour votre site internet : vous pouvez changer les textes, les images et les pages quand vous voulez, sans dépendre de personne.", highlight: 'Autonomie totale', emoji: '🔧', detailedContent: {
            intro: "L'intégration CMS consiste à mettre en place un système de gestion de contenu qui vous permet de gérer facilement votre site sans avoir besoin de connaissances techniques. Un CMS (Content Management System) vous permet de modifier vos textes, images, produits ou pages en quelques clics. Exemples de CMS populaires : WordPress, Shopify, Drupal.",
            benefits: [
              { title: 'Gestion facile du contenu', desc: 'Modifier vos pages, images et informations sans passer par un développeur.' },
              { title: 'Gain de temps', desc: 'Mettre à jour votre site rapidement.' },
              { title: 'Flexibilité', desc: 'Ajouter de nouvelles pages ou fonctionnalités facilement.' },
              { title: 'Évolutif', desc: 'Le site peut grandir avec votre activité.' },
              { title: 'Contrôle total', desc: 'Vous gardez la main sur votre contenu.' },
            ],
            includes: ['Installation et configuration du CMS', 'Intégration du design personnalisé', 'Création de pages et sections', 'Gestion des utilisateurs', 'Installation de modules/extensions', 'Optimisation de performance', 'Sécurisation du CMS', 'Formation à l\'utilisation'],
            example: { title: 'Exemple simple', desc: 'Si vous avez un site de restaurant, vous pouvez changer le menu, les prix ou ajouter des photos sans demander une intervention technique.', summary: 'L\'intégration CMS vous donne un site professionnel, facile à gérer et évolutif selon vos besoins.' }
          } },
      ],
    },
    // PORTFOLIO
    portfolio: {
      tag: 'Mes réalisations',
      title: 'Projets récents',
      subtitle: 'Chaque projet est une histoire de succès. Découvrez comment j\'ai aidé mes clients à atteindre leurs objectifs.',
      filters: { all: 'Tous', web: 'Sites Vitrine', ecommerce: 'E-Commerce', app: 'Applications' },
      viewProject: 'Voir le projet',
    },
    // TESTIMONIALS
    testimonials: {
      tag: 'Témoignages',
      title: 'Ce que disent mes clients',
      subtitle: 'La satisfaction de mes clients est ma plus grande fierté. Voici ce qu\'ils pensent de notre collaboration.',
    },
    // PROCESS
    process: {
      tag: 'Mon approche',
      title: 'Comment je travaille',
      subtitle: 'Un processus clair et transparent pour garantir le succès de votre projet, du premier appel à la livraison finale.',
      steps: [
        { title: 'Consultation & Découverte', desc: 'On discute de votre projet, vos objectifs, votre audience cible et vos inspirations. Je pose les bases pour une solution sur-mesure.' },
        { title: 'Stratégie & Conception', desc: 'Je crée des maquettes et un prototype interactif. Vous validez le design avant que chaque ligne de code ne soit écrite.' },
        { title: 'Développement & Intégration', desc: 'Développement propre, rapide et optimisé. Chaque fonctionnalité est testée rigoureusement pour garantir la perfection.' },
        { title: 'Révisions & Optimisation', desc: 'Vous testez, vous donnez votre feedback. Je peaufine chaque détail jusqu\'à ce que tout soit parfait.' },
        { title: 'Livraison & Suivi', desc: 'Mise en ligne, formation à l\'utilisation et support continu. Je reste disponible pour vous accompagner dans la durée.' },
      ],
    },
    // CONTACT
    contact: {
      tag: 'Contact',
      title: 'Prêt à démarrer votre projet ?',
      subtitle: 'Contactez-moi dès aujourd\'hui pour discuter de votre demande. Réponse garantie sous 24h.',
      form: {
        name: 'Nom complet',
        namePh: 'Votre nom',
        email: 'Email',
        emailPh: 'votre@email.com',
        phone: 'Téléphone',
        phonePh: '038 845 1402 / 033 491 6992',
        service: 'Type de projet',
        serviceOptions: ['Sélectionnez un service', 'Site Vitrine', 'E-Commerce', 'Application Web', 'SEO & Référencement', 'Maintenance', 'Autre'],
        message: 'Décrivez votre projet',
        messagePh: 'Parlez-moi de votre projet, vos objectifs et votre budget estimé...',
        submit: 'Envoyer ma demande',
        sending: 'Envoi en cours...',
        sent: 'Message envoyé !',
      },
      otherMethods: 'Autres moyens de contact',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      whatsapp: 'Envoyer un message',
      followMe: 'Suivez-moi',
      guarantee: 'Garantie satisfaction',
      guaranteeDesc: 'Si vous n\'êtes pas satisfait, je retravaille gratuitement jusqu\'à votre entière satisfaction.',
    },
    // ABOUT (page)
    about: {
      tag: 'À propos de moi',
      title1: 'Développeur web ',
      title2: 'passionné',
      title3: ' par l\'innovation digitale',
      text: 'Je suis Nomena, développeur web full-stack basé à Madagascar. Avec plus de 5 ans d\'expérience, je transforme des idées en solutions digitales performantes qui génèrent des résultats concrets pour mes clients.',
      stats: { projects: 'Projets livrés', clients: 'Clients satisfaits', years: 'Années d\'expérience', techs: 'Technologies maîtrisées' },
      skillsTag: 'Expertise technique',
      skillsTitle: 'Mes compétences',
      skillsSubtitle: 'Une maîtrise complète des technologies modernes pour créer des solutions digitales robustes et performantes.',
      mastery: 'Maîtrise',
      expTag: 'Parcours',
      expTitle: 'Mon expérience',
      expSubtitle: 'Un parcours riche et diversifié qui m\'a permis de développer une expertise polyvalente en développement web.',
      ctaTitle: 'Travaillons ensemble',
      ctaDesc: 'Vous avez un projet en tête ? Discutons-en et transformons-le en réalité.',
      ctaContact: 'Me contacter',
      ctaBack: 'Retour au portfolio',
      downloadCv: 'Télécharger mon CV',
    },
    // FOOTER
    footer: {
      desc: 'Développeur web freelance créant des sites modernes, performants et orientés résultats pour entreprises ambitieuses.',
      nav: 'Navigation',
      services: 'Services',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
    },
  },
  en: {
    // NAV
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      contactBtn: 'Contact Me',
    },
    // HERO
    hero: {
      badge: 'Freelance Web Developer',
      title1: 'I build websites that ',
      title2: 'turn your visitors into customers',
      subtitle: 'For ambitious entrepreneurs and businesses that want a modern, high-performing online presence that converts.',
      cta1: 'Get a free quote',
      cta2: 'View my work',
      stat1Label: 'Projects delivered',
      stat2Label: 'Years of experience',
      stat3Label: 'Happy clients',
    },
    // SERVICES
    services: {
      tag: 'What I offer',
      title: 'My Services',
      subtitle: 'Complete web solutions to power your business and dominate your online market.',
      items: [
        { title: 'Custom Websites', shortDesc: 'I build your website', desc: 'Modern, fast corporate and showcase websites optimized to turn your visitors into loyal customers.', longDesc: 'Want a website? I build it for you! It\'s like building a beautiful house on the internet. People can see it, discover what you sell, and contact you easily. Everything is beautiful, fast and works perfectly on phone and computer.', highlight: 'Unique & responsive design', emoji: '💻', detailedContent: {
            intro: "A custom website is a site created specifically for your business, based on your needs and goals. It's not a generic template: everything is designed for your company.",
            benefits: [
              { title: 'A professional online presence', desc: 'Your clients can easily find you on the internet and discover your services.' },
              { title: 'A site tailored to your business', desc: "Whether you're a restaurant, shop, freelancer or company, the site is designed for your industry." },
              { title: 'More visibility', desc: 'A good site helps attract more customers through Google search ranking.' },
              { title: 'Available 24/7', desc: 'Your information, products or services remain accessible at all times.' },
              { title: 'A trustworthy image', desc: 'A clean and modern site gives more credibility to your business.' },
            ],
            includes: ['Custom design', 'Mobile, tablet and desktop compatible', 'Contact form', 'Integration of your services or products', 'Speed optimization', 'Basic SEO referencing', 'Site security', 'Maintenance if needed'],
            example: { title: 'Simple example', desc: 'If you have a shop, your site can allow you to: showcase your products, display prices, receive orders, be contacted quickly.', summary: 'A custom website helps you grow your business, save time and reach more customers.' }
          } },
        { title: 'E-Commerce', shortDesc: 'I build your online store', desc: 'High-performing online stores with secure payment, inventory management and smooth shopping experience.', longDesc: 'Want to sell things online? It\'s like opening a store, but on the internet! People can look at your products, put them in a cart, pay securely online, and receive their purchases at home. I handle everything: photos, prices, payment, delivery.', highlight: '+30% avg. conversions', emoji: '🛒', detailedContent: {
            intro: "An e-commerce site is an online store that allows your customers to buy your products or services directly on the internet, anytime. Unlike a physical shop, your store stays open 24/7.",
            benefits: [
              { title: 'Sell everywhere', desc: 'Your customers can order from anywhere.' },
              { title: 'Increase your sales', desc: 'More visibility means more sales opportunities.' },
              { title: 'Simple product management', desc: 'Add, edit or remove your products easily.' },
              { title: 'Secure online payment', desc: 'Integration of solutions like PayPal or Stripe.' },
              { title: 'Order tracking', desc: 'View orders, payments and deliveries in real time.' },
            ],
            includes: ['Custom design matching your brand', 'Product catalog', 'Shopping cart', 'Online payment', 'Inventory management', 'Order management', 'Customer area', 'Delivery / shipping costs', 'Promotions and coupons', 'Mobile-friendly site', 'Security and backup'],
            example: { title: 'Simple example', desc: 'If you sell clothes, your site allows you to: display your items with photos, choose size and color, pay online, track delivery.', summary: 'An e-commerce site transforms your business into a store accessible everywhere, anytime, to sell more easily.' }
          } },
        { title: 'SEO & Search Ranking', shortDesc: 'I put you at the top of Google', desc: 'Search engine optimization so your site is found at the top of Google by your ideal customers.', longDesc: 'When someone searches for "restaurant" or "clothes" on Google, you want to appear first, right? I make sure your site is visible at the very top of Google. It\'s like having the best location on the main street of your city.', highlight: 'Google Page 1 guaranteed', emoji: '🔍', detailedContent: {
            intro: "SEO (Search Engine Optimization), or natural referencing, involves improving your site to appear more easily in Google search results. In simple terms: if someone searches for your services online, SEO helps your site be found faster.",
            benefits: [
              { title: 'More visibility', desc: 'Your business appears in front of more potential customers.' },
              { title: 'More visitors', desc: 'A better ranking attracts more traffic to your site.' },
              { title: 'More credibility', desc: 'Users often trust sites that rank well more.' },
              { title: 'More customers without advertising', desc: 'Natural referencing can generate customers without constantly paying for ads.' },
            ],
            includes: ['Title and description optimization', 'Website speed improvement', 'Mobile optimization', 'Choosing the right keywords', 'Clear page structure', 'Image optimization', 'Local referencing', 'Optimized content creation', 'Performance tracking'],
            example: { title: 'Simple example', desc: 'If you have a restaurant and a customer searches for "restaurant in Antananarivo", good SEO increases the chances that your site appears among the first results.', summary: 'SEO helps your business be visible online, attract more visitors and get more customers naturally.' }
          } },
        { title: 'Web Applications', shortDesc: 'I create custom tools', desc: 'Interactive and intuitive web apps to automate your processes and boost your productivity.', longDesc: 'Have a special tool idea? I build it for you! It\'s like crafting a toy perfectly adapted to your needs. Appointment booking, customer management, sales tracking... Everything can be automated to save you time.', highlight: 'Custom & scalable', emoji: '⚡', detailedContent: {
            intro: "A web application is a platform accessible from a browser (phone, tablet or computer) to perform more advanced actions than a simple website. If needed, it can also be converted into an Android APK to be installed directly on a phone. The simple difference: a website presents information, a web application allows you to interact, manage and automate.",
            benefits: [
              { title: 'Automate your business', desc: 'Manage your customers, orders or reservations more easily.' },
              { title: 'Access everywhere', desc: 'Available on phone, tablet and computer.' },
              { title: 'Time saving', desc: 'Reduces manual tasks.' },
              { title: 'Centralized management', desc: 'All data is grouped in a single system.' },
            ],
            includes: ['Custom interface', 'Dashboard', 'User management', 'Database', 'Notifications', 'Access security', 'Data backup', 'Mobile version (APK if needed)'],
            example: { title: 'Concrete examples', desc: 'For a restaurant: order management, reservations, delivery tracking. For a school: student management, grades, attendance. For a business: customer management, invoices, inventory.', summary: 'A web application helps you better organize, automate and grow your business with a tool adapted to your needs.' }
          } },
        { title: 'Maintenance & Support', shortDesc: 'I watch over your site 24/7', desc: 'Continuous technical support, security updates and optimization to keep your site performing 24/7.', longDesc: 'Once your site is live, I make sure it always works perfectly. It\'s like having a guardian for your internet house. Security updates, backups, repairs if needed... You don\'t have to do anything, I handle it all!', highlight: 'Available 7 days/week', emoji: '🛡️', detailedContent: {
            intro: "Maintenance and technical support keep your website, application or computer system in good working order. This means fixing problems, improving performance and ensuring the security of your platform.",
            benefits: [
              { title: 'Quick problem resolution', desc: 'In case of bugs or errors, quick intervention avoids interruptions.' },
              { title: 'Regular updates', desc: 'Your site or application stays modern, stable and secure.' },
              { title: 'Enhanced security', desc: 'Protection against bugs, attacks and data loss.' },
              { title: 'Data backup', desc: 'Your important information is protected.' },
              { title: 'Assistance when needed', desc: 'Technical support to answer questions or resolve difficulties.' },
            ],
            includes: ['Bug fixes', 'Website or application updates', 'Performance monitoring', 'Regular backups', 'Security reinforcement', 'Technical assistance', 'Speed optimization', 'Functionality verification'],
            example: { title: 'Simple example', desc: 'If your site stops working, becomes slow or encounters a problem, the maintenance service allows you to restore it quickly to avoid losing customers.', summary: 'Maintenance ensures your site or application stays functional, secure and performant over time.' }
          } },
        { title: 'Consulting & Strategy', shortDesc: 'I guide you to success', desc: 'Audit of your online presence and digital strategy to maximize your return on investment.', longDesc: 'Don\'t know where to start? I do a complete review of your internet presence and give you a clear plan to attract more customers. It\'s like having an expert guide showing you the shortest path to success.', highlight: 'Measurable ROI', emoji: '🎯', detailedContent: {
            intro: "Consulting and digital strategy help you choose the best digital solutions to grow your business. The goal is not just to build a website or application, but to define an effective strategy to attract customers, improve your image and increase your results.",
            benefits: [
              { title: 'Choose the right solution', desc: 'Showcase site, e-commerce, web app or automation based on your needs.' },
              { title: 'Develop your visibility', desc: 'Implement a strategy to be more visible on the internet.' },
              { title: 'Better understand your customers', desc: 'Analyze their needs to better meet their expectations.' },
              { title: 'Optimize your business', desc: 'Use technology to save time and manage your company better.' },
              { title: 'Plan your growth', desc: 'Prepare solutions adapted to the evolution of your business.' },
            ],
            includes: ['Needs analysis', 'Market study', 'Choosing the right tools', 'Online presence strategy', 'SEO consulting', 'Customer journey optimization', 'Digital development plan', 'Technical and marketing recommendations'],
            example: { title: 'Simple example', desc: 'If you want to sell online but don\'t know whether to create an e-commerce site, use social media or develop an application, this service helps you choose the best strategy.', summary: 'Consulting and digital strategy help you make the right decisions to grow your business more effectively.' }
          } },
        { title: 'Social Media Management', shortDesc: 'I boost your visibility', desc: 'Engaging content creation, post scheduling and account management to attract and retain your audience.', longDesc: 'Want to be visible on Instagram, Facebook or TikTok? I handle creating attractive content, scheduling your posts and managing your accounts. It\'s like having a dedicated assistant who talks to your customers on social media and brings them to you.', highlight: '+50% avg. engagement', emoji: '📱', detailedContent: {
            intro: "Social media management involves creating, organizing and managing your presence on platforms like Facebook, Instagram, TikTok and LinkedIn to develop your visibility and attract more customers. Today, many customers discover a business first on social media before even visiting its website.",
            benefits: [
              { title: 'More visibility', desc: 'Your brand becomes more visible to your target audience.' },
              { title: 'More engagement', desc: 'Build relationships with your customers through posts and interactions.' },
              { title: 'More credibility', desc: 'An active presence builds trust and shows your business is serious.' },
              { title: 'More customers', desc: 'Social media can generate requests, sales or contact inquiries.' },
              { title: 'Regular communication', desc: 'Inform your customers about your news, promotions or services.' },
            ],
            includes: ['Content strategy creation', 'Post scheduling', 'Visuals and text creation', 'Messages and comments management', 'Profile optimization', 'Performance analysis', 'Advertising campaigns', 'Community development'],
            example: { title: 'Simple example', desc: 'If you have a shop, your social media can be used to show your new products, announce promotions and respond directly to customers.', summary: 'Social media management helps your business be more visible, closer to its customers and grow its online activity.' }
          } },
        { title: 'UI/UX Design', shortDesc: 'I create delightful interfaces', desc: 'Intuitive user experience design and modern interfaces that make your projects easy and enjoyable to use.', longDesc: 'A beautiful site is good, but an easy-to-use site is better! I create interfaces that make people want to use your site. It\'s like decorating a shop: everything must be in place, clear and pleasant so your visitors stay long and come back.', highlight: 'Optimal user experience', emoji: '🎨', detailedContent: {
            intro: "UI/UX design involves creating beautiful, simple and easy-to-use interfaces for your customers. UI (User Interface): the visual appearance (colors, buttons, images, layout). UX (User Experience): the user experience (ease, speed, navigation logic). A good design not only makes your site or application pretty, it also makes it more effective.",
            benefits: [
              { title: 'A better first impression', desc: 'A professional design inspires confidence from the first visit.' },
              { title: 'Easy navigation', desc: 'Your customers quickly find what they\'re looking for.' },
              { title: 'More engagement', desc: 'A good experience keeps visitors longer.' },
              { title: 'More conversions', desc: 'A simple path helps get more sales, contacts or bookings.' },
              { title: 'Adapted to all screens', desc: 'Desktop, tablet and phone.' },
            ],
            includes: ['Needs research and analysis', 'Wireframe creation', 'Visual mockups', 'Interactive prototype', 'Responsive design', 'User journey optimization', 'Ergonomics improvement', 'User testing'],
            example: { title: 'Simple example', desc: 'If a customer visits your site to buy a product, good UI/UX allows them to find the product, add it to cart and pay easily without confusion.', summary: 'UI/UX design transforms an idea into a clear, modern and pleasant experience for your users.' }
          } },
        { title: 'CMS Integration', shortDesc: 'I connect your tools', desc: 'Content management system setup and configuration to give you full control over your website.', longDesc: 'Want to edit your site yourself without coding? I set up a content management system for you. It\'s like having a remote control for your website: you can change texts, images and pages whenever you want, without depending on anyone.', highlight: 'Total independence', emoji: '🔧', detailedContent: {
            intro: "CMS integration involves setting up a content management system that allows you to easily manage your website without needing technical knowledge. A CMS (Content Management System) allows you to modify your text, images, products or pages in just a few clicks. Popular CMS examples: WordPress, Shopify, Drupal.",
            benefits: [
              { title: 'Easy content management', desc: 'Edit your pages, images and information without going through a developer.' },
              { title: 'Time saving', desc: 'Update your site quickly.' },
              { title: 'Flexibility', desc: 'Add new pages or features easily.' },
              { title: 'Scalable', desc: 'The site can grow with your business.' },
              { title: 'Total control', desc: 'You keep control over your content.' },
            ],
            includes: ['CMS installation and configuration', 'Custom design integration', 'Pages and sections creation', 'User management', 'Modules/extensions installation', 'Performance optimization', 'CMS security', 'Usage training'],
            example: { title: 'Simple example', desc: 'If you have a restaurant website, you can change the menu, prices or add photos without requesting technical intervention.', summary: 'CMS integration gives you a professional, easy-to-manage and scalable website according to your needs.' }
          } },
      ],
    },
    // PORTFOLIO
    portfolio: {
      tag: 'My Work',
      title: 'Recent Projects',
      subtitle: 'Every project is a success story. Discover how I helped my clients reach their goals.',
      filters: { all: 'All', web: 'Websites', ecommerce: 'E-Commerce', app: 'Apps' },
      viewProject: 'View project',
    },
    // TESTIMONIALS
    testimonials: {
      tag: 'Testimonials',
      title: 'What My Clients Say',
      subtitle: 'Client satisfaction is my greatest pride. Here\'s what they think of our collaboration.',
    },
    // PROCESS
    process: {
      tag: 'My Approach',
      title: 'How I Work',
      subtitle: 'A clear and transparent process to guarantee your project\'s success, from the first call to final delivery.',
      steps: [
        { title: 'Consultation & Discovery', desc: 'We discuss your project, goals, target audience and inspirations. I lay the groundwork for a tailored solution.' },
        { title: 'Strategy & Design', desc: 'I create mockups and an interactive prototype. You approve the design before any line of code is written.' },
        { title: 'Development & Integration', desc: 'Clean, fast and optimized development. Every feature is rigorously tested to guarantee perfection.' },
        { title: 'Revisions & Optimization', desc: 'You test, you give feedback. I refine every detail until everything is perfect.' },
        { title: 'Delivery & Follow-up', desc: 'Launch, training and ongoing support. I remain available to assist you long-term.' },
      ],
    },
    // CONTACT
    contact: {
      tag: 'Contact',
      title: 'Ready to start your project?',
      subtitle: 'Contact me today to discuss your request. Response guaranteed within 24 hours.',
      form: {
        name: 'Full name',
        namePh: 'Your name',
        email: 'Email',
        emailPh: 'your@email.com',
        phone: 'Phone',
        phonePh: '038 845 1402 / 033 491 6992',
        service: 'Project type',
        serviceOptions: ['Select a service', 'Website', 'E-Commerce', 'Web App', 'SEO', 'Maintenance', 'Other'],
        message: 'Describe your project',
        messagePh: 'Tell me about your project, goals and estimated budget...',
        submit: 'Send my request',
        sending: 'Sending...',
        sent: 'Message sent!',
      },
      otherMethods: 'Other contact methods',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsapp: 'Send a message',
      followMe: 'Follow me',
      guarantee: 'Satisfaction guarantee',
      guaranteeDesc: 'If you\'re not satisfied, I\'ll rework for free until you\'re completely satisfied.',
    },
    // ABOUT (page)
    about: {
      tag: 'About Me',
      title1: 'Web developer ',
      title2: 'passionate',
      title3: ' about digital innovation',
      text: 'I\'m Nomena, a full-stack web developer based in Madagascar. With over 5 years of experience, I transform ideas into high-performing digital solutions that generate tangible results for my clients.',
      stats: { projects: 'Projects delivered', clients: 'Happy clients', years: 'Years of experience', techs: 'Technologies mastered' },
      skillsTag: 'Technical Expertise',
      skillsTitle: 'My Skills',
      skillsSubtitle: 'A complete mastery of modern technologies to create robust and high-performing digital solutions.',
      mastery: 'Mastery',
      expTag: 'Background',
      expTitle: 'My Experience',
      expSubtitle: 'A rich and diverse journey that has allowed me to develop versatile expertise in web development.',
      ctaTitle: 'Let\'s work together',
      ctaDesc: 'Got a project in mind? Let\'s discuss it and turn it into reality.',
      ctaContact: 'Contact me',
      ctaBack: 'Back to portfolio',
      downloadCv: 'Download my CV',
    },
    // FOOTER
    footer: {
      desc: 'Freelance web developer creating modern, high-performing and result-oriented websites for ambitious businesses.',
      nav: 'Navigation',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
    },
  },
}

export default translations
