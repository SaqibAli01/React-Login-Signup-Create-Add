import { useForm } from "react-hook-form";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store  from "./Store";
import { useSelector } from "react-redux";
import "./olxsignup.css";



export function CreateAd(){

    let ads=useSelector((user)=>{
            return user.adReducer.ad;
    })

    let data=useForm();
    let style={
        width:"96px",
    }
   const tost=()=> toast.success("Thanks For ADD");

   

   function submitdata(createdata){
       
      

       createdata.pic=URL.createObjectURL(createdata.file[0]);
       createdata.id=Math.floor(Math.random()*500+1);
       
       store.dispatch({
           type:"createad",
         
           payload:createdata
        })

        tost();

    }

     return <div className="main">
              <h2>CREATE AD</h2>
            <form onSubmit={data.handleSubmit(submitdata)}  className="form">
                        <input placeholder="Title" {...data.register('name', { required: true })} />
                        {data.formState.errors.name ? <div className="error">Plz Enter your Name</div> : null}
                        <br />
                        <input placeholder="Price" {...data.register('password', { required: true })} />
                        {data.formState.errors.password ? <div className="error">Plz Enter your password</div> : null}
                        <br />
                         <input type="file" {...data.register('file', { required: true })} />
                        <br />
                        <button style={style}>Create Add</button>
                        <ToastContainer className="" position="top-center"  />
                    </form>
    </div>


}