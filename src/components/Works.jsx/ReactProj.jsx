import Carousel from 'nuka-carousel'

const ReactProj = () => {
    return (
        <div className="works">
            <h1 className="midTitle">Proyecto React Coderhouse</h1>
            <div className="worksContent">
                <Carousel>
                    <img className="worksFoto" src="../img/reactProject.png" alt="" />
                    <img className="worksFoto" src="../img/reactProject.png" alt="" />
                    <img className="worksFoto" src="../img/reactProject.png" alt="" />
                </Carousel>
                <p className="parrafos">Trabajo realizado para el proyecto del curso de React de Coderhouse,
                    es un ecommerse sobre pokemones.
                </p>
            </div>
        </div>
    )
}

export default ReactProj