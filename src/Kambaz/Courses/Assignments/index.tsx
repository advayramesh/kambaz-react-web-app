import { ListGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import {FaFileAlt} from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus} from "react-icons/bs";
export default function Assignments() {
    return (
      <div id="wd-assignments" className="p-3">
     
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup style={{ maxWidth: "300px" }}>
          <FormControl placeholder="Search" />
        </InputGroup>
        <div>
          <Button variant="secondary" className="me-2">
            <BsPlus /> Group
          </Button>
          <Button variant="danger">
            <BsPlus /> Assignment
          </Button>
        </div>
      </div>

      
      <div className="d-flex justify-content-between align-items-center  border">
        <span className="fw-bold">ASSIGNMENTS <span className="text-muted">40% of Total</span></span>
        <Button size="sm" variant="light">+</Button>
      </div>

      <ListGroup className="rounded-0">
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <div>
              <div className="fw-bold">
                <FaFileAlt className="text-secondary" />
                <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-dark">
                  A1 - ENV + HTML
                </a>
              </div>
              <div className="text-muted small">Multiple Modules | <b>Not available until</b> May 6 at 12:00 AM</div>
              <div className="text-muted small"><b>Due Date:</b> May 13 at 11:59 PM | 100 pts</div>
            </div>
            <div className="text-end">
              <GreenCheckmark />
              
            </div>
          </div>
        </ListGroup.Item>

        
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <div>
              <div className="fw-bold">
                <FaFileAlt className="text-secondary" />
                <a href="#/Kambaz/Courses/1234/Assignments/124" className=" text-dark">
                  A2 - CSS + BOOTSTRAP
                </a>
              </div>
              <div className="text-muted small">Multiple Modules | <b>Not available until</b> May 13 at 12:00 AM</div>
              <div className="text-muted small"><b>Due Date:</b> May 20 at 11:59 PM | 100 pts</div>
            </div>
            <div className="text-end">
              <GreenCheckmark />
             
            </div>
          </div>
        </ListGroup.Item>

        
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <div>
              <div className="fw-bold">
                <FaFileAlt className="text-secondary" />
                <a href="#/Kambaz/Courses/1234/Assignments/125" className=" text-dark">
                  A3 - JAVASCRIPT + REACT
                </a>
              </div>
              <div className="text-muted small">Multiple Modules | <b>Not available until</b> May 20 at 12:00 AM</div>
              <div className="text-muted small"><b>Due Date:</b> June 3 at 11:59 PM | 100 pts</div>
            </div>
            <div className="text-end">
              <GreenCheckmark />
              
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );}
  