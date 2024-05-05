import ButtonContainer from "./ButtonContainer";
import Header from "./Header";
import DisplayCount from "./DisplayCount";
import Reset from "./Reset";

export default function Card() {
  let count = 0;
  return (
    <div className="bg-[#bef227] w-[476px] h-[615px] rounded-t-3xl flex flex-col shadow-3xl items-center transition-all">
      <Header />
      <DisplayCount count={count} />
      <Reset />
      <ButtonContainer />
    </div>
  );
}
