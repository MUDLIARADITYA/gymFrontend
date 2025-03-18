import React,{useEffect, useState}from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useLocation,useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const [greeting,setGreeting] =useState("");
    const location = useLocation();
    const navigate =useNavigate();
    const greetingMessage = ()=>
    {
        const currentHour = new Date().getHours();
        if(currentHour<12)
        {
            setGreeting("Good Morning ");
        }

       else if(currentHour<18)
            {
                setGreeting("Good afternoon ");
            }
           else if(currentHour<21)
                {
                    setGreeting("Good evening");
                }

                else 
                    {
                        setGreeting("Good night ");
                    }

                 
    }
    useEffect(()=>{
        greetingMessage();

    },[])


        const handleLogout = async()=>{
            sessionStorage.clear();
            navigate('/')

        }


    return (
        <div className='w-1/4 min-h-screen border-r-2 bg-slate-800 text-white p-6'>
            {/* Sidebar Title */}
            <div className='text-center text-3xl font-light mb-10'>
                Power Zone
            </div>

            {/* Profile Section */}
            <div className='flex items-center gap-4'>
                <div className='w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-gray-400'>
                    <img 
                        src="https://imgs.search.brave.com/HMqhQNGhrTA5IWTW-ZE-6zjVVPxosTdGW1dV6gYQevI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzI3Lzk3LzA5/LzM2MF9GXzQyNzk3/MDk0M19JVEMySndm/eTJ1OEwwMVN3MjZy/d3Q4RmQyVXRLZ2FV/by5qcGc" 
                        alt="Profile" 
                        className='w-full h-full object-cover'
                    />
                </div>
                <div>
                    <div className='text-xl font-semibold'>{greeting}</div>
                    <div className='text-gray-300 text-sm'>Admin</div>
                </div>
            </div>
            {/* options */}
            <div className='mt-10 border-2 border-t-gray-50 p-5'>
                <Link to='/dashboard' className={`flex gap-2 font-semibold text-xl rounded-md hover:bg-amber-400 hover:text-black hover:cursor-pointer ${location.pathname==="/dashboard"?'border-2 bg-amber-400':null}`}>
                    <div>{<HomeIcon/>}</div>
                    <div>Dashboard</div>
                </Link>
                <Link to='/members' className={`flex gap-2 mt-5 font-semibold text-xl rounded-md hover:bg-amber-400 hover:text-black hover:cursor-pointer  ${location.pathname==="/members"?'border-2 bg-amber-400':null}`}>
                    <div>{<GroupIcon/>}</div>
                    <div>Members</div>
                </Link>

                <div onClick={()=>{handleLogout()}}  className='flex gap-2 mt-5 font-semibold text-xl rounded-md hover:bg-amber-400 hover:text-black  hover:cursor-pointer'>
                    <div>{<LogoutIcon/>}</div>
                    <div>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
