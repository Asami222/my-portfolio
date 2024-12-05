import { Box } from '@mui/material';
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
                    <IllustList data={illustData}/>
                </Box>
            </Sheet>
            <Footer />
        </>
    )
}