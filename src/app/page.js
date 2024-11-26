import { Box,Typography,Container} from '@mui/material';
import BlogList from './_components/BlogList';
import Header from './_components/Header';
import Footer from './_components/Footer';
import {mplusfont} from '../app/theme';

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

export default function Home() {
  const sliceData = data.contents.slice(0, 3);
  return (
    <Container component="section">
      <Box padding={{xs: '40px 0 24px', sm: '40px 0'}}>
        <Typography variant="h4" component="h1" fontWeight="fontWeightLight" sx={{ color: 'text.primary' }}>Welcome to my site !</Typography>
      </Box>
      <Box padding="24px 0 0">
        <Typography variant="h5" fontWeight="fontWeightRegular" component="h2" sx={{ color: 'text.primary' }}>New Blogs</Typography>
        <BlogList blog={sliceData} />
      </Box>
    </Container>
  )
}