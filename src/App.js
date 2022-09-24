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
import Login from './pages/login/Login';

import { userData } from './dummyData';

function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
         <Route path="/" exact element={<><Topbar/><div className='container'><Sidebar/><Home/></div></>}/>         
         <Route path="/login" element={<Login/>}/>
         <Route path="/users" element={<><Topbar/><div className='container'><Sidebar/><UserList/></div></>}/>   
         <Route path="/user/:userId" element={<><Topbar/><div className='container'><Sidebar/><User/></div></>}/>   
         <Route path="/movies" element={<><Topbar/><div className='container'><Sidebar/><ProductList/></div></>}/>   
         <Route path="/product/:productId" element={<><Topbar/><div className='container'><Sidebar/><Product/></div></>}/>   
         <Route path="/newUser" element={<><Topbar/><div className='container'><Sidebar/><NewUser/></div></>}/>   
         <Route path="/newProduct" element={<><Topbar/><div className='container'><Sidebar/><NewProduct/></div></>}/>   
      </Routes>    
    </BrowserRouter>
    </>
  );
}

export default App;
