import React, { useState } from 'react'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
const Addmembers = () => {
  const [imageLoader,setImageLoader] = useState(false);
  const [inputField, setInputField] = useState({ name: "", mobileNo: "", address: "", membership: "", profilePic:"https://imgs.search.brave.com/GTciTfNisqdPU0yVTnpyoDolBSpKYl9K6y6H7BOjDlg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0", joiningDate: "" })
  const handleOnChange = (event,name)=>{
    setInputuField({...inputField,[name]:event.target.value})
    
  }

  console.log(inputField);

  const uploadImage =async(event)=>{
    setImageLoader(true)
    console.log("imageuploading")
    const files =event.target.files;
    const data = new FormData();
    data.append('file',files[0]);

    // dtktjrlbo

    data.append('upload_preset','gym-management')
    try{
      const response = await axios.post("https://api.cloudinary.com/v1_1/dtktjrlbo/image/upload",data)
      console.log(response);
      const imageUrl = response.data.url;
      setInputField({...inputField,['profilePic']:imageUrl})
      setImageLoader(false)
        
    }catch(err){
      console.log(err)
      setImageLoader(false)

    }
  }



  return (
    <div className='text-black'>
      <div className='grid gap-5 grid-cols-2 text-lg'>
        <input value={inputField.name} onChange={(event) => { handleOnChange(event, "name") }} placeholder='Name of the joinee' type="text" className='border-2 w-[90%] pl-3 pb-2 border-slate-400 rounded-md h-12' />
        <input value={inputField.mobileNo} onChange={(event) => { handleOnChange(event, "mobileNo") }} placeholder='Mobile No' type="text" className='border-2 w-[90%] pl-3 pb-2 border-slate-400 rounded-md h-12' />
        <input value={inputField.address} onChange={(event) => { handleOnChange(event, "address") }} placeholder='Enter Addres' type="text" className='border-2 w-[90%] pl-3 pb-2 border-slate-400 rounded-md h-12' />
        <input value={inputField.joiningDate} onChange={(event) => { handleOnChange(event, "joiningDate") }} type="date" className='border-2 w-[90%] pl-3 pb-2 border-slate-400 rounded-md h-12' />

        <select className='border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md placeholder:text-gray-400'>
          <option>1 Month Membership</option>
          <option>1 Month Membership</option>
        </select>
        {/* change this input  */}
        <input onChange={(e)=>uploadImage(e)} className='bg-slate-500 rounded-md' type="file" />

        <div className='w-1/4'>
          <img src={inputField.profilePic} alt="" />
      {
        imageLoader &&   <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="secondary" />
        
      </Stack>
      }  
        </div>
        <div className='p-3 border-2 mt-5 w-28 text-lg h-14 text-center mx-auto bg-slate-800 text-white rounded-xl hover:bg-amber-400 '>Register</div>
      </div>
    </div>
  )
}

export default Addmembers