const React = require('react');

import Book from './Book';

const BookList = (props) => {
  console.log(props.books);
  return (
    <div>
      {props.books.map(book =>
        <Book key={book.id} {...book} />
      )}
    </div>
  );
}

export default BookList;
