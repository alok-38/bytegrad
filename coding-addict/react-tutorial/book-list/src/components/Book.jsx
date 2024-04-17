export default function Book(props) {
    const { img, title, author } = props;

    return (
        <article>
            <img className="w-80" src={img} alt={title}></img>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
}