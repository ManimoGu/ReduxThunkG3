
import { useEffect, useState } from 'react';
import './App.css';
import {getTasks, AddTask} from "./Data/reducer"
import {useDispatch, useSelector} from "react-redux"
import Task from './modals/task';

function App() {

  const dispatch = useDispatch()

  const [newtask, setNewtask] = useState(new Task())

  

  useEffect(() =>{
      dispatch(getTasks())
  },[])

  const Tasks = useSelector(state => state.Tasks.list)

 

  return (
    <div className="App">

      <input type="text"  placeholder='task' onChange={(e) => setNewtask({...newtask, titre : e.target.value})}/>
      {
        Tasks.map(item =>(
          <>
          <h3>{item.titre}</h3>
          </>
        ))
      }
      <button onClick={() =>dispatch(AddTask({task : newtask}))}>ADD</button>
      
     

    </div>
  );
}

export default App;
