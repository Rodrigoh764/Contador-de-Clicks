import React from 'react';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import miLogo from './imagenes/FONDO-2.jpg'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick (){
    this.setState(({numClics}) => ({numClics: numClics + 1}));
  }

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render(){

    return (
      <div className="App">
  
        <div className="logo-contenedor">
    {/* // mando a llamar la imagen que de arriba importe, importante las llaves {} ya que indico que es codigo de JavaScrip */}
        <img className='logo' src={miLogo} alt="logo"/>
        </div>
  
      <div className='contenedor-principal'>
          
          <Contador numClics={this.state.numClics} />
          
          <Boton
            texto="Clic"
            botonClick={true}
            manejarClick={this.manejarClick}/>
          
          <Boton
            texto="Reiniciar"
            botonClick={false}
            manejarClick={this.reiniciarContador}/>
      </div>
      </div>
    );
  }
}



export default App;


