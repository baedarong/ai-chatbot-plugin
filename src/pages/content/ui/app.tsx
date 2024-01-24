import Chat from '@root/src/components/ChatApp';
import Toggle from '@root/src/components/toggle';
import { useState, useEffect } from 'react';

export default function App() {
  const [enabled, setEnabled] = useState<boolean>(false);
  useEffect(() => {
    console.log('content view loaded');
  }, []);

  return (
    <>
      <div className="fixed-chat-box">{enabled && <Chat />}</div>
      <div className="fixed-box">
        <Toggle enabled={enabled} setEnabled={setEnabled} />
      </div>
    </>
  );
}
