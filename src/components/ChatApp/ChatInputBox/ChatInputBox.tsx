import { Message } from '@root/src/data';
import React from 'react';
import DebouncedInput from '../../DebouncedInput';
interface ChatInputBoxProps {
  sendANewMessage: (message: Message) => void;
}

const ChatInputBox = ({ sendANewMessage }: ChatInputBoxProps) => {
  const [newMessage, setNewMessage] = React.useState('');

  /**
   * Send message handler
   * Should empty text field after sent
   */
  const doSendMessage = () => {
    if (newMessage && newMessage.length > 0) {
      const newMessagePayload: Message = {
        sentAt: new Date(),
        sentBy: 'LDCC AI 어시스턴트',
        isChatOwner: true,
        text: newMessage,
      };
      sendANewMessage(newMessagePayload);
      setNewMessage('');
    }
  };

  return (
    <div className="px-6 py-3 bg-white w-100 overflow-hidden rounded-bl-xl rounded-br-xla">
      <div className="flex flex-row items-center space-x-5">
        <DebouncedInput value={newMessage ?? ''} debounce={100} onChange={value => setNewMessage(String(value))} />
        <button
          type="button"
          disabled={!newMessage || newMessage.length === 0}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 disabled:opacity-50"
          onClick={() => doSendMessage()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInputBox;
