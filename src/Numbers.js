import React from 'react';

export default class Numbers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(number => <li>{number}</li>);

    return (
      <ul>{listItems}</ul>
    )
  }
}