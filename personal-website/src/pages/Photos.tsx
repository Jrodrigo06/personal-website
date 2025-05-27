import { useEffect, useState} from "react";
import { StarBackground } from "../components/StarBackground";
import { LightBackground } from "../components/LightBackground";
import { useTheme } from "../hooks/ThemeContext";
import { useMemo } from "react";

const modules = import.meta.glob<{ default: string }>("../assets/photos/*.{jpg,png,webp}", { eager: true });

export const Photos = () => {

    const { theme } = useTheme(); 
    
    const [mounted, setMounted] = useState(false);
        useEffect(() => {
        setMounted(true);
        }, []);
    
    const photos = useMemo(
        () => Object.values(modules).map((m) => m.default),
         []
        );

    
    

    return(
        <div>
            {mounted && (theme === "dark" ? <StarBackground /> : <LightBackground />)}
            <div className="relative pt-16 px-4 columns-1 sm:columns-2 lg:columns-4 gap-4 [&>img]:mb-4">
                {photos.map((src, i) => (
                    <img
                    key={i}
                    src={src}
                    loading="lazy"
                    alt={`Photo ${i + 1}`}
                    className="w-full break-inside-avoid rounded-lg object-cover z-10"
                    />
                ))}
                </div>

                
        </div>
    )
}