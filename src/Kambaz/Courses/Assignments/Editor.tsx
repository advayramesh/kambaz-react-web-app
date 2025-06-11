/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router";
import * as assignmentsClient from "./client";
import { updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
export default function AssignmentEditor() {
    const { aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assignment = useSelector((state:any) =>
    state.assignmentsReducer.assignments.find((a:any) => a._id === aid));
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(100);
    const [group, setGroup] = useState("Assignments");
    const [displayGradeAs, setDisplayGradeAs] = useState("Percentage");
    const [submissionType, setSubmissionType] = useState("Online");
    const [onlineEntryOptions, setOnlineEntryOptions] = useState({});
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");
    
    useEffect(() => {
        if (assignment) {
            setTitle(assignment.title || "");
            setDescription(assignment.description || "");
            setPoints(assignment.points || 100);
            setGroup(assignment.group || "Assignments");
            setDisplayGradeAs(assignment.displayGradeAs || "Percentage");
            setSubmissionType(assignment.submissionType || "Online");
            setOnlineEntryOptions(assignment.onlineEntryOptions || {});
            setDueDate(assignment.dueDate || "");
            setAvailableFrom(assignment.availableFrom || "");
            setAvailableUntil(assignment.availableUntil || "");
        }
    },[assignment]);
    const handleSave = async() => {
        if(!assignment) {
            return;
        }
        const newAssignment = {
            ...assignment,
            title,description,points,group,displayGradeAs,submissionType,onlineEntryOptions,dueDate,availableFrom,availableUntil
        }
        await assignmentsClient.updateAssignment(aid as string, newAssignment);
        dispatch(updateAssignment(newAssignment));
        navigate(`/Kambaz/Courses/${assignment?.course}/Assignments`);
    };
    if (!assignment) {
        return <div>Assignment not found</div>;
    }
    return (
      <div id="wd-assignments-editor">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Assignment Name</Form.Label>
                <Form.Control type="text" id="wd-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
        </Form>
        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" id="wd-description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </Form.Group>
        
        <br />
        <Form.Group className="mb-3">
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" value={points} onChange={(e) => setPoints(Number(e.target.value))}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select value={group} onChange={(e) => setGroup(e.target.value)}>
                <option>Assignments</option>
                <option>Group 1</option>
                <option>Group 2</option>
                <option>Group 3</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Display Grade as</Form.Label>
            <Form.Select value={displayGradeAs} onChange={(e) => setDisplayGradeAs(e.target.value)}>
                <option>Percentage</option>
                <option>Value</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 border p-2">
            <Form.Label>Submission Type</Form.Label>
            <Form.Select value={submissionType} onChange={(e) => setSubmissionType(e.target.value)}>
                <option>Online</option>
            </Form.Select>
            <b>Online Entry Options</b>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website url" />
            <Form.Check type="checkbox" label="Media recordings" />
            <Form.Check type="checkbox" label="Student Annotations" />
            <Form.Check type="checkbox" label="File Upload" />
        </Form.Group>


        <Form.Group className="mb-3 border p-2">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" id="wd-due-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
            <Form.Label>Available from</Form.Label>
            <Form.Control type="date" id="wd-available-from" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)}/>
            <Form.Label >Available until</Form.Label>
            <Form.Control type="date" id="wd-available-until" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)}/>
        </Form.Group>
            
        
        
        

        <div className="d-flex justify-content-end">
            <Link to={`/Kambaz/Courses/${assignment?.course}/Assignments`}>
                <Button variant="secondary">Cancel</Button>
            </Link>
            <Button variant="danger" onClick={handleSave}>Save</Button>
            
        </div>
    </div>
);}
  