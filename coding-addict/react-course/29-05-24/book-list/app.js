const app = document.getElementById("app");

const author = "Jordon Moore";
const title = "Interesting Facts For Curious Minds";
const img = "./images/book-1.jpg";

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(app);
root.render(<BookList />);
