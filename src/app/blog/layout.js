export const metadata = {
    title: "Blog",
}

export const revalidate = 60;

export default function BlogLayout({children}) {
    return (
        <>{children}</>
    )
}