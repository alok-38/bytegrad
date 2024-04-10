import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const handleClick = (event) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
        <button onClick={handleClick} className="reset-btn mb-10">
          <ResetIcon className="reset-btn-icon" />
        </button>
  );
}