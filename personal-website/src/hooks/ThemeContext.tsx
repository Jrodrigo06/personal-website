import { createContext, useContext, useEffect, useState } from "react";


type Theme = "light" | "dark";



interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
  }
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

  export const ThemeProvider = ({ children }: { children: React.ReactNode}) => {
    const[theme, setTheme] = useState<Theme>("light");
    
    useEffect(() => {
      const storedTheme = (localStorage.getItem("theme") as Theme) || "light";
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      document.documentElement.classList.toggle("light", storedTheme === "light");
      setTheme(storedTheme);
    }, []);
    
    const toggleTheme = () => {
      const next = theme === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.classList.toggle("light", next === "light");
      localStorage.setItem("theme", next);
      setTheme(next);
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