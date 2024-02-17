export function InputSection({ label, type, id, placeholder, className }) {
    return <div className="mb-4">
        <label htmlFor={id} className="block fs-50 font-medium">
            {label}
        </label>
        <input
            type={type}
            id={id}
            className={`mt-1 p-2 w-full border h-11 fs-50 outline-none rounded ${className}`}
            placeholder={placeholder}
        />
    </div>
}