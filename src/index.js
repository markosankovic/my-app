import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle';
import LogingControl from './LoginControl';
import Mailbox from './Mailbox';
import Page from './Page';
import NumberList from './NumberList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LogingControl />, document.getElementById('loginControl'));
ReactDOM.render(<Page />, document.getElementById('page'));
ReactDOM.render(<Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']}/>, document.getElementById('mailbox'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<Toggle />, document.getElementById('toggle'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<NumberList numbers={[1, 3, 5, 7]} />, document.getElementById('numberList'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
