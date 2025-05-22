import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from '../components/StarBackground';
import { LightBackground } from "../components/LightBackground";
import {useTheme} from '../components/ThemeContext';

export const Home = () => {

    const { theme } = useTheme(); 

    return <div className = "min-h-dvh bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        {theme === "dark" ? <StarBackground /> : <LightBackground />}
        {/* Navbar */}

        {/* Main Content */}

        {/* Footer */}

        </div>;
}