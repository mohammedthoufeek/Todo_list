import './App.css';
import {useState} from 'react';


function App(){
  const [text,setText]=useState("");
  const [arr,setArr]=useState([]);
  const handleChange=(event)=>{
    setText(event.target.value);
  }
  const clickHandle=()=>{
    setArr([...arr,text]);
  }
  const deleteList=()=>{

  }
  return(
    <div className='App'>
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={clickHandle}>Add Task</button>
      </div>
      <div className="list">
        {arr.map((value)=>{
          return (
            <div>
              <h1>{value}</h1>
              <button onClick={deleteList}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default App;