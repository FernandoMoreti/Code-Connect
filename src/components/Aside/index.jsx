import Image from "next/image"
import logo from "./logo.png"

export const Aside = () => {
    return (
        <aside className="bg-gray-900 rounded-lg px-4 h-full py-10">
            <Image src={logo} alt="Logo do Code connect"/>
        </aside>
    )
}