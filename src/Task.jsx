import React from 'react'

export const Task = (props) => {
  return (
    <div>
    <h1 style={{}}>{props.taskName}</h1>
    <button onClick={()=>props.completeTask(props.taskId)}>Complete</button>
    <button onClick={()=>props.deleteList(props.taskId)}>Delete</button>
  </div>
  )
}

export default Task