import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/postdetail";
import type { bookDetailFetch } from "~/utils/interfaces";
import BookDetailInfoJp from "~/components/bookdetailinfojp";
import BookDetailInfoEn from "~/components/bookdetailinfoen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aditya | Reading" },
  ];
}

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
    const isJPBook = bookDetail.originallang === 'JP'

    return (
        <>
            { isJPBook && (<BookDetailInfoJp bookDetail={bookDetail} imageUrls={JSON.parse(bookDetail.imagelinks)} />)}
            { !isJPBook && <BookDetailInfoEn bookDetail={bookDetail} />}
        </>
    )
}

export default PostDetail;