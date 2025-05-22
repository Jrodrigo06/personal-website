import ProfilePic from "../assets/ProfilePic.jpg";

export const Hero = () => {
    return <section 
    id="hero" 
    className="relative min-h-dvh flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl max-auto text-center z-10">
        
        {/* Profile Picture */}
        <div className="relative inline-block group p-3">
            <img
            src={ProfilePic}
            alt="Jerome Rodrigo"
            className="w-[32vh] h-[32vh] rounded-full shadow-lg object-cover mx-auto 
                        hover:shadow-primary-center transition-shadow duration-700 ease-in-out"
                />

            {/* Left Card */}
            <div
                className="
                absolute left-0 top-1/2 -translate-y-1/2
                w-[70v] p-3 bg-background border border-white/50 rounded-lg
                opacity-0 -translate-x-[1rem]
                group-hover:opacity-100 group-hover:-translate-x-[250px]
                transition-all duration-1000
                whitespace-normal md:whitespace-nowrap
                "
            >
                <div className="space-y-1 text-sm">
                    <p>
                        <span className="font-semibold">School:</span> Northeastern University
                    </p>
                    <p>
                        <span className="font-semibold">Major:</span> Data Science and Math
                    </p>
                    <p>
                        <span className="font-semibold">Graduation Date:</span> May '28
                    </p>
                </div>
            </div>

            {/* Right Card */}
            <div
                className="
                absolute right-0 top-1/2 -translate-y-1/2
                w-[70v] p-3 bg-background border border-white/50 rounded-lg
                opacity-0 translate-x-[1rem]
                group-hover:opacity-100 group-hover:translate-x-[250px]
                transition-all duration-1000
                whitespace-normal md:whitespace-nowrap
                "
            >
            <div className="space-y-1 text-sm">
                    <p>
                        <span className="font-semibold">From:</span> Albany, NY
                    </p>
                    <p>
                        <span className="font-semibold">Hobbies:</span> Cooking, Photography
                    </p>
                    <p>
                        <span className="font-semibold">Favorite Food:</span> Quessadillas
                    </p>
                </div>
        </div>
        </div>
            

            {/**                   */}            

            <div className="space-y-6">
                
                <h1 className="text-4xl md:6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                    {" "}
                    Jerome</span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-2">
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