function MenuText({ name, image, price }) {
  return (
    <div className='card'>
      <img className='card-img-top'
        src={image}
        alt='imagen produc2' />

      <div className='card-body text-center bg-primary text-white p-5'>
        <h3>{name}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At soluta pariatur quis blanditiis voluptas tempora repellat, officia non suscipit ullam hic iusto doloribus perferendis deserunt facilis commodi quibusdam labore vero.</p>
        <p className='fs-1 fw-bold'>
          {price}</p>
        <a href='#!'
          className='btn btn-success fs-3 fw-bold text-uppercase py-3 d-block'>
          Agregar al carrito</a>
      </div>
    </div>
  )
}
export default MenuText;









