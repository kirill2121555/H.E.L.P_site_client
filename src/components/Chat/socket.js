import io from 'socket.io-client'
const socket = io('http://localhost:9999', {//   https://chatforsite.herokuapp.com/
    withCredentials: true,

  });
export default socket

