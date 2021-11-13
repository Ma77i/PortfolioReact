import Carousel from 'nuka-carousel'

const BioHack = () => {
    return (
        <div className="works">
            <h1 className="midTitle">BiohackerMX</h1>
            <div className="worksContent">
                <Carousel>
                    <img className="worksFoto" src="../img/bioHack.png" alt="" />
                    <img className="worksFoto" src="../img/bioHack.png" alt="" />
                    <img className="worksFoto" src="../img/bioHack.png" alt="" />
                </Carousel>
                <p className="parrafos">Trabajo realizado para el proyecto real de Coderhouse, 
                consta del sitio web de Gerardo Rosas y su emprendimiento sobre Biohacker
                </p>
            </div>
        </div>
    )
}

export default BioHack