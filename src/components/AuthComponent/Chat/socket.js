import io from 'socket.io-client'
const socket = io('https://chatforsite.vercel.app', {
    withCredentials: true
  });
export default socket

