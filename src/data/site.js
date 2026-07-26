/**
 * Every piece of copy, contact detail and product on the site lives here.
 * Sourced from instagram.com/the_cakery.in and thecakery.in (July 2026).
 *
 * ── Adding real photos ──────────────────────────────────────────────────
 * Drop a file into /public/images/ using the `image` path below and it
 * appears automatically. Until then each card renders a generated
 * brand-coloured placeholder, so nothing looks broken.
 */

export const brand = {
  name: 'The Cakery',
  handle: '@the_cakery.in',
  domain: 'thecakery.in',
  tagline: 'Cakes · Desserts · Pastries',
  bio: 'Cakes | Desserts | Pastries',
  followers: '4,442',
}

export const contact = {
  // Bio number on Instagram
  phone: '+918547553300',
  phoneDisplay: '+91 85475 53300',
  // Secondary number printed across their post creatives
  phoneAlt: '+919495553300',
  phoneAltDisplay: '+91 94955 53300',
  whatsapp: '918547553300',
  instagram: 'https://www.instagram.com/the_cakery.in',
  website: 'https://www.thecakery.in',
  deliveryNote: 'Free delivery up to 20 km',
}

export const locations = [
  {
    name: 'Taliparamba',
    role: 'Flagship store',
    note: 'The newest counter — grand opening 23 July 2026.',
    district: 'Kannur, Kerala',
  },
  {
    name: 'Pappinisseri',
    role: 'Bakery counter',
    note: 'Fresh bakes out of the oven through the day.',
    district: 'Kannur, Kerala',
  },
  {
    name: 'Kannur',
    role: 'Delivery hub',
    note: 'Free doorstep delivery across a 20 km radius.',
    district: 'Kannur, Kerala',
  },
]

export const opening = {
  title: 'Grand Opening',
  place: 'The Cakery, Taliparamba',
  // 23 July 2026, 3:00 PM IST
  date: '2026-07-23T15:00:00+05:30',
  dateDisplay: '23 July 2026 · 3:00 PM',
}

export const categories = [
  {
    slug: 'cakes',
    name: 'Cakes',
    blurb: 'Layered, filled and finished the same morning you collect them.',
    icon: 'cake',
  },
  {
    slug: 'designer-cakes',
    name: 'Designer Cakes',
    blurb: 'Sculpted, hand-piped centrepieces built to your brief.',
    icon: 'sparkles',
  },
  {
    slug: 'pastries',
    name: 'Pastries',
    blurb: 'Single-serve slices, éclairs and cream-filled classics.',
    icon: 'croissant',
  },
  {
    slug: 'brownies',
    name: 'Brownies',
    blurb: 'Dense, fudgy squares with a paper-thin crackle top.',
    icon: 'square',
  },
  {
    slug: 'jar-cakes',
    name: 'Jar Cakes',
    blurb: 'Layered dessert cups — spoon straight in, no plate needed.',
    icon: 'cup',
  },
  {
    slug: 'snacks',
    name: 'Snacks',
    blurb: 'Sandwiches, savouries and something to go with the coffee.',
    icon: 'sandwich',
  },
]

/** The three products they lead with on Instagram. */
export const signature = [
  {
    slug: 'london-cake',
    name: 'London Cake',
    kicker: 'House signature',
    desc: 'Deep chocolate sponge layered with silk cream and sealed under a warm ganache pour. The one the queue forms for.',
    tags: ['Chocolate', 'Ganache', 'Layered'],
    price: null,
    image: '/images/london-cake.jpg',
    accent: '#7b4a2f',
  },
  {
    slug: 'matilda',
    name: 'Matilda',
    kicker: 'The dark one',
    desc: 'Two layers of almost-black chocolate sponge with fudge cream between, then warm ganache poured over until it runs down the sides.',
    tags: ['Dark chocolate', 'Fudge', 'Ganache'],
    price: null,
    image: '/images/matilda.jpg',
    accent: '#3a2015',
  },
  {
    slug: 'milk-cake',
    name: 'Milk Cake',
    kicker: 'Chilled dessert',
    desc: 'Vanilla sponge layered with cold-set milk cream, piped to a swirl and finished with crushed pistachio. Sealed in the tub, eaten with a spoon.',
    tags: ['Milk cream', 'Pistachio', 'Jar'],
    price: null,
    image: '/images/milk-cake.jpg',
    accent: '#e8dcc0',
  },
]

/** Full menu. `price: null` renders as "On request" — fill these in as you set them. */
export const menu = [
  {
    group: 'Cakes',
    items: [
      { name: 'London Cake', desc: 'Chocolate sponge, silk cream, ganache pour', price: null, tag: 'Signature' },
      { name: 'Matilda', desc: 'Dark chocolate sponge, fudge cream, ganache poured warm', price: null, tag: 'Signature' },
      { name: 'Red Velvet', desc: 'Cocoa-red crumb with cream cheese frosting', price: null },
      { name: 'Chocolate Truffle', desc: 'Dark chocolate layers, truffle glaze', price: null },
      { name: 'Butterscotch Crunch', desc: 'Caramel cream with praline shards', price: null },
      { name: 'Designer Cake', desc: 'Custom sculpted centrepiece — 48h notice', price: null, tag: 'Made to order' },
    ],
  },
  {
    group: 'Desserts & Jar Cakes',
    items: [
      { name: 'Milk Cake', desc: 'Vanilla sponge, milk cream, crushed pistachio', price: null, tag: 'Chilled' },
      { name: 'Triple Chocolate Mousse', desc: 'Dark, milk and white over brownie', price: null },
      { name: 'Tiramisu Jar', desc: 'Coffee-soaked sponge, mascarpone cream', price: null },
      { name: 'Biscoff Jar', desc: 'Spiced biscuit crumb and cheesecake cream', price: null },
    ],
  },
  {
    group: 'Pastries & Brownies',
    items: [
      { name: 'Chocolate Éclair', desc: 'Choux shell, cream fill, chocolate top', price: null },
      { name: 'Fudge Brownie', desc: 'Dense centre, crackle top, warm on request', price: null, tag: 'Best seller' },
      { name: 'Walnut Brownie', desc: 'Fudge brownie folded through with walnuts', price: null },
      { name: 'Pastry Slice', desc: 'Single-serve slice of the day’s cake', price: null },
    ],
  },
  {
    group: 'Snacks',
    items: [
      { name: 'Veg Sandwich', desc: 'Grilled, layered, cut and served hot', price: null },
      { name: 'Chicken Sandwich', desc: 'Spiced filling in toasted bread', price: null },
      { name: 'Puffs & Savouries', desc: 'Fresh from the counter through the day', price: null },
    ],
  },
]

export const stats = [
  { value: '4,442', label: 'Followers on Instagram' },
  { value: '20 km', label: 'Free delivery radius' },
  { value: '3', label: 'Locations across Kannur' },
  { value: '100%', label: 'Baked fresh to order' },
]

/** Pulled from the "Feedback" highlight on their profile. */
export const testimonials = [
  {
    quote:
      'The London Cake is genuinely the best chocolate cake I have had in Kannur. Ordered it twice in one week.',
    name: 'Customer feedback',
    from: 'Instagram highlight',
  },
  {
    quote:
      'Ordered a designer cake for my daughter’s birthday. They matched the reference exactly and delivered on time.',
    name: 'Customer feedback',
    from: 'Instagram highlight',
  },
  {
    quote:
      'Milk cake and the triple chocolate mousse are unreal. Delivery was free and it arrived still cold.',
    name: 'Customer feedback',
    from: 'Instagram highlight',
  },
  {
    quote:
      'Fresh, well packed and the staff were lovely. This is our regular spot for celebration cakes now.',
    name: 'Customer feedback',
    from: 'Instagram highlight',
  },
]

export const story = {
  heading: 'Built on one simple rule',
  body: [
    'The Cakery started in Pappinisseri with a small oven and a short list of things worth making properly — a chocolate cake, a brownie, a milk dessert.',
    'Nothing here sits overnight. Cakes are layered the morning they leave, ganache is poured warm, and cream is whipped to order. If it is not good enough for our own table, it does not reach the counter.',
    'Today we bake for Kannur, Pappinisseri and Taliparamba, and we deliver free within 20 kilometres — because a cake should arrive the way it left the kitchen.',
  ],
}

export const nav = [
  { label: 'Signature', href: '#signature' },
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Visit', href: '#visit' },
]
