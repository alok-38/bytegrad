import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButtons() {
    return (
        <div className="bg-lime-950 text-white flex justify-evenly">
            <button className="m-10 hover:text-orange-500"><MinusIcon style={{ width: '30px', height: '30px' }} /></button>
            <button className="m-10 hover:text-green-500"><PlusIcon style={{ width: '30px', height: '30px' }} /></button>
        </div>
    );
}

export default CountButtons;
