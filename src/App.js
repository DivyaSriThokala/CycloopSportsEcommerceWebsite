import logo from './logo.svg';
import './App.css';
import Product_Navigation from './customer/components/Product_Navigation/Product_Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/CheckOut/CheckOut';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router';
import CustomerRouters from './Routers/CustomerRouters';
import Login from './customer/components/Login/Login';
import Signup from './customer/components/Signup/Signup';
import ProductMain from './customer/components/ProductMain/ProductMain';
import ProductHomePage from './customer/components/Pages/HomePage/ProductHomePage';
import HomePage from './customer/components/HomePage/HomePage';
import Admin from './Admin/Admin';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
        <Route path='/admin/*' element={<Admin/>}> </Route>
      </Routes>

    </div>
  );
}

export default App;



