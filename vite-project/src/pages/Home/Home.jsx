import React from 'react';
import Login from '../../Components/Login/Login';
import SignUpp from '../../Components/SignUpp/SignUpp';

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='border-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-xl text-center'>
        Welcome To Gym Management System
      </div>

      <div className='flex flex-col lg:flex-row w-full h-full bg-cover bg-center items-center justify-center bg-[url("https://th.bing.com/th/id/OIP.EwbatycHx_915hcNzd7vRgHaE8?w=4933&h=3289&rs=1&pid=ImgDetMain")]'>
        <Login />
        <SignUpp />
      </div>
    </div>
  );
};

export default Home;
