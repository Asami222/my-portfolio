"use client"
import { Box,Typography,Tooltip } from '@mui/material';
import Header from "../_components/Header"
import Footer from "../_components/Footer"
import Sheet from "../_components/Sheet"
import ContactForm from '../_components/ContactForm';
import Image from 'next/image';
import Animation from '../_components/Lottie';

export default function Contact() {
    return (
        <Box sx={{minHeight: '100vh',backgroundColor:'#fff'}}>
        <Header />
        <Sheet>
            <Box p={{ xs: "96px 0 0", sm: "64px 0" }} sx={{position:{xs:'inherit',sm:'relative'}}}>
                <Box sx={{textAlign:{xs:'center',sm:'left'}}}>
                    <Typography variant='h5' component="h1" sx={{fontSize:{xs: '20px', sm: '24px'},mb:{xs:3,sm:4}}}>お問い合わせ</Typography>
                    <ContactForm />
                </Box>
                <Box sx={{position:{xs:'inherit',sm:'absolute'}, top: '120px', right: 0, m:{xs:'32px auto 0',sm:0}, width: '300px', height: 'auto'}}>
                    <Tooltip placement="left" title="please send me a letter" arrow>
                        <Animation />
                    </Tooltip>
                </Box>  
            </Box>
        </Sheet>
        <Footer />   
        </Box>
    )
}