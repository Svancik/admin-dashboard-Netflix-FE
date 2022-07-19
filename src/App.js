
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./app.css";
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import UserList from './pages/home/userList/UserList';

function App() {
  return (
    <>
    <Topbar/>
    <div className='container'>
    <Sidebar/>    
    <BrowserRouter>
      <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/users" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
