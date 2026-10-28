export const profile = {
  name: 'Tacko Poulo Sy',
  title: 'Développeuse Web et Mobile',
  tagline:
    'Je transforme vos idées en applications web et mobile performantes, utiles et faciles à prendre en main.',
  photo: 'public/profil.jpeg',
  cv: '/CV_Tacko_Poulo_Sy_Developpeuse_Fullstack.pdf',
  github: 'https://github.com/tackopoulos-alt',
  linkedin: 'https://www.linkedin.com/in/tacko-poulo-sy-0b772533b/',
  email: 'tackopoulos@gmail.com',
}

export const highlights = [
  { icon: 'projets', value: '9+ projets', label: 'web et mobile réalisés' },
  { icon: 'diplome', value: 'Licence 2025', label: 'Développement web et mobile' },
  { icon: 'dispo', value: 'Disponible', label: 'pour des opportunités pro' },
]

export const about = {
  paragraphs: [
    "Titulaire d'une licence en développement web et mobile obtenue en 2025, je conçois des applications web modernes, de l'interface jusqu'à l'API. J'aime partir d'un besoin réel et le transformer en un outil simple à utiliser.",
    "En tant que webmaster du Centre Hospitalier Régional de Ndioum, j'ai créé et je maintiens un site institutionnel en production. Cette expérience m'a appris à livrer, à mettre à jour un site dans la durée et à travailler avec des équipes non techniques.",
    "Je m'oriente vers le développement full-stack, avec un intérêt particulier pour la santé digitale : des outils comme une plateforme de suivi des patients ou de gestion des stocks de médicaments, qui aident les structures de santé à mieux s'organiser.",
  ],
  diploma: 'Licence en développement web et mobile',
  diplomaYear: '2025',
  qualities: ['Rigueur', 'Passion', 'Persévérance', "Esprit d'équipe"],
}

export const skills = [
  {
    title: 'Frontend',
    icon: 'frontend',
    items: ['HTML5 & CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Responsive design'],
  },
  {
    title: 'Backend',
    icon: 'backend',
    items: ['Node.js', 'NestJS', 'API REST', 'Authentification', 'Firebase'],
  },
  {
    title: 'Bases de données',
    icon: 'database',
    items: ['PostgreSQL', 'TypeORM'],
  },
  {
    title: 'Outils',
    icon: 'tools',
    items: ['Git & GitHub', 'VS Code', 'Postman', 'Vite', 'Vercel'],
  },
  {
    title: 'CMS & Design',
    icon: 'design',
    items: ['WordPress', 'Photoshop', 'Canva'],
  },
]

export const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const projects = [
  {
    name: 'e-Stock Santé',
    summary:
      'Plateforme de gestion et de suivi des médicaments essentiels dans les structures de santé, pour éviter les ruptures de stock.',
    features: [
      { label: 'Gestion des médicaments', done: false },
      { label: 'Suivi des stocks', done: false },
      { label: 'Alertes de seuil critique', done: false },
      { label: 'Tableau de bord', done: false },
    ],
    stack: ['React', 'Tailwind CSS', 'NestJS', 'PostgreSQL'],
    inProgress: true,
    image: 'public/projects/e-stock-sante.png',
    demo: 'https://e-stock-sante.vercel.app',
    repo: 'https://github.com/ton-pseudo/e-stock-sante',
  },
  {
    name: 'Site du CHR de Ndioum',
    summary:
      "Création et webmastering du site institutionnel du Centre Hospitalier Régional de Ndioum : informations aux patients et actualités.",
    features: [
      { label: 'Création du site', done: true },
      { label: 'Publication des actualités', done: true },
      { label: 'Maintenance et mises à jour', done: true },
    ],
    stack: ['WordPress'], // À VÉRIFIER
    inProgress: false,
    image: 'public/projects/chr-ndioum.png',
    demo: 'https://chrnd.com/',
    repo: '',
  },
  {
    name: 'POS Restaurant',
    summary: 'Logiciel de caisse pour restaurant : prise de commandes, encaissement et suivi des ventes.', // À VÉRIFIER
    features: [
      { label: 'Prise de commandes', done: true }, // À VÉRIFIER
      { label: 'Encaissement', done: true }, // À VÉRIFIER
      { label: 'Rapport des ventes', done: true }, // À VÉRIFIER
    ],
    stack: ['React', 'Node.js'], // À VÉRIFIER
    inProgress: false,
    image: 'public/projects/pos-restaurant.png',
    demo: '',
    repo: '',
  },
  {
    name: 'Lumina',
    summary: 'Boutique en ligne avec catalogue de produits et panier.', // À VÉRIFIER
    features: [
      { label: 'Catalogue de produits', done: true }, // À VÉRIFIER
      { label: "Panier d'achat", done: true }, // À VÉRIFIER
      { label: 'Commande en ligne', done: true }, // À VÉRIFIER
    ],
    stack: ['React', 'Tailwind CSS'], // À VÉRIFIER
    inProgress: false,
    image: 'public/projects/lumina.png',
    demo: 'https://lumina-opal-rho.vercel.app/',
    repo: '',
  },
  {
    name: 'Plateforme e-learning',
    summary: 'Projet de plateforme de cours en ligne réalisé en HTML, CSS et JavaScript.',
    features: [
      { label: 'Liste des cours', done: true }, // À VÉRIFIER
      { label: 'Pages de leçons', done: true }, // À VÉRIFIER
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    inProgress: false,
    image: 'public/projects/e-learning.png',
    demo: '',
    repo: '',
  },
  {
    name: 'Sama Facture',
    summary: 'Application de création et de gestion de factures pour les petites entreprises.', // À VÉRIFIER
    features: [
      { label: 'Création de factures', done: true }, // À VÉRIFIER
      { label: 'Gestion des clients', done: true }, // À VÉRIFIER
      { label: 'Export en PDF', done: true }, // À VÉRIFIER
    ],
    stack: ['React', 'Tailwind CSS'], // À VÉRIFIER
    inProgress: false,
    image: 'public/projects/sama-facture.png',
    demo: '',
    repo: '',
  },
  {
    name: 'Clone Netflix',
    summary:
      "Application web inspirée d'une plateforme de streaming, avec création de compte et connexion des utilisateurs.",
    features: [
      { label: 'Catalogue de films', done: true },
      { label: 'Inscription et connexion', done: true },
    ],
    stack: ['React', 'Firebase Auth'],
    inProgress: false,
    image: 'public/projects/clone-netflix.png',
    demo: 'https://netflix-clone-q38a8uanl-tackopoulos-3081s-projects.vercel.app/',
    repo: '',
  },
  {
    name: 'Site du CHR de Kaolack',
    summary: 'Site institutionnel du Centre Hospitalier Régional de Kaolack, réalisé en équipe.',
    features: [
      { label: 'Développement en équipe', done: true }, // À VÉRIFIER : ton rôle précis
      { label: 'Pages de présentation des services', done: true }, // À VÉRIFIER
    ],
    stack: ['WordPress'], // À VÉRIFIER
    inProgress: false,
    image: 'public/projects/chrein.png',
    demo: 'https://chrein.net/',
    repo: '',
  },
]

export const experiences = [
  {
    role: 'Webmaster',
    organization: 'Centre Hospitalier Régional de Ndioum',
    period: '', // À COMPLÉTER, par exemple : '2024 – aujourd’hui'
    missions: [
      'Création du site institutionnel',
      'Mise à jour régulière des contenus et des actualités',
      'Maintenance technique du site',
    ],
  },
  {
    role: 'Développeuse web (projet en équipe)',
    organization: 'Centre Hospitalier Régional de Kaolack',
    period: '', // À COMPLÉTER
    missions: [
      'Développement du site institutionnel en équipe', // À VÉRIFIER : précise ton rôle
    ],
  },
  {
    role: 'Développeuse web freelance',
    organization: 'Projets clients et personnels',
    period: '', // À COMPLÉTER
    missions: [
      'Conception de sites vitrines et de boutiques en ligne', // À VÉRIFIER
      'Développement d’applications de gestion (POS, facturation)', // À VÉRIFIER
      'Maintenance et mise à jour de sites existants',
    ],
  },
]

export const services = [
  {
    title: 'Sites vitrines',
    description: 'Un site clair qui présente votre activité et permet à vos clients de vous contacter facilement.',
    icon: 'site',
  },
  {
    title: 'Interfaces responsives',
    description: 'Des interfaces modernes qui s’adaptent aux ordinateurs, tablettes et smartphones.',
    icon: 'responsive',
  },
  {
    title: 'Intégration de maquettes',
    description: 'Vos maquettes Figma transformées en pages HTML, CSS ou React fidèles au design.',
    icon: 'maquette',
  },
  {
    title: 'Fonctionnalités web',
    description: 'Formulaires, espaces membres, tableaux de bord : des fonctionnalités qui marchent vraiment.',
    icon: 'code',
  },
  {
    title: 'Maintenance de sites',
    description: 'Mises à jour de contenu, corrections et suivi technique de votre site existant.',
    icon: 'maintenance',
  },
  {
    title: 'Applications full-stack',
    description: 'Participation au développement d’applications web complètes, de l’interface à l’API.',
    icon: 'fullstack',
  },
]

export const formspreeEndpoint = 'https://formspree.io/f/mdeezbnq'