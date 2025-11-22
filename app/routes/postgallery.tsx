import type { Route } from "./+types/postgallery";
import BookCard from "~/components/bookcard";
import ClickPopup from "~/components/clickpopup";
import type { bookDetailType } from "~/utils/interfaces";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aditya | Book Gallery" },
  ];
}

const API_BASE_URL = 'https://api.adityasoni.dev';

export const loader = async () => {
    const response = await fetch(`${API_BASE_URL}/api/posts`);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    const data = await response.json();
    return data || [];
}

const PostGallery = ({ loaderData }: Route.ComponentProps) => {

    const allBooks = loaderData as bookDetailType[];

    return (
        <main className='min-h-screen relative bg-[url(/cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative flex flex-col justify-center items-center gap-4 py-12">
                <div className="flex flex-col gap-2">
                    <h1 className='mx-auto text-center text-zinc-100 text-4xl font-homet tracking-[-1%] sm:text-7xl'>Shōsetsu Shelf</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%]'>
                        <button type="button" className="">
                            <a className="" href="/">
                                <img className="max-w-8 sm:max-w-12" src="/home.svg" alt="Go to Home" />
                            </a>
                        </button>
                    </h4>
                </div>
                <ClickPopup />
                <div className="overflow-auto grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 sm:gap-x-12 items-center px-12 sm:px-36">
                    {
                        allBooks.map((bookOverview: bookDetailType) => (
                            <BookCard key={bookOverview.id} bookOverview={bookOverview} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default PostGallery;