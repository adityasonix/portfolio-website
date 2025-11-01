import type { Route } from "./+types/postdetail";
import { allBooks } from "~/content/content";
import BookCarousel from "~/components/bookcarousel";

export const loader = async ({ params } : Route.LoaderArgs) => {
    const bookId = params.bookId;
    return { bookId };
}

const PostDetail = ({ loaderData }: Route.ComponentProps) => {

    const bookDetail = allBooks.find(book => book.id === loaderData.bookId);

    return (
        <main className='min-h-screen relative bg-[url(/cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative h-screen flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col gap-3">
                    <h1 className='mx-auto text-zinc-100 text-center text-xl font-homet tracking-[-1%] sm:text-4xl'>{bookDetail?.titleen}</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%] sm:text-xl'>
                        <button type="button" className="">
                            <a className="" href="/bookshelf">
                                <img className="max-w-4 sm:max-w-7" src="/back.svg" />
                            </a>
                        </button>
                    </h4>
                </div>
                <div className="flex justify-evenly items-center max-w-4/5 pt-4">
                    <div className="w-2/5"><BookCarousel /></div>
                    <div className="w-2/5 flex flex-col justify-center items-center gap-6 py-4">
                        <div className="flex flex-col items-center">
                            <div className="text-gray-400 text-xs"> TITLE </div>
                            <div className="text-zinc-100 text-2xl font-bold"> {bookDetail?.titlejp || bookDetail?.titleen} </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-gray-400 text-xs"> AUTHOR </div>
                            <div className="text-zinc-200 text-xl"> {bookDetail?.author} </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-gray-400 text-xs"> GENRE </div>
                            <div className="text-zinc-200 text-xl"> {bookDetail?.genre} </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-gray-400 text-xs"> CATEGORY </div>
                            <div className="text-zinc-200 text-xl"> {bookDetail?.category} </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-gray-400 text-xs"> PUBLISHER </div>
                            <div className="text-zinc-200 text-xl"> {bookDetail?.publisher} </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-gray-400 text-xs"> KNOW MORE / BUY </div>
                            <div className="text-zinc-300 text-lg">
                                <a href={bookDetail?.bookmeter} target="_blank" rel="noopener noreferrer">Bookmeter <img className="inline w-4" src="/external.svg" /></a>
                                <span className="font-bold">&nbsp; &middot; &nbsp;</span>
                                <a href={bookDetail?.bookwalker} target="_blank" rel="noopener noreferrer">Bookwalker <img className="inline w-4" src="/external.svg" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PostDetail;