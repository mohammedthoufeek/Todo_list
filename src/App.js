import './App.css';
import {useState} from 'react';
import {Task} from './Task';


function App(){
  const [text,setText]=useState("");
  const [arr,setArr]=useState([]);
  const handleChange=(event)=>{
    setText(event.target.value);
  }

  const clickHandle=()=>{
    const value={
      id:arr.length===0?1:arr[arr.length-1].id+1,
      task:text,
      complete:false
    }
    setArr([...arr,value]);
  }
  const deleteList=(id)=>{
    setArr(arr.filter((value)=>value.id!==id));
  }

  const completeTask=(id)=>{
    setArr(
      arr.map((task)=>{
        if(task.id===id){
          return{...task,complete:true}
        }
        else{return task}
      })
    )
  }


  return(
    <div className='App'>
      <div className="addTask">
        <input for="Add Task" onChange={handleChange}/>
        <button placeholder='Add Task' onClick={clickHandle}>Add Task</button>
      </div>
      <div className="list">
        {arr.map((task)=>{
          return <Task 
          taskName={task.task} 
          taskId={task.id} 
          taskComplete={task.complete} 
          deleteList={deleteList}
          complete={completeTask}
          />
        })}
      </div>
    </div>
  );

}
export default App;

// usestate
// useEffect
// usenavigte
// useref