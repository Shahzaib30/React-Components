import React, {useState} from "react";
import "./todolist.css";

function TodoList() {
    let [tasks, setTasks]= useState(["Eat Breakfast","Learn React"]);
    let [newtask, setnewTask] = useState("");

    function handleInputChanges(e){
        setnewTask(e.target.value)
    }
    function addTask(){
        if(newtask.trim() !==""){
            setTasks(t=>[...t, newtask]);
            setnewTask("");
    }

    }
    function deleteTask(i){
        const updatedTask=tasks.filter((task, index)=> index !== i);
        setTasks(updatedTask);
        
    }
    function moveUp(i){
        if(i>0){
            const updateTasks = [...tasks];
            [updateTasks[i], updateTasks[i-1]]=[updateTasks[i-1], updateTasks[i]];
            setTasks(updateTasks)
        }
    }
    function moveDown(i){
        if(i<tasks.length-1){
            const updateTasks = [...tasks];
            [updateTasks[i], updateTasks[i+1]]=[updateTasks[i+1], updateTasks[i]];
            setTasks(updateTasks)
        }

    }
    return (
        <div className="to-do-list">
                <h1>To-Do-List</h1>
                <div className="InputField" >
                    
                    <input type="text" placeholder="Enter a task..." value={newtask} onChange={handleInputChanges}/>
                    <button onClick={addTask} className="addBtn">Add</button>
                    
                </div>   
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text"> {task} </span>
                            <button className="delBtn" onClick={()=> deleteTask(index)}>Delete</button>
                            <button className="moveUp" onClick={()=> moveUp(index)} style={{"alignItems":"right"}}>⬆️</button>
                            <button className="moveDown" onClick={()=> moveDown(index)}>⬇️</button>
                        
                
                        </li>
                    )}
                </ol>
        </div>
    );
}
export default TodoList;