import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <section className="navbar-wrapper"> 
            
            <section className="navbar-container">
                <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={40} color="#caa733" strokeWidth={3}/> : <Menu size={40} color="#caa733" strokeWidth={3}/>}
                </button>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li onClick={() => window.location.replace("/#about")}>About</li>
                    <li onClick={() => window.location.replace("/#projects")}>Projects</li>
                    <li onClick={() => window.location.replace("/#skills")}>Skills</li>
                    <li onClick={() => window.location.replace("/#contact")}>Contact</li>
                </ul>
            </section>
            <section className="navbar-title">
                <h1>MIREK.NO</h1>
                
            </section>
            </section>
        </>
    )
}
