/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import Labs from "../Labs/index";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";


export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const addNewCourse = async (course: any) => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Failed to add course", error);
    }
  };
  const updateCourse = async (course: any) => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => 
      c._id === course._id ? course : c
    ));
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);


  return (
    <Session>
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard courses={courses} addNewCourse={addNewCourse} updateCourse={updateCourse} /></ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </div>
    </Session>
  );
}
