import React,{useState} from "react"

function CreateDropdownform(){
const[data,setData]=useState("")

const handleChange=e=>{
setData(e.target.value)
console.log("value",e.target.value)
}

    return(
        <div>
            <form>        
            <label>name:</label>
                <select value={data} onChange={handleChange}>
                  <option value="ford">Ford</option>
                  <option value="sera">sera</option>
                  <option value="maruthi">maruthi</option>
                </select>
            </form>
        </div>
    )

}
export default CreateDropdownform;