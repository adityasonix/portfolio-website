import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/postdetail";
import BookCarousel from "~/components/bookcarousel";
import BookDetailInfo from "~/components/bookdetailinfo";
import type { bookDetailFetch } from "~/utils/interfaces";

const API_BASE_URL = 'https://api.adityasoni.dev';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { bookId } = params;
    const response = await fetch(`${API_BASE_URL}/api/posts/${bookId}`);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    const data = await response.json();
    return data || [];
}

const PostDetail = ({ loaderData }: Route.ComponentProps) => {
    
    const bookDetail = (loaderData as bookDetailFetch[])[0];
    const imageUrls = JSON.parse(bookDetail.imagelinks);

    return (
        <main className='min-h-screen relative bg-[url(/cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative h-screen flex flex-col justify-center items-center gap-4 py-12">
                <div className="flex flex-col gap-5">
                    <h1 className='mx-auto text-zinc-100 text-center text-xl font-homet font-bold tracking-[-1%] sm:text-4xl'>{bookDetail.titlejp}</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%] sm:text-xl'>
                        <button type="button" className="">
                            <a className="" href="/bookshelf">
                                <img className="max-w-6 sm:max-w-7" src="/back.svg" alt="Go back to Gallery" />
                            </a>
                        </button>
                    </h4>
                </div>
                <div className="flex overflow-auto flex-col sm:flex-row justify-evenly items-center max-w-5/6 pt-4">
                    <div className="w-full sm:w-2/5"><BookCarousel imageUrls={imageUrls} /></div>
                    <BookDetailInfo bookDetail={bookDetail} />
                </div>
            </div>
        </main>
    )
}

export default PostDetail;