import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}) {
    return <div className="py-2 text-sm flex font-sans justify-center">
        <div className="text-slate-800/70 text-sm font-mono">
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer font-mono"  to={to}>
            {buttonText}
        </Link>
    </div>
}