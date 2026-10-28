// =====================================================================
//  YOUR PORTFOLIO PROJECTS
//
//  Every project on the site comes from this list. To add a project,
//  copy one block (from { to }, including the comma) and change it.
//  To remove one, delete its block.
//
//  Right now every project is a PLACEHOLDER (placeholder: true).
//  The site clearly labels these as placeholders, never as your work.
//
//  TO USE YOUR REAL ARTWORK:
//   1. Put your image files in the  public/work  folder.
//   2. Set  src: '/work/your-file.webp'  for the cover and each image.
//   3. Change  placeholder: true  to  placeholder: false.
//   4. Replace the sample brief / approach / deliverables text.
// =====================================================================

const C = {
  cobalt: '#2457FF',
  orange: '#FF6B35',
  lime: '#D7FF3F',
  pink: '#FF4F9A',
  paper: '#F7F4ED',
  ink: '#171717',
};

// The five portfolio categories. "id" is used by the filter buttons,
// "label" is the name visitors see, "inquiry" is the matching option
// in the contact form.
export const categories = [
  { id: 'posters', label: 'Event Posters & Flyers', inquiry: 'Event poster or flyer' },
  { id: 'social', label: 'Social Media Design', inquiry: 'Social media graphics' },
  { id: 'brand', label: 'Brand Identity', inquiry: 'Brand identity' },
  { id: 'campaign', label: 'Campaign Artwork', inquiry: 'Promotional campaign' },
  { id: 'motion', label: 'Motion Graphics', inquiry: 'Motion graphics' },
];

// Small helper for an image slot. src: null shows a labelled placeholder.
// ratio only affects placeholders (real images keep their own shape).
const img = (ratio, alt = '') => ({ src: null, alt, ratio });

export const projects = [
  {
   slug: 'ladies-night', // used in the page link, keep it lowercase with dashes
    title: 'Ladies Night',
    category: 'posters', // one of the category ids above
    span: 7, // width on large screens, out of 12 columns (4, 5, 7 or 12 look best)
    placeholder: false,
    variant: 0, // which placeholder pattern to draw (0 to 7), ignored for real images
    palette: [C.cobalt, C.lime, C.orange, C.pink, C.ink],
    cover: { src: '/work/ladies-night.png', alt: 'Ladies Night event poster' },
    images: [{ src: '/work/ladies-night.png', alt: 'Ladies Night poster' }],
    video: null, // optional: '/work/my-clip.mp4' to show a video at the top of the case study
    year: '', // optional, e.g. '2026'
    client: '', // optional, only fill in if the client is happy to be named
    brief:
       'Create an eye-catching Ladies Night promotional poster designed to attract partygoers and showcase an exciting nightlife experience.',
    approach:
      'Combined vibrant neon colours, chrome typography, a futuristic cityscape and striking model imagery to create a premium nightlife aesthetic.',
    deliverables: ['Event poster', 'Social media flyer', 'WhatsApp status version'],
    tools: ['Photoshop']
  },
 {
  slug: 'rhumba-old-school-amapiano',
  title: 'Rhumba Old School Amapiano',
  category: 'posters',
  span: 7,
  placeholder: false,
  variant: 0,
  palette: [C.orange, C.lime, C.ink, C.pink],
  cover: {
    src: '/work/rhumba-amapiano.jpeg',
    alt: 'Rhumba Old School Amapiano poster'
  },
  images: [
    {
      src: '/work/rhumba-amapiano.jpeg',
      alt: 'Rhumba Old School Amapiano flyer'
    }
  ],
  video: null,
  year: '',
  client: 'Dj Elina Finesse & Balson Bistro',
  brief: 'Create a vibrant music event poster celebrating Rhumba, Old School and Amapiano.',
  approach: 'Combined bold 3D typography, energetic orange and yellow lighting, oversized microphones and artist imagery to create a powerful nightlife aesthetic.',
  deliverables: ['Event poster', 'Social media flyer'],
  tools: ['Photoshop']
},
  {
   slug: 'meet-and-greet',
  title: 'Meet and Greet',
  category: 'posters',
  span: 7,
  placeholder: false,
  variant: 0,
  palette: [C.orange, C.lime, C.ink, C.pink],
  cover: {
  src: '/work/Meet-&-Greet.jpg',
  alt: 'Meat and Greet event poster'
},
images: [
  {
    src: '/work/Meet-&-Greet.jpg',
    alt: 'Meat and Greet event flyer'
  }
],
  video: null,
  year: '',
  client: 'Gotab Gaa Advocates',
  brief: 'Design a vibrant promotional poster for the Meat and Greet event featuring performing artist Kipsang.',
  approach: 'Combined warm orange lighting, bold yellow-green typography, artist portraits and energetic event imagery.',
  deliverables: ['Event poster', 'Social media flyer'],
  tools: ['Photoshop']
  },
  {
    slug: 'brand-identity-01',
    title: 'Brand Identity Placeholder',
    category: 'brand',
    span: 4,
    placeholder: true,
    variant: 6,
    palette: [C.lime, C.cobalt, C.ink, C.pink, C.orange],
    cover: img('1/1'),
    images: [img('16/9'), img('1/1'), img('1/1')],
    video: null,
    year: '',
    client: '',
    brief:
      'Sample text. Describe the business or person, what they do, and what their identity needed to communicate.',
    approach:
      'Sample text. Walk through the logo idea, the colour palette and the typography, and how they work together across different uses.',
    deliverables: ['Primary logo and variations', 'Colour and typography guide', 'Social media profile graphics'],
    tools: [],
  },
    {
  slug: 'queens-of-the-concrete',
  title: 'Queens of the Concrete',
  category: 'posters',
  span: 4,
  placeholder: false,
  cover: {
    src: '/work/queens-of-the-concrete.png',
    alt: 'Queens of the Concrete event poster'
  },
  images: [
    {
      src: '/work/queens-of-the-concrete.png',
      alt: 'Queens of the Concrete poster design'
    }
  ],
  video: null,
  year: '2026',
  client: '',
  brief: 'Queens of the concreate, No Rules. Just Queens.',
  approach: 'Expressive typography, dramatic imagery and vibrant colour combinations.',
  deliverables: ['Event poster', 'Social media flyer'],
  tools: ['Photoshop']
},
  {
   {
  slug: 'labour-day-offers',
  title: 'Labour Day Offers',
  category: 'posters',
  span: 4,
  placeholder: false,
  cover: {
    src: '/work/labour-day-offers.jpg',
    alt: 'Labour Day Offers promotional poster'
  },
  images: [
    {
      src: '/work/labour-day-offers.jpg',
      alt: 'Labour Day Offers poster'
    }
  ],
  video: null,
  year: '2026',
  client: '',
  brief: 'Design an eye-catching promotional poster for Labour Day offers.',
  approach: 'Bold typography, strong visual hierarchy and vibrant colours.',
  deliverables: ['Promotional poster', 'Social media design'],
  tools: ['Photoshop']
},
  slug: 'sato-shutdown',
  title: 'Saturday Shutdown',
  category: 'posters',
  span: 4,
  placeholder: false,
  cover: {
    src: '/work/sato-shutdown.png',
    alt: 'Saturday Shutdown event poster'
  },
  images: [
    {
      src: '/work/sato-shutdown.png',
      alt: 'Saturday Shutdown poster'
    }
  ],
  video: null,
  year: '2026',
  client: 'Dj Elina Finesse',
  brief: 'Create an eye-catching promotional event poster.',
  approach: 'Bold typography, vibrant colours and engaging visual composition.',
  deliverables: ['Event poster', 'Social media flyer'],
  tools: ['Photoshop']
},
  {
    slug: 'event-flyer-02',
    title: 'Ride The Sky',
    category: 'posters',
    span: 5,
   placeholder: false,
    variant: 5,
    palette: [C.paper, C.orange, C.cobalt, C.ink, C.lime],
    cover: {
  src: '/work/event-flyer.jpg',
  alt: 'Ride The Sky event flyer'
},
    images: [
  {
    src: '/work/event-flyer.jpg',
    alt: 'Ride The Sky event flyer'
  }
],
    video: null,
    year: '',
    client: '',
    brief:
      'Sample text. Describe what the flyer was promoting and how it would be handed out or shared.',
    approach:
      'Sample text. Explain how you fitted the key details, such as date, place and contact, into a layout that still feels bold.',
    deliverables: ['A5 print-ready flyer (PDF)', 'Digital version for WhatsApp'],
    tools: [],
  },
  {
    slug: 'brand-identity-02',
    title: 'Identity System Placeholder',
    category: 'brand',
    span: 7,
   {
  slug: 'madaraka-party-flyer',
  title: 'Madaraka Party Flyer',
  category: 'posters',
  span: 4,
  placeholder: false,
  cover: {
    src: '/work/MADARAKA-PARTY-FLYER.jpg',
    alt: 'Madaraka Party event flyer'
  },
  images: [
    {
      src: '/work/MADARAKA-PARTY-FLYER.jpg',
      alt: 'Madaraka Party flyer design'
    }
  ],
  video: null,
  year: '2026',
  client: '',
  brief: 'Create a vibrant promotional flyer for a Madaraka celebration.',
  approach: 'Bold typography, energetic colours and an eye-catching event composition.',
  deliverables: ['Event flyer', 'Social media poster'],
  tools: ['Photoshop']
},
  {
    slug: 'campaign-01',
    title: 'Campaign Artwork Placeholder',
    category: 'campaign',
    span: 12,
    {
  slug: 'club-flyers-designs',
  title: 'Club Flyers Designs',
  category: 'posters',
  span: 4,
  placeholder: false,
  cover: {
    src: '/work/club flyers designs.jpg',
    alt: 'Creative nightclub flyer designs'
  },
  images: [
    {
      src: '/work/club flyers designs.jpg',
      alt: 'Club flyers promotional artwork'
    }
  ],
  video: null,
  year: '2026',
  client: '',
  brief: 'Create eye-catching nightclub promotional artwork.',
  approach: 'Vibrant colours, bold typography and energetic nightlife visuals.',
  deliverables: ['Club flyer', 'Social media poster'],
  tools: ['Photoshop']
},

export const getCategory = (id) => categories.find((c) => c.id === id);
