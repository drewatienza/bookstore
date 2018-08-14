const React = require('react');
import BookList from './BookList';
import Book from './Book';
import axios from 'axios';

class App extends React.Component {
  state = {
    books: this.props.initialData,
    ratings: {},
    currentBookId: null,
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
  showBookPage = (bookId) => {
    history.pushState(
      { currentBookId: bookId},
      "",
      `/books/${bookId}`
    );
    this.setState({ currentBookId: bookId });
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
      <div>
        {
          this.state.currentBookId ?
          <Book {...this.state.books.find(item => item.id === this.state.currentBookId)} /> :
          <BookList
            books={this.state.books}
            onTitleClick={this.showBookPage}
            calcRatingForBook={this.calcRatingForBook}
            onBookClick={this.fetchRatingForBook}
          />
        }
      </div>
    );
  }
}

export default App;
