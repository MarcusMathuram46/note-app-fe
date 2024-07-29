import axios from "axios";
const baseURL = "https://note-app-be-wvei.onrender.com/"
const authInstance = axios.create({
    baseURL: baseURL,
})

const protectedInstance = axios.create({
    baseURL: baseURL,
})

protectedInstance.interceptors.request.use((config)=>{
    const User = sessionStorage.getItem("User");
    if(User){
        const authToken = JSON.parse(User).Token;
        config.headers["Authorization"]=`Bearer ${authToken}`;
    }
    return config;
})

export { authInstance, protectedInstance };