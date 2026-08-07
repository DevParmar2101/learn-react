import api from "./axios";
export const login = (data) => api.post("/login", data);
export const register = (data) => api.post("/register", data);
export const logout = () => api.post("/logout");
export const forgotPassword = () => api.post("/forgot-password");
export const profile = () => api.get("/user-profile");
