

function Imagensecundaria(props) {
  return (
    <>
      <img classclassName='img-fluid'
        src={require(`../imagenes/img-${props.imagen}.jpg`)}
        alt='imagen producto 1' />
        
      <h3>{props.nombre}</h3>
        <p>{props.texto}</p>
        <p classclassName='fs-1 fw-bold'>{props.precio}</p>
        <a classclassName='btn btn-success fs-3 fw-bold text-uppercase py-3' href='#!'>{props.agregar}</a>
    </>
    )
}
export default Imagensecundaria;