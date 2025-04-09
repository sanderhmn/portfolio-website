
import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  label,
  className
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground transition-all duration-300 social-icon",
        className
      )}
      aria-label={label}
    >
      <Icon size={20} />
    </a>
  );
};

export default SocialLink;
