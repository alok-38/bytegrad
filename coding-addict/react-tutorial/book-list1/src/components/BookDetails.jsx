export default function BookDetails() {
    const author = 'Jordan Moore';
const title = 'Interesting Facts For Curious Minds';
const img = '../images/book.jpg';

   return (
    <article>
        <img src={img} alt="book cover"></img>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
   )
}