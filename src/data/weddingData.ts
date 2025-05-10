import { TimelineEvent, GalleryImage, GiftRegistry, NavItem } from '../types';

// Wedding details
export const weddingDate = new Date('2025-05-23T16:00:00');
export const coupleNames = {
  partner1: 'Hussain',
  partner2: 'Kira Unisha',
};

// Navigation items
export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Details', href: '#details' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Registry', href: '#registry' },
];

// Timeline events
export const timelineEvents: TimelineEvent[] = [
  {
    date: '18-05-2021',
    title: 'First Meeting',
    description: "We first met at a mutual friend's birthday party in the city.",
  },
  {
    date: '21-05-2025',
    title: 'First Date',
    description: 'Our first official date was at a small Italian restaurant downtown.',
  },
  {
    date: 'December 2022',
    title: 'Moving In Together',
    description: 'We took the big step of moving in together and creating our first home.',
  },
  {
    date: 'July 2023',
    title: 'The Proposal',
    description: 'James proposed during our vacation in Santorini, overlooking the sunset.',
  },
  {
    date: 'June 2025',
    title: 'Wedding Day',
    description: 'We celebrate our love with family and friends on this special day.',
  },
];

// Gallery images
export const galleryImages: GalleryImage[] = [
  {
    src: '/src/assets/newimages/download.png',
    alt: 'Couple holding hands',
    width: 800,
    height: 600,
  },
  {
    src: '/src/assets/newimages/WhatsApp Image 2025-05-10 at 2.12.59 PM.jpeg',
    alt: 'Engagement photo',
    width: 800,
    height: 600,
  },
  {
    src: '/src/assets/newimages/WhatsApp Image 2025-05-10 at 2.13.47 PM.jpeg',
    alt: 'Romantic sunset moment',
    width: 800,
    height: 600,
  },
  {
    src: '/src/assets/newimages/WhatsApp Image 2025-05-10 at 2.14.07 PM.jpeg',
    alt: 'Date night',
    width: 800,
    height: 600,
  },
  {
    src: '/src/assets/newimages/WhatsApp Image 2025-05-10 at 2.25.14 PM.jpeg',
    alt: 'Vacation memories',
    width: 800,
    height: 600,
  },
  {
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    alt: 'Special moments',
    width: 800,
    height: 600,
  },
];

// Wedding details
export const weddingDetails = {
  ceremony: {
    time: '4:00 PM',
    location: "St. Mary's Cathedral",
    address: '123 Church Street, New York, NY 10001',
    notes: 'Ceremony will last approximately one hour.',
  },
  reception: {
    time: '6:00 PM',
    location: 'The Grand Hotel',
    address: '456 Luxury Avenue, New York, NY 10001',
    notes: 'Cocktail hour begins immediately after the ceremony, followed by dinner and dancing.',
  },
  accommodation: {
    name: 'The Grand Hotel',
    address: '456 Luxury Avenue, New York, NY 10001',
    bookingCode: 'EMILYJAMES2025',
    bookingUrl: '#',
    notes: 'We have reserved a block of rooms at a special rate for our wedding guests.',
  },
  dress: 'Formal attire / Black tie optional',
};

// Gift registry
export const giftRegistries: GiftRegistry[] = [
  {
    name: 'Crate & Barrel',
    url: 'https://www.crateandbarrel.com/gift-registry/',
    description: 'Home goods and kitchenware for our new home together.',
  },
  {
    name: 'Honeymoon Fund',
    url: '#',
    description: 'Contribute to our dream honeymoon in Bali.',
  },
  {
    name: 'Charity Donation',
    url: '#',
    description: 'In lieu of gifts, consider donating to the World Wildlife Fund, a cause close to our hearts.',
  },
];

// RSVP deadline
export const rsvpDeadline = new Date('2025-05-21');