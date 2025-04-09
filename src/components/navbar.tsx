import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  CodeBracketSquareIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

// Profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="Chinmay Kulkarni"
            className="border border-gray-300 p-0.5"
            src="MyImage.jpeg"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""}`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal" color={isLastItem ? "red" : "inherit"}>
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// Navigation list component
const navListItems = [
  {
    label: "About",
    href: "/about",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, href }) => (
        <Typography key={label} as="a" href={href} variant="large" color="blue-gray" className="font-bold">
          <MenuItem className="flex items-center gap-2 lg:rounded-full dark:text-white">
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [shouldShowBorder, setShouldShowBorder] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newValue;
    });
  };

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    const handleScroll = () => {
      setShouldShowBorder(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <Navbar
      className={`sticky inset-0 z-20 mx-auto max-w-screen-2xl p-2 lg:pl-6 mt-4 transition-shadow ${
        shouldShowBorder ? "border-b border-gray-300 shadow-none" : ""
      } dark:bg-gray-900 dark:border-gray-700`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900 dark:text-blue-gray-100">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-2xl"
          style={{
            fontFamily: "'Dancing Script'",
            fontWeight: 700,
          }}
        >
          Chinmay Kulkarni
        </Typography>
        <div className="hidden lg:flex ml-auto">
          <NavList />
        </div>

        {/* Social Links with Icons */}
        <div className="flex items-center gap-2 ml-4">
          <a href="https://github.com/chinmaykul-1" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="blue-gray" className="dark:text-white">
              <FaGithub className="text-xl" />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/chinmay-kulkarni-03a0721ba/" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="blue-gray" className="dark:text-white">
              <FaLinkedin className="text-xl" />
            </IconButton>
          </a>
          <a href="mailto:chinmaykulkarni81@gmail.com">
            <IconButton variant="text" color="blue-gray" className="dark:text-white">
              <FaEnvelope className="text-xl" />
            </IconButton>
          </a>

          <IconButton onClick={toggleDarkMode} color="blue-gray" variant="text" className="ml-2">
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </IconButton>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          {/* <a href="https://drive.google.com/file/d/1i3i7YzuZUzIrdHALMIsvXW5Eolp8H0n3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button color="dark">Download Resume</Button>
          </a> */}
        </div>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
