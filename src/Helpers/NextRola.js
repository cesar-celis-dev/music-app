import React from 'react'
import "../components/estilos.css"


export const NextRola = ({next, before}) => {


  return (
    <div className="button">
        <button onClick={before} > /|| </button>
        <button > | | </button>
        <button onClick={next}> ||\ </button>
    </div>
  )
}
