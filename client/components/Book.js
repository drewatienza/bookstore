const React = require('react');

const Book = (props) => {
  return (
    <div onClick={() => props.onClick(props.id)}>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.price}</div>
    </div>
  );
}

export default Book;
