import book1 from '../images/book-1.jpg';

export default function Book() {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
}

const Image = () => <img src={book1} alt='somebook'></img>
const Title = () => <h2>Book Title</h2>
const Author = () => {
    return (
        <h4>Author</h4>
    );
}