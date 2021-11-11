import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul className="navBar">
                <Link className="link" to="sobreMi"><li className="navList">Sobre mi</li></Link>
                <Link className="link" to="trabajos"><li className="navList">Trabajo</li></Link>
                <Link className="link" to="contacto"><li className="navList">Contacto</li> </Link>
            </ul>
        </nav>
    )
}

export default NavBar