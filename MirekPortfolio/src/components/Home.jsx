import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"
import Projects from "./Projects"



export default function Home() {
    return(
        <>
            <main className="main-container">
                <Navbar />
                <Header />
                <Projects />
                <Footer />
            </main>  
            
        </>
    )
}