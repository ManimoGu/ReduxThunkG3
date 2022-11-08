
import { useEffect } from 'react';
import './App.css';
import {getTasks} from "./Data/reducer"
import {useDispatch, useSelector} from "react-redux"

function App() {

  const dispatch = useDispatch()

  useEffect(() =>{
      dispatch(getTasks())
  },[])

  const Tasks = useSelector(state => state.Tasks.list)



  return (
    <div className="App">

      {
        Tasks.map(item =>(
          <>
          <h3>{item.titre}</h3>
          </>
        ))
      }
      
    </div>
  );
}

export default App;
