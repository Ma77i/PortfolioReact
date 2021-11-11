
const Item = ({items}) => {

  return (    
    <>
      {items.map(item=><div key={item.id} className='contene'>
                        <h2>{item.name}</h2>
                        <div className='cajas'>
                          <p className='one'>{item.platos[1].nombre}</p>
                          <p className='two'>$ {item.platos[0].precio}</p>
                          <p className='three'>{item.platos[0].descripcion}</p>
                        </div></div>)}
      
    </>
  )
}
export default Item

/*
        
<div className='card'>
      <div className='cardImg'>
      <img src={items.sprites.other.dream_world.front_default} alt='' />
      </div>
      <div className='cardBody'>
        <h2>{items.name}</h2>
      </div>
      <div className='cardFooter'>
        <p>{items.id}</p>
        <p>{items.base_experience}</p>
      </div>

    </div>

*/