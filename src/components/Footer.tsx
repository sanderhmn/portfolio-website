
import React from 'react';
import { Mail } from 'lucide-react';

interface FooterProps {
  email?: string;
}

const Footer: React.FC<FooterProps> = ({
  email,
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer w-full py-6 px-4 md:px-6 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            {email && (
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </div>
            )}
            
            
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
