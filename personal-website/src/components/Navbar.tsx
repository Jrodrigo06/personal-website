import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";


const navItems = [
    {name: "Home", href: "/" },
    {name: "About Me", href: "/about"},
    {name: "Projects", href: "/projects"},
    {name: "Contact", href: "/contact"},
    {name: "Photos", href: "/photos"}
    
]

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const[isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <>
        <nav
          className={cn(
            "fixed w-full z-40 pt-4 transition-all duration-300",
            isScrolled
              ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
              : "py-5"
          )}
        >
          <div className="mx-auto flex items-center justify-between px-8 w-full">
            

            <Link to="/" className="text-xl font-bold text-primary">
              <span className="text-glow text-foreground">Jerome’s</span> Portfolio
            </Link>
  
           
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
            </div>
  
           
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="md:hidden p-2 text-foreground z-50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
  

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl text-foreground/80 hover:text-primary mb-8"
            >
              {item.name}
            </Link>
          ))}

          <ThemeToggle />
        </div>
      </>
    );
};