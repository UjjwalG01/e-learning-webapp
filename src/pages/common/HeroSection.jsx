export function HeroSection({ title, description, img }) {
    return (
        <div className="p-8 my-3 flex relative min-h-[30vh] overflow-hidden">
            <div className="absolute inset-0 bottom-0">
                <img src={img} className="w-full flex object-contain flex-grow" alt="" />
            </div>
            <div className="grid place-items-start lg:grid-cols-2 items-center relative z-100">
                <h1 className="fs-700 font-semibold">{title}</h1>
                <span className="fs-100 font-medium">{description}</span>
            </div>
        </div>
    )
}