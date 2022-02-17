import React, { useState } from "react";


function List(props){

    const [textValue,setTextValue] = useState(props.text);
    const [isEdit,setIsEdit] = useState(false);
    const [editText,setEditText] =useState("");


    function edit(e){
const newedit = e.target.value;
setEditText(newedit);
    }

    return(
<div >
    <div style={{display: isEdit ? 'none':  'block'}}>
    <li className="list">{textValue}
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
                  setTextValue(editText);
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
