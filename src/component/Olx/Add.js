import "./Add.css"
import store from "./Store"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export function Add(){
    
 let users=useSelector((user)=>{
 return user.adReducer.ad
 })


    return <div>
        

        {
            users.map((user)=>{
                return    <div className="pehli">
                <h4>{`Title: ${user.name}`}</h4>
                <img src={user.pic}></img>
                <h5>{`Price: ${user.password}`}</h5>
                <button
                onClick={()=>
                    store.dispatch({
                        type:'adddatadelet',
                        payload:user.id
                    })
                }
                >Delet</button>
                <button ><Link to="edit">EDIT</Link></button>
            </div>

            })
        }
    .
        
     </div>
}