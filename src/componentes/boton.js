import React from "react";

import '../hojas-estilo/Boton.css';


class Boton extends React.Component{
  render(){
  return(
    <button 
      className={ this.props.botonClick ? 'boton-clic' : 'boton-reiniciar' }
      onClick = {this.props.manejarClick}>
      {this.props.texto}
    </button>
  );

  }

}


export default Boton;