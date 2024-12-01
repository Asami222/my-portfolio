import { Box,Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getBlogList } from "../_libs/microcms"
import Header from "../_components/Header";
import Footer from '../_components/Footer';
import BlogList from "../_components/BlogList";
import Sheet from "../_components/Sheet";
import CustomizedMenu from '../_components/CustomizedMenu';
import { BLOG_LIST_LIMIT } from '../_constants';
import PageLink from '../_components/PageLink';


export default async function BlogPage() {
    const { contents: blog, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
    });

    return (
        <>
        <Header icon/>
        <Sheet color="#FFF4BD">
            <Box m={{ xs: "84px 0 24px", sm: "64px 0" }}>
                <Box sx={{textAlign: 'right', display: { xs: "block", sm: "none" },}}>
                    <CustomizedMenu />
                </Box>
                <BlogList blog={blog} />
            </Box>
            <PageLink totalCount={totalCount} />
        </Sheet>
        <Footer />
        </>
    )
}