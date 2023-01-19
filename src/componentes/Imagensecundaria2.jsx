import producto1 from '../imagenes/producto1.jpg';

function Imagensecundaria2() {
  return (
    <div className='container-xl py-5'>
      <div className='row g-0 pt-5 mb-4'>
        <h2 className='texto-nuestros-productos'>Nuestros Productos</h2>
        <div className='col-md-8 producto'>
          <img className='img-fluid'
            src={producto1}
            alt='imagen producto' />
        </div>

        <div className='col-md-4 bg-primary text-center p-5 text-white d-flex flex-column justify-content-center'>
          <h3>Producto 1</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At soluta pariatur quis blanditiis voluptas tempora repellat, officia non suscipit ullam hic iusto doloribus perferendis deserunt facilis commodi quibusdam labore vero.</p>
          <p className='fs-1 fw-bold'>$1'000.000°°</p>
          <a className='btn btn-success fs-3 fw-bold text-uppercase py-3' href='#!'>Agregar al carrito</a>
        </div>
      </div>
    </div>
  )
}
export default Imagensecundaria2;