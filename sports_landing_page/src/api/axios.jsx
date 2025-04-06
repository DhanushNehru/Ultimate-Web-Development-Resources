import axios from 'axios';

export const api = axios.create({
    baseURL: "fetch('https://jsonplaceholder.typicode.com/todos/1'"
})

export const getPosts = async( ) => {
    const response = await api.get('./posts')
return response.data
}