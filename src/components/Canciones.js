import React, { useState } from 'react';
import { NextRola } from '../Helpers/NextRola';
import { rolas } from '../Helpers/Rolas';
import { imagenes } from '../Helpers/Imagenes';
import "../components/estilos.css";

export const Canciones = () => {

  const [state, setState] = useState(0);

  const handleNext = () => {
      setState(Math.min(state+1,rolas.length-1))
  }
  
  const handleBefore = () => {
      setState(Math.max(state-1, 0))
  }

  
  const nombre = rolas[state].nombre;
  const autor = rolas[state].autor;
  const año = rolas[state].año;


  return (

    <div className="all animate__animated animate__backInRight">
            <div className="square">

                  <div>

                    <h1>{nombre}</h1>
                    <h3 className="text1">{autor}</h3>
                    <p className="text2">{año}</p>
                  </div>

                  <div>     
                      <NextRola next={handleNext} before={handleBefore} /> 
                  </div>


                </div>


            <div className="image">
                    <img src={imagenes[state]} alt="imagen 0" width= "400" height= "350" />
            </div>


    </div>
  )
}

