import { Box } from '@mui/material';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import Sheet from '@/app/_components/Sheet';
import projectData from '@/app/_components/ProjectData';
import ProjectList from '@/app/_components/ProjectList';
import { CategoryLabel } from '@/app/_components/Category';


export default function Projects() {
    return (
        <>
            <Header icon/>
            <Sheet>
                <Box m={{ xs: "84px 0 24px", sm: "64px 0" }}>
                    <CategoryLabel category={category} size="large" />
                    <ProjectList data={projectData}/>
                </Box>
            </Sheet>
            <Footer />
        </>
    )
}