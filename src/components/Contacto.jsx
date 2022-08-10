import { useRef } from 'react'


const Contacto = () => {
    
    // const contactForm = useRef(null)
    
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     e.target.elements.name.value = '';
    //     e.target.elements.email.value = '';
    //     e.target.elements.message.value = '';
    // };


    return (
        <div className="contacto">
            <h1 className="contacTitle">Contact</h1>

            <section id="contact">
                <div className="contact-wrapper">
                    {/* <form ref={contactForm} onSubmit={handleSubmit} className="form-horizontal">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Name" 
                            name="name" required 
                        />
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Email" 
                            name="email" required 
                        />
                        <textarea 
                            className="form-control" 
                            rows="6" 
                            placeholder="Message" 
                            name="message" required 
                        />
                        <button className="send-button" id="submit" type="submit" value="SEND">SEND</button>
                    </form> */}
                    
                    <div className="direct-contact-container">
                        <ul className="contact-list">
                        <li className="list-item">
                            <i className="fa fa-map-marker fa-2x">
                            <span className="contact-text place">Montevideo, Uruguay</span>
                            </i>
                        </li>
                        <li className="list-item">
                            <i className="fa fa-phone fa-2x">
                            <span className="contact-text phone">
                                <a href="tel:+598 99 063 761" title="Give me a call">(+598) 99 063 761</a>
                            </span>
                            </i>
                        </li>
                        <li className="list-item">
                            <i className="fa fa-envelope fa-2x">
                            <span className="contact-text gmail">
                                <a href="mailto:mattiasuru@gmail.com" title="Send me an email">mattiasuru@gmail.com</a>
                            </span>
                            </i>
                        </li>
                        
                        </ul>
                        <div className="copyright">copyright &copy; Matias Silva</div>
                    </div>
                    
                </div>
                
                </section>  
  
  
        </div>
    )
}

export default Contacto