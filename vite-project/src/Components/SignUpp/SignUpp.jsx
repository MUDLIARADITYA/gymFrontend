import React,{useState}from 'react';
import "./SignUpp.css"
import Modal from '../Modal/Modal';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import axios from'axios';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const SignUpp = () => {

    const[forgotPassword,setForgortPassword]  = useState(false);
    const [inputField,setInputField] = useState({gymName:"",email:"",password:"",profilePic:"https://imgs.search.brave.com/VsZ0C6bLTR8fgUH-wmzsI6OCup5hOzTMEBmgP3Y4-Gc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS85/NWRlM2ZfMGE5ZmRl/ODdjNDMzNDM1ZDgy/NDJjNmM0ZGM4YmI3/ZWR-bXYyLmpwZy92/MS9maXQvd182NDAs/aF8zNjEscV85MC85/NWRlM2ZfMGE5ZmRl/ODdjNDMzNDM1ZDgy/NDJjNmM0ZGM4YmI3/ZWR-bXYyLmpwZw"});
    const [loderImage,setLoaderImage] = useState(false);
    const handleClose = () =>
    {
      setForgortPassword(prev=>!prev);
    }

    const handleOnchange  =(event,name)=>{
      setInputField({...inputField,[name]:event.target.value})
    }
    console.log(inputField)

    const uploadImage =async(event)=>{
      setLoaderImage(true);
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
        setLoaderImage(false)
        setInputField({...inputField,['profilePic']:imageUrl})

          
      }catch(err){
        console.log(err)
        setLoaderImage(false)
      }
    }
       
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='w-[400px] m-10 p-10 bg-pink-200 rounded-lg shadow-lg h-[500px] overflow-y-auto'>
        <div className='text-black text-center text-3xl mb-5'>Register your gym</div>

        <input type="text" value={inputField.email} onChange={(event)=>handleOnchange(event,"email")}  className='w-full my-3 p-3 rounded-lg border border-gray-300' placeholder='Enter email' />
        <input type="text" value={inputField.gymName} onChange={(event)=>handleOnchange(event,"gymName")}  className='w-full my-3 p-3 rounded-lg border border-gray-300' placeholder='Enter gym name' />
        <input type="text" value={inputField.userName} onChange={(event)=>handleOnchange(event,"useName")}  className='w-full my-3 p-3 rounded-lg border border-gray-300' placeholder='Enter username' />
        <input type="password" value={inputField.password}onChange={(event)=>handleOnchange(event,"password")}  className='w-full my-3 p-3 rounded-lg border border-gray-300' placeholder='Enter password' />
        <input type="file" onChange={(e)=>{uploadImage(e)}} className='w-full my-3 p-2 rounded-lg' />

        {
          loderImage &&   <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
          <LinearProgress color="secondary" />
          
        </Stack>
        }


        <img src={inputField.profilePic}
          alt="Gym Logo"
          className='h-[150px] w-[200px] mx-auto my-3 rounded-lg'
        />

        <button className='p-3 w-full bg-slate-600 rounded-lg text-white text-lg hover:bg-white hover:text-black'>
          Register
        </button>
        <button className='p-3 w-full bg-slate-600 rounded-lg text-white text-lg hover:bg-white hover:text-black mt-5' onClick={()=>handleClose()}>
          Forgot password
        </button>
      </div>
      {forgotPassword && <Modal handleClose={handleClose} content={<ForgotPassword/>} />} 
      {/* handleclose is a userdefine name which is passed as a prop in model component while content is a prop in which forgotpassword component is passed and it was imported above––– */}
    </div>
  );
};
export default SignUpp;
