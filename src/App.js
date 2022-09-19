/*
TODO:

- handleDelete nefunkcni

*/


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
         <Route path="/products" element={<ProductList/>}/>
         <Route path="/product/:userId" element={<Product/>}/>
         <Route path="/newUser" element={<NewUser/>}/>
      </Routes>    
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
