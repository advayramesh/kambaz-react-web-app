import { Button, Form } from "react-bootstrap";
import { useParams, Link } from "react-router";
import * as db from "../../Database";
export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignment = db.assignments.find((a) => a._id === aid);
    if (!assignment) {
        return <div>Assignment not found</div>;
    }
    return (
      <div id="wd-assignments-editor">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Assignment Name</Form.Label>
                <Form.Control type="text" id="wd-name" value={assignment?.title || ""} />
            </Form.Group>
        </Form>
        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" id="wd-description" value={assignment?.title || ""} />
        </Form.Group>
        
        <br />
        <Form.Group className="mb-3">
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" value="100" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select>
                <option>Assignments</option>
                <option>Group 1</option>
                <option>Group 2</option>
                <option>Group 3</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Display Grade as</Form.Label>
            <Form.Select>
                <option>Percentage</option>
                <option>Value</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 border p-2">
            <Form.Label>Submission Type</Form.Label>
            <Form.Select><option>Online</option></Form.Select>
            <b>Online Entry Options</b>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website url" />
            <Form.Check type="checkbox" label="Media recordings" />
            <Form.Check type="checkbox" label="Student Annotations" />
            <Form.Check type="checkbox" label="File Upload" />
        </Form.Group>


        <Form.Group className="mb-3 border p-2">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" id="wd-due-date" />
            <Form.Label>Available from</Form.Label>
            <Form.Control type="date" id="wd-available-from" />
            <Form.Label>Available until</Form.Label>
            <Form.Control type="date" id="wd-available-until" />
        </Form.Group>
            
        
        
        

        <div className="d-flex justify-content-end">
            <Link to={`/Kambaz/Courses/${assignment?.course}/Assignments`}>
                <Button variant="secondary">Cancel</Button>
            </Link>
            <Button variant="danger">Save</Button>
            
        </div>
    </div>
);}
  