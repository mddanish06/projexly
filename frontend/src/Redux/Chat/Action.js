import api from "@/config/api";
import * as actionTypes from "./ActionType";
import client from "@/config/websocket-client";

export const sendMessage = (messageData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.SEND_MESSAGE_REQUEST });
    try {
      const response = await api.post(
        "/api/messages/send",
        messageData
      );
      dispatch({
        type: actionTypes.SEND_MESSAGE_SUCCESS,
        message: response.data,
      });
      console.log("Send Message", response.data);

    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.SEND_MESSAGE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchChatByProject = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST });
    try {
      const response = await api.get(`/api/messages/chat/${projectId}`);
      console.log("Fetch chat", response.data);
      dispatch({
        type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
        chat: response.data,
      });
    } catch (error) {
      console.log("Error", error);
      dispatch({
        type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchChatMessages = (chatId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST });
    try {
      const response = await api.get(`/api/messages/chat/${chatId}`);
      console.log("Fetch messages", response.data);
      dispatch({
        type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS,
        chatId,
        messages: response.data,
      });
    } catch (error) {
      console.log("Error", error);
      dispatch({
        type: actionTypes.FETCH_CHAT_MESSAGES_FAILURE,
        error: error.message,
      });
    }
  };
};

// Connect to WebSocket and subscribe
export const connectWebSocket = (projectId) => (dispatch) => {
  client.onConnect = () => {
    client.subscribe(`/topic/chat/${projectId}`, (message) => {
      const newMessage = JSON.parse(message.body);
      dispatch({
        type: actionTypes.RECEIVE_MESSAGE,
        message: newMessage,
      });
    });
    console.log("WebSocket connected and subscribed to chat");
  };

  client.activate();
};

// Send WebSocket message
export const sendWebSocketMessage = (messageData) => () => {
  client.publish({
    destination: "/app/chat.send",
    body: JSON.stringify(messageData),
  });
  console.log("WebSocket message sent", messageData);
};
