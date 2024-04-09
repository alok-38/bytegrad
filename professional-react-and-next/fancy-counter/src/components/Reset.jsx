import { ResetIcon } from "@radix-ui/react-icons";

function Reset({ reset }) {
    return (
        <div className="mt-10 mx-auto">
            <button onClick={reset}><ResetIcon className="reset-btn-icon w-10 h-10 hover:text-gray-600" /></button>
        </div>
    );
}

export default Reset;
