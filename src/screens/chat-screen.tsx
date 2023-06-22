import {Federated} from '@callstack/repack/client';
import React from 'react';
import Placeholder from '../components/placeholder';

const Chat = React.lazy(() =>
  Federated.importModule('ls_chat_mini_app', './App'),
);

const ChatScreen = () => {
  return (
    <React.Suspense fallback={<Placeholder label="Chat" icon="chat" />}>
      <Chat />
    </React.Suspense>
  );
};

export default ChatScreen;
