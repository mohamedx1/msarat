import React, { useState, useRef, useEffect } from "react";
import style from "./chat.module.css";
import BootChatAvatat from "../../../common/bootChatAvatar/BootChatAvatat";
interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function ChatComponent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "كان وأخواتها أفعال ناسخة ناقصة تدخُلُ على الجملة الاسمية، فيُسمَّى المبتدأ اسمها ويبقى مرفوعًا، ويُسمَّى الخبرُ خبرها ويصير منصوبًا وأخوات (كان) هي (أصبح)، و(أضحى)، و(أمسى)، و(بات)، و(صار)، و(ظلَّ)، و(ليس)، و(ما دام)، و(ما بَرِحَ)، و(ما فَتِئَ)، و(ما انفكَّ)، و(ما زال، من الفعل زال يزال، وليس زال يزول).",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "تم الرد",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 500);
    }
  };

  return (
    <div className={`flex flex-col  rounded-lg shadow-md h-screen `}>
      <div
        className={`flex-1 overflow-y-auto p-4 space-y-4 ${style.noScrollbar} ${style.chatComponent}`}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "bot" ? (
              <div className='flex gap-2'>
                <div className='bg-secondary-300 w-14 p-1  rounded-full h-12  flex items-center justify-center  '>
                  <div className=''>
                    <BootChatAvatat emotion={0} />
                  </div>
                </div>
                <div className=' flex justify-between mt-4  w-4/5 '>
                  <div
                    className={`max-w-xs md:max-w-md px-4 py-2 rounded-l bg-transparent text-gray-800 m-auto"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary-300 text-white"
                    : "bg-transparent text-gray-800"
                }`}
              >
                {message.text}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className='p-4 bg-white border-t'>
        <div className='flex rounded-lg border border-gray-300 overflow-hidden'>
          <input
            type='text'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 px-4 py-2 text-sm focus:outline-none'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
