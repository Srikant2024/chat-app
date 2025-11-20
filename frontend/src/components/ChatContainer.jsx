import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-white">
      <ChatHeader />

      {/* MESSAGE LIST */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isSender = message.senderId === authUser._id;

          return (
            <div
              key={message._id}
              ref={messageEndRef}
              className={`flex w-full ${isSender ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex items-start gap-2 max-w-[75%] ${
                  isSender ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <img
                  src={
                    isSender
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile"
                  className="w-10 h-10 rounded-full border object-cover"
                />

                {/* Message + Time */}
                <div className={`${isSender ? "items-end" : "items-start"} flex flex-col`}>
                  {/* Time */}
                  <span className="text-xs text-gray-500 mb-1">
                    {formatMessageTime(message.createdAt)}
                  </span>

                  {/* Message Bubble */}
                  <div
                    className={`px-4 py-2 rounded-xl shadow 
                      ${isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}
                    `}
                  >
                    {message.image && (
                      <img
                        src={message.image}
                        alt="attachment"
                        className="max-w-[200px] rounded-md mb-2"
                      />
                    )}

                    {message.text && <p>{message.text}</p>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
