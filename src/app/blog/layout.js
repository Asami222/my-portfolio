import Header from "../_components/Header";
import Sheet from "../_components/Sheet";

export const revalidate = 60;

export default function BlogLayout({children}) {
    return (
        <>{children}</>
    )
}