import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='App-header'>
          <NavBar />
        </div>
        <div className='App'>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='category/:category' element={<ItemListContainer />}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:category/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
