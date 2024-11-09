// src/pages/Contact.tsx
import React from 'react';
import { icons } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: "GitHub", icon: icons.Github, url: "https://github.com/dswho2" },
    { name: "LinkedIn", icon: icons.Linkedin, url: "https://linkedin.com/in/dswho2" },
    { name: "Mail", icon: icons.Mail, url: "mailto:davidsw.ho02@gmail.com" }
  ];

  return (
    <div className="max-w-lg">
      <h2 className="text-3xl font-semibold text-white mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-4">
        Feel free to reach out through any of the following platforms:
      </p>
      <div className="flex gap-4">
        {socialLinks.map(({ name, icon: Icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-teal-500 transition-all"
            aria-label={name}
          >
            <Icon size={20} className="text-white" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
