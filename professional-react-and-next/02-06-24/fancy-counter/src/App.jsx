import Header from "./components/Header";
import DisplayCount from "./components/DisplayCount";
import Reset from "./components/Reset";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#bef227] h-[615px] w-[476px] flex flex-col text-center">
      <Header />
      <DisplayCount count="0" />
      <Reset />
      <Footer />
    </div>
  );
}
