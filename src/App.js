import './App.css';
import Class from './components/Class';
import Function from './components/Function';
import Formulario from './components/Formulario';

function App() {
const componenteClase = "Clase";
const componenteFuncion = "Funcion";

  return (
    <div className="App">
      <header className="App-header">
        {/* <Class nombre={componenteClase}/> */}
        <Function nombre={componenteFuncion}/>
        <Formulario/>
      </header>
    </div>
  );
}

export default App;
