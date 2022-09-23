import "./Admin.css";
import store from "./Store";
import { useSelector } from "react-redux";
export function Admin() {
        let data=useSelector((user)=>{
            return user.userReducer.users;

        })
      

    return <div>
        <table>
            <tr className="tabhead">
                <th>Name</th>
                <th>Password</th>
                <th>Balance</th>
                <th>Image</th>
                <th>EDIT/Delet</th>

            </tr>
           {
            data.map((user)=>{
                
                return <tr>
                 <td>{user.name}</td>
                 <td>{user.password}</td>
                 <td>{user.balance}</td>
                 <td><img src={user.image}></img></td>
                 <button>EDIT</button>
                 <button onClick={
                    ()=>{
                       store.dispatch({
                        type:"delet data",
                        payload:user.id,

                       })

                    }
                   }>Delet</button>
                 </tr>
               

            })
           }
            
           
        </table>

    </div>
}