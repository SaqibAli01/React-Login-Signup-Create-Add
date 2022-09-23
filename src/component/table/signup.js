import { useRef } from "react";
import "./table.css"

export function SignUp(){
    let name=useRef();
    let email=useRef();
     let city=useRef();

     let user={
         name:name.current.value,
         email:email.current.value,
         city:city.current.value,

     }




    return <div>
        <input ref={name}></input>
        <input ref={email}></input>
        <input ref={city}></input>
        <button>click me</button>

    </div>

}