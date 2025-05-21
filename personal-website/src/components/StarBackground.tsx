import { useEffect, useState } from "react";


//Defining types for the parameters of a Star
type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
};  

export const StarBackground = () => {
    //Create a state named stars to store an array of star objects
    const [stars, setStars] = useState<Star[]>([]); 

    //Calls Generate Stars the [] means it won;t run unless remounted
    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        //Determines amount of stars to generate based on height and width
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        //Array for new stars
        const newStars = []

        //For loop to generate stars
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100 ,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,

            })
        }
        
        //Sets stars to the array generated
        setStars(newStars);

    };

    //Returns a div with the stars with styling
    return ( 
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
                
        ))}
        

    </div>
    );
}