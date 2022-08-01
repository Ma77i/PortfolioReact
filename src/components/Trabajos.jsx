import { Link } from "react-router-dom";

const Trabajos = () => {


    return (
        <div className="trabajos">
            <h1 className="jobTitle">Works</h1>

            <div className="jobCont">
                <Link className='jobLink' to="bioHacker">
                    <img className="workFoto" src="../img/bioHack.png" alt="" />
                </Link>
                <Link className='jobLink' to="dWebProj">
                    <img className="workFoto" src="../img/dWebProject.png" alt="" />
                </Link>
                <Link className='jobLink' to="jsProj">
                    <img className="workFoto" src="../img/jsProject.png" alt="" />
                </Link>
                <Link className='jobLink' to="reactProj">
                    <img className="workFoto" src="../img/reactProject.png" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Trabajos


/*
                <Carousel>
                    <img className="workFoto" src="../img/bioHack.png" alt="" />
                    <img className="workFoto" src="../img/dWebProject.png" alt="" />
                    <img className="workFoto" src="../img/jsProject.png" alt="" />
                    <img className="workFoto" src="../img/reactProject.png" alt="" />
                </Carousel>
                */