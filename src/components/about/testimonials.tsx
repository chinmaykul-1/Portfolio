import React from "react";
import { Chrono } from "react-chrono";
import ThemeProvider from "../theme-provider";

// Standardize each event with consistent keys for Chrono:
// Use "title" for the timeline label, "cardTitle" for the event title,
// and "cardDetailedText" for the event description.
const timelineEvents = [
  {
    title: "May 2021",
    cardTitle: "Joined TCS as Ignite Trainee",
    cardDetailedText:
      "Started my career journey with Tata Consultancy Services under the Ignite program, building strong foundations in DevOps and cloud technologies.",
  },
  {
    title: "Aug 2021",
    cardTitle: "Assigned to Financial Services Project",
    cardDetailedText:
      "Onboarded to a project for a Finland-based financial group as a DevOps Engineer, driving automation and infrastructure reliability across cloud-native environments.",
  },
  {
    title: "Feb 2022",
    cardTitle: "AWS Cloud Practitioner Certified",
    cardDetailedText:
      "Earned AWS Cloud Practitioner certification, validating my cloud fluency and enabling better architecture and automation decisions in AWS-based projects.",
  },
  {
    title: "Nov 2022",
    cardTitle: "Cracked TCS Digital Cadre",
    cardDetailedText:
      "Cleared TCS Wings1 Exam to enter the Digital cadre, recognized for advanced technical capability and contribution to high-value digital transformation initiatives.",
  },
  {
    title: "May 2024",
    cardTitle: "Completed 3 Years at TCS",
    cardDetailedText:
      "Marked 3 successful years at TCS, contributing to critical DevOps initiatives across cloud, automation, and platform engineering.",
  },
  {
    title: "Jun 2024",
    cardTitle: "Microsoft Azure Fundamentals Certified",
    cardDetailedText:
      "Achieved AZ-900 certification, strengthening multi-cloud proficiency and supporting secure, scalable solutions on Azure.",
  }
]
;

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
