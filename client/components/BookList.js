const React = require('react');

import Book from './Book';

const BookList = (props) => {
  // props.onBookClick()
  return (
    <div>
      {props.books.map(book =>
        <Book
          key={book.id}
          rating={props.calcRatingForBook(book.id)}
          onClick={props.onBookClick}
          {...book}
        />
      )}
    </div>
  );
}

export default BookList;
