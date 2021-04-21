import axios from "axios";
const url = 'http://localhost:3000/pic' ;

export const ajoutdress =  (newdress) =>   axios.post(url , newdress);
