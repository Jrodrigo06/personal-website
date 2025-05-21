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

//Defining type for Meteor
type Meteor = {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    animationDuration: number;
};

export const StarBackground = () => {
    //Create a state named stars to store an array of star objects
    const [stars, setStars] = useState<Star[]>([]); 
    const [meteors, setMeteors] = useState<Meteor[]>([]); 

    //Calls Generate Stars the [] means it won;t run unless remounted
    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
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


    const generateMeteors = () => {
        //Determines amount of meteors to generate based on height and width
        const numberOfMeteors = 4;

        //Array for new stars
        const newMeteors = [];

        //For loop to generate stars
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20 ,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,

            })
        }
        
        //Sets stars to the array generated
        setMeteors(newMeteors);

    };

    //Returns a div with the stars with styling
    return ( 
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" 
            style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
                
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" 
            style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
            }}/>
                
        ))}
        

    </div>
    );
}