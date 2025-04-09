
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
const YEAR = new Date().getFullYear();
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const SOCIAL_MEDIA = [
  {
    icon: <FaLinkedin className="text-blue-700" size={20} />,
    link: "https://www.linkedin.com/in/chinmay-kulkarni-03a0721ba",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub className="text-gray-800" size={20} />,
    link: "https://github.com/chinmaykul-1",
    label: "GitHub",
  },
  {
    icon: <FaEnvelope className="text-red-600" size={20} />,
    link: "mailto:chinmaykulkarni81@gmail.com",
    label: "Email",
  }
];

const COMPANY = [
  {
    name: "About Us",
    link: "https://www.creative-tim.com/presentation?ref=astrolaunch-ui",
  },
  {
    name: "Blog",
    link: "https://www.creative-tim.com/blog?ref=astrolaunch-ui",
  },
  {
    name: "Github",
    link: "https://github.com/creativetimofficial?ref=astrolaunch-ui",
  },
  {
    name: "Free Products",
    link: "https://www.creative-tim.com/templates/free?ref=astrolaunch-ui",
  },
];

const HELP = [
  {
    name: "Knowledge Center",
    link: "https://www.creative-tim.com/knowledge-center?ref=astrolaunch-ui",
  },
  {
    name: "Contact Us",
    link: "https://www.creative-tim.com/contact-us?ref=astrolaunch-ui",
  },
  {
    name: "Premium Support",
    link: "https://www.creative-tim.com/support-terms?ref=astrolaunch-ui",
  },
  {
    name: "Pricing",
    link: "/#pricing",
  },
];

const RESOURCES = [
  {
    name: "Documentation",
    link: "https://www.creative-tim.com/learning-lab/astro/overview/astro-launch-ui?ref=astrolaunch-ui",
  },
  {
    name: "Custom Development",
    link: "https://www.creative-tim.com/services/updivision?ref=astrolaunch-ui",
  },
  {
    name: "Discord",
    link: "https://discord.gg/WCvQWMwT",
  },
  {
    name: "Tailwind Components",
    link: "https://tailwindcomponents.com/?ref=astrolaunch-ui",
  },
];

const TECHS = [
  {
    name: "React",
    link: "#",
  },
  {
    name: "Astro",
    link: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary dark:text-white"
            >
              Chinmay Kulkarni
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600 dark:!text-gray-300 ">
            DevOps Engineer @ TCS
            </Typography>
            <div className="mt-6">
            <div className="mt-6 flex space-x-3">
  {SOCIAL_MEDIA.map(({ icon, link, label }, key) => (
    <a
      key={key}
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full border-[1.5px] border-blue-gray-50 p-3 hover:bg-blue-50 transition-all dark:text-white bg-gray-100"
    >
      {icon}
    </a>
  ))}
</div>
   </div>
          </div>
          
        </div>
        <hr className="my-6 border-blue-gray-50 " />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
           
            <div className="text-md mt-2 py-1 font-normal text-gray-600 dark:text-white">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                Chinmay Kulkarni
              </a>{" "}
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
