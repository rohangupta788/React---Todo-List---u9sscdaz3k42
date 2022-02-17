import React, { useState } from "react";


function List(props){

    const [isEdit,setIsEdit] = useState(false);
    const [editText,setEditText] =useState("");


    function edit(e){
const newedit = e.target.value;
setEditText(newedit);
    }

    return(
<div >
    <div style={{display: isEdit ? 'none':  'block'}}>
    <li className="list">{props.text}
    <button 
            className="edit" 
            onClick={()=>setIsEdit(true)}
    ><span>Edit</span></button>

    <button className="delete" 
            
            onClick={()=>{
                props.delete(props.id);
            }}
    >
        <span>Delete</span></button>
        </li>
        </div>

      <div style={{display: isEdit ? 'block':  'none'}} >
          <input type="text" className="editTask" value={editText}
          onChange={edit}
          />
          <button className="saveTask"
          onClick={(e)=>{
              e.preventDefault();
              if(editText !== ""){
                  props.edited(props.id,editText);
                  setEditText("");
                  setIsEdit(false);
             }
              else{
                  setIsEdit(false);
              }
          }}
          ><span>Save</span></button>
          </div>  
</div>

    )
}

export default List;
