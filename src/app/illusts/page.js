import { Box,Typography } from '@mui/material';
import Header from "../_components/Header"
import Footer from "../_components/Footer"
import Sheet from "../_components/Sheet"
import IllustList from '../_components/IllustList';
import { illustData } from '../_components/IllustData';

export default function Illusts() {
    return (
        <>
            <Header />
            <Sheet>
                <Box m={{ xs: "80px 0 24px", sm: "64px 0" }}>
                    <Typography variant="h5"sx={{mb:{xs: 3,sm: 4},fontSize:{xs: '16px',sm: '20px'}, textAlign:{xs:'justify',sm:'left'}}}>
                    iPad、Illustrator、Photoshopなどで必要があればイラストを描きます。Webサイトの目的に応じて描くことが多いです。
                    </Typography>
                    <IllustList data={illustData}/>
                </Box>
            </Sheet>
            <Footer />
        </>
    )
}