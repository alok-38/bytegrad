import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Footer({ setCount, count }) {
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex justify-around items-center">
      <button onClick={decreaseCount} className="cursor-pointer">
        <MinusIcon />
      </button>
      <button onClick={increaseCount} className="cursor-pointer">
        <PlusIcon />
      </button>
    </div>
  );
}
