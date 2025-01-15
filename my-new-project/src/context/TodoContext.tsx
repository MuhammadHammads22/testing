import React, { createContext, useContext, useReducer } from 'react'

interface todo{
  id:string,
  title:string,
  items:string[]
}
interface State{
  todos:todo[]
}

interface ActionAddTodo{
  type:'addTodo',
  payload:string
}
interface ActionRemoveTodo{
  type:'removeTodo',
  payload:string
}
interface ActionAddItemToTodo{
  type:'addItemToTodo',
  payload:{
    todoId:string,
    item:string
  }
}
interface ActionRemoveItemFromTodo{
  type:'removeItemFromTodo',
  payload:{
    todoId:string,
    itemIndex:number
  }
}

interface ActionUpdateItemFromTodo{
  type:'updateTodoItem',
  payload:{
    todoId:string,
    itemIndex:number,
    newItem:string
  }
}

type Action = ActionAddTodo | ActionRemoveTodo | ActionAddItemToTodo | ActionRemoveItemFromTodo | ActionUpdateItemFromTodo

const initialState:State={
  todos:[{title:'hammad',id:'1',items:['making app','deploying backend']}]
}

const reducer=(state:State,action:Action):State=>{
  switch(action.type){
    case 'addTodo':
      return {...state,todos:[...state.todos,{id:Date.now().toString(),title:action.payload,items:[]}]}
    case 'removeTodo':
      return {...state,todos:state.todos.filter(item=>item.id!==action.payload)}
    case 'addItemToTodo':
      return{...state,todos:state.todos.map((todo)=>
        todo.id===action.payload.todoId?
        {...todo,items:[...todo.items,action.payload.item]}:
        todo
      )}
    case 'removeItemFromTodo':
      return {...state,todos:state.todos.map((todo)=>
        todo.id===action.payload.todoId?
        {
          ...todo,items:todo.items.filter((_,index)=>action.payload.itemIndex!==index)
        }
        :
        todo
      )}
    case 'updateTodoItem':
      return {...state,todos:state.todos.map((todo)=>
        todo.id===action.payload.todoId?
        {
          ...todo,items:todo.items.map((item,index)=>
          index===action.payload.itemIndex
          ?action.payload.newItem
          :item
        )
        }:
        todo
      )}
    default:
      return state
    }
}
interface TodoContextProp{
  state:State,
  addTodo:(title:string)=>void,
  removeTodo:(id:string)=>void,
  addItemToTodo:(id:string,item:string)=>void,
  removeItemFromTodo:(id:string,itemIndex:number)=>void,
  updateTodoItem:(id:string,itemIndex:number,newItem:string)=>void
}
const TodoContext=createContext<TodoContextProp | undefined>(undefined)
interface TodoContextProviderProps{
  children:React.ReactNode
}
const TodoContextProvider:React.FC<TodoContextProviderProps> = ({children}) => {
  const [state,dispatch]=useReducer(reducer,initialState)

  const addTodo=(title:string)=>{
    dispatch({type:'addTodo',payload:title})
  }

  const removeTodo=(id:string)=>{
    dispatch({type:'removeTodo',payload:id})
  }

  const addItemToTodo=(id:string,item:string)=>{
    dispatch({type:'addItemToTodo',payload:{todoId:id,item:item}})
  }

  const removeItemFromTodo=(id:string,itemIndex:number)=>{
    dispatch({type:'removeItemFromTodo',payload:{todoId:id,itemIndex:itemIndex}})
  }

  const updateTodoItem=(id:string,itemIndex:number,newItem:string)=>{
    dispatch({type:'updateTodoItem',payload:{todoId:id,itemIndex:itemIndex,newItem:newItem}})
  }


  return (
  <TodoContext.Provider value={{addTodo,removeTodo,addItemToTodo,removeItemFromTodo,updateTodoItem,state}}>
    {children}
  </TodoContext.Provider>
  )
}
export const useTodo=()=>{
  const context=useContext(TodoContext)
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
}
export default TodoContextProvider