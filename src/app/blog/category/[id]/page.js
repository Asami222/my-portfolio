import { Box,Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getCategoryDetail, getBlogList } from '@/app/_libs/microcms';
import Header from "@/app/_components/Header";
import Footer from '@/app/_components/Footer';
import BlogList from "@/app/_components/BlogList";
import Sheet from '@/app/_components/Sheet';
import { CategoryLabel } from '@/app/_components/Category';
import { notFound } from 'next/navigation';
import { BLOG_LIST_LIMIT } from '@/app/_constants';
import PageLink from '@/app/_components/PageLink';



export default async function CategoryPage({params}) {
    const param = await params
    const category = await getCategoryDetail(param.id).catch(notFound);

    const { contents: blog, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        filters: `category[contains]${category.id}`,
      });
      
    return (
        <>
        <Header />
        <Sheet color="#FFF4BD">
            <Box m={{ xs: "24px 0", sm: "64px 0" }}>
                <Box sx={{textAlign: 'right', display: { xs: "block", sm: "none" },}}><Button variant="text" color="inherit" size='large' endIcon={<ExpandMoreIcon />}>SELECT</Button ></Box>
                <CategoryLabel category={category} size="large" />
                <BlogList blog={blog} />
            </Box>
            <PageLink totalCount={totalCount} basePath={`/blog/category/${category.id}`}/>
        </Sheet>
        <Footer />
        </>
    )
}