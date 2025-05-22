import { createContext, useContext, useEffect, useState } from "react";

//Defines types for themes
type Theme = "light" | "dark";


//Defines what will provided
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
  }
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

  export const ThemeProvider = ({ children }: { children: React.ReactNode}) => {
    const[theme, setTheme] = useState<Theme>("light");
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme === "dark") {
          document.documentElement.classList.add("dark");
          setTheme("dark");
        } else {
          document.documentElement.classList.remove("dark");
          setTheme("light");
        }
      }, []);
    
      const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      };
    
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    
    export const useTheme = () => {
      const ctx = useContext(ThemeContext);
      if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
      return ctx;
    };