import "./App.css";
import { useState } from "react";

function App() {
   const [todoList, setTodoList] = useState([]);
   const [form, setForm] = useState({
      todo: "",
   });

   const handleChange = (e) => {
      console.log(e.target.value);
      setForm({
         todo: e.target.value,
      });
   };

   return (
      <div>
         <div className="jumbotron">
            <h1>Todo List App</h1>
            <p>{form.todo}</p>
            <form action="" className="form">
               <input type="text" name="todo" onChange={handleChange} placeholder="Todo" />
               <button type="submit" className="btn-submit">
                  Submit
               </button>
            </form>
         </div>
         <div className="content">
            <div className="card">
               <div className="action">
                  <input type="checkbox" name="" id="" />
               </div>
               <div className="text">Todo here</div>
            </div>
         </div>
      </div>
   );
}

export default App;
