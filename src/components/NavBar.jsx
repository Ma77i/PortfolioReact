import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul className="navBar">
                <Link className="link" to="sobreMi"><li className="navList">About me</li></Link>
                <Link className="link" to="trabajos"><li className="navList">Works</li></Link>
                <Link className="link" to="contacto"><li className="navList">Contact</li> </Link>
            </ul>
        </nav>
    )
}

export default NavBar