import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0); //Definimos el estado del contador(counter)

  return (
    <div className="container">
      <h1>Contador con UseState</h1>
      <hr />
      <h3>Contador: {counter}</h3>
      <button className="btn btn-success me-2"
      onClick={()=>setCounter(counter + 1)}
      >+1</button>
      <button className="btn btn-secondary me-2"
      onClick={()=>setCounter(0)}
      >Reiniciar</button>
      <button className="btn btn-danger"
      onClick={()=>setCounter(counter - 1)}>-1</button>
    </div>
  );
}
