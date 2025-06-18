/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup, Button } from "react-bootstrap";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { useParams, Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {  setAssignments } from "./reducer";
import * as assignmentsClient from "./client";
import { useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments.filter((a: any) => a.course === cid)
  );

  const handleDelete = async (assignmentId: string) => {
    if (window.confirm("Confirm if you want to delete the assignment?")) {
      await assignmentsClient.deleteAssignment(assignmentId);
      const updated = await assignmentsClient.findAssignmentsForCourse(cid!);
      dispatch(setAssignments(updated));
    }
  };

  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid!);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center border px-2 py-2">
        <span className="fw-bold fs-5">
          ASSIGNMENTS <span className="text-muted">40% of Total</span>
        </span>
        {isFaculty && (
          <Button
            size="sm"
            variant="light"
            onClick={async () => {
              const newAssignment = {
                title: "New Assignment",
                description: "",
                points: 100,
                dueDate: "",
                availableFrom: "",
                availableUntil: "",
              };
              await assignmentsClient.createAssignmentForCourse(cid!, newAssignment);
              const updated = await assignmentsClient.findAssignmentsForCourse(cid!);
              dispatch(setAssignments(updated));
            }}
          >
            +
          </Button>
        )}
      </div>

      <ListGroup className="rounded-0">
        {assignments.map((a: any) => (
          <ListGroup.Item key={a._id || a.title}>
            <div className="d-flex justify-content-between">
              <div>
                <div className="fw-bold mb-1">
                  <FaFileAlt className="text-secondary me-1" />
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`}
                    className="text-dark text-decoration-none"
                  >
                    {a.title}
                  </Link>
                </div>
                <div className="text-muted small">
                  <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am
                </div>
                <div className="text-muted small">
                  Due Date: {a.dueDate || "TBD"} | {a.points} pts
                </div>
              </div>
              <div className="text-end">
                <GreenCheckmark />
                {isFaculty && (
                  <Button size="sm" variant="outline-danger" onClick={() => handleDelete(a._id)}>
                    <FaTrash />
                  </Button>
                )}
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
