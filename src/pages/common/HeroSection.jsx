export function HeroSection({ title, description, img, className }) {
    return (
        <div className={`p-4 lg:p-8 my-3 flex relative overflow-hidden rounded-md`}>
            <img src={img} className="flex absolute min-h-[20rem] scale-150 inset-0 object-cover" alt="" />
            <div className={`grid place-items-start lg:grid-cols-2 items-center relative z-100 ${className}`}>
                <h1 className="fs-500 line-2 font-semibold">{title}</h1>
                <span className="lg:fs-50 lg:fs-100 font-medium mt-1">{description}</span>
            </div>
        </div>
    )
}