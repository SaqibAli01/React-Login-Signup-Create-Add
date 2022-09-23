import { useForm } from "react-hook-form";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store from "./Store";
import { useSelector } from "react-redux";
import "./olxsignup.css";
import axios from 'axios';

export function Signup(){

    let data=useForm();
    let users=useSelector((user)=>{
            return user.userReducer.users;
    })
    const tost=()=> toast.succenpnpss("Thanks For signup");
    const tost1=()=> toast.error("Already Register");



   

     function submitdata(signupalldata){
       

            

        let Alreadyrigster= users.find((user)=>{
                if(user.name==signupalldata.name){
                   
                    return true;
                }

            })
            if(Alreadyrigster){
                tost1();
                return;
            }
            else{

        
            signupalldata.image= URL.createObjectURL(signupalldata.file[0]);
            signupalldata.id= Math.floor(Math.random()*50+1);
            
    
            store.dispatch({
                type:"user-Added",
                payload:signupalldata
            })
    
            tost();    }


    }

     return <div className="main">
              <h2>SIGN UP</h2>
            <form onSubmit={data.handleSubmit(submitdata)}  className="form">
                        <input placeholder="Name" {...data.register('name', { required: true })} />
                        {data.formState.errors.name ? <div className="error">Plz Enter your Name</div> : null}
                        <br />
                        <input placeholder="Password" {...data.register('password', { required: true })} />
                        {data.formState.errors.password ? <div className="error">Plz Enter your password</div> : null}
                        <br />
                        <input placeholder="Balance" type="number" {...data.register('balance', { required: true })} id="number" />
                        {data.formState.errors.balance ? <div className="error">Plz enter your amount</div> : null}
                        <br />
                        <br />
                        <input type="file" {...data.register('file', { required: true })} />
                        <br />

                        <button >Signup</button>
                        <ToastContainer className="" position="top-center"  />
                    </form>
    </div>


}