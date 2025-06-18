/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;


export const updateModule = async (module: any) => {
  const response = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/modules/${moduleId}`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};
  