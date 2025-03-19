import Link from "next/link";
import { Box,Grid2,Card,CardActionArea,CardContent,CardMedia,Typography } from '@mui/material';
import { CategoryDefault } from '../Category';
import Date from "../Date";


export default function BlogList({ blog }) {

    if(blog.length === 0) {
        return <Box padding="32px 0" sx={{ typography: 'body1', fontSize: 'h6.fontSize', fontWeight: 'regular' }}>記事がありません。</Box>
    }
    
    return (
        <Grid2 container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          { blog.map((item) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <Link href={`/blog/${item.id}`} passHref>
                <Card sx={{ maxWidth: 368, margin: '0 auto' }}>
                  <CardActionArea>
                  {item.thumbnail ? (
                    <CardMedia
                        component="img"
                        height="200"
                        image={item.thumbnail.url}
                        alt=""
                    />
                    ) : (
                    <CardMedia 
                      component="img"
                      height="200"
                      image="/no-image.webp"
                      title="No Image"
                    />
                    )
                  }
                  <CardContent>
                      <Date date={item.date} />
                      <Typography variant="h6" component="h3" sx={{ color: 'text.primary', mb: 2 }}>
                        {item.title}
                      </Typography>
                      <CategoryDefault category={item.category} size="medium"/>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
    )
}