
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./app.css";
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';

function App() {
  return (
    <>
    <Topbar/>
    <div className='container'>
    <BrowserRouter>
    <Sidebar/>    
      <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/users" element={<UserList/>}/>
         <Route path="/user/:userId" element={<User/>}/>
         <Route path="/newUser" element={<NewUser/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
