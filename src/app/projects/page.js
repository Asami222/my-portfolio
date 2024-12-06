import { Box } from '@mui/material';
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
                <Box m={{ xs: "72px 0 24px", sm: "64px 0" }}>
                    <Box sx={{textAlign: 'right', display: { xs: "block", sm: "none" },}}>
                        <CustomMenu data={data.project}/>
                    </Box>
                    <ProjectList data={projectData}/>
                </Box>
            </Sheet>
            <Footer />
        </>
    )
}