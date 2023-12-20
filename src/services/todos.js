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

 const changeTodoDoneStatus = async (id, newStatus) => {
   try {
     const existingTodo = await axios.get(`${baseUrl}/${id}`);
     const updatedTodo = { ...existingTodo.data, done: newStatus };
 
     const response = await axios.put(`${baseUrl}/${id}`, updatedTodo);
     console.log(response.data); 
 
     return response.data;
   } catch (error) {
     console.error("Error updating todo done status:", error);
     throw error;
   }
 };
 
 export default {
    getAll,
    create,
    deleteTodo,
    changeTodoDoneStatus
 }