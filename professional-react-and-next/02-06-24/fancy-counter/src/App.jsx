import Header from "./components/Header";
import DisplayCount from "./components/DisplayCount";
import Reset from "./components/Reset";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="bg-[#bef227] h-[615px] w-[476px] flex flex-col text-center mx-auto mt-20">
      <Header />
      <DisplayCount count={count} />
      <Reset resetCount={resetCount} />
      <Footer setCount={setCount} count={count} />
    </div>
  );
}
