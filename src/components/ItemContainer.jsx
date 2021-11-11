import { useState, useEffect } from "react";
import Item from "./Item.jsx";

const ItemContainer = () => {

    const [data, setData] = useState([])


/*
    useEffect(() => {
        
        fetch(u)
            .then(response => response.json())
            .then(datos => {
                setData(datos)       
                console.log(datos)          
            })
            .catch("Ocurrió un error al traer los productos");
    }, [])
*/


    const getData = () => fetch("http://localhost:3000/data.json").then(response => response.json())

    useEffect(() => {
        
        getData().then(datos => {
            setData(datos)       
            console.log(datos)          
        })
        .catch("Ocurrió un error al traer los productos");
    }, [])


    return (
        <div>
            <div className=''>
                <Item items={data}/>
            </div>
        </div>
    )
}

export default ItemContainer