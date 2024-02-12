export function InputSection({ label, type, id, placeholder, className }) {
    return <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            type={type}
            id={id}
            className={`mt-1 p-2 w-full border rounded ${className}`}
            placeholder={placeholder}
        />
    </div>
}