import Count from "./components/Count";
import CountButtons from "./components/CountButtons";
import ResetButton from "./components/ResetButton";
import Title from "./components/Title";

export default function App() {
  return (
    <main>
      <div>
        <Title />
        <Count />
        <ResetButton />
        <CountButtons />
      </div>
    </main>
  );
}
