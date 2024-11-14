// src/pages/Experience.tsx
import React, { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      dateRange: "Jun. 2024 — PRESENT",
      title: "R&D Software Test Engineer",
      company: "Holor Technology, Inc.",
      description: "Developed testing frameworks for chip design simulation software in C++ and Python, focusing on resistance extraction benchmarks to enhance signal integrity. Verified resistance extraction accuracy with Design Force CR-8000, supporting reliable, high-performance chip design. Authored Numerical Methods for Electromagnetic Simulation using Velocity Gauge, submitted to the 62nd DAC.",
      skills: ["LaTeX", "Python", "C++", "Design Force CR-8000"]
    },
    {
      dateRange: "Jun. 2023 — Aug. 2023",
      title: "Application Engineer",
      company: "Holor Technology, Inc.",
      description: "Created a comprehensive user manual from scratch in LaTeX for a 3D extraction and simulation software, supporting True 3D parasitic R, L, C, G extraction with hierarchical, flattened, and incremental modes. Documented detailed procedures for ECO simulation and layout traceability, empowering users to validate designs and debug with confidence. Enhanced user efficiency by clarifying complex features and workflows.",
      skills: ["LaTeX", "Python", "C++", "Simulation Algorithms"]
    },
    {
      dateRange: "Sep. 2021 — Dec. 2021",
      title: "CS Research Mentorship Program Intern",
      company: "Google",
      description: "Designed and implemented machine learning models, including linear regression using PyTorch Autograd, to analyze and optimize real-world datasets, applying gradient-based optimization techniques. Conducted in-depth research on advanced topics in Physics-Based Deep Learning, synthesizing key insights from papers and presenting findings to technical teams. Collaborated with mentors and peers to improve the application of machine learning algorithms in practical scenarios, enhancing problem-solving and research presentation skills.",
      skills: ["Python", "Pytorch", "Autograd", "Machine Learning"]
    },
    {
      dateRange: "Aug. 2016 — May. 2017",
      title: "Robotics Software Developer",
      company: "Lynbrook High School FTC Team",
      description: "Programmed autonomous and manual control software in Java (using Eclipse IDE) for competition robots, designing systems for a small ball collector and a large yoga ball lifter. Collaborated with a team of six to refine the robot’s mechanics and control logic, qualifying for the FIRST Tech Challenge. Integrated sensors and servo motors for precise navigation and real-time adjustments during competitions.",
      skills: ["Java", "Eclipse IDE", "Robotics"]
    },
    {
      dateRange: "Jun. 2016 — Jul. 2016",
      title: "Machine Learning Intern",
      company: "Stanford",
      description: "Developed a fully-connected neural network using PyTorch and TensorFlow to classify handwritten digits from images. Integrated Arduino Wi-Fi boards to connect hardware with the neural network, gaining experience in embedded systems and IoT. Utilized Java-ML to implement additional machine learning algorithms, enhancing real-time image recognition performance.",
      skills: ["Python", "Pytorch", "TensorFlow", "Java-ML", "Machine Learning"]
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
