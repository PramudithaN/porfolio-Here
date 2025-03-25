import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-4">
      {links.map((link) => {
        const Icon = LucideIcons[link.icon as keyof typeof LucideIcons] as React.ElementType;
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  );
}