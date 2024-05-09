import PropTypes from "prop-types";

export default function Book(props) {
  const { img, title, author } = props;

  return (
    <article>
      <img className="w-72" src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}

Book.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
