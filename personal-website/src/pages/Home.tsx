import {StarBackground} from '../components/StarBackground';
import { LightBackground } from "../components/LightBackground";
import {useTheme} from '../hooks/ThemeContext';
import { Hero } from '../components/Hero';
import { useEffect, useState } from "react";


export const Home = () => {

    const { theme } = useTheme(); 

    const [mounted, setMounted] = useState(false);
        useEffect(() => {
            setMounted(true);
        }, []);


    return <div className = "min-h-dvh bg-background text-foreground overflow-x-hidden">


        {mounted && (theme === "dark" ? <StarBackground /> : <LightBackground />)}
        {/* Navbar */}
        <Hero />
       

        {/* Footer */}

        </div>;
}