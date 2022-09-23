import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import store from "./Store";


export function Login() {
    let data = useForm();
    let users = useSelector(function (store) {
    
        return store.userReducer.users;

    })



    const wel = () => toast.success("Thanks For Login");
    const wel1 = () => toast.error("Provide correct info");


    function logindata(alllogindata) {
        let milgya = users.find((user) => {
           
        if (user.name === alllogindata.name) {
            return true;
        }

        })
        if (milgya) {
            wel();
            store.dispatch({
                type: "Userlogin",
                payload: true,
            })
        }


        else {
            wel1();
        }







    }

    return <div className="main" id="mainlogin" >
        <h2>LOG IN</h2>
        <form onSubmit={data.handleSubmit(logindata)} className="form" >
            <input placeholder="Name" {...data.register('name', { required: true })} />
            {data.formState.errors.name ? <div className="error">Plz Enter your Name</div> : null}
            <br />
            <input placeholder="Password" {...data.register('password', { required: true })} />
            {data.formState.errors.password ? <div className="error">Plz Enter your password</div> : null}
            <br />


            <button >Login</button>
            <ToastContainer className="" position="top-center" />
        </form>
    </div>

}