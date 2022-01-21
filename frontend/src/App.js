
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/news" element={<News/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
