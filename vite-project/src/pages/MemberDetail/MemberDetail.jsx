import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Switch from 'react-switch';

const MemberDetail = () => {
  const [status, setStatus] = useState("Pending");
  const [renew, setRenew] = useState(false);

  const navigate = useNavigate();

  const handleSwitchBtn = () => {
    setStatus(prevStatus => prevStatus === "Active" ? "Pending" : "Active");
  };

  return (
    <div className='w-3/4 text-black p-5'>

      {/* ✅ Fixed Go Back Button */}
      <div onClick={() => navigate(-1)} className='border-2 text-xl font-sans text-white p-2 rounded-xl bg-slate-800 w-fit cursor-pointer'>
        <ArrowBackIcon /> Go Back
      </div>

      <div className='mt-10 p-8'>
        <div className='w-full h-fit flex'>

          {/* ✅ Image Section */}
          <div className='w-1/3 mx-auto'>
            <img src="https://imgs.search.brave.com/HtM9XbW52N531m0eMHxlqweGT6GXHD5C8sL0AzqBzpU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FiL2Q4/LzNjL2FiZDgzYzBj/NjA4YjY3NGJmNDEw/Yjk1NTYxMmY2ZGU2/LmpwZw"
              alt="Profile"
              className='w-full mx-auto'
            />
          </div>

          {/* ✅ User Details Section */}
          <div className='w-2/3 mt-5 text-xl p-5'>
            <div>
              <div className='mt-1 mb-2 text-2xl font-semibold'>Name: Danish</div>
              <div className='mt-1 mb-2 text-2xl font-semibold'>Mobile: +91-7354774670</div>
              <div className='mt-1 mb-2 text-2xl font-semibold'>Address: Bhopal</div>
              <div className='mt-1 mb-2 text-2xl font-semibold'>Joined Date: 10-11-2024</div>
              <div className='mt-1 mb-2 text-2xl font-semibold'>Next Bill Date: 31-10-2024</div>

              {/* ✅ Fixed Status Switch */}
              <div className='mt-1 mb-2 flex gap-4 text-2xl font-semibold'>
                Status:
                <Switch
                  onColor='#6366F1'
                  checked={status === "Active"}
                  onChange={handleSwitchBtn} // ✅ Directly passing function
                />
              </div>

              {/* ✅ Fixed Renew Button */}
              <div
                onClick={() => setRenew(prev => !prev)}
                className={`mt-1 rounded-lg p-3 border-2 border-slate-900 text-center w-full md:w-1/2 ${renew && status === "Active" ? 'bg-amber-400' : ''
                  } cursor-pointer hover:text-white hover:bg-amber-400`}
              >
                Renew
              </div>
           {
            renew && status==="Active"?(
              <div className='rounded-lg p-3 mt-5 mx-auto mb-5 h-fit bg-slate-50 md-2-[50%]'>
              <div className='w-full'>
                <div className='my-5'>
                  <div>Membership</div>

                  <select className='w-full border-2 p-2 rounded-lg'>
                    <option>1 Month Plan</option>
                    <option>2 Month Plan</option>

                  </select>
                  <div className='mt-3 rounded-lg p-3 border-2 border-slate-900 text-center w-1/2 mx-auto cursor-pointer hover:bg-amber-400 '>Save</div>
                </div>

              </div>
            </div>
            ):null 
           }


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
