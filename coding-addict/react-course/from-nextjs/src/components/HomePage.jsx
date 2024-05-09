import { useState } from "react";
import Header from "./Header";

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  let [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  function resetLikes() {
    setLikes((likes = 0));
  }
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
      <button onClick={resetLikes}>Reset</button>
    </div>
  );
}
