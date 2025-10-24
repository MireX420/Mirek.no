import { Instagram, Github, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
    return(
        <>
            <footer>
                <section className="socials-footer">
                    <h2><Instagram size={30} color="#caa733" strokeWidth={1}/>Instagram</h2>
                    <h2><Github size={30} color="#caa733" strokeWidth={1}/>Github</h2>
                    <h2><Facebook size={30} color="#caa733" strokeWidth={1}/>Facebook</h2>
                    <h2><Linkedin size={30} color="#caa733" strokeWidth={1}/>LinkedIn</h2>
                </section>
            </footer>
        </>
    )
}