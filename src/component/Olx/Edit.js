import { useForm,formState } from "react-hook-form";
import { useSelector } from "react-redux";
import { ToastContainer,toast } from "react-toastify";
import store from "./Store";

export function Edit(){
    let data=useForm();
    let style={
        width:"96px",
    }
    const tost=()=> toast.success("Thanks For signup");

    let ads=useSelector(function(data){
        return data.adReducer.ad;
    })

    let purananam=ads.map((user)=>{
        return user.name;

    })

    

    function submitdata(updatevalue){
        let myindex=ads.map((use,index)=>{
                return index;
           })
       
        updatevalue.photo=URL.createObjectURL(updatevalue.file[0])

        store.dispatch({
            type:"updatedata",
            myindex:myindex,
            payload:updatevalue,
        })
    tost();



    }

    return <div className="main">
                    <h2>UPDATE AD</h2>
                    <div>

                   {
                    ads.map((user)=>{
        

                        return   <form onSubmit={data.handleSubmit(submitdata)}  className="form">
                        <input placeholder="Title" defaultValue={user.name}  {...data.register('name', { required: true })} />
                        {data.formState.errors.name ? <div className="error">Plz Enter your Name</div> : null}
                        <br />
                        <input placeholder="Price" defaultValue={user.password}  {...data.register('password', { required: true })} />
                        {data.formState.errors.password ? <div className="error">Plz Enter your password</div> : null}
                        <br />
                         <input type="file" {...data.register('file', { required: true })} />
                        <br />
                        <button style={style} >UPDATE ADD</button>
                        <ToastContainer className="" position="top-center"  />
                    </form>
    })
}
</div>
</div>
            
}