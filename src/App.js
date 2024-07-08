import './App.css';
import About from './components/About';
import Home from './components/Home';
import InsertProduct from './components/InsertProduct';
import Navbar from './components/Navbar';
import Products from './components/Products';
import UpdateProduct from './components/UpdateProduct';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Navbar title="IMS" about="About"></Navbar>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </Router>


    </div>
  );
}

export default App;
