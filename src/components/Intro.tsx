
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface IntroProps {
  imageUrl: string;
  alt: string;
  introduction: string;
}

const Intro: React.FC<IntroProps> = ({
  imageUrl,
  alt,
  introduction
}) => {
  return (
    <section className="py-16 px-4 md:px-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 mb-8">
            <AspectRatio ratio={1/1}>
              <img 
                src={imageUrl}
                alt={alt}
                className="profile-image w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {introduction}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
