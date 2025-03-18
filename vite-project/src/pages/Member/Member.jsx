import React, { useEffect, useState } from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Membercard from './Membercard';
import Modal from '../../Components/Modal/Modal';
import Addmembership from '../../Components/Addmembership/Addmembership';
import Addmembers from '../../Components/Addmember/Addmembers';
export const Member = () => {
  const [addMembership, setAddmembership] = useState(false);
  const [addMember, setAddmember] = useState(false);

  const [currentPage,setCurrentPage] = useState(1);
  const[startFrom,setStartFrom] =useState(0);
  const [endTo,setEndTo] =useState(9);
  const [totalData,setTotalData] = useState(0)
  const [limit,setLimit] = useState(9)
  const [noOfPage,setNoOfpage] =useState(0);

  useEffect(()=>{
    fetchData();
  },[])

      const fetchData =async()=>{
        let totalData = 52;
        setTotalData(totalData); 

        let extraPage = totalData%limit===0?0:1;
        let totalPage = parseInt(totalData/limit) + extraPage;
        setNoOfpage(totalPage);

        if(totalData ===0)
        {
          setStartFrom(-1);
          setEndTo(0);
        }
        else if(totalData<10)
        {
          setStartFrom(0);
          setEndTo(totalData);
        }
      }
  const handleMemberShip = () => {
    setAddmembership(prev => !prev);
  }

  const handleMembers = () => {
    setAddmember(prev => !prev)
  }

  const handlePrev=()=>{
    if(currentPage!==1)
    {
      let currPage = currentPage-1;
      setCurrentPage(currPage);
      var from = (currPage-1)*9;
      var to =(currPage*9);
      setEndTo(to);

    }
  }

  const handleNext=()=>
  {
    if(currentPage!==noOfPage)
    {
      let currPage = currentPage+1;
      setCurrentPage(currPage);
      var from = (currPage-1)*9;
      var to = (currPage*9)
      if(to>totalData)
      {
        to=totalData;
      }
      setStartFrom(from);
      setEndTo(to);
    }
  }
  return (
    <div className='text-black p-5 w-3/4 h-[100vh]'>

      <div className=' border-2 bg-slate-900 flex justify-between text-white rounded-lg p-3'>
        <div className='hover:bg-amber-400 rounded-md cursor-pointer' onClick={handleMembers}>Add member <FitnessCenterIcon /> </div>
        <div className='hover:bg-amber-400 rounded-md cursor-pointer' onClick={handleMemberShip}>Membership <AddIcon />  </div>

      </div>

      <Link to={'/dashboard'} > <ArrowBackIcon /> Back to dashboard</Link>

      <div className='mt-5 w-1/2 flex gap-2'>
        <input type="text" className='border-2 w-full p-2 rounded-lg' placeholder='search by Name or Mobile No' />
        <div className=' bg-slate-800 p-3  border-2 text-white rounded-lg cursor-pointer hover:bg-amber-400' ><SearchIcon /></div>
      </div>

      <div className='mt-5 text-xl flex justify-between text-slate-800'>
        <div>Total Members</div>
        <div className='flex gap-5'>
          <div>{startFrom+1} - {endTo}of {totalData}Members</div>
          <div className={`w-8 h-8 cursor-pointer flex items-center justify-center hover:text-white hover:bg-amber-400 ${currentPage===1?'bg-gray-200 text-gray-400':null}`} onClick={()=>{handlePrev()}}><ChevronLeftIcon /></div>
          <div className={`w-8 h-8 cursor-pointer flex items-center justify-center hover:text-white hover:bg-amber-400 ${currentPage===noOfPage?'bg-gray-200 text-gray-400':null}`}  onClick={()=>{handleNext()}} ><ChevronRightIcon /></div>

        </div>
      </div>

      <div className='bg-slate-100 p-5 mt-5 rounded-lg grid gap-2 grid-cols-3 overflow-x-auto h-[65%]'>
        {/* card1 */}
        <Membercard />
        <Membercard />
        <Membercard />
        <Membercard />
        <Membercard />
        <Membercard />
        <Membercard />
        <Membercard />
        <Membercard />

      </div>

      {addMembership && <Modal header="Add Membership" handleClose={handleMemberShip} content={<Addmembership />} />}
      
      {addMember && 
      <Modal header="add new members" handleClose={handleMembers} content={<Addmembers />} />
      }


    </div>
  )
}
