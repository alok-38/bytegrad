import Title from "./Title";
import Count from "./Count";
import CountButtons from "./CountButtons";
import Reset from "./Reset";

export default function Card() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-[#bef227] flex flex-col justify-center items-center text-center h-[615px] w-[476px] gap-32">
                <Title />
                <Count number={6} size="lg" />
                <Reset />
                <CountButtons />
            </div>
        </div>
    );
}
