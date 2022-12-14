import axios from "axios";
const BASE_URL = 'http://localhost:4000'

const api = axios.create({withCredentials: true})

export const createUser = async () => {

}

export const findAllUsers = async () => {
    const response = await api.get(`${BASE_URL}/users`)
    return response.data
}

export const findUserByID = async (userID) => {
    const response = await api.get(`${BASE_URL}/users/${userID}`)
    return response.data
}

export const register = async (user) => {
    const response = await api.post(`${BASE_URL}/register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_URL}/login`, user)
    console.log(response.data)
    return response.data
}


// export const profile = async () => {
//     const response = await api.post(`${BASE_URL}/profile`)
//     return response.data
// }


export const logout = async () => {
    const response = await api.post(`${BASE_URL}/logout`)
    return response.data
}

export const deleteUser = async (uid) => {


}

export const updateUser = async (userUpdates) => {
    await axios.put(`${BASE_URL}/users/${userUpdates._id}`, userUpdates);
    return userUpdates;
}
