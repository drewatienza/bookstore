const React = require('react');

const BookItem = (props) => {
  return (
    <div onClick={() => props.onClick(props.id)}>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.price}</div>
      <div>{props.rating}</div>
      <a href='#' onClick={() => props.onRatingClick(props.id)}>
        Show Ratings
      </a>
    </div>
  );
}

export default BookItem;
