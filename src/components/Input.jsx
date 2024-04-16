import React, { useId } from "react";

const Input = React.forwardRef(function Input(
    { label, type = "text", className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label
                    className="text-left block mb-2 font-semibold text-gray-600"
                    htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px=3 p-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default Input;
