import imagen0 from './imagenes/rey_atanagildo.png';
import imagen1 from './imagenes/rey_sisebuto.png';
import './App.css';
import { useRef } from 'react';


function App() {
  const cambio = 23.16;
  const refCaja= useRef();
  function incrementar(e){
    e.target.innerHTML = Number(e.target.innerHTML)+1;
    if(e.target.innerHTML >=9){
      e.target.innerHTML = 1;
    }
    if(e.target.innerHTML >=8){
      e.target.style.backgroundColor= "red";
    }else{
      e.target.style.backgroundColor= "white";
    }
  }
  function convertir(){
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML)*cambio;
  }
  function cambiar(j){
    if(j.target.src.includes("atanagildo")){
      j.target.src= imagen1;
    }else{
      j.target.src= imagen0;
    }
    
  }
  function lectura(e){
    refCaja.current.innerHTML = e.target.value; 
  }
    return (
    <>
    <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div><img onClick={cambiar} src={imagen0} /></div>
      <input onChange={lectura} className="campo" />
    </>
  );
}

export default App;
