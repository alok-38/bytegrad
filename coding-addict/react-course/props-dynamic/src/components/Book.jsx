export default function Book(props) {
  console.log(props);
  return (
    <article>
      <img src={props.img} alt={props.title}></img>
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
}
