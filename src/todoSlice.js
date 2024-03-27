import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        locale: (state,action)=>{
            console.log("qwertyuio")
            state.todos = JSON.parse(localStorage.getItem("todos"))
        },
        addTodo: (state, action)=>{
            const todo = {id:nanoid(),text :action.payload,completed:false}
            state.todos.unshift(todo)
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((ele)=>ele.id !== action.payload)
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((ele)=>ele.id==action.payload.id?{...ele,text: action.payload.text}:ele)
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        updateCompleted:(state,action)=>{
            state.todos = state.todos.map((ele)=>ele.id==action.payload?{...ele,completed:!ele.completed}:ele)
        }
    }   
})

export const {addTodo,removeTodo,updateTodo,locale,updateCompleted}=todoSlice.actions
export const todoReducer = todoSlice.reducer