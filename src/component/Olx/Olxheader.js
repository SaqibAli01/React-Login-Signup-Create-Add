import { Link } from "react-router-dom";
import "./olxheader.css";
import store from "./Store";
import { useSelector } from "react-redux";



export function Header() {

  let data = useSelector((user) => {
    return user.userReducer.currentuser;
  })

  return <div>
    <nav className="header">
      <div class="nav-wrapper" >
        <Link to="#" class="brand-logo">Saqib Ali</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/signup">SIGN UP</Link></li>
          <li><Link to="login">LOG IN</Link></li>
          {data == true ? <li><Link to="admin">ADMIN</Link></li> : null}
          {/* {data == true ? <li><Link to="createad">CREATE AD</Link></li> : null} */}
          <li><Link to="createad">CREATE AD</Link></li>
          {/* {data == true ? <li><Link to="add">ALL ADD</Link></li> : null} */}
          {/* <li> <Link to="edit ">Edit</Link></li> */}
          <li><Link to="add">ALL ADD</Link></li>
          {data == true ? <li><Link to="/" onClick={() => {
            store.dispatch({
              type: "logout",
              payload: null
            })
          }}>LOG OUT</Link></li> : null}




        </ul>
      </div>
    </nav>

  </div>

}