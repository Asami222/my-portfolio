import { Container,Box,Typography } from '@mui/material';

export default function Footer() {
    return(
        <Container component="footer" sx={{position: 'sticky',top: '100vh' }}>
            <Box padding={{xs:'40px 24px 24px',sm:'64px 24px 24px'}}>
                <Typography variant="caption" component="p" align="center" sx={{ color: 'text.secondary' }}>© Asami Hara .All Rights Reserved 2024</Typography>
            </Box>
        </Container>
    )
}