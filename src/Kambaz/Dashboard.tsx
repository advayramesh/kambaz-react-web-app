/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addCourse, deleteCourse, updateCourse, editCourse } from "./Courses/reducer";
import { addEnrollment, removeEnrollment } from "./Enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const [course, setCourse] = useState({ _id: "", name: "", description: "" });
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleAdd = () => {
    dispatch(
      addCourse({
        _id: uuidv4(),
        name: course.name || "New Course",
        description: course.description || "New Course Description",
      })
    );
    setCourse({ _id: "", name: "", description: "" });
  };

  const handleUpdate = () => {
    dispatch(updateCourse(course));
    setCourse({ _id: "", name: "", description: "" });
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  const toggleEnrollment = (courseId: string) => {
    const payload = { user: currentUser._id, course: courseId };
    if (isEnrolled(courseId)) {
      dispatch(removeEnrollment(payload));
    } else {
      dispatch(addEnrollment(payload));
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={handleAdd}>
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={handleUpdate}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) =>
              setCourse({ ...course, name: e.target.value })
            }
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      <div className="d-flex justify-content-between align-items-center">
        <h2>Published Courses ({courses.length})</h2>
        <Button onClick={() => setShowAllCourses(!showAllCourses)} variant="primary">
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </Button>
      </div>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {courses
          .map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  to={
                    isEnrolled(course._id)
                      ? `/Kambaz/Courses/${course._id}/Home`
                      : "#"
                  }
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    {isFaculty && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger float-end"
                        >
                          Delete
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(editCourse(course._id));
                            setCourse(course);
                          }}
                          className="btn btn-warning float-end me-2"
                        >
                          Edit
                        </button>
                      </>
                    )}

                    {!isFaculty && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleEnrollment(course._id);
                        }}
                        className={`btn ${
                          isEnrolled(course._id)
                            ? "btn-danger"
                            : "btn-success"
                        } float-end`}
                      >
                        {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
