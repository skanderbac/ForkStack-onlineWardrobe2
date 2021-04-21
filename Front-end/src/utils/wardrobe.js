import axios from "axios";
const url = 'http://localhost:3000/pic' ;
 
export const adddress =  (newdress) =>   axios.post(url , newdress);
