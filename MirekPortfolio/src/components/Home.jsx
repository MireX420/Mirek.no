import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"



export default function Home() {
    return(
        <>
            <main className="main-container">
                <Navbar />
                <Header />
                <Projects />
                <Skills />
                <Contact />
            </main>  
            <Footer />
        </>
    )
}