

import { Box, Button, ButtonGroup } from '@mui/material';
import { getAllIds, getBlogDetail,getAllContentsIDAndTitle } from "@/app/_libs/microcms"
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Sheet from "@/app/_components/Sheet";
import Article from "@/app/_components/Article";
import PageChange from '@/app/_components/PageChange';
import { prevNextPost } from '@/app/_libs/prev-next-post';

export default async function DetailPage({params}) {

    const { slug } = await params
    const data = await getBlogDetail(slug);
    const currentId = data.id
    const contents = await getAllContentsIDAndTitle()

    const [prevPost, nextPost] = prevNextPost(contents, currentId)

    return (
        <>
            <Header />
            <Box sx={{paddingTop:{xs:'80px',sm:'64px'}, textAlign: 'center', backgroundColor: '#FFE59D'}}>
                <Sheet>
                <Article data={data} />
                <PageChange
                prevUrl={`/blog/${prevPost.id}`}
                nextUrl={`/blog/${nextPost.id}`}
                />
                </Sheet>
            </Box>
            <div style={{backgroundColor: '#FFE59D'}}>
                <Footer />
            </div>
        </>
    )
}
