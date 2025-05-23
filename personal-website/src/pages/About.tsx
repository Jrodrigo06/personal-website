import {StarBackground} from '../components/StarBackground';
import { LightBackground } from "../components/LightBackground";
import {useTheme} from '../hooks/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';


export const About = () => {

    const { theme } = useTheme(); 

    const techStack = {
        Languages : ["Java", "Python", "SQL", "TypeScript", "JavaScript", "C#"],
        "Frameworks & Libraries": ["React", "Flask","Next.js", "Tailwind CSS"],
        "Data Science": ["NumPy", "OpenCV", "Power BI", "Jupyter", "PyTorch", "Scikit-Learn", "Gymnasium", "Matplotlib"],
        Databases:      ["PostgreSQL", "MongoDB", "FAISS"],
        Tools:          ["Git", "Docker","VS Code", "Figma"],
        Cloud: ["AWS", "Azure"]
    }

    const WhatIveUsed = () => (
        <section className="mt-8 mb-8">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h4 className="text-xl font-medium mb-4">{category}</h4>
      
              <ul className="flex flex-wrap gap-2">
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
        <ThemeToggle />
            {theme === "dark" ? <StarBackground /> : <LightBackground />}
            {/* left column */}
        <div className="container mx-auto px-4 pt-24 pb-32 relative z-10">
            
            <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT SIDE */}
                <div className="relative w-full md:w-1/3 md:left-[8.3333%] p-6 bg-background/30 backdrop-blur-sm rounded-xl shadow-primary-center">
                    <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
                    <div className='space-y-6 text-center md:text-left text-lg leading-relaxed max-w-prose'>
                        <p>
                        I'm Jerome Rodrigo, a second-year student at Northeastern University majoring in Data Science and Math, and I plan to graduate in May 2028. 
                        </p>
                        <p>
                        Right now, I'm working as a data analyst at IDEA, Northeastern’s venture accelerator, helping startups and the team make sense of their data
                        and grow their ideas.
                        </p>
                        <p>
                            I'm from Albany, NY and now am mostly in Boston at Northeastern. Outside of class and work, I spend a lot of my free time cooking, gaming with friends, watching shows,
                            or with a camera taking pictures of whatever catches my eye!
                        </p>

                        <p> I’ve always loved experimenting things, whether it was putting together a
                            custom PC or messing with effects in video-editing to see what looked better. 
                            Diving into projects like this taught me how to learn quickly and independently!
                        </p>
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