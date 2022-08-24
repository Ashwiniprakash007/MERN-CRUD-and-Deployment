import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";


const NotesEdit=()=>{
    const navigate=useNavigate()
const params=useParams();
const {_id}=params
const noteId=_id;
const {id}=params;
const userId=id;
console.log(_id)
const [taskname, settaskname] = useState("")
    const [status, setstatus] = useState("")
const handletaskname = (e) => {
    settaskname(e.target.value)
}

const handlestatus = (e) => {
    setstatus(e.target.value)
}


const handleSubmit = async () => {
    const payload ={
        taskname,
        status,
        userId
    }
    await fetch(`http://localhost:8080/notes/${noteId}/edit`, {
        method : "PATCH",
        body : JSON.stringify(payload),
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }, 
    }).then((res)=>{
        navigate(`/todos/${id}`)
    }).catch((err)=>{
        alert("something went wrong")
    })
}
return (
    <div>
   <br/>
            <input type="text" placeholder="taskname" value={taskname} onChange={handletaskname}></input> 
            
            <input type="text" placeholder="status" value={status} onChange={handlestatus}></input>
            
            <button onClick={handleSubmit}>Edit</button>
    </div>
)
}


export default NotesEdit;

