/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

const initialState = {
  enrollments: [] as Enrollment[]
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      const exists = state.enrollments.some(
        (e: any) =>
          e.user === enrollment.user && e.course === enrollment.course
      );
      if (!exists) {
        state.enrollments.push({ _id: uuidv4(), ...enrollment });
      }
    },
    removeEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) =>
          !(e.user === enrollment.user && e.course === enrollment.course)
      );
    },
  },
});

export const { addEnrollment, removeEnrollment, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
