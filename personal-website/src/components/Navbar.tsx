import { cn } from "../lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";


const navItems = [
    {name: "Home", href: "/" },
    {name: "About Me", href: "/about"},
    {name: "Projects", href: "/projects"},
    {name: "Contact", href: "/contact"},
    {name: "Photos", href: "/photos"}
    
]

export const Navbar = () => {

    const[isOpen, setIsOpen] = useState(true);

    return <nav className={cn("fixed w-full z-40 pt-4 transition-all duration-300")}>

        <div className="container flex items-center justify-between"> 
            <a className="text-xl font-bold text-primary flex items-center"
                href="/">
                <span className="relative z-10">
                    {" "}
                    <span className="text-glow text-foreground"> Jerome's </span> Portfolio
                </span>
            </a>

            {/* desktop nav */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key = {key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile nav */}

            <button 
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
            > 
                {isOpen ? <X size={24} /> : <Menu size={24} />}{" "}
            </button>    


            <div className={cn('fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
                "transition-all duration-300 md:hidden",
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>    
                <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => (
                    <Link
                    key={key}
                    to={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                        {item.name}
                    </Link>
                ))}
                </div>
            </div> 

        </div>

    </nav>
};