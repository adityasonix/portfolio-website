import type { Route } from "./+types/postdetail";

export const loader = async ({ params } : Route.LoaderArgs) => {
    const bookId = params.bookId;
    return { bookId };
}

const PostDetail = ({ loaderData }: Route.ComponentProps) => {
    return (
        <div>This is the POST DETAIL for {loaderData.bookId}!</div>
    )
}

export default PostDetail;