import { useRef,useEffect } from "react";

function Cities(props){
    return <div>
        <h1>{props.name}</h1>
        <ol>
            {props.a1.map((city)=>{
                return <li>{city}</li>
            }) }
        </ol>
    </div>
}


export function Call(){
    let user=useRef();
    let cities=["fsd","Lhr","mul"]
    
    
    return <div>
        <span ref={user}>ya purna code ha</span>
        <Cities a1={cities} name="343"></Cities>
    </div>

}




