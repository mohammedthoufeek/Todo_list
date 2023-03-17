import React from 'react'

export const Task = (props) => {
  return (
    <div className='task' style={{backgroundColor:props.taskComplete?"green":"white"}}>
    <h1 style={{}}>{props.taskName}</h1>
    <button onClick={()=>props.complete(props.taskId)}>Complete</button>
    <button onClick={()=>props.deleteList(props.taskId)}>Delete</button>
  </div>
  )
}

export default Task