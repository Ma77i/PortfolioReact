const Contacto = () => {
    return (
        <div className="contacto">
            <h1 className="contacTitle">Contacto</h1>

            <section id="contact">
                <div className="contact-wrapper">
                    <form id="contact-form" className="form-horizontal">
                        <input type="text" className="form-control" id="name" placeholder="Nombre" name="name" required />
                        <input type="email" className="form-control" id="email" placeholder="Email" name="email" required />
                        <textarea className="form-control" rows="6" placeholder="Mensaje" name="message" required />
                        <button className="send-button" id="submit" type="submit" value="SEND">ENVIAR</button>
                    </form>
                    
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
                                <a href="tel:1-212-555-5555" title="Give me a call">(+598) 99 063 761</a>
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
                        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                    </div>
                    
                </div>
                
                </section>  
  
  
        </div>
    )
}

export default Contacto