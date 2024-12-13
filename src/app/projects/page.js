import { Box,Typography } from '@mui/material';
import Header from "../_components/Header"
import Footer from "../_components/Footer"
import Sheet from "../_components/Sheet"
import CustomMenu from '../_components/CustomMenu';
import data from '../_components/CustomizedData';
import { projectData } from '../_components/ProjectData';
import ProjectList from '../_components/ProjectList';


export default function Projects() {
    
    return (
        <>
            <Header icon p/>
            <Sheet>
                <Box m={{ xs: "72px 0 24px", sm: "56px 0" }}>
                    <Box sx={{textAlign: 'right', display: { xs: "block", sm: "none" },}}>
                        <CustomMenu data={data.project}/>
                    </Box>
                    <Typography variant="body1" sx={{mb:{xs: 1,sm: 2}, mt:{xs: 1,sm: 0}, fontSize:{xs: '14px',sm: '16px'}, textAlign:{xs:'justify',sm:'left'}}}>
                        ※全て架空サイトとなっております
                    </Typography>
                    <ProjectList data={projectData}/>
                </Box>
            </Sheet>
            <Footer />
        </>
    )
}