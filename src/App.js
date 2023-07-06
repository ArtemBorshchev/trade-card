import './App.css';
import IconFavorit from './components/iconFavorit/IconFavorit';
import Cart from './components/cart/Cart';
import Good from './components/goods/Good';
import Compare from './components/compare/CompItem'
import objGood from './components/goods/makeContent';

function App() {
  
  return (
    <div className="App">
      <IconFavorit props={objGood}/>
      <Cart props={objGood}/>
      <Good props={objGood} />
      <Compare />
    </div>
  );
}

export default App;
