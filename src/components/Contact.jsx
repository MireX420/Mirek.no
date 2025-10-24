export default function Contact() { 
    return(
        <>
            <section id="contact" className="contact-wrapper">
                <h1>Get in touch</h1>
                <section className="contact-form-wrapper">
                    <form className="contact-form">
                        <input type="text" placeholder="Name*" required />
                        <input type="email" placeholder="Email*" required />
                        <textarea placeholder="Your message*" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </section>
        </>
    )
}   