import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [iniciando, setIniciar] = useState(false);

  useEffect(() => {
    let intervalo;
    if (iniciando) {
      intervalo = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }else if(!iniciando) {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [iniciando]);

  return (
    <>
      <h1>Timer</h1>
      <div className="divSpan">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="divbtn">
        {iniciando ? 
        (<button className="btn stop" onClick={() => { setIniciar(false) }}>Parar</button>) :
        (<button className="btn start" onClick={() => { setIniciar(true) }}>Iniciar</button>) 
        }
        <button className="btn reset" onClick={() => { setTime(0) }}>Reiniciar</button>
      </div>
    </>
  );
}

export default App;
