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
  return(
    <div className='App'>
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={clickHandle}>Add Task</button>
      </div>
      <div className="list">
        {arr.map((value)=>{
          return <h1>{value}</h1>
        })}
      </div>
    </div>
  );
}
export default App;