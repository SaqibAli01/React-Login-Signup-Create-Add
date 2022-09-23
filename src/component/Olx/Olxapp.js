import ReactDOM from "react-dom";
import { Header } from "./Olxheader";
import {BrowserRouter , Routes,Route}  from "react-router-dom";
import { Signup } from "./Olxsignup";
import { Login } from "./Olxlogin";
import { Admin } from "./Admin";
import { CreateAd } from "./Createad";
import { Home } from "./Home";
import { Add } from "./Add";
import store from "./Store";
import { Provider,useSelector } from "react-redux";
import { Edit } from "./Edit";





export function App(){
    return< div>
        <Provider store={store}>
        <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/createad" element={<CreateAd></CreateAd>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/add/:edit" element={<Edit></Edit>}></Route>



        </Routes>
        </BrowserRouter>
        </Provider>
    </div>
}