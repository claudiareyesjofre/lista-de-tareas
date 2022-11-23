import React from "react";

const Listadetareas = ({todos, setTodos, }) => {

   

    const handleDeleted = ({id}) =>{
        setTodos(todos.filter((todo) => todo.id !==id))
    }
    return (
        <div>
            {todos.map((todo)=>(
             <li className="list-item" key={todo.id}>
                <input 
                type="text" 
                value={todo.title}
                 className="list" 
                 onChange={(event) => event.preventDefault()}/>
             <div>
                
                <button className="button-deleted task-button" onClick={()=>handleDeleted(todo)}><i class="fa fa-trash-alt"></i></button>
             </div>
             </li>
            
            ))}
        </div>
    );
}


export default Listadetareas;