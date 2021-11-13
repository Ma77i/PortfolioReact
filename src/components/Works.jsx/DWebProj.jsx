import Carousel from 'nuka-carousel'

const DWebProj = () => {
    return (
        <div className="works">
            <h1 className="midTitle">Desarrollo Web Proyecto</h1>
            <div className="worksContent">
                <Carousel>
                    <img className="worksFoto" src="../img/dWebProject.png" alt="" />
                    <img className="worksFoto" src="../img/dWebProject.png" alt="" />
                    <img className="worksFoto" src="../img/dWebProject.png" alt="" />
                </Carousel>
                <p className="parrafos">Trabajo realizado para el proyecto del curso de Desarrollo Web de Coderhouse, 
                consta del sitio web de la banda Led Zeppelin
                </p>
            </div>
        </div>
    )
}

export default DWebProj