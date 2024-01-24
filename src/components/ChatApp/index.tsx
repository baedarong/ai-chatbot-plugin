import React from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatContent from './ChatContent/ChatContent';
import ChatInputBox from './ChatInputBox/ChatInputBox';
import { useGetMessages } from '@root/src/hooks/useGetMessages';
import { Message } from '@root/src/data';

const Chat = () => {
  /** Simulate a hook fetching the data */
  const {
    messages: { data },
  } = useGetMessages();

  /** State to control new messages */
  const [chatMessages, setChatMessages] = React.useState<Message[]>(data);

  /**
   * Random Chat Response
   */
  function generateRandomString(length = 20) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  /**
   *
   * @param message
   * "Create" a new message
   */
  const sendANewMessage = (message: Message) => {
    setChatMessages(prevMessages => [...prevMessages, message]);
    const timeoutId = setTimeout(() => {
      const result = generateRandomString();
      const newMessagePayload: Message = {
        sentAt: new Date(),
        sentBy: 'LDCC AI 어시스턴트',
        isChatOwner: false,
        text: message.text + '라고 보내셨군요! 해당 질문에 대한 응답입니다. ' + result,
      };
      setChatMessages(prevMessages => [...prevMessages, newMessagePayload]);
      clearTimeout(timeoutId);
    }, 1000);
  };

  /**
   * Reset chat to the default messages
   */
  const resetChat = () => {
    setChatMessages(data);
  };

  return (
    <div className="max-w-sm mx-auto mt-32 bg-white border border-gray-200 rounded-lg shadow relative">
      <ChatHeader name={'LDCC AI 어시스턴트'} numberOfMessages={chatMessages.length} resetChat={resetChat} />
      <ChatContent messages={chatMessages} />
      <ChatInputBox sendANewMessage={sendANewMessage} />
    </div>
  );
};

export default Chat;
