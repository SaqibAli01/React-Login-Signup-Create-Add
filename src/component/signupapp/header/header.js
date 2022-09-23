import "./header.css";
import { Link } from "react-router-dom";

export function Header(props){
    return <div>
       
       
         <nav >
    <div class="nav-wrapper">
      <Link to="#" class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><Link to="/">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        {props.usermilgya==true?<li><Link to="dashboard">DashBord</Link></li>:null}
        {/* <li><Link to="dashbord">DashBord</Link></li> */}
       {props.usermilgya==true ?<li><Link onClick={()=>{
        props.setusermilgya(false);
       }} to="/"> LogOut</Link></li>:null}


      </ul>
    </div>
  </nav>
    </div>
}