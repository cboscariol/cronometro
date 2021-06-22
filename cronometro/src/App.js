import './App.css';
import React from 'react'
import { useState, useEffect } from "react";



function App() {
  const [segundos, setSegundos] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos(prevSegundos => prevSegundos - 1) //pega o valor anterior/previo de segundos
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, []);


  return (
    <div className="App">
      Restam {segundos} segundos...
    </div>
  );
}

export default App;
