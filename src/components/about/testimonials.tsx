import React from "react";
import { Chrono } from "react-chrono";
import ThemeProvider from "../theme-provider";

// Standardize each event with consistent keys for Chrono:
// Use "title" for the timeline label, "cardTitle" for the event title,
// and "cardDetailedText" for the event description.
const timelineEvents = [
  {
    title: "May 2021",
    cardTitle: "Joined TCS as DevOps Engineer",
    cardDetailedText:
      "Started my journey at Tata Consultancy Services, focusing on building scalable and secure cloud solutions.",
  },
  {
    title: "Milestone 1",
    cardTitle: "Ansible Automation for Apigee",
    cardDetailedText:
      "Developed and implemented a dynamic Ansible automation script across dev, test, and prod for Apigee platform services—reducing deployment time by 94% and cutting manual intervention by 75%.",
  },
  {
    title: "Milestone 2",
    cardTitle: "AWS OS Security Patching",
    cardDetailedText:
      "Engineered and deployed a robust automation solution for OS security patching on AWS EC2, reducing monthly patching time by over 70% and manual intervention by 90%.",
  },
  {
    title: "Milestone 3",
    cardTitle: "OpenShift LDAPS Migration",
    cardDetailedText:
      "Migrated the OpenShift Container Platform's authentication from standard LDAP to secure LDAPS, ensuring zero downtime and compliance with enterprise policies.",
  },
  {
    title: "Milestone 4",
    cardTitle: "Custom Ansible Module Development",
    cardDetailedText:
      "Developed a custom Ansible module in Python to extend Apigee operations, enabling seamless automation of platform-specific tasks.",
  },
  {
    title: "Milestone 5",
    cardTitle: "Automated Qpid DLQ Recovery",
    cardDetailedText:
      "Automated Qpid DLQ message recovery using a Python script with Base64-encoded credentials, replacing manual monitoring with a cron-driven self-healing process.",
  },
  {
    title: "Milestone 6",
    cardTitle: "Dynatrace Dashboard Implementation",
    cardDetailedText:
      "Designed and implemented custom Dynatrace dashboards and alerting rules to monitor OpenShift clusters—improving real-time visibility and proactive incident response.",
  },
  {
    title: "Milestone 7",
    cardTitle: "SSL/TLS Certificate Renewals",
    cardDetailedText:
      "Performed SSL/TLS certificate renewals across OpenShift, Kafka, and Apigee platforms, ensuring secure communication and compliance with minimal downtime.",
  },
  {
    title: "Milestone 8",
    cardTitle: "OCP Cluster Upgrade",
    cardDetailedText:
      "Led the upgrade of the OpenShift Container Platform from version 4.10 to 4.12, handling pre-upgrade validation, operator health checks, and post-upgrade monitoring.",
  },
  {
    title: "Milestone 9",
    cardTitle: "Kafka Certificate Chain Renewal",
    cardDetailedText:
      "Automated the SSL certificate chain renewal and keystore management across multi-node Kafka clusters using Ansible, ensuring a smooth migration from Entrust CA.",
  },
];

export function ExperienceTimeline() {
  return (
    <ThemeProvider>

    <div className="w-screen flex justify-center items-center">
      <div className="w-3/4 flex justify-center items-center mb-10 dark:text-white">
        <Chrono
          items={timelineEvents}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "#6b7280",
            secondary: "#d1d5db",
            cardBgColor: "#f3f4f6",
            titleColor: "#374151",
            // Add dark mode specific styles
            cardForeColor: "var(--text-color)",
            titleColorActive: "var(--text-color)",
          }}
          classNames={{
            // Apply dark mode text color using CSS variables
            card: "dark:!bg-gray-800 dark:!text-white",
            title: "dark:!text-white",
            cardTitle: "dark:!text-white",
            cardSubTitle: "dark:!text-white",
            cardDetailedText: "dark:!text-white",
          }}
          // contentDetailsStyles={
        />
      </div>
    </div>
            </ThemeProvider>
  );
}
export default ExperienceTimeline;
