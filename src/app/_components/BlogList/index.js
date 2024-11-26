import { Box,Grid2,Card,CardContent,CardMedia,Typography,Chip } from '@mui/material';
import Category from '../Category';

export default function BlogList({ blog }) {
    if(blog.length === 0) {
        return <Box padding="32px 0" sx={{ typography: 'body1', fontSize: 'h6.fontSize', fontWeight: 'regular' }}>記事がありません。</Box>
    }
    return (
        <Grid2 container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 3}}>
          { blog.map((item) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
            <Card sx={{ maxWidth: 368, margin: '0 auto' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={item.image.url}
                    title={item.image.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="div" sx={{ color: 'primary.main' }}>
                      {item.date}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ color: 'text.primary' }}>
                      {item.title}
                    </Typography>
                    <Category category={item.chips} />
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
    )
}