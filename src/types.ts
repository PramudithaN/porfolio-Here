export interface Project {
    id: number;
    title: string;
    description: string;
    category: 'development' | 'design';
    image: string;
    tags: string[];
    link?: string;
  }
  
  export interface ProjectDev {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics?: string[];
    owner: {
      avatar_url: string;
    };
  }
  export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }