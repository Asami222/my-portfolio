import { Box,Typography,List,ListItem,ListItemText } from '@mui/material';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import Sheet from '@/app/_components/Sheet';
import { privacyData } from '@/app/_components/privacy';

export default function Privacy() {
    return(
        <Box sx={{minHeight: '100vh',backgroundColor:'#fff'}}>
            <Header />
            <Sheet>
                <Box p={{ xs: "96px 0 0", sm: "64px 0" }}>
                    <Typography variant='h5'
                    component="h1" 
                    sx={{textAlign:'center', fontWeight: '500', fontSize: { sm: '24px', xs: '20px' },pb:{xs:0,sm:2}}}>
                        プライバシーポリシー
                    </Typography>
                    {privacyData.map((item,i) => (
                    <Box key={i}>
                        <Typography variant='h6' component="h2" sx={{mt:3,mb:1}}>{item.title}</Typography>
                        <Typography component="p" sx={{ typography: { sm: 'body1', xs: 'body2' } }}>
                        {item.text}
                        </Typography>
                        { item.list &&
                        <Box  sx={{mt:2}}>
                        {item.list.map((each,i) => (
                        <List key={i} style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                        <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                            <ListItemText
                                primary={each}
                                style={{ lineHeight: 1, margin: 0 }}
                                sx={{ fontSize:{xs:'14px',sm:'16px'},pb:'12px'}} 
                                disableTypography
                            />
                        </ListItem>
                        </List>
                        ))}
                        </Box>
                        }
                    </Box>
                    ))}
                </Box>
            </Sheet>
            <Footer />
        </Box>
    )
}