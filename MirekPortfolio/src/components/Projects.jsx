import webDev from '../assets/smartcoding.png';
import komDes from '../assets/Komdes.png';

export default function Projects() {
    return(
        <> 
            <main className="projects-wrapper">
                <h1>Projects</h1>
                <section className="project-card">
                    <section className="project-card-left">
                    <h2>Web Development Exam Project 2022</h2>
                    <p>Website made for my Web Development class in 2022</p>
                    <a href="">see more</a>
                    </section>
                    <section className="project-card-right">
                        <img src={webDev} alt="Web Development Project Screenshot" />
                    </section>
                </section>

                <section className="project-card">
                    <section className="project-card-left">
                    <h2>Communication Design Exam Project 2024</h2>
                    <p>Website made for my Communication Design class in 2024</p>
                    <a href="">see more</a>
                    </section>
                    <section className="project-card-right">
                        <img src={komDes} alt="Web Development Project Screenshot" />
                    </section>
                </section>

            </main>
        </>
    )
}