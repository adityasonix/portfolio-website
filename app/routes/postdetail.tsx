import type { Route } from "./+types/postdetail";
import { allBooks } from "~/content/content";
import BookCarousel from "~/components/bookcarousel";
import BookDetailInfo from "~/components/bookdetailinfo";

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
                    <h1 className='mx-auto text-zinc-100 text-center text-xl font-homet tracking-[-1%] sm:text-4xl'>{bookDetail?.titlejp}</h1>
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
                    <BookDetailInfo bookDetail={bookDetail}/>
                </div>
            </div>
        </main>
    )
}

export default PostDetail;