import React from 'react'
import Home from './pages/Home/Home'
import {Routes,Route,useNavigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import {useState,useEffect} from 'react';
import { Member } from './pages/Member/Member';
import Generaluser from './pages/GeneralUser/Generaluser';
import MemberDetail from './pages/MemberDetail/MemberDetail';

const App = () => {
    const navigate = useNavigate();
  const [isLogin,setIsLogin] = useState(false);

  useEffect(()=>{
    let isLogedIn =sessionStorage.getItem("isLogin")
    if(isLogedIn)
    {
      setIsLogin(true);
      // navigate('/dashboard');
    }
    else
    {
      setIsLogin(false)
      navigate('/')

    }
  },[sessionStorage.getItem("isLogin")])

  return (
    <div className='flex'>
      {
        isLogin && <Sidebar/>

      }
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/member' element={<Member/>}/>
        <Route path='/specific/:page' element={<Generaluser/>}/>
        <Route path='/member/:id' element={<MemberDetail/>}/>


      </Routes>
    </div>
  )
}

export default App