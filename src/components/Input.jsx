import React,{useState} from "react";


function Input(props){
    
const [inputText,setInputText] = useState("");

function handleChange(event){
    const newValue=event.target.value;
setInputText(newValue);
}

    return(
        <div className="form">
             <input type="text" 
             id="task"
             onChange={handleChange}
             value={inputText}
             />
             <button id="btn" 
             onClick={()=>{
                 props.onAdd(inputText);
                 setInputText("");
             }}
             ><span>Add</span></button>
        </div>
      
    )
}

export default Input;
