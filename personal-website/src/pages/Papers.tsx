import {BookOpenText} from "lucide-react"
import { useTheme } from "../hooks/ThemeContext"
import { useEffect, useState } from "react"
import { StarBackground } from "../components/StarBackground"
import { LightBackground } from "../components/LightBackground"
import blackJack from "../assets/blackjack.png"
import graphdta from "../assets/graphdta.png"


const papers = [
    {
        id: 1,
        title: "GraphDTA Reimplementation",
        description: `A self-authored paper explaining the mathematical foundations of my GraphDTA replication, including GNN theory, matrix operations, normalization, and more.`,
        tags: [
        'Graph Neural Networks',
        'Graph Convolutional Networks',
        'Matrix Normalization',
        'Linear Algebra',
        'Bioinformatics',
        'Deep Learning'
        ],
        image: graphdta,
        paperUrl: "https://jerodrigo.com/graphdta.pdf"
    },

    {
        id: 2,
        title: "Blackjack RL",
        description: `Paper detailing the mathematical foundations of my Deep Q-Network Blackjack project, covering concepts like Q-Learning, Neural Networks, Bellman Equation, Loss Functions, and Backpropagation.`,
        tags: ['Reinforcement Learning', "Deep Q-Networks", "Q-Learning", "Neural Networks", "Probability Theory", "Loss Functions", "Backpropagation"],
        image: blackJack,
        paperUrl: "https://jerodrigo.com/blackjackrl.pdf"
    },


]



export const Papers = () => {

    const { theme } = useTheme(); 

    const [mounted, setMounted] = useState(false);
        useEffect(() => {
        setMounted(true);
        }, []);

    return (
    <div>
        {mounted && (theme === "dark" ? <StarBackground /> : <LightBackground />)}
        <section id="papers" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <img></img>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured 
                    <span className="text-primary"> Papers </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent independent papers!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> 
                    {papers.map((paper, key) => (
                        <div key={key} className='group text-center bg-card rounded-lg overflow-hidden shadow-xs card-hover'>  
                        {paper.image && (
                            <img
                            src={paper.image}
                            alt={paper.title}
                            className="w-full h-60 object-cover object-top"   
                            />
                        )}
                            <div className="p-5">
                            <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-300"> {paper.title} </h3>
                                <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">                              
                                    {paper.tags.map((tag) => (                                    
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground">{tag}</span>
                                    ))}

                                    </div>
                                    <p className="text-left text-muted-foreground text-sm mb-4">{paper.description}</p>

                                    <div className="flex items-center"> 
                                        <div className="flex space-x-3">
                                            <a 
                                            href={paper.paperUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <BookOpenText size={20}/>
                                            </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>    
                    ))}

                </div>


            </div>

        </section>
    </div>
        )
}