import ProfilePic from "../assets/ProfilePic.jpg";

export const Hero = () => {
    return <section 
    id="hero" 
    className="relative min-h-dvh flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl max-auto text-center z-10">
        <img
        src={ProfilePic}
        alt="Jerome Rodrigo"
        className="w-45 h-45 md:w-48 md:h-48 rounded-full border-4 border-background shadow-lg object-cover mx-auto"
            />
            <div className="space-y-6">
                
                <h1 className="text-4xl md:6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                    {" "}
                    Jerome</span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                    {" "}
                     Rodrigo
                     </span>
                </h1>

                <p>
                I love diving into things that challenge me, whether it’s video editing,
                 coding, cooking something new, 
                 or chasing a new idea that excites me. 
                 Solving problems and learning have shaped 
                 who I am and pushed me to grow the most.
                </p>
            </div>

        </div>

    </section>
}