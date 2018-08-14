const React = require('react');

import BookItem from './BookItem';

const BookList = (props) => {
  return (
    <div>
      {props.books.map(book =>
        <BookItem
          key={book.id}
          onClick={props.onTitleClick}
          rating={props.calcRatingForBook(book.id)}
          onRatingClick={props.onBookClick}
          {...book}
        />
      )}
    </div>
  );
}

export default BookList;
