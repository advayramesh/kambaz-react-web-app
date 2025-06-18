import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findEnrollmentsForUser = async (userId: string) => {
  const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}?userId=${userId}`);
  return data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${courseId}`);
  return data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/enrollments/${courseId}`);
  return response.data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${REMOTE_SERVER}/api/enrollments/${courseId}`,
    { userId }
  );
  return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${userId}/${courseId}`,
  );
  return response.data;
}
