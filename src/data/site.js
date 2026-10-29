// =====================================================================
//  SITE SETTINGS  -  the easiest file to edit.
//
//  How to edit: change the words between the quote marks ' ' and save.
//  Don't delete the commas or brackets around them.
// =====================================================================

export const site = {
  name: 'Abelito.Visuals',

  // ---------------------------------------------------------------
  //  YOUR CONTACT DETAILS  -  fill these in before you go live!
  //  While they are empty, the contact buttons show clear
  //  "Placeholder" labels and nothing is sent anywhere.
  // ---------------------------------------------------------------
  contact: {
    // Your email address, e.g. 'hello@yourdomain.com'
    email: 'abelianabelito@gmail.com',

    // WhatsApp number in international format, numbers only.
    // Kenya example: 0712 345 678  ->  '254712345678'
    // (drop the first 0, start with 254, no spaces, no + sign)
    whatsapp: '254769297046',

    // Instagram username without the @, e.g. 'abelito.visuals'
    // (pasting the full profile link also works)
    instagram: 'abelito.visuals',
  },

  // ---------------------------------------------------------------
  //  HERO (top of the page)
  // ---------------------------------------------------------------
  hero: {
    eyebrow: 'BOLD IDEAS · VISUAL EXPERIENCES',
    line1: 'GOOD DESIGN',
    line2Start: 'GETS',
    highlight: 'NOTICED.',
  text: 'Turning bold ideas into unforgettable visuals. Creative design that makes brands impossible to ignore.',
    secondaryCta: 'Start a Project',
    // Text that spins around the round badge
    badge: 'GRAPHIC DESIGN • KENYA • VISUALS • ',
    // The 3 projects shown as tilted cards in the hero.
    // Use the "slug" of a project from src/data/projects.js
    featured: [
  'ladies-night',
  'rhumba-old-school-amapiano',
  'meet-and-greet'
],
},
  // ---------------------------------------------------------------
  //  SELECTED WORK (section heading text)
  // ---------------------------------------------------------------
  work: {
    eyebrow: 'Portfolio',
    title: 'Selected Work',
    intro:
      'A look at the kind of work I design: posters, social media, identities, campaigns and motion. Click any project to see the full case study.',
    // Shown only while at least one project in projects.js still has placeholder: true
    placeholderNote:
      'Placeholder projects are showing for now. They are sample layouts, not finished client work, and will be replaced with real artwork.',
  },

  // ---------------------------------------------------------------
  //  ABOUT
  // ---------------------------------------------------------------
  about: {
    eyebrow: 'About',
    statement: 'An independent creative design brand.',
   paragraphs: [
  "Abelito.Visuals is a creative brand based in Eldoret, Kenya, turning bold ideas into visuals that demand attention. From event flyers and social media graphics to brand identities and motion design, I create work that hits different.",

  "I don't just put elements together. I bring ideas to life through striking typography, fearless colours and creative storytelling. No boring designs, no playing safe. We don't follow the vibe. We create it."
],
    principles: [
      {
        title: 'Clear before clever',
        text: 'A design only gets a moment of attention. I start with the message, then make it hard to miss.',
      },
      {
        title: 'Bold, on purpose',
        text: 'Colour, scale and type are chosen to support the idea, never just to decorate.',
      },
      {
        title: 'Made for where it is seen',
        text: 'A poster, a feed post and a short animation each get their own treatment.',
      },
    ],
    // To show your portrait: put the file in /public (e.g. /public/me.webp)
    // then set photo: '/me.webp' and write a short description in photoAlt.
    photo: '/work/abelito-about.jpeg',
   photoAlt: 'Abelito Visuals — Graphic Designer and Creative Artist',
  },

  // ---------------------------------------------------------------
  //  SERVICES
  //  "category" must match an id from projects.js (posters, social,
  //  brand, campaign, motion). It pre-selects the project type in
  //  the contact form.
  // ---------------------------------------------------------------
  services: {
    eyebrow: 'Services',
    title: 'What I Design',
    intro: 'Five ways I can help your brand look sharp and get remembered.',
    items: [
      {
        title: 'Poster & Flyer Design',
        category: 'posters',
        description:
          'Eye-catching posters and flyers for events, launches and promotions, designed to read clearly from across a room or on a phone screen.',
        includes: ['Print-ready files', 'Digital versions', 'Size variations'],
      },
      {
        title: 'Social Media Graphics',
        category: 'social',
        description:
          'Consistent, scroll-stopping posts, carousels and stories that keep your feed instantly recognisable.',
        includes: ['Post templates', 'Carousel layouts', 'Story formats'],
      },
      {
        title: 'Branding',
        category: 'brand',
        description:
          'Logos and visual identities: colours, type and simple rules so your brand looks the same everywhere it appears.',
        includes: ['Logo files', 'Colour and type palette', 'Basic brand guide'],
      },
      {
        title: 'Promotional Campaigns',
        category: 'campaign',
        description:
          'One strong idea carried across posters, social and digital ads, so a campaign feels connected from start to finish.',
        includes: ['Key visual', 'Channel adaptations', 'Resizes for each platform'],
      },
      {
        title: 'Motion Graphics',
        category: 'motion',
        description:
          'Animated posts, titles and short promos that bring static designs to life on social media and screens.',
        includes: ['Short animated clips', 'Vertical and square formats', 'Logo animations'],
      },
    ],
  },

  // ---------------------------------------------------------------
  //  CONTACT SECTION TEXT
  // ---------------------------------------------------------------
  contactSection: {
    eyebrow: 'Contact',
    titleStart: 'HAVE A PROJECT IN',
    highlight: 'MIND?',
    intro:
      'Tell me about your idea, where it will be used and when you need it. Use the quick form, or reach out directly.',
  },

  footer: {
    note: 'Graphic design from Kenya, for brands everywhere.',
  },
};
