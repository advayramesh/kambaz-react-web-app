import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findEnrollmentsForUser = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}?userId=${userId}`);
    return response.data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/${courseId}`);
    return response.data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${courseId}`, { userId });
    return response.data;
};

export const unEnrollUserFromCourse = async (userId: string, courseId: string) => { 
    const response = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};