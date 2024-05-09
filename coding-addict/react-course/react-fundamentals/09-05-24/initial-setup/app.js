const app = document.getElementById("app");

const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img = "./book-1.jpg";

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

function BookList() {
  return <Book />;
}

const root = ReactDOM.createRoot(app);

root.render(<BookList />);
