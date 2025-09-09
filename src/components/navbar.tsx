import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

// Navigation items with their target section IDs
const NAV_MENU = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={handleClick}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-500 transition-colors cursor-pointer"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography 
          as="a"
          href="#home"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          color="blue-gray" 
          className="text-lg font-bold cursor-pointer"
        >
          Mouhib Hermi
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((item) => (
            <NavItem key={item.name} href={item.href}>
              {item.name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <NavItem key={item.name} href={item.href}>
                {item.name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;