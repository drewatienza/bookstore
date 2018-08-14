const React = require('react');
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component {
  state = {
    books: this.props.initialData,
    ratings: {

    },
    currentBookId: 5,
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
    // this.setState({})
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
          <div>One Book Coming Soon</div> :
          <BookList
            books={this.state.books}
            calcRatingForBook={this.calcRatingForBook}
            onBookClick={this.fetchRatingForBook}
          />
        }
      </div>
    );
  }
}

export default App;
