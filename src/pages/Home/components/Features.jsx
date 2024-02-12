import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export function Features({ isAvailable = false, feature }) {
    return (
        <li className="flex items-center py-2 md:py-3 gap-3">
            <span className="p-2 bg-blue-50 fs-100">
                {isAvailable ? <TiTick /> : <RxCross2 className="font-bold" />}
            </span>
            <p className="fs-100">{feature}</p>
        </li>
    )
}