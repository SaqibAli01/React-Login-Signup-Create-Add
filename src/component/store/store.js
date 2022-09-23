import { createStore ,combineReducers} from "redux";

let myname={
    name:"mohsin"
};

function adReducer(oldname=myname,newname){
    if(newname.type=="add-user" ){
        oldname.name=newname.name

    }
    return {...oldname}
    

}

function userReducer(){

    return [
         {
        name:"mohsin",
        id:"1"},
        {
            name:"haseb",
            id:"2"
        },
         {
            name:"shezad",
            id:"3"
        }
    ]
    
}

let alldata=combineReducers({adReducer,userReducer})
let mystore=createStore(alldata);
export default mystore;
