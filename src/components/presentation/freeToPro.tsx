import React from "react";
import { Typography, Chip } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { motion } from "framer-motion";
import {
  FaCode, FaServer, FaTools, FaDocker, FaAws, FaCloud, FaCogs, FaLaptopCode,
} from "react-icons/fa";

const skillsData = [
  {
    category: "Programming / Scripting",
    icon: <FaCode size={32} className="text-blue-600 mb-2" />,
    skills: ["Python", "Shell"],
  },
  {
    category: "Operating Systems",
    icon: <FaServer size={32} className="text-green-600 mb-2" />,
    skills: ["Linux", "Windows"],
  },
  {
    category: "IaC / CI-CD / Configuration",
    icon: <FaCogs size={32} className="text-orange-500 mb-2" />,
    skills: ["Terraform", "Ansible", "Jenkins", "Git", "Bitbucket"],
  },
  {
    category: "Container Orchestration",
    icon: <FaDocker size={32} className="text-blue-400 mb-2" />,
    skills: ["OCP", "EKS", "Kubernetes", "Docker"],
  },
  {
    category: "Cloud Platforms",
    icon: <FaCloud size={32} className="text-indigo-500 mb-2" />,
    skills: ["AWS", "Azure"],
  },
  {
    category: "Monitoring & Tools",
    icon: <FaLaptopCode size={32} className="text-pink-500 mb-2" />,
    skills: ["Apigee", "IBM MQ", "Dynatrace", "Jira", "SNOW", "Confluence", "Splunk"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function FigmaPresentation() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-screen bg-white px-6 py-20 bg-gradient-to-b dark:bg-gray-800">
        <div className="container mx-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-center font-extrabold mb-12 dark:text-white"
          >
            Skills & Technologies
          </Typography>

          <motion.div
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillsData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
                variants={cardVariants}
              >
                <div className="text-center mb-4">
                  {item.icon}
                  <Typography variant="h5" color="blue-gray" className="font-bold">
                    {item.category}
                  </Typography>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {item.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      value={skill}
                      color="blue"
                      className="bg-blue-100 text-blue-700 font-medium"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
}

// export default SkillsPresentation;

export default FigmaPresentation;


// export default ;
