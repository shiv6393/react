import { useContext,createContext } from "react";
export const TOdoContext=createContext({
    todos:[{
        id:1,
        todo:"to do massage",
        completed:false

    }],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}


})
export const TodoProvider=TOdoContext.Provider
export const  useTodo=()=>{
return useContext(TOdoContext)

}
