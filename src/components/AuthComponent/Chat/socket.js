import io from 'socket.io-client'
const socket = io('https://chatforsite.vercel.app', {
    withCredentials: true,
    path: "/my-custom-path/"

  });
export default socket

