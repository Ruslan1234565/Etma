export interface Testimonial {
  id: number;
  quote: string;
  author?: string;
  publication?: string;
}

export interface MediaLogo {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

export interface PressSection {
  testimonials: Testimonial[];
  mediaLogos: MediaLogo[];
}
