// src/pages/Experience.tsx
import React, { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      dateRange: "2024 — PRESENT",
      title: "TEST, TEST",
      company: "TEST",
      description: "testing long lines of description for the job and many words for the wrapping and also\nNew line testing.",
      skills: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      dateRange: "2002 — 2024",
      title: "TEST",
      company: "TEST",
      positions: ["TEST", "TESTEST"],
      description: "beepboop foo.",
      skills: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native"]
    }
    // Add more experiences
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-lg space-y-2">
      <h2 className="text-3xl font-semibold text-white mb-6">Experience</h2>
      
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          {...exp}
          isDimmed={hoveredIndex !== null && hoveredIndex !== index}
          onHover={() => setHoveredIndex(index)}
          onHoverLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

export default Experience;
