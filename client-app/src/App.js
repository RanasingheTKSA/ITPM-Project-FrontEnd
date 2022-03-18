import './App.css';
import CartItemsComponent from './components/component-tksa/CartItemsComponents';
import HeaderComponent from './components/HeaderComponent';

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
