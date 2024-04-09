import { ResetIcon } from "@radix-ui/react-icons";

function Reset() {
    return (
        <button className="mb-10 mt-5 hover:text-gray-500">
            <ResetIcon style={{ width: '40px', height: '40px' }} />
        </button>
    );
}

export default Reset;
