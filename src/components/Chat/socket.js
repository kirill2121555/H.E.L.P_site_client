import io from 'socket.io-client'
const socket = io('https://chatforsite.herokuapp.com/', {//   https://chatforsite.herokuapp.com/
    withCredentials: true,

  });
export default socket

