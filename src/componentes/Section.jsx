

function Section({ name, imagen, precio }) {
  return (
    <div className='card'>
      <img className='card-img-top'
        src={imagen}
        alt='imagen producto' />

      <div className='card-body text-center bg-primary text-white p-5'>
        <h3>{name}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At soluta pariatur quis blanditiis voluptas tempora repellat, officia non suscipit ullam hic iusto doloribus perferendis deserunt facilis commodi quibusdam labore vero.</p>
        <p className='fs-1 fw-bold'>{precio}</p>

        <a className='btn btn-success fs-3 fw-bold text-uppercase py-3 d-block' href='#!'>Agregar al carrito</a>
      </div>
    </div>
  )
}
export default Section;