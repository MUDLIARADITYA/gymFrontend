    import React,{useEffect,useState} from 'react'
    import { Link } from 'react-router-dom'
    import ArrowBackIcon from '@mui/icons-material/ArrowBack';
    import Membercard from '../Member/Membercard';


    const Generaluser  = () => {
        const [header,setHeader] =useState("");

        const functionCall =async (func) =>
        {
            switch(func)
            {
                case "montlyJoined":

                setHeader('Monthly joined Members')
                break;
                
                case "threeDayExpire":

                setHeader('Expiring in 3 Days Members')
                break;
            
                case "fourToSevenDayExpire":

                setHeader('Expiring in 4-7 Days Members')
                break;


                case "Expired":

                setHeader('Expired Members')
                break;


                case "inActiveMembers":

                setHeader('InActive Members')
                break;

                default:
                    setHeader("Unknown Category"); 
            }
        }

          useEffect(()=>{
            const func =sessionStorage.getItem('func');
            functionCall(func); 

        },[])   
       
    return (
        <div className='text-black p-5 w-3/4 flex-col'>
        

            <div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>
                    <Link to={'/dashboard'} className='border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-amber-400'>
                    <ArrowBackIcon/>  back to dashboard
                    </Link>
            </div>

                <div className='mt-5 text-xl text-slate-800'>
                {header}
                </div>

                <div className='bg-slate-100 p-5 mt-5 rounded-lg grid gap-2 grid-cols-3 overflow-x-auto h-[80%]'>
                    <Membercard/>
                    <Membercard/>
                    <Membercard/>
                    <Membercard/>


                </div>



        </div>
    )
    }

    export default  Generaluser 