import axios from 'axios';

const BASE_URL = "http://localhost:3000/api";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currnetUser = user && JSON.parse(user).currnetUser;
const TOKEN = currnetUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}`},
})