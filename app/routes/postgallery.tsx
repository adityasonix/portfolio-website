import type { Route } from "./+types/postgallery";
import BookCard from "~/components/bookcard";
import type { bookDetailType } from "~/utils/interfaces";

export const loader = async () => {
    const response = await fetch(`http://localhost:8787/api/posts`);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    const data = await response.json();
    return data || [];
}

const PostGallery = ({ loaderData }: Route.ComponentProps) => {

    const allBooks = loaderData;

    return (
        <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative h-screen flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className='mx-auto text-center text-zinc-100 text-4xl font-homet tracking-[-1%] sm:text-7xl'>Shōsetsu Shelf</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%] sm:text-2xl'>
                        <button type="button" className="">
                            <a className="" href="/">
                                <img className="max-w-8 sm:max-w-12" src="home.svg" />
                            </a>
                        </button>
                    </h4>
                </div>
                <div className="grid grid-cols-2 gap-1 sm:gap-3 items-center">
                    {
                        allBooks.map((bookOverview : bookDetailType) => (
                            <BookCard key={bookOverview.id} bookOverview={bookOverview} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default PostGallery;