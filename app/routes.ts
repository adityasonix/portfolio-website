import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route('/', 'routes/home.tsx'),
    route('connect', 'routes/letsconnect.tsx'),
    route('aboutme', 'routes/aboutme.tsx'),
    route('procareer', 'routes/procareer.tsx'),
    route('sidequests', 'routes/projectgallery.tsx'),
    route('bookshelf', 'routes/postgallery.tsx'),
    route('bookshelf/:bookId', 'routes/postdetail.tsx')
] satisfies RouteConfig;
