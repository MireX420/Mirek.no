import profilePic from "../assets/IMG_6015.jpg"
import { Linkedin, Github, Mail } from "lucide-react";

export default function Header() {
    return(
        <>
        <section className="header">
                <section className="profile-pic">
                        <img src={profilePic} alt="" />
                </section>
                <section className="profile-contact">
                    <section className="profile-contact-link">
                            <a href=""><Linkedin size={30} color="#0072B1" strokeWidth={1.4}/>LinkedIn</a>
                            <p>Follow me!</p>
                    </section>
                    <section className="profile-contact-link">
                            <a href=""><Github size={30} color="black" strokeWidth={1.4}/>Github</a>
                            <p>Check out my work!</p>
                    </section>
                    <section className="profile-contact-link">
                            <a href=""><Mail size={30} color="#D21F3C" strokeWidth={1.4}/>Email</a>
                            <p>Contact me!</p>
                    </section>
                 </section>
                <section className="profile-info">
                    <h1>ADRIAN MIREK</h1>
                    <h4>Cybersecurity Student</h4>
                    <p>
                        I’m a developer and designer driven by a passion for creating secure, intuitive, and visually 
                        engaging digital experiences. My work centers on blending creativity, usability, and security 
                        to craft solutions that feel both seamless and meaningful.
                    </p>
                    <p>
                        Currently pursuing a Master’s in Cybersecurity, I’m exploring how thoughtful design and strong 
                        security can work hand in hand to build a safer digital future.
                    </p>
                </section>
            </section>
        </>
    );
}