import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Friends from './routes/Friends';
import Profile from './routes/Profile';
import Chats from './routes/Chats';
import Chat from './routes/Chat';
import Find from './routes/Find';
import More from './routes/More';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Friends} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Chats" component={Chats} />
      <Route path="/Chat" component={Chat} />
      <Route path="/Find" component={Find} />
      <Route path="/More" component={More} />
    </HashRouter>
  );
}

export default App;
