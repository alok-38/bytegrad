import BookDetails from './BookDetails';

export default function BookList() {
    // Book objects
    const firstBook = {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: '../images/book.jpg',
    };
    const secondBook = {
      author: 'James Clear',
      title: 'Atomic Habits',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    };
  
    // Render BookList
    return (
      <section>
        <BookDetails
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <BookDetails
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />
      </section>
    );
  }