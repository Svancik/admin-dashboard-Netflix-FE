
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./app.css";
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

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
         <Route path="/user" exact element={<User/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
