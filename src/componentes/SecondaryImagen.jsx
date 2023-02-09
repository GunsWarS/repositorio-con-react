function SecondaryImagen({ image, name, text, add, price }) {
  return (
    <>
      <img classclassName='img-fluid'
        src={require(`../imagenes/img-${image}.jpg`)}
        alt='imagen product 1' />

      <h3>{name}</h3>
      <p>{text}</p>
      <p classclassName='fs-1 fw-bold'>
        {price}</p>
      <a classclassName='btn btn-success fs-3 fw-bold text-uppercase py-3'
        href='#!'>{add}</a>
    </>
  )
}
export default SecondaryImagen;