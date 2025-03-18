import React, { useState, useEffect, useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [accordianDashboard, setAccordianDashboard] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside =e =>{
//ref.current ma vo welcome popup ko target kia hain 
//contain check if a given dom element is inside parent element
// parentElement.contains(childElement)
// Returns true if childElement is inside parentElement (including itself).

//clicked outside passed location in e then !ref.current.contains(e.target) check if first that it is clicked outside return false but due to ! it will make it true 

// If the user clicks outside the referenced element, 
// ref.current.contains(e.target) returns false.
// The ! operator negates it to true, triggering the state update to close the pop-up.


      if (accordianDashboard && ref.current && !ref.current.contains(e.target)) {
        setAccordianDashboard(false);
  
      }

    }
    
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [accordianDashboard])

  const handleOnClickMenu =(value)=>
  {
    sessionStorage.setItem('func',value);
  }

  return (
    <div className='w-3/4 text-black p-5 relative'>
      <div className='w-full bg-slate-900 text-white rounded-lg flex p-5 justify-between item center'>
        <MenuIcon sx={{ cursor: "pointer" }} onClick={() => { setAccordianDashboard(prev => !prev) }} />
        <img rounded-3xl border-2 className='w-8 h-8' src="https://imgs.search.brave.com/whLqE5zzn10LHFBQsiLWrDCwPDBTZJpH5xFl7DWtJ4U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzU1LzI4Lzkx/LzM2MF9GXzQ1NTI4/OTE1MV9LM2VaemlC/SFAwUVBHZWRYalIz/QW0zeTBIV3d2OU5J/SS5qcGc" alt="logo " />

        {
          accordianDashboard &&
          <div ref={ref} className='absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight'>
            <div>Hi Welcome to our Gym Management System.</div>
            <p>Feel free to ask any queries</p>
          </div>
        }



      </div>

      <div className='mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]'>

        {/* this is card block */}
        <Link to={'/Member'} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3 rounded-t-lg bg-slate-900'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-red-500  hover:text-white'>
            <PeopleAltIcon sx={{ color: "green", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Joined Members</p>
          </div>
        </Link>

        {/* this is card block */}
        <Link to={'/specific/monthly'} onClick={()=>handleOnClickMenu("montlyJoined")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3 rounded-t-lg bg-slate-900'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-red-500  hover:text-white'>
            <PeopleAltIcon sx={{ color: "purple", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Monthly joined</p>
          </div>
        </Link>

        {/* this is card block */}
        <Link to={'/specific/expire-within-3-days'}  onClick={()=>handleOnClickMenu("threeDayExpire")}  className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3 rounded-t-lg bg-slate-900'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-red-500  hover:text-white'>
            <PeopleAltIcon sx={{ color: "blue", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Expiring within 3 Days</p>
          </div>
        </Link>


        {/* this is card block */}
        <Link to={'/specific/expire-within-4-7-days'} onClick={()=>handleOnClickMenu("fourToSevenDayExpire")}   className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3  rounded-t-lg bg-slate-900'></div>
          <div className='py-4 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-red-500  hover:text-white'>
            <PeopleAltIcon sx={{ color: "blue", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Expiring Within 4-7 Day</p>
          </div>
        </Link>


        {/* this is card block */}
        <Link to={'/specific/expired'}  onClick={()=>handleOnClickMenu("Expired")}  className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3 rounded-t-lg bg-slate-900'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-red-500  hover:text-white'>
            <PeopleAltIcon sx={{ color: "orange", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Expired </p>
          </div>
        </Link>


        {/* this is card block */}
        <Link to={'/specific/inactive-members'}  onClick={()=>handleOnClickMenu("inActiveMembers")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
          <div className='h-3 rounded-t-lg bg-slate-900'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-red-500  hover:text-white'>
            <PeopleAltIcon sx={{ color: "brown", fontSize: "50px" }} />
            <p className='text-xl my-3 font-semibold font-mono'>Inactive Members</p>
          </div>
        </Link  >




      </div>

      {/* <div className=' md:bottom-4 p-4 w-3/4 mb-4 mt-20 md:mb-0 absolute bg-black text-white rounded-xl text-xl'>

        Contact Developer for any Technical Error at +918770613095

      </div> */}

    </div>
  )
}

export default Dashboard