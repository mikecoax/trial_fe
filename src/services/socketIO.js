import io from "socket.io-client";

const socketIO = io(process.env.REACT_APP_API_BASE_URL, {
  transports: ["websocket"]
});

export default socketIO;
