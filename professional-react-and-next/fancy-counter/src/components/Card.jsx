import Header from "./Header";
import CountDisplay from "./CountDisplay";
import ResetButton from "./ResetButton";

export default function Card() {
  let countValue = 0;
  return (
    <div className="flex flex-col items-center mt-20">
      <Header />
      <CountDisplay count={countValue} />
      <ResetButton />
    </div>
  );
}
