const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
import Book1 from '../imges/book-1.jpg';

export default function Book() {
  return (
    <article>
      <img src={Book1} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}
