import { Container,Box,Typography } from '@mui/material';
import BlogList from './_components/BlogList';
import ProjectList from './_components/ProjectList';
import Header from './_components/Header';
import Footer from './_components/Footer';
import Sheet from './_components/Sheet';
//import {mplusfont} from '../app/theme';
import { TOP_BLOG_LIMIT } from './_constants';
import { getBlogList } from './_libs/microcms';
import { projectData } from './_components/ProjectData';

export const revalidate = 60;
const newdata = projectData.slice(0,1)
export default async function Home() {

  const data = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });

  return (
    <>
      <Header />
      <Sheet color="#FFF4BD">
        <Box padding={{xs: '100px 0 24px', sm: '40px 0'}}>
          <Typography variant="h4" component="h1" fontWeight="fontWeightLight" sx={{ color: 'text.primary' }} textAlign={{ xs: 'center', sm: 'left' }}>Welcome to my site !</Typography>
        </Box>
        <Box padding="24px 0 0">
          <Typography variant="h5" component="h2" sx={{ color: 'text.primary',fontWeight:'300', mb: 2 }}>New Project</Typography>
          <ProjectList data={newdata} />
        </Box>
        <Box padding="32px 0 0">
          <Typography variant="h5" component="h2" sx={{ color: 'text.primary',fontWeight:'300', mb: 2 }}>New Blogs</Typography>
          <BlogList blog={data.contents} />
        </Box>
      </Sheet>
      <Footer />
    </>
  )
}