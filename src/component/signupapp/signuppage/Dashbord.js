import "./Dashbord.css";
import { Params, useParams } from "react-router-dom";

export function DashBord(props){
let {edit}=useParams();
 
 

    return <div>
       
        <table id="table">
            <tr id="tableth">
            <th>Name</th>
            <th>Password</th>
            <th >Balance</th>
            <th>images</th>
            <th>Edit</th>
            <th>Delet</th>
            
        </tr>
        {
            props.users.map((ekekuser,ekkaindex)=>{
               
             
                return <> 
                    {props.marapassword==true ?
                    
                    <tr id="tabletr" >
                    <td>{ekekuser.name}</td>
                    <td>{ekekuser.password}</td>
                    <td>{ekekuser.balance}</td>
                    {/* <td><img  src="./ship.png" alt=" image"></img></td> */}

                     <td><img src={ekekuser.file[0].name} alt=" image"></img></td>
                    <td><button onClick={()=>{}} className="btn">add</button></td>
                    <td><button  onClick={()=>{
                        props.users.splice(ekkaindex,1)
                        props.setusers([...props.users])
                        
                    }} className="btn">Delet</button></td>
                    

                    

                </tr>:null}
                
        </>
        
            })
        }
        </table>
    </div>
    
    
        
   
}