import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import personAnimation from "../../../public/lottieAnimation.json";

export function HeroPresentation() {
  // Variants for text content animation
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Variants for image animation
  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <ThemeProvider>
      <Navbar />
      <div>

      <header className="relative  w-screen bg-white dark:bg-gray-800 px-8  lg:mb-36 overflow-hidden">
        {/* Background animation container */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <Lottie 
            animationData={personAnimation} 
            loop={true} 
            autoPlay={true}  
            className="absolute -top-80 -left-20 opacity-40"
            style={{ 
              width: '1100px', 
              height: '1100px',
              pointerEvents: 'none' 
            }}
          />
        </div>
        
        <div className="container mx-auto grid items-center lg:grid-cols-2 relative z-10">
          {/* Animated Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left pt-32"
          >
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight font-black dark:text-white text-4xl lg:text-6xl"
            >
              A warm greeting from <span className="text-orange-900 dark:text-orange-400">Chinmay</span>!
            </Typography>
            <Typography
              variant="lead"
              color="blue-gray"
              className="dark:text-white mb-8  text-lg lg:text-xl"
            >
              <div className="mr-0 text-3xl font-bold " >

              DevOps Engineer
              </div>
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              {/* <a
                href="https://drive.google.com/file/d/1i3i7YzuZUzIrdHALMIsvXW5Eolp8H0n3/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Button color="dark" className="flex items-center">
                  View Resume
                </Button>
              </a> */}
            </div>
          </motion.div>

          {/* Animated Image Content */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-end"
          >
            <img
              src="MyImage.jpeg"
              alt="Chinmay"
              className="rounded-xl h-[620px] w-[540px] object-cover shadow-lg border border-gray-300 dark:border-gray-700"
            />
          </motion.div>
        </div>
       
      </header>

     
            </div>
    </ThemeProvider>
  );
}

export default HeroPresentation;