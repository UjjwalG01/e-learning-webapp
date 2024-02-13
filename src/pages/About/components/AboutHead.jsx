export function AboutHead({ title, description }) {
    return (
        <div className="mt-4">
            <h2 className="fs-400 font-semibold">{title}</h2>
            <p className="fs-100 font-medium">{description}</p>
        </div>
    )
}