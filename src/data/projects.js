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
    slug: 'event-poster-01', // used in the page link, keep it lowercase with dashes
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
   slug: 'meat-and-greet',
  title: 'Meat and Greet',
  category: 'posters',
  span: 7,
  placeholder: false,
  variant: 0,
  palette: [C.orange, C.lime, C.ink, C.pink],
  cover: {
    src: '/work/meat-&-greet.jpg',
    alt: 'Meat and Greet event poster'
  },
  images: [
    {
      src: '/work/meat-&-greet.jpg',
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
    slug: 'social-series-02',
    title: 'Carousel Placeholder',
    category: 'social',
    span: 4,
    placeholder: true,
    variant: 2,
    palette: [C.pink, C.paper, C.cobalt, C.lime, C.ink],
    cover: img('1/1'),
    images: [img('4/5'), img('4/5'), img('4/5')],
    video: null,
    year: '',
    client: '',
    brief:
      'Sample text. Describe the topic of the carousel, the platform it was made for, and the action you wanted people to take.',
    approach:
      'Sample text. Explain how you paced the slides, handled the text hierarchy, and kept people swiping to the end.',
    deliverables: ['Carousel (up to 10 slides)', 'Cover slide variations', 'Editable source files'],
    tools: [],
  },
  {
    slug: 'motion-01',
    title: 'Motion Graphics Placeholder',
    category: 'motion',
    span: 4,
    placeholder: true,
    variant: 4,
    palette: [C.ink, C.lime, C.pink, C.cobalt, C.orange],
    cover: img('4/5'),
    images: [img('16/9'), img('16/9'), img('1/1')],
    video: null,
    year: '',
    client: '',
    brief:
      'Sample text. Describe what was animated, where it would be shown, and how long it needed to be.',
    approach:
      'Sample text. Explain the movement style, timing and sound (if any), and how the animation keeps the brand look consistent.',
    deliverables: ['Animated social post (MP4)', 'Vertical story version (9:16)', 'Logo animation'],
    tools: [],
  },
  {
    slug: 'event-flyer-02',
    title: 'Flyer Placeholder',
    category: 'posters',
    span: 5,
    placeholder: true,
    variant: 5,
    palette: [C.paper, C.orange, C.cobalt, C.ink, C.lime],
    cover: img('4/5'),
    images: [img('4/5'), img('4/5')],
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
    placeholder: true,
    variant: 7,
    palette: [C.cobalt, C.paper, C.pink, C.orange, C.lime],
    cover: img('4/3'),
    images: [img('16/9'), img('4/3'), img('4/3')],
    video: null,
    year: '',
    client: '',
    brief:
      'Sample text. Describe who the brand is for, what makes it different, and what the identity had to solve.',
    approach:
      'Sample text. Show how the logo, colours, patterns and type come together in real examples such as packaging, social profiles or signage.',
    deliverables: ['Logo suite', 'Brand colours and fonts', 'Pattern or graphic elements', 'Short brand guide (PDF)'],
    tools: [],
  },
  {
    slug: 'campaign-01',
    title: 'Campaign Artwork Placeholder',
    category: 'campaign',
    span: 12,
    placeholder: true,
    variant: 1,
    palette: [C.orange, C.cobalt, C.lime, C.ink, C.pink],
    cover: img('21/9'),
    images: [img('16/9'), img('4/5'), img('4/5'), img('1/1')],
    video: null,
    year: '',
    client: '',
    brief:
      'Sample text. Describe the campaign goal, the audience, and the places the artwork would appear.',
    approach:
      'Sample text. Explain the single big idea behind the campaign and how it was adapted for posters, social media and digital ads.',
    deliverables: ['Key visual', 'Poster and social adaptations', 'Digital ad sizes'],
    tools: [],
  },
];

export const getCategory = (id) => categories.find((c) => c.id === id);
