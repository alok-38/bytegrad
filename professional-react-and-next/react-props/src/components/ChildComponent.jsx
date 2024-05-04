export default function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
