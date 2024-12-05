import { Grid2,Card,CardMedia,Typography,CardHeader } from '@mui/material';


export default function IllustList({data}) {
    return (
        <>
        <Typography variant="h5"sx={{mb:{xs: 3,sm: 4},fontSize:{xs: '16px',sm: '20px'}, textAlign:{xs:'justify',sm:'left'}}}>
            iPad、Illustrator、Photoshopなどで必要があればイラストを描きます。WEBサイトの目的に応じて描くことが多いです。
        </Typography>
        <Grid2 container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 3}} justifyContent="space-around">
            { data.map((item,i) => (
                <Grid2 key={i}>
                <Card sx={{ width: 320, margin: '0 auto', bgcolor:'rgba(0, 0, 0, 0.03)', textAlign:{ xs: "center", sm: "left"} }}>
                        <CardMedia
                            component="img"
                            sx={{ width:'auto', height: '240px', objectFit: "contain",margin: '0 auto' }}
                            image={`/illust/${item.image}.webp`}
                            alt={`${item.title}のイラスト`}
                        />
                        <CardHeader title={`${item.title}`} subheader={`${item.subtitle}`} />
                </Card>
            </Grid2>
            ))}
        </Grid2>
        </>
    )
}