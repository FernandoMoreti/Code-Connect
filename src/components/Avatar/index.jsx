import Image from "next/image"

export const Avatar = (props) => {
    return (
        <ul className="flex justify-end items-center gap-2 p-4">
            <li>
                <Image 
                    src={props.imageSrc} 
                    width={32} 
                    height={32} 
                    alt="Imagem do user" 
                />
            </li>
            <li className="text-gray-400">
                @{props.name}
            </li>
        </ul>
    )
}