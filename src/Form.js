import React,{createRef, useState} from "react"

function Createform(){
const[data,setData]=useState({
    username:"",
    email:""
})

const handleChange=e=>{
setData({...data,[e.target.name]:[e.target.value]})
}
const handleSubmit=e=>{
    e.preventDefault();
//console.log("submittee data",username,email);
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>name:</label>
                <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}    
                >      
           </input>
            </div>
             <div>
                <label>Email:</label>
                <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}    
                >      
           </input>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            <label>{data.username}{data.email}</label>
            </form>
        </div>
    )

}
export default Createform;