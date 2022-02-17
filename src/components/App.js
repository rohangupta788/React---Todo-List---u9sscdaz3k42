import React,{useState} from "react";
import "./../styles/App.css";
import Input from "./Input.jsx";
import List from "./List.jsx";

function App() 
{

const [items,setItems] = useState([]);

function addItem(inputText){
	if(inputText === ""){
	}
	else{
		setItems((previtems)=>{
			return [...previtems,inputText];
		});
	}
	
}

function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }


  function edited(id,text){
	  const edit = items.map((item,index)=>{
		  if(index === id){
			  item = text;
		  }
		  return item;
	  });

	  setItems(edit);
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
				edited={edited}
				/>
			))}
		</ul>

		</div>
	</div>
	);
}


export default App;
