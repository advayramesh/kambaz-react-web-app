import { ListGroup, Button } from "react-bootstrap";
import {FaFileAlt} from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { useParams,Link } from "react-router";
import * as db from "../../Database";
export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);
    return (
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center border px-2 py-2">
          <span className="fw-bold fs-5">
            ASSIGNMENTS <span className="text-muted">40% of Total</span>
          </span>
          <Button size="sm" variant="light">+</Button>
        </div>
  
        <ListGroup className="rounded-0">
          {assignments.map((a) => (
            <ListGroup.Item key={a._id}>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="fw-bold mb-1">
                    <FaFileAlt className="text-secondary me-1" />
                    <Link to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`} className="text-dark text-decoration-none">
                      {a.title}
                    </Link>
                  </div>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am
                  </div>
                  <div className="text-muted small">
                    Due Date:May 13 at 11:59pm | 100 pts
                  </div>
                </div>
                <div className="text-end">
                  <GreenCheckmark />
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
    
    }
  