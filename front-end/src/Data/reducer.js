import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("Tasks/getTasks", async () => {
  return axios
    .get("http://localhost:9000/ListTask")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data.message;
    });
});

export const AddTask = createAsyncThunk("Tasks/Add", async ({task}) =>{
  return axios.post("http://localhost:9000/AddTask", task)
  .then(res => {return res.data})
  .catch(err => {return err.data.message})
})


const TaskSlice = createSlice({
  name: "Tasks",
  initialState: {
    list: [],
    status: "",
    Erreur: "",
  },
  reducers: {},

  extraReducers: {
    [getTasks.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "Success";
    },
    [getTasks.rejected] : (state, action) =>{
        state.Erreur = action.payload
        state.status = "Rejected"
    },
    [getTasks.pending] : (state)=>{
        state.status = "Pending"
    },
    [AddTask.fulfilled] : (state, action)=>{
        state.list = action.payload
        state.status = "Success"
    },
    [AddTask.rejected] : (state, action) =>{
      state.Erreur = action.payload
      state.status = "Rejected"
    },
    [AddTask.pending] : (state) =>{
       state.status = "Pending"
    }
  },
});

export default TaskSlice.reducer;
