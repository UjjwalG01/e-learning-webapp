import { Card } from "@material-tailwind/react"

export function SingleCard({ icon, title, description }) {
    return (
        <Card className="flex flex-col gap-x-4 gap-y-2 py-6 px-6 rounded">
            <span className="bg-blue-100 text-lg rounded border border-blue-200 w-fit p-3">
                {icon}
            </span>
            <h2 className="fs-100 font-semibold mt-2">{title}</h2>
            <p className="fs-100 font-normal">{description}</p>
        </Card>
    )
}