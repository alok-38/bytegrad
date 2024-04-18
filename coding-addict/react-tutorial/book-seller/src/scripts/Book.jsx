const Book = (props) => {
    const { img, title, author } = props;
  
    return (
      <article>
        <img className="w-80" src={img} alt={title} />
        <h2 className="font-bold mt-5">{title}</h2>
  
        <h4 className="text-lime-700">{author} </h4>
      </article>
    );
  };
  
  export default Book;