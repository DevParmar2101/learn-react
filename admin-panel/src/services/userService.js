import { getUsers } from "../api/userApi";

export async function fetchUsers() {
    const response = await getUsers();

    return response.data.data;
}