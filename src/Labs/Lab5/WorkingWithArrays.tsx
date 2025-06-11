import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/lab5/todos`;

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>Get Todos</a>
      <hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <a className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <FormControl className="w-50" defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />

      <h4>Filtering Array Items</h4>
      <a className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr />

      <h4>Creating new Items in an Array</h4>
      <a className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />

      <h4>Deleting from an Array</h4>
      <a className="btn btn-success float-end" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <FormControl className="w-50" defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />

      <h4>Updating an Item in an Array</h4>
      <a className="btn btn-success float-end"
         href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Todo Title
      </a>
      <FormControl className="w-25 float-start me-2" defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <FormControl className="w-50 float-start" defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <br /><br /><hr />

      <h4>Update Description</h4>
      <a className="btn btn-info float-end"
         href={`${API}/${todo.id}/description/${todo.description}`}>
        Update Description
      </a>
      <FormControl defaultValue={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      <hr />

      <h4> Update Completed</h4>
      <label>Completed:</label>
      <input type="checkbox" className="ms-2"
        checked={todo.completed}
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
      <a className="btn btn-success ms-3"
         href={`${API}/${todo.id}/completed/${todo.completed}`}>
        Update Completed
      </a>
      <hr />
    </div>
  );
}
