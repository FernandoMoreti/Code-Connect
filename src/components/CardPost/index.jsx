import Image from "next/image"
import { Avatar } from "../Avatar"

export const CardPost = (props) => {
    return (
        <article className="w-122 h-108">
            <header>
                <figure className="p-6 bg-gray-500 rounded-t-lg">
                    <Image 
                        src={props.post.cover} 
                        width={438} 
                        height={133} 
                        alt="Imagem do post"
                        className="rounded-lg"
                    />
                </figure>
            </header>
            <section className="p-4 flex flex-col gap-1 text-gray-400 bg-gray-800">
                <h2 className="text-lg font-bold">{props.post.title}</h2>
                <p>{props.post.body}</p>
                <a className="text-green-600 underline" href="">Ver detalhes</a>
            </section>
            <footer className="bg-gray-800 rounded-b-lg">
                <Avatar 
                    imageSrc={props.post.author.avatar} 
                    name={props.post.author.username} 
                />
            </footer>
        </article>
    )
}