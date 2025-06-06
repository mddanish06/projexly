import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  connectWebSocket,
  fetchChatByProject,
  fetchChatMessages,
  sendMessage,
} from "@/Redux/Chat/Action";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const { auth, chat } = useSelector((store) => store);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { messages } = useSelector((store) => store.chat);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load chat and connect WebSocket
  useEffect(() => {
    dispatch(fetchChatByProject(id)); // Load chat data
    dispatch(fetchChatMessages(id)); // Load historical messages
    dispatch(connectWebSocket(id)); // Connect WebSocket
  }, [dispatch, id]);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(fetchChatMessages(id)); // Fetch messages only if the project ID is valid
  //   } else {
  //     console.error("Project ID is invalid!");
  //   }
  // }, [id, dispatch]); // Ensure `id` is available before calling fetchChatMessages

  const handleSendMessage = () => {
    dispatch(
      sendMessage({
        senderId: auth.user?.id,
        projectId: id,
        content: message,
      })
    );
    setMessage("");
  };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  //------------------------------------------------------
  

  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>

        <ScrollArea className="h-[33rem] w-full p-5 flex gap-3 flex-col">
          {chat.messages?.map((item, index) =>
            item.sender.id !== auth.user.id ? (
              <div key={index} className="flex gap-2 mb-2 justify-start">
                <Avatar>
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>

                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                  <p>{item.sender.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ) : (
              <div key={item} className="flex gap-2 mb-2 justify-end">
                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                  <p>{item.sender.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>

                <Avatar>
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
              </div>
            )
          )}
          <div ref={chatEndRef} />
        </ScrollArea>

        <div className="relative p-0">
          <Input
            placeholder="type message..."
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            // onChange={handleMessageChange}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
