// src/pages/Projects.tsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

import DR_image from '../images/DR_model.jpg';
import personal_website from '../images/personal_website.png';
import chatbot_image from '../images/chatbot.png';
import ising_image from '../images/ising.jpg';
import microwaved_eggs from '../images/microwaved_eggs.png';
import website_v1 from '../images/website_v1.png';

const Projects = () => {
  // Project data with title, description, star count, and technologies used
  const projects = [
    {
      title: "Diabetic Retinopathy Model",
      description: `
        A machine learning pipeline developed in Python to predict diabetic retinopathy severity from 35,000+ retinal images using k-means clustering and pretrained CNN models with TensorFlow. Optimized performance with cuDNN 8.1 for faster training and data processing.
      `,
      github: "https://github.com/dswho2/DR-model",
      technologies: ["Python", "Jupyter Notebook", "TensorFlow"],
      image: DR_image
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal website built with React, TypeScript, and Tailwind CSS, showcasing projects, skills, and experience. Deployed on GitHub Pages with Node.js used for build automation.",
      github: "https://github.com/dswho2/dswho2.github.io",
      technologies: ["React", "TypeScript", "Tailwind CSS", "GitHub Pages", "Node.js"],
      image: personal_website
    },
    {
      title: "ME-System Discord Bot",
      description: `
      A Discord bot built with discord.py that allows users to track meals by submitting photos for rewards. Features casino games (Blackjack, Slots, High Low) and a gacha system for Discord roles. MySQL and SQLAlchemy were used for database management, with Alembic for migrations.
      `,
      github: "https://github.com/maldybois/microwaved-eggs",
      technologies: ["Python", "MySQL", "SQLAlchemy", "discord.py", "Alembic"],
      image: microwaved_eggs
    },
    {
      title: "Chatbot using OpenAI's GPT-4 API",
      description: "A terminal-based chatbot built with Node.js that integrates with OpenAI's GPT-4 API for generating responses. It uses the readline-sync package to capture user input via the command line, sends queries to the GPT-4 model, and displays the generated responses in real time.",
      github: "https://github.com/dswho2/Chatbot",
      technologies: ["Node.js", "OpenAI GPT-4 API", "JavaScript"],
      image: chatbot_image
    },
    {
      title: "Ising Model",
      description: `
      A Python simulation of the Ising Model using the Monte Carlo method (Metropolis-Hastings algorithm). Developed in Google Colab for interactive execution, with visualizations generated using Matplotlib and animations created with imageio.
      `,
      github: "https://github.com/dswho2/Ising-Model",
      technologies: ["Python", "NumPy", "Google Colab"],
      image: ising_image
    }, 
    {
      title: "Personal Website v1",
      description: "An older version of my personal portfolio website built with HTML, CSS, and JavaScript, featuring smooth scrolling, an interactive title card, and responsive design. This was previously hosted with Github Pages, although no longer in use.",
      github: "https://github.com/dswho2/website_v1",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      image: website_v1
    }
    // Add more projects
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-lg space-y-2">
      <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          isDimmed={hoveredIndex !== null && hoveredIndex !== index}
          onHover={() => setHoveredIndex(index)}
          onHoverLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

export default Projects;
