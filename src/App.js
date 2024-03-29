import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import ListList from './pages/listList/ListList';
import { userData } from './dummyData';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import List from './pages/list/List';
import NewList from './pages/newList/NewList';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
    <BrowserRouter> 
      <Routes>
        {!user &&<>      
         <Route path="/" exact element={<Login/> } /> 
        <Route path="/login" element={<Login/> } /> 
        </>}
        {user && <>
         <Route path="/" exact element={<><Topbar/><div className='container'><Sidebar/><Home/></div></>}/>       
         <Route path="/users" element={<><Topbar/><div className='container'><Sidebar/><UserList/></div></>}/>   
         <Route path="/user/:userId" element={<><Topbar/><div className='container'><Sidebar/><User/></div></>}/>   
         <Route path="/newUser" element={<><Topbar/><div className='container'><Sidebar/><NewUser/></div></>}/>   
         <Route path="/movies" element={<><Topbar/><div className='container'><Sidebar/><ProductList/></div></>}/>   
         <Route path="/movie/:movieId" element={<><Topbar/><div className='container'><Sidebar/><Product/></div></>}/>   
         <Route path="/newMovie" element={<><Topbar/><div className='container'><Sidebar/><NewProduct/></div></>}/>   
         <Route path="/lists" element={<><Topbar/><div className='container'><Sidebar/><ListList/></div></>}/>   
         <Route path="/list/:listId" element={<><Topbar/><div className='container'><Sidebar/><List/></div></>}/>   
         <Route path="/newlist" element={<><Topbar/><div className='container'><Sidebar/><NewList/></div></>}/>  
         
         </>}
      </Routes>    
    </BrowserRouter>
    </>
  );
}

export default App;
