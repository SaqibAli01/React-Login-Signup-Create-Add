import { useRef, useState } from "react"
import "./form.css"




export function Usestateform(){
    let ref1=useRef();
    let ref2=useRef();
    let ref3=useRef();
    let ref4=useRef();
    let ref5=useRef();
   


   let [arr,setarr]=useState([]);

   

   function submit(event){
        event.preventDefault();
       let user={
        name:ref1.current.value,
        classname:ref2.current.value,
        rollno:ref3.current.value,
        city:ref4.current.value
       }
       event.target.reset();

       setarr([...arr,user])
       


   }







    return <div>
        <div className="main">
        <form onSubmit={submit}>
            <input ref={ref1}></input>
            <input ref={ref2}></input>
            <input ref={ref3}></input>
           <input ref={ref4}></input>
           <button>Sava Data</button>
        </form>

        <table id="table" ref={ ref5}>

            {
                arr.map((use)=>{
                    return <tr>
                        <td>{use.name}</td>
                        <td>{use.classname}</td>
                        <td>{use.rollno}</td>
                        <td>{use.city}</td>

                    </tr>
                })
            }

        </table>
        </div>
    </div>
}