import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[
    {
      id:Math.random(),
      title:" send the checkpoint",
      description:" send checkpoint before deadline ",
      isDone: false,

    },
    {
      id:Math.random(),
      title:" go to gym ",
      description:" go to gym",
      isDone: false,

    },
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  
    AddTodo: (state, action ) => {
      state.todos =[...state.todos, action.payload];
    },
    updateisDone:(state,action)=>{
let item=state.todos.find((el)=>el.id==action.payload);
item.isDone =!item.isDone;


    },
    deleteTodo:(state,action)=>{
      state.todos=state.todos.filter((el)=>el.id ==! action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const {AddTodo,updateisDone,deleteTodo} = todoSlice.actions

export default todoSlice.reducer