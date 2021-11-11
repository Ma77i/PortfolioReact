const Contacto = () => {
    return (
        <div className="contacto">
            <h1 className="contacTitle">Contacto</h1>
            <h3 className="midTitle">Si te interesa contactarme</h3>
            
            <form id="form" class="topBefore">
                    <input id="name" type="text" placeholder="NAME" />
                    <input id="email" type="text" placeholder="E-MAIL" />
                    <textarea id="message" type="text" placeholder="MESSAGE"/ >
                    <input id="submit" type="submit" value="GO!" />
            </form>
        </div>
    )
}

export default Contacto