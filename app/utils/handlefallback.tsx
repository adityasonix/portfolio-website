export const handleImageError = (e : React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "./fallbackimage.svg";
    e.currentTarget.alt = "Book cover isn't available";
    e.currentTarget.width = 128
}