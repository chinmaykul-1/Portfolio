import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 py-20 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          {/* Left Text Content */}
          <div className="text-center dark:text-white lg:text-left">
          

            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-10 leading-tight lg:text-6xl dark:text-white"
            >
              Thanks for stopping by !
            </Typography>

            <Typography variant="lead" className="lg:pr-20 text-blue-gray-800 dark:text-white">
            Read below to know more about myself and my background.
            </Typography>

            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/chinmay-kulkarni-03a0721ba/"
                target="_blank"
                rel="noreferrer"
              >
                <Button color="dark" className="flex items-center">
                  📄 Let's Connect !
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden lg:flex">
            <img
              src="MyIMG2.jpg"
              alt="Chinmay DevOps"
              className="max-w-md rounded-3xl ml-auto"
            />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
