import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const socketUrl = "http://projexly-production-d1f5.up.railway.app/ws";
// const socketUrl = "https://project-management-server-production-f25b.up.railway.app/ws";

const client = new Client({
  brokerURL: socketUrl, // Use SockJS fallback if WebSocket is unavailable
  connectHeaders: {},
  webSocketFactory: () => new SockJS(socketUrl),
  debug: (str) => console.log(str),
  reconnectDelay: 5000, // Reconnect after 5 seconds
});

export default client;
