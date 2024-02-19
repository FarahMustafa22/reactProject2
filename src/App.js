import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Products from './Products';
import NavBar from './navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from './Payment';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
          <Route path="payment" element={<Payment />} />
      
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;