import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./app.css";
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import NewProduct from './pages/newProduct/NewProduct';

import { userData } from './dummyData';

function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
      <div className='container'>
    <Sidebar/>    
      <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/users" element={<UserList/>}/>
         <Route path="/user/:userId" element={<User/>}/>
         <Route path="/movies" element={<ProductList/>}/>
         <Route path="/product/:productId" element={<Product/>}/>
         <Route path="/newUser" element={<NewUser/>}/>
         <Route path="/newProduct" element={<NewProduct/>}/>
      </Routes>    
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
