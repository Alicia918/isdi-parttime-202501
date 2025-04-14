import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


function App() {
  return (
    <div>
      <h1>Bienvenido a Yoga App</h1>
      <p>Esta es una aplicación para gestionar tus sesiones de yoga.</p>
      <button onClick={() => alert('¡Hola!')}>Haz clic aquí</button>
    </div>
  );
}

export default App;
