import io from 'socket.io-client'
const socket = io('https://chatforsite.herokuapp.com/', {// http://localhost:9999 
    withCredentials: true,

  });
export default socket

