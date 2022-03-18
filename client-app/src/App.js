import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CartItemsComponent from './components/CartItemsService';

function App() {
  return (
    <div>
      <HeaderComponent/>
        <div className="container">
          <CartItemsComponent/>
        </div>
    </div>
  );
}

export default App;
