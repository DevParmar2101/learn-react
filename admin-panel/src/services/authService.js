import { login } from "../api/authApi";

export async function loginUser(credentials) {
    const response = await login(credentials);

    localStorage.setItem(
        "token",
        response.data.token
    );

    return response.data;
}