import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginField,setLoginField] = useState({"userName":"","password":""});
    const navigate = useNavigate();
    const handleLogin =()=>
    {
        sessionStorage.setItem("isLogin",true)
        navigate('/dashboard');
    }
    const handleOnChange=(event,name)=>{
        setLoginField({...loginField,[name]:event.target.value});
    }
    console.log(loginField)
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='w-[350px] m-10 p-10 bg-pink-200 rounded-lg shadow-lg min-h-[400px] flex flex-col justify-center'>
                <div className='text-black text-center text-3xl mb-5'>Login</div>

                <input value={loginField.userName} onChange={(event)=>{handleOnChange(event,"userName")}} type="text" className='w-full my-3 p-3 rounded-lg border border-gray-300' placeholder='Enter username' />

                <input type="password" onChange={(event)=>{handleOnChange(event,"password")}} className='w-full my-3 p-3 rounded-lg border border-gray-300' placeholder='Enter password' />

                <button className='p-3 w-full bg-slate-600 rounded-lg text-white text-lg hover:bg-white hover:text-black' onClick={()=>{handleLogin()}}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
