import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./signup.css";

export function Signup(props) {

    let navigate = useNavigate();


    const notify = () => toast.success("Thanks For signup");
    let data = useForm();

   

        // let userMilgya = props.users.find((user) => {
        //     if (user.name == signupalldata.name) {
        //         return true;
        //     }
        // })
        // if (userMilgya) {
        //     toast.error("user hegava");
        //     return;
        // }

        // props.setusers([...props.users, signupalldata])
        // notify();


        // let userMIlgya = props.users.filter((items)=>{

        //     if(items.name==signupalldata.name){

        //     return true;   
        //   }
        // })

        // if(userMIlgya){
        //     toast.error("user hegava");
        //      return;


        // }



        // navigate("/SignIn");




    }


    return <div id="mainsignup">
        <div className="signupclass">
            <h1>Hello World</h1><br></br>
            <h3>Welcome to SignUp page</h3>
            <h5>Just signup and enjoy it</h5>
        </div>
        <div className="signupclass">
            <div id="signupform">
                <h2>Sign Up</h2>
                <hr />
                <div id="signupdata">
                    <form onSubmit={data.handleSubmit(submitdata)}>
                        <input placeholder="Name" {...data.register('name', { required: true })} />
                        {data.formState.errors.name ? <div className="error">Plz Enter your Name</div> : null}
                        <br />
                        <input placeholder="Password" {...data.register('password', { required: true })} />
                        {data.formState.errors.password ? <div className="error">Plz Enter your password</div> : null}
                        <br />
                        <input placeholder="Balance" type="number" {...data.register('balance', { required: true })} />
                        {data.formState.errors.balance ? <div className="error">Plz enter your amount</div> : null}
                        <br />
                        <br />
                        <input type="file" {...data.register('file', { required: true })} />
                        <br />

                        <button >Signup</button>
                        <ToastContainer className="totst" position="top-center" />
                    </form>
                </div>
            </div>
        </div>
    </div>



}