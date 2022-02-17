import React,{useState} from "react";
import "./../styles/App.css";
import Input from "./Input.jsx";
import List from "./List.jsx";

function App() 
{

const [items,setItems] = useState([]);

function addItem(inputText){
	setItems((previtems)=>{
		return [...previtems,inputText];
	});
}

function deleteItem(id){
setItems((prev)=>{
	return prev.filter((item,index)=>{
		return index !==id;
	});
});
}

	return (
	<div id="main">
		<Input onAdd={addItem} />
<div>
		<ul>
			{items.map((item,index)=>(
				<List 
				key={index}
				id={index}
				text={item}
				delete={deleteItem}
				/>
			))}
		</ul>

		</div>
	</div>
	);
}


export default App;
