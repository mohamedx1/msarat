import React, { useState, useRef, useEffect } from "react";
import style from "./chat.module.css";
import BootChatAvatat from "../../../common/bootChatAvatar/BootChatAvatat";
import MainButton from "../../../common/buttons/Mainbutn";
import { ArrowUp } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import BootResponse from "./BootResponse";
import getRestoreChat from "./../../../../store/restoreMainChatt/act/actChatting";


type Message = { id: string; sender_type: "system" | "user"; content: string };

export default function ChatComponent() {
  const dispatch = useAppDispatch();
  const {
    error,
    messages: initialMessages,
    isLoading,
  } = useAppSelector((state) => state.restoreMessages);

  // useEffect(() => {
  //   dispatch(getToken());
  // }, []);
  const { token } = useAppSelector((state) => state.login);

  const [allMessages, setAllMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch initial chat messages
  useEffect(() => {
    dispatch(getRestoreChat(token));
  }, [token]);

  // Update allMessages when initial messages change
  useEffect(() => {
    setAllMessages(initialMessages);
  }, [initialMessages]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages]);

  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: (allMessages.length + 1).toString(),
      sender_type: "user",
      content: inputMessage,
    };

    setAllMessages([...allMessages, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (allMessages.length + 2).toString(),
        sender_type: "system",
        content: "تم الرد",
      };
      setAllMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500);
  };

  return (
    <div className={`flex flex-col rounded-lg shadow-md h-screen`}>
      <div
        className={`flex-1 overflow-y-auto p-4 space-y-4 ${style.noScrollbar} ${style.chatComponent}`}
      >
        {allMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender_type !== "system" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender_type === "system" ? (
              <div className='flex gap-2'>
                <div className='bg-secondary-300 w-14 p-1 rounded-full h-12 flex items-center justify-center'>
                  <BootChatAvatat emotion={0} />
                </div>
                <div className='flex justify-between mt-4 w-4/5'>
                  <div
                    className={`max-w-xs md:max-w-md px-4 py-2 rounded-l bg-transparent text-gray-800 m-auto`}
                  >
                    <BootResponse content={msg.content} />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                  msg.sender_type === "user"
                    ? "bg-primary-300 text-white"
                    : "bg-transparent text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className='p-4 bg-white border-t' onSubmit={handleSendMessage}>
        <div className='flex rounded-lg border border-gray-300 overflow-hidden'>
          <input
            type='text'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 px-4 py-2 text-sm focus:outline-none'
          />
          <MainButton>
            <ArrowUp />
          </MainButton>
        </div>
      </form>
    </div>
  );
}
