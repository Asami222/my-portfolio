"use client"

import { useParams } from "next/navigation";
import Image from 'next/image';
import { Box, Card, CardContent,CardMedia, Typography, Link, Divider } from '@mui/material';
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import Sheet from '@/app/_components/Sheet'
import { projectDetailData } from '@/app/_components/ProjectData';
import { styled } from "@mui/material/styles";

const CardContentNoPadding = styled(CardContent)(`
    padding: 0;
    &:last-child {
      padding-bottom: 0;
    }
  `);

export default function ProductDetail(props) {

    const params = useParams()
    const {slug} = params
    const project = projectDetailData.filter(data => data.id == slug)
    const site = project[0]

    return (
        <>
            <Header />
            <Box sx={{paddingTop:{xs:'80px',sm:'64px'}, textAlign: 'center', backgroundColor: '#FFE59D'}}>
                <Sheet>
                    <Box sx={{display: "flex", flexDirection: 'column', gap: { xs: "16px", sm: "24px" } }}>
                        <Box>
                        <Card sx={{display: 'grid', gridTemplateColumns: { sm: "343px 1fr", md: "465px 1fr" }, gap:'8px', bgcolor: '#FFE59D', mb:{ xs: 4, sm: 4, md: 7 }}} style={{ border: "none", boxShadow: "none" }}>
                            <CardMedia
                                component="img"
                                sx={{ width:'100%', height: 'auto', objectFit: "cover" }}
                                image={site.image.url}
                                alt=""
                            />
                                <CardContentNoPadding sx={{ textAlign: 'left'}}>
                                <Typography gutterBottom component="h2" variant="h3" sx={{fontSize: {xs:'32px',sm:'32px',md:'40px'}}}>{site.title}</Typography>
                                <Typography gutterBottom component="p" variant="subtitle2">{site.category}</Typography>
                                <Typography gutterBottom variant="body1" sx={{ color: 'text.primary', fontSize: {xs:'14px',sm:'14px',md: '16px'},textAlign:{xs:"justify",sm:"left"}}}>{site.text}</Typography>
                                <Link href={site.link} variant="body1" underline="always" sx={{fontSize: {xs:'14px',sm: '14px',md: '16px'}}}>
                                    {site.link}
                                </Link>
                                </CardContentNoPadding>
                        </Card>
                        <Divider />
                        </Box>
                        <Typography variant="h4">Design</Typography>
                        <Box>
                            <Typography variant="h6" sx={{textAlign:'left',mb: '8px'}}>{site.card1.title}</Typography>
                            <Card sx={{display: 'grid', gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap:"16px", bgcolor: '#FFE59D'}} style={{ border: "none", boxShadow: "none" }}>
                                <Box sx={{display: 'grid', gridTemplateColumns: `${site.card1.column}`, gap: { xs:"8px",sm:"8px",md:"16px" }, bgcolor: '#FFE59D'}} >
                                { site.card1.media.map((card,i) => (
                                    <CardMedia
                                        key={i}
                                        component="img"
                                        sx={{ width:'100%', height: 'auto', objectFit: "cover" }}
                                        image={card.image}
                                        alt=""
                                    />
                                ))}
                                </Box>
                                <CardContentNoPadding sx={{ textAlign: 'left'}}>
                                    <Typography variant="body1" sx={{ fontSize: {xs:'14px',sm:'14px',md: '16px'},textAlign:{xs:"justify",sm:"left"} }}>{site.card1.text}</Typography>
                                </CardContentNoPadding>
                            </Card>
                        </Box>
                        <Typography variant="h4" sx={{pt: { xs: "16px", sm: "32px" }}}>Cording</Typography>
                        <Box>
                            <Typography variant="h6" sx={{textAlign:'left',mb: '8px'}}>{site.card2.title}</Typography>
                            <Card sx={{display: 'grid', gridTemplateColumns: { xs: "1fr", sm: `${site.card2.width}px 1fr` }, gap:'16px', bgcolor: '#FFE59D' }} style={{ border: "none", boxShadow: "none" }}>
                            <CardMedia
                                component="img"
                                sx={{ width:{ xs: `${site.card2.small}%`, sm: "100%" }, height: 'auto' }}
                                image={site.card2.media}
                                alt=""
                            />
                            <CardContentNoPadding sx={{ textAlign: 'left'}}>
                                <Typography variant="body1" sx={{ fontSize: {xs:'14px',sm:'14px',md: '16px'},textAlign:{xs:"justify",sm:"left"} }}>{site.card2.text}</Typography>
                            </CardContentNoPadding>
                            </Card>
                        </Box>
                        { site.card3 ?
                        <Box>
                            <Typography variant="h6" sx={{textAlign:'left',m: '8px 0'}}>{site.card3.title}</Typography>
                            <Card sx={{display: 'grid', gridTemplateColumns: { xs: "1fr", sm: `${site.card3.width}px 1fr` }, gap:'16px', bgcolor: '#FFE59D' }} style={{ border: "none", boxShadow: "none" }}>
                            <CardMedia
                                component="img"
                                sx={{ width:{ xs: `${site.card3.small}%`, sm: "100%" }, height: 'auto' }}
                                image={site.card3.media}
                                alt=""
                            />
                            <CardContentNoPadding sx={{ textAlign: 'left'}}>
                                <Typography variant="body1" sx={{ fontSize: {xs:'14px',sm:'14px',md: '16px'},textAlign:{xs:"justify",sm:"left"} }}>{site.card3.text}</Typography>
                            </CardContentNoPadding>
                            </Card>
                        </Box>
                        :
                        ''
                        }
                    </Box>
                </Sheet>
            </Box>
            <div style={{backgroundColor: '#FFE59D'}}>
                <Footer />
            </div>
        </>
    )
}