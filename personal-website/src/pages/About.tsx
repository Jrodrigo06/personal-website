import {StarBackground} from '../components/StarBackground';
import { LightBackground } from "../components/LightBackground";
import {useTheme} from '../hooks/ThemeContext';
import { SpotifyCard } from '../components/SpotifyCard';
import { useState, useEffect } from 'react';
import React from 'react';
import generateLogo from '../assets/genlogo.png';
import morseLogo from '../assets/morse_corp_logo.jpg';
import regeneronLogo from '../assets/regeneron_logo.jpg';
import bchLogo from '../assets/bostonchildrenshospital_logo.jpg';
import ideaLogo from '../assets/ideaneu_logo.jpg';
import khouryLogo from '../assets/khoury_college_logo.jpg';
import vLabsLogo from '../assets/v_labs.jpg';
import albanyLogo from '../assets/albany_medical_center_logo.jpg';


export const About = () => {

    const { theme } = useTheme(); 

    const [mounted, setMounted] = useState(false);
        useEffect(() => {
        setMounted(true);
        }, []);

        const techStack = {
          Languages: ["Python", "Java", "SQL", "TypeScript", "C++"],
        
          "Frameworks & APIs": [
            "FastAPI",
            "Flask",
            "React",
            "Next.js",
            "Tailwind CSS"
          ],
        
          "Machine Learning": [
            "NumPy",
            "Scikit-Learn",
            "PyTorch",
            "OpenCV"
          ],
        
          Databases: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "pgvector",
            "ChromaDB"
          ],
        
          Tools: [
            "Git",
            "Docker"
          ],
        
          Cloud: [
            "AWS",
            "Azure",
            "DigitalOcean"
          ]
        };

      const experiences = [
        {
          company: "Generate Product Development Studio",
          logo: generateLogo,
          location: "Boston, MA",
          roles: [
            {
              title: "Tech Lead - ???",
              date: "Dec 2025 - Present",
              bullets: [
                "New project 🫣...",
              ]
            },
            {
              title: "Tech Lead - Unsprawl",
              date: "Jul 2025 - Dec 2025",
              bullets: [
                "Led a team of 8 to build an task deduplication platform that integrates with Jira, Trello, and Slack to help PMs identify duplicate work",
                "Built the backend with FastAPI and PostgreSQL, designed ML pipelines for task extraction and duplicate detection using embeddings/LLMs",
                "Led workshops and helped our team learn full-stack development, APIs, containerization, and deployment to production"
              ]
            }
          ]
        },
        {
          company: "MORSE Corp",
          logo: morseLogo,
          location: "Boston, MA",
          roles: [
            {
              title: "Incoming Software/ML Engineering Co-op",
              date: "Jan 2026 - Jun 2026",
              bullets: [
                "Incoming ML SWE"
              ]
            }
          ]
        },
        {
          company: "Regeneron",
          logo: regeneronLogo,
          location: "Rensselaer, NY",
          roles: [
            {
              title: "Incoming ML Intern",
              date: "Jun 2026 - Aug 2026",
              bullets: [
                "Developing a generative AI model to be integrated into Regeneron’s visualization platform, plus more ML projects"
              ]
            }
          ]
        },
        {
          company: "Boston Children's Hospital",
          logo: bchLogo,
          location: "Boston, MA",
          roles: [
            {
              title: "Machine Learning Research Intern",
              date: "Sep 2025 - Dec 2025",
              bullets: [
                "Built an automated organoid segmentation pipeline using Python, OpenCV, reducing manual effort for pediatric GI imaging studies"
              ]
            }
          ]
        },
        {
          company: "IDEA: Northeastern University's Venture Accelerator",
          logo: ideaLogo,
          location: "Boston, MA",
          roles: [
            {
              title: "Data Analyst",
              date: "May 2025 - Present",
              bullets: [
                "Built a matchmaking algorithm and backend system to help entrepreneurs connect with each other at a big networking event",
              ]
            }
          ]          
        },
        {
          company: "Khoury College of Computer Sciences",
          logo: khouryLogo,
          location: "Boston, MA",
          roles: [
            {
              title: "Teaching Assistant (OOD)",
              date: "Aug 2025 - Dec 2025",
              bullets: [
                "Led weekly labs of 40+ students, covering Java, UML, and design patterns and provided support through office hours",
              ]
            }
          ]
        },
        {
          company: "Vitality Labs",
          logo: vLabsLogo,
          location: "Boston, MA (Remote)",
          roles: [
            {
              title: "Machine Learning Engineer Intern",
              date: "Jun 2025 - Aug 2025",
              bullets: [
                "Developed ML backend system and models for demoing to early investors",
              ]
            }
          ]
        },
        {
          company: "Albany Medical Center",
          logo: albanyLogo,
          location: "Albany, NY",
          roles: [
            {
              title: "Data Analyst Intern",
              date: "Jun 2023 - Sep 2023",
              bullets: [
                "Learned hospital analytics workflows, gaining domain knowledge in healthcare KPIs and reporting and built Power BI dashboards",
              ]
            }
          ]
        }
      ]

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
            
        <div className="relative flex flex-col md:flex-row md:justify-between gap-8 items-stretch">
            {/* LEFT SIDE */}
                <div className="relative w-full md:w-1/3 md:left-[8.3333%] p-6 bg-background/30 backdrop-blur-sm rounded-xl shadow-primary-center">
                    <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
                    <div className='space-y-6 text-center md:text-left text-lg leading-relaxed max-w-prose'>
                        <p>
                        I'm Jerome Rodrigo, a second-year student at Northeastern University majoring in Data Science and Math, and I plan to graduate in April 2028. 
                        </p>
                        <p>  </p>
                        <p>
                        Right now I'm a tech lead at Generate working on a new client project, and I'm excited to be co-oping at MORSE Corp this spring and interning at Regeneron over the summer!
                        </p>
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
        <div className="relative w-full md:w-[calc(33.333%-1rem)] md:mr-[8.3333%] p-6 bg-background/30 backdrop-blur-sm rounded-xl shadow-primary-center flex flex-col">
        <h3 className="text-3xl font-semibold mb-4">What I've used</h3>
                <WhatIveUsed />
            </div>

        </div>

    
    
      <div className="mt-16 p-6 bg-background/30 backdrop-blur-sm rounded-xl shadow-primary-center md:w-5/6 md:mx-auto">


        {/*Expierence section */}
        <h2 className="text-3xl font-bold mb-8 text-primary">Experience</h2>
        {experiences.map((exp, idx) => (
            <React.Fragment key={idx}>
              <div className={idx < experiences.length - 1 ? "mb-4 pb-4" : "mb-4"}>
                {/* Company header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-md object-cover"/>
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                  </div>
                  <span className="text-base text-foreground/60">{exp.location}</span>
                </div>

                {/* Roles - OUTSIDE the header div */}
                {exp.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className={roleIdx > 0 ? "mt-6 ml-[calc(3rem+1rem)]" : "mt-4 ml-[calc(3rem+1rem)]"}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{role.title}</h4>
                      <span className="text-sm text-foreground/70">{role.date}</span>
                    </div>
                    
                    <ul className="space-y-2 ml-4">
                      {role.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="text-foreground/90 text-left text-base">
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {idx < experiences.length - 1 && (
                <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent my-6 opacity-60"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};