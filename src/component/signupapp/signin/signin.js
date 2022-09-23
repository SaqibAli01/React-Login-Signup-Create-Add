import { useForm } from "react-hook-form";
import {ToastContainer, toast} from "react-toastify";
import { useRef } from "react";

import {useNavigate} from 'react-router-dom';
import "./signin.css"
export function Signin( props) {
 let signindata=useForm();
 let mararef=useRef();
 let navigate = useNavigate();

 function signInSubmit(signinalldata){

     
    const notify = () => toast.error("Wrong INFO");
    const success = () => toast.success("Welcome  DashBord");



   let usermilgyatha= props.users.find((user)=>{

        if(signinalldata.signinname ==user.name &&  signinalldata.password==user.password){

            success();
            return true;            
            
        }
    })
    
    if(usermilgyatha){
        navigate('/dashboard')
        props.setmarapassword(true);
         props.setusermilgya(true);
        
    }
    else{
        notify();
    }
    
 }






    return <div id="mainsignin">
        <div className="signinclass">
            <h1>Hello World</h1><br></br>
            <h3>Welcome to Signin page</h3>
            <h5>Just signin and enjoy it</h5>
        </div>
        <div className="signinclass">
            <div id="signinform">
               
                <h2>Sign in</h2>
                <hr />
                <div id="signindata">
                <form onSubmit={signindata.handleSubmit(signInSubmit)}>
                    <input {...signindata.register('signinname',{required:true})}  placeholder="Name"/><br/>
                    {signindata.formState.errors.signinname ? <div className="error">Plz Enter your Name</div> : null}

                    
                    <input {...signindata.register('password',{required:true})} placeholder="Password"/>
                    { signindata.formState.errors.password ? <div className="error">plz enter your password</div>:null}
                    <button>Signin</button>
                    <ToastContainer position="top-center" className="totst"/>
                    </form>
                </div>
            </div>
        </div>
    </div>


}