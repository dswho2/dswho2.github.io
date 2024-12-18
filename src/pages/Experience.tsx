// src/pages/Experience.tsx
import React, { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      dateRange: "Jun. 2024 — PRESENT",
      title: "R&D Software Engineer",
      company: "Holor Technology, Inc.",
      description: "Developed a Python-based testing framework for electromagnetic simulation software in C++ and Python, automating validation and ensuring accuracy within a 5% margin of error while reducing benchmark time by 15%. Integrated command-line automation for running benchmarks with various configurations, utilized Pandas for log analysis, and used pytest to organize and automate test cases. Designed a novel electromagnetic simulation method using the velocity gauge, optimizing runtime and accuracy. First author of 'Numerical Methods for Electromagnetic Simulation using Velocity Gauge', submitted to the 62nd DAC.",
      skills: ["Python", "pandas", "pytest", "C++", "LaTeX", "Design Force CR-8000"]
    },
    {
      dateRange: "Jun. 2023 — Aug. 2023",
      title: "Application Engineer",
      company: "Holor Technology, Inc.",
      description: "Developed a detailed user manual in LaTeX for 3D extraction and simulation software, covering true 3D parasitic R, L, C, G extraction in various modes. Streamlined ECO simulation and layout traceability procedures, improving design validation accuracy by 10% and simplifying complex workflows for enhanced user efficiency.",
      skills: ["Python", "C++", "LaTeX"]
    },
    {
      dateRange: "Jun. 2022 — Aug. 2022",
      title: "Software Engineer Intern",
      company: "Holor Technology, Inc.",
      description: "Processed and cleaned a dataset of 8,000 entries using Pandas, preparing it for PCA implementation with scikit-learn to support dimensionality reduction. Conducted data analysis and created Matplotlib visualizations to uncover trends, identify bugs, and improve accuracy by 15%, supporting research on a novel numerical method.",
      skills: ["Python", "pandas", "scikit-learn", "Matplotlib"]
    },
    {
      dateRange: "Sep. 2021 — Dec. 2021",
      title: "CS Research Mentorship Program Intern",
      company: "Google",
      description: "Designed and implemented machine learning models, including linear regression using PyTorch Autograd, to analyze and optimize real-world datasets, applying gradient-based optimization techniques. Conducted in-depth research on advanced topics in Physics-Based Deep Learning, synthesizing key insights from papers and presenting findings to technical teams. Collaborated with mentors and peers to improve the application of machine learning algorithms in practical scenarios, enhancing problem-solving and research presentation skills.",
      skills: ["Python", "PyTorch", "Autograd"]
    },
    {
      dateRange: "Aug. 2016 — May. 2017",
      title: "Robotics Software Developer",
      company: "Lynbrook High School FTC Team",
      description: "Programmed autonomous and manual control software in Java (using Eclipse IDE) for competition robots, designing systems for a small ball collector and a large yoga ball lifter. Collaborated with a team of six to refine the robot’s mechanics and control logic, qualifying for the FIRST Tech Challenge. Integrated sensors and servo motors for precise navigation and real-time adjustments during competitions.",
      skills: ["Java", "Eclipse IDE"]
    },
    {
      dateRange: "Jun. 2016 — Jul. 2016",
      title: "Machine Learning Intern",
      company: "Stanford",
      description: "Implemented edge detection and CNN algorithms using Deeplearning4j to improve image recognition accuracy and reduce processing time by 20%. Developed a fully-connected neural network in Java to classify handwritten digits from a dataset of 60,000 images, achieving 98% accuracy. Integrated Arduino Wi-Fi boards with the neural network, gaining hands-on experience in embedded systems and IoT connectivity.",
      skills: ["Java", "Deeplearning4j", "IoT"]
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
