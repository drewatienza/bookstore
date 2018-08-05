const React = require('react');

import BookList from './BookList';

class App extends React.Component {
  state = { answer: 42 };
  render() {
    return (
      <BookList />
    );
  }
}

export default App;
