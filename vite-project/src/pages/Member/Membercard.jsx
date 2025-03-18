import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';


const Membercard = () => {
  return (
         
                <Link to={'/member/123'} className='bg-white rounded-lg p-3 hover:bg-amber-400'>
                  <div className='w-28 h-28 flex justify-center relative items-centers border-2 p-2 mx-auto rounded-full'>
                    <img className='w-full h-full rounded-full' src="https://imgs.search.brave.com/7SYgDx190R0EqhaDqAflLToP2DAXRO-gHcC11H2bm0I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzllLzMx/LzU1LzllMzE1NTAy/ODQxY2E3ZmYyMmY0/ZmJhOTE5YWQ2OTJk/LmpwZw" alt="" />
                    <CircleIcon className='absolute top-0 right-0' sx={{color:"greenyellow"}} />
                  </div>
                  <div className='mx-auto mt-3 text-center text-xl font-semibold font-mono' >
                    {"Shubham Kumar"}
                  </div>
                  <div className='mx-auto text-center text-xl font-mono mt-2'>
                    {"+91"+"343423324"} 
                  </div>
                  <div className='mx-auto text-center text-xl font-mono mt-2'>
                    Next Bill Date :{"31-12-2024"}
                  </div>
                </Link>
  )
}

export default Membercard