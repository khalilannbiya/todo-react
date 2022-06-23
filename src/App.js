import "./App.css";
import { useState } from "react";

function App() {
   const [todoList, setTodoList] = useState([]);
   const [form, setForm] = useState({
      todo: "",
   });

   const resetInput = () => {
      setForm({
         todo: "",
      });
   };

   const handleChange = (e) => {
      console.log(e.target.value);
      setForm({
         todo: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setTodoList([...todoList, form]);
      resetInput();
   };

   return (
      <div>
         <div className="jumbotron">
            <h1>Todo List App</h1>
            <form method="post" onSubmit={handleSubmit} className="form">
               <input type="text" name="todo" value={form.todo} onChange={handleChange} placeholder="Todo" />
               <button type="submit" className="btn-submit">
                  Submit
               </button>
            </form>
         </div>
         <div className="content">
            {todoList.map((e, i) => (
               <div key={i} className="card">
                  <div className="action">
                     <input type="checkbox" name="" id="" />
                  </div>
                  <div className="text">{e.todo}</div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;
