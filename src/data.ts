import { Project, SocialLink } from "./types";


export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A React TypeScript dashboard with real-time analytics and responsive design",
    category: "development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    link: "https://github.com/yourusername/dashboard"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand identity including logo, business cards, and marketing materials",
    category: "design",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=2574",
    tags: ["Branding", "Logo Design", "Print Design"],
    link: "https://behance.net/yourusername"
  },
  // Add more projects here
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/pramuditha-nadun-612b1b204",
    icon: "Linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/PramudithaN",
    icon: "Github"
  },
  {
    platform: "Behance",
    url: "https://behance.net/pramudithanadun1",
    icon: "Palette"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/ad0be_prama",
    icon: "Instagram"
  },
  {
    platform: "Fiverr",
    url: "https://fiverr.com/prama_works",
    icon: "ExternalLink"
  },
  {
    platform: "Pinterest",
    url: "https://pinterest.com/ad0bep",
    icon: "Pin"
  }
];