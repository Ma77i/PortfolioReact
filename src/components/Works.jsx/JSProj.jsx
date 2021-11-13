import Carousel from 'nuka-carousel'

const JSProj = () => {
    return (
        <div className="works">
            <h1 className="midTitle">JS Proyecto</h1>
            <div className="worksContent">
                <Carousel>
                    <img className="worksFoto" src="../img/jsProject.png" alt="" />
                    <img className="worksFoto" src="../img/jsProject.png" alt="" />
                    <img className="worksFoto" src="../img/jsProject.png" alt="" />
                </Carousel>
                <p className="parrafos">Trabajo realizado para el proyecto del curso de JavaScript de Coderhouse, 
                    consta de un ecommerce sobre la banda Led Zeppelin
                </p>
            </div>
        </div>
    )
}

export default JSProj