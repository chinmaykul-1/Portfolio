import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

const achievements = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Demonstrates foundational AWS cloud expertise and commitment to excellence.",
    moreDetails:
      "This certification validates your foundational knowledge of AWS services, architecture, security, and pricing. It is recognized industry-wide and a testament to your expertise in cloud computing.",
    img: "aws.png", // Replace with your actual image path
  },
  {
    title: "Microsoft Certified Azure Fundamentals (AZ-900)",
    description: "Validates your understanding of cloud concepts and Microsoft Azure services.",
    moreDetails:
      "This certification provides a broad understanding of cloud services and how those services are provided with Microsoft Azure. It ensures you have a practical grasp of Azure governance, compliance, and pricing structures.",
    img: "azure.jpeg", // Replace with your actual image path
  },
  {
    title: "Elevate Wings Award",
    description: "Awarded for successfully clearing the Wings1 Exam and excellence in performance.",
    moreDetails:
      "The Elevate Wings Award recognizes exceptional performance and commitment to professional growth. It reflects excellence in clearing challenging certification exams and deploying advanced industry practices.",
    img: "award.png", // Replace with your actual image path
  },
  {
    title: "Udemy  Certificate of Completion",
    description: "Awarded for successfully clearing the Wings1 Exam and excellence in performance.",
    moreDetails:
      "The Elevate Wings Award recognizes exceptional performance and commitment to professional growth. It reflects excellence in clearing challenging certification exams and deploying advanced industry practices.",
    img: "award.png", // Replace with your actual image path
  }
];

export function PalettePresentation() {
  const [selected, setSelected] = useState(null);

  // Opens modal with selected achievement info
  const handleCardClick = (item) => {
    setSelected(item);
  };

  // Closes the modal window
  const closeModal = () => {
    setSelected(null);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen w-screen bg-white py-20 px-8 dark:bg-gray-800">
        <div className="container mx-auto">
          <Typography variant="h1" color="blue-gray" className="text-center font-extrabold mb-12 dark:text-white">
            Certifications &amp; Awards
          </Typography>
          <div className="grid gap-12 md:grid-cols-2">
            {achievements.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(item)}
                className="cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img src={item.img} alt={item.title} className="w-32 h-32 object-contain" />
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <Typography variant="h3" color="blue-gray" className="font-bold mb-2">
                      {item.title}
                    </Typography>
                    <Typography color="gray" className="leading-relaxed">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Window */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
              >
                &#10005;
              </button>
              <div className="flex flex-col items-center text-center">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-24 h-24 object-contain mb-4"
                />
                <Typography variant="h3" color="blue-gray" className="font-bold mb-3">
                  {selected.title}
                </Typography>
                <Typography color="gray" className="mb-4">
                  {selected.moreDetails}
                </Typography>
                <Button onClick={closeModal} color="blue">
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;

// export default ;

// export default ;
