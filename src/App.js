import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';
import SplitPane from './SplitPane';
import SignUpDialog from './SignUpDialog';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        {
          author: {
            name: 'Iron Man',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg'
          },
          text: "[when Pepper catches him in the Iron Man suit] Let's face it, this is not the worst thing you've caught me doing.",
          date: "2018-12-11 10:32:12"
        },
        {
          author: {
            name: 'Hulk',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png'
          },
          text: "[You know? I know some techniques you can use for the umm...",
          date: "2018-10-11 08:32:12"
        }
      ]
    }
  }
  render() {
    const comments = this.state.comments.map((post, index) => (
      <Comment key={index} author={post.author} text={post.text} date={post.date} />
    ));

    return (
      <div className="App">
        {comments}
        <SplitPane left={<div>left</div>} right={<div>right</div>} />
        <SignUpDialog />
      </div>
    );
  }
}

export default App;
