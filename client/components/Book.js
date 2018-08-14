const React = require('react');

const Book = (props) => {
  return (
    <div>
      <h2>Book Page</h2>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.price}</div>
    </div>
  );
}

export default Book;
