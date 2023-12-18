import axios from "axios";
const baseUrl = "http://localhost:9000/todos"


const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request;
   return response.data;
 }
 
 const create = async (newObject) => {
    const request = axios.post(baseUrl, newObject)
    const response = await request;
    return response.data;
 }
 
 const deleteTodo = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request;
    return response.data;
 }

 const changeTodoDoneStatus = async (id, isDone) => {
   const request = axios.put(`${baseUrl}/${id}`, {done: isDone})
   const response = await request;
    return response.data;
 }

 export default {
    getAll,
    create,
    deleteTodo,
    changeTodoDoneStatus
 }