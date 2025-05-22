import {StarBackground} from '../components/StarBackground';
import { LightBackground } from "../components/LightBackground";
import {useTheme} from '../hooks/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';


export const About = () => {

    const { theme } = useTheme(); 


   return( 
    <div className="flex flex-col md:flex-row">
    <ThemeToggle />
    {theme === "dark" ? <StarBackground /> : <LightBackground />}
    {/* left column */}
    <div className="md:w-1/2">
      <h2 className="text-primary font-bold text-4xl mt-10 ml-0">About Me!</h2>
    </div>
  
    {/* right column */}
    <div className="md:w-1/2">
      {/* your tech‐stack list */}
    </div>
  </div>
   )
}