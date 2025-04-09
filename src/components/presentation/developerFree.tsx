import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-screen bg-white py-20 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto px-6">
          <Typography
            variant="h1"
            color="blue-gray"
            className="dark:text-white text-center font-extrabold mb-16"
          >
            Projects
          </Typography>

          {/* Project 1 */}
          <div className="grid items-center dark:text-white gap-8 lg:grid-cols-2 mb-16">
            <div>
              <Typography
                color="blue"
                className="flex dark:text-gray-50 items-center font-bold text-lg mb-5"
              >
                Successfully Deployed Kubernetes Infrastructure on AWS EKS! 
              </Typography>
              <Typography variant="h2" color="blue-gray" className="dark:text-white mb-4 leading-tight">
                Automating Kubernetes Deployments Using Terraform, Ansible, and Jenkins
              </Typography>
              <Typography color="blue-gray" className="mb-4 dark:text-white text-justify">
                Over the past few days, I worked on automating the deployment of a containerized web application by provisioning an AWS EKS cluster using Terraform and deploying Kubernetes manifests with Ansible. Jenkins powered the full CI/CD automation flow, while Docker containerized the React frontend and Django backend. The app now runs in a scalable, managed Kubernetes environment.
              </Typography>
              <Typography color="blue-gray" className="mb-4 dark:text-white text-justify">
                Along the way, I tackled challenges related to service exposure and networking, learning key aspects of IAM roles, LoadBalancer configuration, NAT Gateway setup, Route Tables, and more. It was a deeply rewarding experience debugging Fargate pod issues and integrating Jenkins with cloud-native deployments.
              </Typography>
              <Typography color="blue-gray dark:text-white">
                <strong>Github:</strong>{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://github.com/chinmaykul-1/terraform-kube-cluster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </Typography>
            </div>
            <div className="flex justify-center">
              <img
                src="project1.jpeg"
                alt="AWS EKS Deployment Snapshot"
                className=" rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="project2.jpeg"
                alt="CI/CD Pipeline Snapshot"
                className=" rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Typography
                color="blue"
                className="flex items-center font-bold text-lg mb-5 dark:text-white"
              >
                CI/CD Pipeline for a Dockerized Django–React Application
              </Typography>
              <Typography variant="h2" color="blue-gray" className="dark:text-white mb-4 leading-tight">
                Automating Full-Stack Deployments with Jenkins and Docker
              </Typography>
              <Typography color="blue-gray" className="mb-4 dark:text-white text-justify">
                I designed and implemented a robust Jenkins pipeline that automated the entire CI/CD process for a Dockerized application. This project involved containerizing a React-based frontend and a Django backend using Docker, ensuring rapid and secure deployments on AWS EC2.
              </Typography>
              <Typography color="blue-gray" className="mb-4 dark:text-white text-justify">
                The pipeline integrated polling mechanisms for source code changes, proper secret management, and automated testing, making it a comprehensive solution for continuous delivery. This project was a fantastic journey in optimizing the development lifecycle and deployment consistency.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
