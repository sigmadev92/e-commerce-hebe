import axios from "axios";

const url = "http://localhost:4000/users"

export const RegisterUser = async(formData)=>{
    const response = await axios.post(url + "/register",formData);
    return response.data;
}

export const LoginUser = async(formData)=>{
    const response = await axios.post(url + "/login",formData);
    return response.data;
}