interface Message {
  text: string;
  sentBy: string;
  sentAt: Date;
  isChatOwner?: boolean;
}

const messages: Message[] = [
  {
    text: '안녕하세요! LDCC AI 어시스턴트입니다. 무엇을 도와드릴까요?',
    sentBy: 'LDCC AI 어시스턴트',
    sentAt: new Date(),
    isChatOwner: false,
  },
  {
    text: '안녕!?',
    sentBy: 'LDCC 사용자',
    sentAt: new Date(),
    isChatOwner: true,
  },
  {
    text: '네 안녕하세요.',
    sentBy: 'LDCC AI 어시스턴트',
    sentAt: new Date(),
    isChatOwner: false,
  },
];

interface IModel {
  id: number;
  title: string;
  description: string;
  users: string;
}

const modelLists: IModel[] = [
  { id: 1, title: '일반', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: '캐모마일', description: 'Last message sent 2 weeks ago', users: '1200 users' },
];

export { messages, Message, IModel, modelLists };
