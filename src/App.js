import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';

function App() {
let items = 1;
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer cart = {items}/>
        <Contador/>
      </main>
    </div>
  );
}

export default App;
