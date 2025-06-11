import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS5610",
    name: "Web Development",
    description: "React + Node full stack",
    course: "CS5610 2025 Summer",
  });

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary me-2" href={`${ASSIGNMENT_API_URL}`}>Get Assignment</a>
      <a className="btn btn-secondary" href={`${MODULE_API_URL}`}>Get Module</a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary me-2" href={`${ASSIGNMENT_API_URL}/title`}>Get Title</a>
      <a className="btn btn-secondary" href={`${MODULE_API_URL}/name`}>Get Module Name</a>
      <hr />

      <h4>Modifying Properties</h4>
      <FormControl className="mb-2" value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <a className="btn btn-primary mb-3"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a><br />

      <FormControl className="mb-2" type="number" value={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
      <a className="btn btn-success mb-3"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a><br />

      <label className="me-2">Completed:</label>
      <input type="checkbox" checked={assignment.completed}
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
      <a className="btn btn-success ms-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <hr />

      <h4>Modifying Module</h4>
      <FormControl className="mb-2" value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })} />
      <a className="btn btn-success mb-3"
        href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a><br />

      <FormControl className="mb-2" value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })} />
      <a className="btn btn-secondary"
        href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module Description
      </a>
    </div>
  );
}
