const React = require('react');
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component {
  state = {
    books: this.props.initialData,
    ratings: {}
  };
  fetchRatingForBook = (bookId) => {
    if (this.state.ratings[bookId])  { return; }
    axios.get(`http://localhost:8080/api/books/${bookId}/ratings`)
      .then(resp => {
        this.setState((prevState) => {
          const currentRatings = prevState.ratings;
          currentRatings[bookId] = resp.data;
          return { ratings: currentRatings };
        })
      })
  }
  calcRatingForBook = (bookId) => {
    const ratings = this.state.ratings[bookId];
    if (!ratings || ratings.length === 0) { return; }
    return ratings.reduce((acc, review) => {
      return acc + review.rating;
    }, 0) / ratings.length;
  }
  render() {
    return (
      <BookList
        books={this.state.books}
        calcRatingForBook={this.calcRatingForBook}
        onBookClick={this.fetchRatingForBook}
      />
    );
  }
}

export default App;
