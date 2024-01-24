import Avatar from '../Avatar/Avatar';
import { Message, modelLists } from '@root/src/data';
import RadioCard from '../../radioCard';

interface ChatContentProps {
  messages: Message[];
}

const ChatContent = ({ messages }: ChatContentProps) => {
  return (
    <>
      <div className="max-h-96 h-96 px-6 py-1 overflow-auto">
        <div className="mb-2">
          <RadioCard modelLists={modelLists} />
        </div>
        {messages.map((message: Message, index: number) => (
          <div
            key={index}
            className={`py-2 flex flex-row w-full ${message.isChatOwner ? 'justify-end' : 'justify-start'}`}>
            <div className={`${message.isChatOwner ? 'order-2' : 'order-1'}`}>{!message.isChatOwner && <Avatar />}</div>
            <div
              className={`px-2 w-fit pt-3 pb-2 flex flex-col rounded-lg text-white ${
                message.isChatOwner ? 'order-1 mr-2 bg-orange-500' : 'order-2 ml-2 bg-yellow-500'
              }`}>
              <span className="text-xs text-gray-200">
                {message.sentBy}&nbsp;-&nbsp;
                {new Date(message.sentAt).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
              <span className="text-md">{message.text}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatContent;
