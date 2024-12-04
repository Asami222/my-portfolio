"use client"

import { useParams, usePathname } from "next/navigation";
import { Box } from '@mui/material';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import Sheet from '@/app/_components/Sheet';
import { projectData } from '@/app/_components/ProjectData';
import ProjectList from '@/app/_components/ProjectList';
import { CategoryLabel } from '@/app/_components/Category';
import data from "@/app/_components/CustomizedData";


export default function Projects(props) {
    const params = useParams()
    const {id} = params
    const path = usePathname()
    const name = data.project;
    const category = name.filter(n => n.href == path)
    const project = projectData.filter((project) => (
        project.category2.includes(id)
    ))

    return (
        <>
            <Header/>
            <Sheet>
                <Box m={{ xs: "84px 0 24px", sm: "64px 0" }}>
                    <CategoryLabel category={category[0]} size="large" />
                    <ProjectList data={project}/>
                </Box>
            </Sheet>
            <Footer />
        </>
    )
}