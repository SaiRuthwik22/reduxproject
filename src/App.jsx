import React, { useEffect } from 'react'
import Adding from './components/Adding'
import { Provider, useDispatch, useSelector } from 'react-redux'
import Todos from './components/Todos'
import { locale } from './todoSlice'

function App() {
  const dispatch = useDispatch()
  const x = JSON.parse(localStorage.getItem("todos"))
  useEffect(() => {
    x.length==0?"":dispatch(locale())
  }, [])
  
  const todos = useSelector(state=>state.todos)

  return (
    <>
      <Adding />
      {todos.map((ele)=>
      <Todos key={ele.id} id = {ele.id} text={ele.text} completed={ele.completed}/>)}
    </>
  )
}

export default App