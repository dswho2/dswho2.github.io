// src/pages/Projects.tsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

import DR_image from '../images/DR_model.jpg';
import personal_website from '../images/personal_website.png';

const Projects = () => {
  // Project data with title, description, star count, and technologies used
  const projects = [
    {
      title: "Diabetic Retinopathy Model",
      description: `
        Built a machine learning pipeline in Python to predict diabetic retinopathy severity from 35,000+ retinal images using k-means clustering and pretrained CNN models with TensorFlow. Optimized performance with cuDNN 8.1 for faster training and data processing.
      `,
      github: "https://github.com/dswho2/DR-model",
      technologies: ["Python", "Machine Learning", "Jupyter Notebook", "TensorFlow"],
      image: DR_image
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React, TypeScript, and Tailwind CSS to highlight my projects, skills, and experience. Hosted on GitHub Pages for seamless access.",
      github: "https://github.com/dswho2/dswho2.github.io",
      technologies: ["React", "TypeScript", "Tailwind CSS", "NodeJS", "GitHub Pages"],
      image: personal_website
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
