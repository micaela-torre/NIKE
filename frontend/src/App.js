
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
import {DataProvider} from './context/DataContext'
function App() {
  return (
    <DataProvider>
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
    </DataProvider>
  );
}

export default App;
