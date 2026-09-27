import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 30000
});

export const getUsersAPI = async (limit = 30, skip = 0) => {
    const response = await api.get("/users", {
        params: {
            limit,
            skip
        }
    });

    return response.data;
};

export const searchUsersAPI = async (
    q: string,
    limit = 30,
    skip = 0
) => {
    const response = await api.get("/users/search", {
        params: {
            q,
            limit,
            skip
        }
    });

    return response.data;
};

export const addUserAPI = async (user: {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    company: string;
}) => {
    const response = await api.post("/users/add", user);

    return response.data;
};