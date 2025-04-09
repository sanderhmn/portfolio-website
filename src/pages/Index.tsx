
import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';

const Index = () => {
  // These would typically come from a data store or CMS
  const personalInfo = {
    name: "Your Name",
    githubUrl: "https://github.com/yourusername",
    linkedinUrl: "https://linkedin.com/in/yourusername",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=500",
    imageAlt: "Your profile picture",
    introduction: "Hi, I'm a passionate developer with extensive experience in building web applications using modern technologies. I specialize in creating responsive, user-friendly interfaces with React and enjoy solving complex problems through clean, efficient code.",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        name={personalInfo.name}
        githubUrl={personalInfo.githubUrl}
        linkedinUrl={personalInfo.linkedinUrl}
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
        phone={personalInfo.phone}
      />
    </div>
  );
};

export default Index;
