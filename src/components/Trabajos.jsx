import { Link } from "react-router-dom";
import Carousel from 'nuka-carousel'
const Trabajos = () => {
    return (
        <div className="trabajos">
            <h1 className="jobTitle">Trabajos</h1>
            <h3 className="midTitle">Estos son los trabajos que he realizado hasta el momento</h3>
            <Carousel>
                <img className="workFoto" src="../img/bioHack.png" alt="" />
                <img className="workFoto" src="../img/dWebProject.png" alt="" />
                <img className="workFoto" src="../img/jsProject.png" alt="" />
                <img className="workFoto" src="../img/reactProject.png" alt="" />
            </Carousel>
        </div>
    )
}

export default Trabajos
/*            <div className="jobCont">
                <Link className='jobLink' to="bioHacker"><img className="workFoto" src="../img/bioHack.png" alt="" /></Link>
                <Link className='jobLink' to="dWebPro"><img className="workFoto" src="../img/dWebProject.png" alt="" /></Link>
                <Link className='jobLink' to="jsPro"><img className="workFoto" src="../img/jsProject.png" alt="" /></Link>
                <Link className='jobLink' to="reactPro"><img className="workFoto" src="../img/reactProject.png" alt="" /></Link>
            </div>*/