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
  const deleteList=(taskName)=>{
    setArr(arr.filter((task)=>task!==taskName));
  }
  return(
    <div className='App'>
      <div className="addTask">
        <input for="Add Task" onChange={handleChange}/>
        <button placeholder='Add Task' onClick={clickHandle}>Add Task</button>
      </div>
      <div className="list">
        {arr.map((task)=>{
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={()=>deleteList(task)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  );

}
export default App;