import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import ThemeProvider from "../theme-provider";
function FeatureCard({ icon, title, children }) {
  return (
    <ThemeProvider>
    <Card color="transparent " className="dark:bg-gray-800" shadow={false}>
      <CardBody className="grid justify-center text-center ">
        {icon}
        <Typography variant="h5" color="blue-gray" className="dark:text-white mb-2 !font-semibold">
          {title}
        </Typography>
        <Typography color="blue-gray" className=" dark:text-white px-8 font-normal text-gray-700">
          {children}
        </Typography>
      </CardBody>
    </Card>
    </ThemeProvider>
  );
}

const features = [
  {
    icon: (
      <img
        className="w-32 mx-auto mb-4"
        src="Automation.webp"
        alt="Automation Aficionados"
      />
    ),
    title: "Configuration Management",
    description:
      "Optimized deployment processes through innovative Ansible scripts and tailored Python modules, slashing manual tasks and expediting delivery.",
  },
  {
    icon: (
      <img
        className="w-32 mx-auto mb-4"
        src="dock_container.jpeg"
        alt="Cloud & Container Specialists"
      />
    ),
    title: "Container Orchestration",
    description:
      "Designed resilient, secure cloud architectures using Kubernetes, AWS EKS, and container orchestration best practices to support scalable, dynamic environments.",
  },
  {
    icon: (
      <img
        className="w-32 mx-auto mb-4"
        src="devops.png"
        alt="CI/CD Innovators"
      />
    ),
    title: "CI/CD",
    description:
      "Streamlined software delivery with robust Jenkins and Terraform-driven CI/CD pipelines, enabling rapid iterations and continuous improvement.",
  },
  
  {
    icon: (
      <img
        className="w-32 mx-auto mb-4"
        src="cloud.jpeg"
        alt="Cloud & Container Specialists"
      />
    ),
    title: "Cloud Platforms",
    description:
      "Architected resilient cloud environments on AWS and Azure, combining cutting-edge container orchestration and automation to ensure high performance and continuous availability.",
  },
  {
    icon: (
      <img
        className="w-32 mx-auto mb-4"
        src="IAAC.png"
        alt="Cloud & Container Specialists"
      />
    ),
    title: "Infrastructure as Code",
    description:
      "Implemented Infrastructure as Code with Terraform and Ansible to automate provisioning, enhance consistency, and reduce configuration drift",
  },
  {
    icon: (
      <img
        className="w-32 mx-auto mb-4"
        src="scripting.png"
        alt="Cloud & Container Specialists"
      />
    ),
    title: "Programming / Scripting",
    description:
      "Leveraged Python and Shell scripting to build efficient automation workflows, enabling self-healing systems and reducing manual overhead.",
  }
];

export function FeatureLanding() {
  // Container variant for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Each card will slide up (from 50px below) and fade in
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        <div className="flex justify-center items-center relative z-5">
          <Typography color="dark" className="text-xl mr-2 font-normal">
            {/* Optional Heading */}
          </Typography>
        </div>
      </div>
      <motion.div
        className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map(({ icon, title, description }) => (
          <motion.div key={title} variants={cardVariants}>
            <FeatureCard icon={icon} title={title} >
              {description}
            </FeatureCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FeatureLanding;
