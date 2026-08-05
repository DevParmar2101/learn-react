import api from "./axios";

export const getUsers = () => api.get("/users");
export const getUser = (id) => api.get(`/users/view/${id}`);
export const createUser = (data) => api.post("/users/create", data);
export const updateUser = (id, data) => api.put(`/users/update/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/delete/${id}`);