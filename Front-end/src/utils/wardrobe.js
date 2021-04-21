import axios from "axios";
const url = 'http://localhost:3000/robe' ;
export const ajoutdress =  (newdress) =>   axios.post(url , newdress);
export const getDresses =  () =>   axios.get(url);
export const deleteDresses =  (id) =>   axios.delete(`${url},${id}`);
