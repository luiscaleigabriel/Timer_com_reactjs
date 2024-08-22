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
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {iniciando ? 
        (<button onClick={() => { setIniciar(false) }}>Parar</button>) :
        (<button onClick={() => { setIniciar(true) }}>Iniciar</button>) 
        }
        <button onClick={() => { setTime(0) }}>Reiniciar</button>
      </div>
    </>
  );
}

export default App;
