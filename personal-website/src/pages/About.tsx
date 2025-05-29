import {StarBackground} from '../components/StarBackground';
import { LightBackground } from "../components/LightBackground";
import {useTheme} from '../hooks/ThemeContext';
import { SpotifyCard } from '../components/SpotifyCard';
import { useState, useEffect } from 'react';


export const About = () => {

    const { theme } = useTheme(); 

    const [mounted, setMounted] = useState(false);
        useEffect(() => {
        setMounted(true);
        }, []);

        const techStack = {
          Languages : ["Java", "Python", "SQL", "TypeScript", "JavaScript", "C#"],
          "Frameworks & Libraries": ["React", "Flask","Next.js", "Tailwind CSS", "Streamlit"],
          "Data Science / ML": ["NumPy", "OpenCV",  "Jupyter", "PyTorch", "Scikit-Learn", 
              "Gymnasium", "Anaconda", "Hugging Face"],
          "Data Visualization" : ["Matplotlib","Power BI", "Tableu", "Excel"],
          Databases:      ["PostgreSQL","MySQL","MongoDB", "FAISS"],
          Tools:          ["Git", "Docker","VS Code", "Figma"],
          Cloud: ["AWS", "Azure", "Databricks"]
      }

    const WhatIveUsed = () => (
        <section className="mt-8 mb-4">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h4 className="text-xl font-medium mb-4">{category}</h4>
      
              <ul className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm font-medium border border-primary rounded-full px-3 py-1 text-primary
                               hover:bg-primary hover:text-background transition-colors duration-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      );


   return( 
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
            {mounted && (theme === "dark" ? <StarBackground /> : <LightBackground />)}
            {/* left column */}
        <div className="container mx-auto px-4 pt-24 pb-40 relative z-10">
            
            <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT SIDE */}
                <div className="relative w-full md:w-1/3 md:left-[8.3333%] p-6 bg-background/30 backdrop-blur-sm rounded-xl shadow-primary-center">
                    <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
                    <div className='space-y-6 text-center md:text-left text-lg leading-relaxed max-w-prose'>
                        <p>
                        I'm Jerome Rodrigo, a second-year student at Northeastern University majoring in Data Science and Math, and I plan to graduate in May 2028. 
                        </p>
                        <p>  </p>
                        <p>
                            I'm from Albany, NY and now am mostly in Boston at Northeastern. Outside of class and work, I spend a lot of my free time cooking, gaming with friends, watching shows,
                            or with a camera taking pictures of whatever catches my eye!
                        </p>

                        </div>
                    <div className='mt-8'> 
                        <SpotifyCard />
                    </div>

                    
                </div>

        {/* RIGHT SIDE */} 
            <div className="relative w-full md:w-1/3 md:absolute md:left-[58.3333%] p-6 bg-background/30 backdrop-blur-sm rounded-xl shadow-primary-center">
                <h3 className="text-3xl font-semibold mb-4">What I've used</h3>
                <WhatIveUsed />
            </div>

        </div>

    </div>
    
   
  </div>
   )
}