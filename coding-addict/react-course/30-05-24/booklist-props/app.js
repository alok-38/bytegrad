const app = document.getElementById("app");

const defaultAuthor = "Jordan Moore";
const defaultTitle = "Interesting Facts For Curious Minds";
const img = "./images/book-1.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={defaultTitle}
        author={defaultAuthor}
        job="developer"
        defaultTitle={defaultTitle}
      />
      <Book author="Anonymous" number={22} defaultTitle={defaultTitle} />
    </section>
  );
}

const Book = ({ title, author, job, number, defaultTitle }) => {
  return (
    <article className="book">
      <img src={img} alt={title || defaultTitle} />
      <h2>{title ? title : defaultTitle}</h2>
      <h4>{author}</h4>
      {job && <p>Job: {job}</p>}
      {number && <p>Number: {number}</p>}
    </article>
  );
};

const root = ReactDOM.createRoot(app);
root.render(<BookList />);
