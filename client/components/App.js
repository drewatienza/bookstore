const React = require('react');
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component {
  state = {
    books: this.props.initialData,
    ratings: {}
  };
  fetchRatingForBook = (bookId) => {
    console.log(bookId);
  }
  render() {
    return (
      <BookList
        books={this.state.books}
        onBookClick={this.fetchRatingForBook}
      />
    );
  }
}

export default App;
