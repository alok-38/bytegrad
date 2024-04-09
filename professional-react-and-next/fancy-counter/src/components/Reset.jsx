import { ResetIcon } from "@radix-ui/react-icons";

function Reset() {
    return (
        <div className="mt-10 mx-auto">
            <button><ResetIcon className="reset-btn-icon w-10 h-10 hover:text-gray-600" /></button>
        </div>
    )
}

export default Reset