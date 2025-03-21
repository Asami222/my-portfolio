"use client"

import { useParams } from "next/navigation";
import Image from 'next/image';
import { Box, Card, CardContent,CardMedia, Typography, Link, Divider,Item } from '@mui/material';
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

const Card0 = ({card}) => {
    return (
        <Box key={card.title}>
            <Typography variant="h6" sx={{textAlign:'left',mb: '8px'}}>{card.title}</Typography>
            <Card sx={{display: 'grid', gridTemplateColumns: { xs: "1fr", sm: `1fr` }, gap:"16px", bgcolor: '#FFE59D'}} style={{ border: "none", boxShadow: "none", borderRadius: '0' }}>
                <Box sx={{display: 'grid', gridTemplateColumns: { xs: "1fr", sm: `${card.width} 1fr` }, gap:{ xs: '8px', sm: '8px', md: '16px' }, bgcolor: '#FFE59D'}} style={{ border: "none", boxShadow: "none" }}>
                    <CardMedia
                        component="img"
                        sx={{ width:{ xs: "100%", sm: "100%" }, height: 'auto', borderRadius: '4px' }}
                        image={card.media}
                        alt=""
                    />
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: `${card.width2} 1fr`, sm: `${card.width3} 1fr` }, gap: { xs: "0", sm: "16px" }, bgcolor: '#FFE59D'}} style={{ border: "none", boxShadow: "none" }}> 
                        { card.media2.map((m,i) => (
                            <CardMedia
                                key={i}
                                component="img"
                                sx={{ width:'100%', height: 'auto', borderRadius: '4px' }}
                                image={m}
                                alt=""
                            />
                        ))}
                    </Box>
                </Box>
                <CardContentNoPadding sx={{ textAlign: 'left'}}>
                    <Typography variant="body1" sx={{ fontSize: {xs:'14px',sm:'14px',md: '16px'},textAlign:"justify",whiteSpace: "pre-wrap" }}>{card.text}</Typography>
                </CardContentNoPadding>
            </Card>
        </Box>
    )
}

const CardMultiple = ({card,two=false}) => {
    return (
        <Box key={card.title}>
            <Typography variant="h6" sx={{textAlign:'left',mb: '8px'}}>{card.title}</Typography>
            <Card sx={{display: 'grid', gridTemplateColumns: { xs: "1fr", sm: `${card.width} 1fr` }, gap:"16px", bgcolor: '#FFE59D'}} style={{ border: "none", boxShadow: "none", borderRadius: '0' }}>
                { two ?
                <Box sx={{display: 'grid', gridTemplateColumns: { xs: `${card.width2} 1fr`, sm: `${card.width3} 1fr` }, gap:{ xs: '8px', sm: '8px', md: '16px' }, bgcolor: '#FFE59D'}} style={{ border: "none", boxShadow: "none" }}>
                    <CardMedia
                        component="img"
                        sx={{ width:'100%', height: 'auto', borderRadius: '4px' }}
                        image={card.media}
                        alt=""
                    />
                    <CardMedia
                        component="img"
                        sx={{ width:'100%', height: 'auto', borderRadius: '4px' }}
                        image={card.media2}
                        alt=""
                    />
                </Box>
                :
                <Box sx={{display: 'grid', gridTemplateColumns: { xs: `1fr 1fr 1fr`, sm: `1fr 1fr 1fr` }, gap:{ xs: '8px', sm: '8px',md: '16px' }, bgcolor: '#FFE59D'}} style={{ border: "none", boxShadow: "none" }}>
                    { card.media.map((m,i) => (
                        <CardMedia
                            key={i}
                            component="img"
                            sx={{ width:'100%', height: 'auto', borderRadius: '4px' }}
                            image={m}
                            alt=""
                        />
                    ))}
                </Box>
                }
                <CardContentNoPadding sx={{ textAlign: 'left'}}>
                    <Typography variant="body1" sx={{ fontSize: {xs:'14px',sm:'14px',md: '16px'},textAlign:"justify",whiteSpace: "pre-wrap" }}>{card.text}</Typography>
                </CardContentNoPadding>
            </Card>
        </Box>
    )
}

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
                        <Card sx={{display: 'grid', gridTemplateColumns: { sm: "min(50%, 343px) 1fr", md: "465px 1fr" }, gap:'8px', bgcolor: '#FFE59D', mb:{ xs: 4, sm: 4, md: 7 }}} style={{ border: "none", boxShadow: "none", borderRadius: '0' }}>
                            <CardMedia
                                component="img"
                                sx={{ width:'100%', height: 'auto', objectFit: "cover", borderRadius: '4px' }}
                                image={site.image.url}
                                alt=""
                            />
                                <CardContentNoPadding sx={{ textAlign: 'left'}}>
                                {site.uppercase ?
                                    <Typography gutterBottom component="h2" variant="h3" sx={{fontSize: {xs:'32px',sm:'32px',md:'40px'}}} style={{textTransform: "uppercase" }}>{site.title}</Typography>
                                    :
                                    <Typography gutterBottom component="h2" variant="h3" sx={{fontSize: {xs:'32px',sm:'32px',md:'40px'}}}>{site.title}</Typography>
                                }
                                <Typography gutterBottom component="p" variant="subtitle2">{site.category}</Typography>
                                <Typography gutterBottom variant="body1" sx={{ color: 'text.primary', fontSize: {xs:'14px',sm:'14px',md: '16px'}, textAlign:{xs:"justify",sm:"left"}, whiteSpace: {xs:'pre-wrap',sm:'normal'}}}>{site.text}</Typography>
                                <Link href={site.link} variant="body1" underline="always" sx={{fontSize: {xs:'14px',sm: '14px',md: '16px'}}}>
                                    {site.link}
                                </Link>
                                </CardContentNoPadding>
                        </Card>
                        <Divider />
                        </Box>
                        <Typography variant="h4">Design</Typography>
                        {site.card1?.map((m) => (
                            <Box key={m.title}>
                                <Typography variant="h6" sx={{textAlign:'left',mb: '8px'}}>{m.title}</Typography>
                                <Card sx={{display: 'grid', gridTemplateColumns: { xs: "1fr", sm: `${m.width} 1fr` }, gap:"16px", bgcolor: '#FFE59D'}} style={{ border: "none", boxShadow: "none", borderRadius: '0'}}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width:'100%', height: 'auto', borderRadius: '4px' }}
                                        image={m.media}
                                        alt=""
                                    />
                                    <CardContentNoPadding sx={{ textAlign: 'left'}}>
                                        <Typography variant="body1" sx={{ fontSize: {xs:'14px',sm:'14px',md: '16px'},textAlign:"justify",whiteSpace: "pre-wrap" }}>{m.text}</Typography>
                                    </CardContentNoPadding>
                                </Card>
                            </Box>
                        ))}
                        {site.card0 && 
                            <Card0 card={site.card0} />
                        }
                        <Typography variant="h4" sx={{pt: { xs: "16px", sm: "32px" }}}>Coding</Typography>
                        {site.card3 && 
                            <CardMultiple card={site.card3} two/>
                        }
                        {site.card4 && 
                            <CardMultiple card={site.card4} />
                        }
                        {site.card2.map((m) => (
                            <Box key={m.title}>
                                <Typography variant="h6" sx={{textAlign:'left',mb: '8px'}}>{m.title}</Typography>
                                <Card sx={{display: 'grid', gridTemplateColumns: { xs: "1fr", sm: `${m.width} 1fr` }, gap:'16px', bgcolor: '#FFE59D' }} style={{ border: "none", boxShadow: "none", borderRadius: '0' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width:{ xs: `${m.small}%`, sm: "100%" }, height: 'auto', borderRadius: '4px' }}
                                        image={m.media}
                                        alt=""
                                    />
                                    <CardContentNoPadding sx={{ textAlign: 'left'}}>
                                        <Typography variant="body1" sx={{ fontSize: {xs:'14px',sm:'14px',md: '16px'},textAlign:{xs:"justify",sm:"left"},whiteSpace: "pre-wrap" }}>{m.text}</Typography>
                                    </CardContentNoPadding>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Sheet>
            </Box>
            <div style={{backgroundColor: '#FFE59D'}}>
                <Footer />
            </div>
        </>
    )
}