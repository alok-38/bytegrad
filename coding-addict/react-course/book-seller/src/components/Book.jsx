import Author from "./Author";
import Image from "./Image";
import Title from "./Title";
import '../App.css'

export default function Book() {
    return (
        <div className="book-container p-5 bg-white rounded-2xl	">
            <div className="flex justify-center">
                <div className="max-w-md ">
                    <Image />
                    <div className="book-details">
                        <Title />
                        <Author />
                    </div>
                </div>
            </div>
        </div>
    );
}