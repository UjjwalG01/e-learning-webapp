export function FooterContact({ children, info }) {
    return (
        <li className="flex items-center gap-3 fs-100 font-medium">
            <span>{children}</span>
            <span>{info}</span>
        </li>
    )
}