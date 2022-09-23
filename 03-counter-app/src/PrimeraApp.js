// FC
// import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, subtitulo }) => {

  return (
    <>
      <h1>{ saludo }</h1>
      {/*<pre> { JSON.stringify({ nombre:'Gary', joder: 'Oh sii' }, null, 3) } </pre>*/}
      <p>Mi Primera aplicación</p>
    </>
  )

}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un sub'
}

export default PrimeraApp
