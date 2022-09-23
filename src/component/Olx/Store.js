import { createStore,combineReducers } from "redux";

let initaldata={
    currentuser:null,
    users:[]
    
}
function userReducer(olddata=initaldata,newdata){
    if(newdata.type=="user-Added"){
        olddata.users.push(newdata.payload);
      
       
    }
    else if(newdata.type=="Userlogin"){
        olddata.currentuser=newdata.payload

    }
    else if(newdata.type=="logout"){
        olddata.currentuser=newdata.payload

    }
    else if(newdata.type=="delet data"){
        olddata.users =  olddata.users.filter((user)=>{
        return user.id != newdata.payload 

       })


    }
    return {...olddata};

}
let adinital={
    ad:[]
}
function adReducer(adolddata=adinital,adnewdata){
    if(adnewdata.type=="createad"){
        adolddata.ad.push(adnewdata.payload)
    }
    else if(adnewdata.type=="adddatadelet"){
          adolddata.ad = adolddata.ad.filter((user)=>{
                return user.id != adnewdata.payload
            })
        }
            else if(adnewdata.type=="updatedata"){ 
                 adolddata.ad.length=adnewdata.myindex;
                 adolddata.ad.length=adnewdata.payload;
            //    adolddata.ad.photo=adnewdata.payload.photo;


            }
    return {...adolddata};

}
let Combine=combineReducers({userReducer,adReducer})
let store=createStore(Combine);
export default store;