export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GiftRegistry {
  name: string;
  url: string;
  description: string;
}

export interface RSVPFormData {
  name: string;
  email: string;
  attending: boolean;
  guestCount: number;
  dietaryRestrictions: string;
  message: string;
}