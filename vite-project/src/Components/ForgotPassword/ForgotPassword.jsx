    import React, { useState } from 'react'

    const ForgotPassword = () => {
        const [emailSubmit, setEmailSubmit] = useState(false);
        const [otpValidate, setOtpValidate] = useState(false);
        const[contentVal,setContentValue] =useState("submit your Email");
        
        const [inputField,setInputField] =useState({email:"",otp:"",newPassword:""});
        const handleSubmit = () => {

            //The ! (logical NOT) operator is used to check if a value is false (or falsy). In your case:
            if (!emailSubmit) {
                setEmailSubmit(true)
                setContentValue("submit your otp");

            } else if (emailSubmit && !otpValidate){
                setOtpValidate(true)
                setContentValue("submit your password");

            }
        }


            const handleOnChange =(event,name)=>{
                setInputField({...inputField,[name]:event.target.value})
            }
                console.log(inputField)

        return (
            <div className='w-full'>

                <div className='w-full mb-5' >
                    <div>Enter your Email</div>
                    <input type="text" value={inputField.email} onChange={(event)=>{handleOnChange(event,"email")}} className='w-1/2 my-3 p-2 rounded-lg border border-slate-300' placeholder='Enter email' />
                </div>

                {
                    emailSubmit && <div className='w-full mb-5' >
                    <div>Enter your otp</div>
                    <input type="text" value={inputField.otp} onChange={(event)=>{handleOnChange(event,"otp")}}  className='w-1/2 my-3 p-2 rounded-lg border border-slate-300' placeholder='Enter otp' />
                </div>
                }

    {
                    otpValidate && <div className='w-full mb-5' >
                    <div>Enter your password</div>
                    <input type="text" value={inputField.newPassword} onChange={(event)=>{handleOnChange(event,"newPassword")}}  className='w-1/2 my-3 p-2 rounded-lg border border-slate-300' placeholder='Enter new password' />
                </div>
                }
                <div className='bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold cursor-pointer hover:bg-white hover:text-black' onClick={() => handleSubmit()} >{contentVal}</div>
            </div>
            
        
        )
    }

    export default ForgotPassword