import { useEffect, useState } from "react";
import { useTheme } from "../hooks/ThemeContext";
import { StarBackground } from "../components/StarBackground";
import { LightBackground } from "../components/LightBackground";
import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import { cn } from "../lib/utils";
import emailjs from "@emailjs/browser";

export const Contact = () => {

    emailjs.init({
        publicKey: '-ISkJnvzE9tlYcep0'
    })
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        

        e.preventDefault();

 
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        console.log({ name, email, message });
           
        const templateParams = {
            name: name,
            email: email,
            message: message,
            };

            emailjs.send("service_j2me3et", "template_cdbiml9", templateParams)
            .then((res) => {
              console.log("EmailJS success", res);
              alert("Message sent!");
              form.reset();
            })
            .catch((err) => {
              console.error("EmailJS error", err);
              form.reset();
            });
        };

    const { theme } = useTheme(); 
    
    const [mounted, setMounted] = useState(false);
        useEffect(() => {
        setMounted(true);
        }, []);


    return(
        <div> 
            {mounted && (theme === "dark" ? <StarBackground /> : <LightBackground />)}
            <section 
            id='contact'
            className="py-24 px-4 relative bg-secondary/30">
                <div className='container mx-auto max-w-5xl'> 
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In 
                        <span className="text-primary"> Touch</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Have any questions or just want to leave a message? Please reach out.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> 
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                            <div className="space-y-6 justify-center">
                                <div className='flex items-start space-x-4'>
                                    <div className='p-3 rounded-full bg-primary/10'> 
                                        <Mail className="h-6 w-6 text-primary"/>{" "}
                                    </div>
                                    <div className="">
                                        <h4 className="font-medium"> Email</h4>
                                        <a href="mailto:jeromerodrigo06@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            jeromerodrigo06@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className='flex items-start space-x-4'>
                                    <div className='p-3 rounded-full bg-primary/10'> 
                                        <Linkedin className="h-6 w-6 text-primary"/>{" "}
                                    </div>
                                    <div className="">
                                        <h4 className="font-medium"> LinkedIn</h4>
                                        <a href="https://www.linkedin.com/in/jrodrigo2028/" className="text-muted-foreground hover:text-primary transition-colors">
                                        linkedin.com/in/jrodrigo2028
                                        </a>
                                    </div>
                                </div>

                                <div className='flex items-start space-x-4'>
                                    <div className='p-3 rounded-full bg-primary/10'> 
                                        <MapPin className="h-6 w-6 text-primary"/>
                                        {" "}
                                    </div>
                                    <div className="">
                                        <h4 className="font-medium"> Location </h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Boston, MA / Albany, NY
                                        </a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div className="bg-card p-8 rounded-lg shadow-xs">
                            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                    <input type="text" id="name" name="name" required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Jerome Rodrigo..."/>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                    <input type="email" id="email" name="email" required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="john@gmail.com"/>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                    <textarea id="message" name="message" required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello ..."/>
                                </div>

                                <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2", 
                                    "")}>

                                        Send Message
                                        <Send size={16}/>

                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}