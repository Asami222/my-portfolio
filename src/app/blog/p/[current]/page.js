import { Box,Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { notFound } from 'next/navigation';
import { getBlogList } from '@/app/_libs/microcms';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import BlogList from "@/app/_components/BlogList";
import Sheet from "@/app/_components/Sheet";
import { BLOG_LIST_LIMIT } from '@/app/_constants';
import PageLink from '@/app/_components/PageLink';

export default async function BlogPage({params}) {
    
    const param = await params
    const current = parseInt(param.current, 10);

    if(Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: blog, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        offset: BLOG_LIST_LIMIT * (current - 1),
    });

    if(blog.length === 0) {
        notFound();
    }

    return (
        <>
        <Header icon/>
        <Sheet color="#FFF4BD">
            <Box m={{ xs: "84px 0 24px", sm: "64px 0" }}>
                <Box sx={{textAlign: 'right', display: { xs: "block", sm: "none" },}}><Button variant="text" color="inherit" size='large' endIcon={<ExpandMoreIcon />}>SELECT</Button ></Box>
                <BlogList blog={blog} />
            </Box>
            <PageLink totalCount={totalCount} current={current} />
        </Sheet>
        <Footer />
        </>
    )
}