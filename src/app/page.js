import { Container,Box,Typography } from '@mui/material';
import BlogList from './_components/BlogList';
import Header from './_components/Header';
import Footer from './_components/Footer';
import Sheet from './_components/Sheet';
import {mplusfont} from '../app/theme';
import { TOP_BLOG_LIMIT } from './_constants';
import { getBlogList } from './_libs/microcms';

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/home/blueFace1.webp",
        title: ""
      },
      date: "30 Nov 2024",
      title: "ポートフォリオ作成しました",
      chips : [
        {
          label: "News"
        },
        {
          label: "project"
        },
      ],
    },
    {
      id: "2",
      image: {
        url: "/home/threeFace.webp",
        title: ""
      },
      date: "30 Nov 2024",
      title: "JavaScriptからReact/Next.jsへ",
      chips : [
        {
          label: "Next.js"
        },
        {
          label: "React"
        },
        {
          label: "Figma"
        },
      ],
    },
    {
      id: "3",
      image: {
        url: "/home/cat1.webp",
        title: ""
      },
      date: "30 Nov 2024",
      title: "ポートフォリオのデザインについて",
      chips : [
        {
          label: "Design"
        },
      ],
    },
  ]
}

export default async function Home() {

  const data = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });

  return (
    <>
      <Header />
      <Sheet color="#FFF4BD">
        <Box padding={{xs: '40px 0 24px', sm: '40px 0'}}>
          <Typography variant="h4" component="h1" fontWeight="fontWeightLight" sx={{ color: 'text.primary' }} textAlign={{ xs: 'center', sm: 'left' }}>Welcome to my site !</Typography>
        </Box>
        <Box padding="24px 0 0">
          <Typography variant="h5" fontWeight="fontWeightRegular" component="h2" sx={{ color: 'text.primary' }}>New Blogs</Typography>
          <BlogList blog={data.contents} />
        </Box>
      </Sheet>
      <Footer />
    </>
  )
}