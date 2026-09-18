export interface HeroTreatment {
  slug: string;
  label: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface TreatmentCard {
  number: string;
  slug: string;
  title: string;
  description: string;
}

export interface TechFeature {
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface Testimonial {
  quote: string;
  name: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
