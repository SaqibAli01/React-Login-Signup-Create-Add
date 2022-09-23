import ReactDOM from "react-dom";
import { useRef,useEffect, useState } from "react";
import {BrowserRouter , Routes,Route}  from "react-router-dom";
import {Header} from "./header/header";
import { DashBord } from "./signuppage/Dashbord";
// // import {Body} from "./component/signupapp/body/body.js";
import { Signup} from "./signuppage/Signup";
import { Signin} from "./signin/signin";




    
   








export function App(){
    let [users,setusers]=useState([]);
    let [usermilgya,setusermilgya]=useState(false);
    let [marapassword,setmarapassword]=useState(false);

    

    return <div>
        
      
    < BrowserRouter>
     <Header usermilgya={usermilgya} setusermilgya={setusermilgya}></Header>
    <Routes>
     <Route path="/" element={ <Signup users={users}  setusers={setusers} ></Signup>}></Route>
     <Route path="/SignIn" element={ <Signin setusers={setusers} users={users} setusermilgya={setusermilgya}  setmarapassword={setmarapassword} />}></Route>
     <Route path="/dashboard" element={ <DashBord users={users} setusers={setusers} marapassword={marapassword} />}></Route>
  </Routes>
       </BrowserRouter>  
    </div>
}