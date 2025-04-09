
import React from 'react';
import { GitHub, Linkedin } from 'lucide-react';
import SocialLink from './SocialLink';

interface HeaderProps {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
}

const Header: React.FC<HeaderProps> = ({
  name,
  githubUrl,
  linkedinUrl
}) => {
  return (
    <header className="w-full py-6 px-4 md:px-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight mb-4 md:mb-0 text-center md:text-left">
            {name}
          </h1>
          <nav className="flex items-center space-x-4">
            <SocialLink
              href={githubUrl}
              icon={GitHub}
              label="GitHub Profile"
            />
            <SocialLink
              href={linkedinUrl}
              icon={Linkedin}
              label="LinkedIn Profile"
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
