
import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';

const Index = () => {
  // These would typically come from a data store or CMS
  const personalInfo = {
    name: "Sander",
    githubUrl: "https://github.com/sanderhmn",
    linkedinUrl: "https://linkedin.com/in/s",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=500",
    imageAlt: "Your profile picture",
    introduction: "Welcome to my personal page. This page is still under construction.",
    email: "sander@example.com",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        name={personalInfo.name}
        githubUrl={personalInfo.githubUrl}
      />
      
      <main className="flex-grow">
        <Intro 
          imageUrl={personalInfo.imageUrl}
          alt={personalInfo.imageAlt}
          introduction={personalInfo.introduction}
        />
        
        {/* Future sections would go here */}
      </main>
      
      <Footer 
        email={personalInfo.email}
      />
    </div>
  );
};

export default Index;
