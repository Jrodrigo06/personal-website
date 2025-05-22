import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/ThemeContext";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-4 right-5 z-50 pt-1 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-black" />
      )}
    </button>
  );
};
