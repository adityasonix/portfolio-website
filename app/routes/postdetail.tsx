import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/postdetail";
import BookCarousel from "~/components/bookcarousel";
import BookDetailInfo from "~/components/bookdetailinfo";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { bookId } = params;
    const response = await fetch(`http://localhost:8787/api/posts/${bookId}`);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    const data = await response.json();
    return data || [];
}

const PostDetail = ({ loaderData }: Route.ComponentProps) => {
    
    const bookDetail = loaderData[0];
    const imageUrls = JSON.parse(bookDetail.imagelinks);

    return (
        <main className='min-h-screen relative bg-[url(/cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative h-screen flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col gap-5">
                    <h1 className='mx-auto text-zinc-100 text-center text-xl font-homet tracking-[-1%] sm:text-4xl'>{bookDetail.titlejp}</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%] sm:text-xl'>
                        <button type="button" className="">
                            <a className="" href="/bookshelf">
                                <img className="max-w-4 sm:max-w-7" src="/back.svg" />
                            </a>
                        </button>
                    </h4>
                </div>
                <div className="flex justify-evenly items-center max-w-4/5 pt-4">
                    <div className="w-2/5"><BookCarousel imageUrls={imageUrls} /></div>
                    <BookDetailInfo bookDetail={bookDetail} />
                </div>
            </div>
        </main>
    )
}

export default PostDetail;