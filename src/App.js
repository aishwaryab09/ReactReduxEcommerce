import './App.css';
import Home from './App/Pages/Home/Home';
import Products from './App/Pages/Products/AllProducts';
import Contact from './App/Pages/Contact';
import { Route, Routes } from 'react-router-dom'
import SingleProductDetails from './App/Pages/Products/ProductDetails/SingleProductDetails';
import CategoryProducts from './App/Pages/Products/CategoryProducts'
import PageNotFound from './App/Pages/PageNotFound';
import Cart from './App/Pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="category/:categoryName" element={<CategoryProducts />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<SingleProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
