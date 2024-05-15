import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Home from './components/Index/Home';
import AboutUs from './components/Index/AboutUs';
import { Route, Routes } from 'react-router-dom';
import FAQ from './components/Index/FAQ';
import Product from './components/Index/Product';
import Search from './components/Index/Search';
import Cart from './components/Index/Cart';
import OnlineOrder from './components/Index/OnlineOrder';
import Login from './components/Index/Login';
import SignUp from './components/Index/SignUp';
import data from './components/AllProducts.json'
import axios from 'axios'
import Admin from './components/Index/Admin';
import AddProduct from './components/Index/AddProduct';
import EditProduct from './components/Index/EditProduct';
import Payment from './components/Index/Payment';
import MyOrder from './components/Index/MyOrder';

function App() {
  const handleadd = async () => {
    try {
      const response = await axios.post("http://localhost:1300/api/products", data);
      console.log(response.data.message);
      console.log(response.data.createdProducts);
    } catch (error) {
      console.error("Error adding products:", error);
    }
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/products' element={<Product />} />
        <Route path='/search' element={<Search />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/onlineorder' element={<OnlineOrder />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/addprocduct' element={<AddProduct />} />
        <Route path='/editproduct' element={<EditProduct />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/myorder' element={<MyOrder />} />
      </Routes>
      {/* <button onClick={handleadd}>Add</button>  */}
    </>
  );
}

export default App;
library.add(fab, fas, far)