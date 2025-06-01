import { ArrowRight, Github } from "lucide-react"
import { useTheme } from "../hooks/ThemeContext"
import { useEffect, useState } from "react"
import { StarBackground } from "../components/StarBackground"
import { LightBackground } from "../components/LightBackground"

const projects = [
    {
        id: 1,
        title: "RAG Nutrition Recommender",
        description: `A simple web app that gives nutrition advice using a 
        Retrieval-Augmented Generation (RAG) system. It answers user questions by 
        retrieving relevant info from a document, and then generate responses with TinyLlama`,
        tags: ["React", "FastAPI", "MongoDB", "LangChain", "TinyLlama"],
        githubUrl: "https://github.com/Jrodrigo06/llm-health-recommender"
    },

    {
        id: 2,
        title: "Blackjack RL",
        description: `A reinforcement learning project where I trained a Deep Q-Network (DQN) to play Blackjack. 
        The AI learned to make decisions through trial and error and reached a win/loss rate close to optimal play. 
        I also wrote a math paper exploring why I decided to use RL and DQN and then explaining the math behind it`,
        tags: ['OpenCV - In Progress', "Python", "Gymnasium"],
        githubUrl: "https://github.com/Jrodrigo06/BlackJackOpenCV"
    },

    {
        id: 3,
        title: "Healthcare Billing Prediction",
        description: `A machine learning project to predict medical costs based on a data set. I trained models like Random Forest and CatBoost, 
        used feature engineering and tuning to improve performance, and built a very simple web app with Flask to make predictions interactively.`,
        tags: ['Python', 'Flask', 'Jupyter', 'Scikit-learn', 'Anaconda'],
        githubUrl: "https://github.com/Jrodrigo06/MLProject-HealthCareBilling"

    }
]



export const Projects = () => {

    const { theme } = useTheme(); 

    const [mounted, setMounted] = useState(false);
        useEffect(() => {
        setMounted(true);
        }, []);

    return (
    <div>
        {mounted && (theme === "dark" ? <StarBackground /> : <LightBackground />)}
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured 
                    <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {projects.map((project, key) => (
                        <div key={key} className='group text-center bg-card rounded-lg overflow-hidden shadow-xs card-hover'>  
                            <div className="p-5">
                            <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-300"> {project.title} </h3>
                                <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">                              
                                    {project.tags.map((tag) => (                                    
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground">{tag}</span>
                                    ))}

                                    </div>
                                    <p className="text-left text-muted-foreground text-sm mb-4">{project.description}</p>

                                    <div className="flex items-center"> 
                                        <div className="flex space-x-3">
                                            <a 
                                            href={project.githubUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <Github size={20}/>
                                            </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>    
                    ))}

                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="github.com/Jrodrigo06"
                    target="_blank">
                        Check My GitHub <ArrowRight size={16} />
                         </a>
                </div>

            </div>

        </section>
    </div>
        )
}