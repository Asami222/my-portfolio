"use client";

import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { Container,Box,Typography,Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {badScriptFont} from '@/app/theme'
import CustomMenu from "../CustomMenu";
//import { LinkTab } from '../LinkTab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "../Menu";
import data from "../CustomizedData";

export default function Header({icon=false, p=false}) {

  const matches = useMediaQuery("(max-width:600px)");

  const [show, setShow] = useState(false);
  const handleDraw = () => setShow(!show);
  const selector = p ? data.project : data.blog;

    return (
      <>
      <div></div>
      <Box component="header" sx={{ bgcolor: "#FFE59D", position: { xs: "fixed", sm: "inherit" }, width: '100%', top: 0, zIndex: 100 }}>
        <Container>
            <Box>
            <Box padding="16px 0" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1}}>
                    <ThemeProvider theme={badScriptFont}>
                        <Typography variant="h4" component="p" sx={{ color: 'text.primary' }}>Asami Hara</Typography>
                    </ThemeProvider>
                </Box>
                { icon ?
                <Box>
                    { matches ?
                    <MenuIcon onClick={handleDraw}/>
                    :
                    <CustomMenu data={selector}/>
                    }
                </Box>
                :
                <Box sx={{display: { xs: "block", sm: "none" },}}>
                     <MenuIcon onClick={handleDraw} />
                </Box>
                }
            </Box>
            <Menu show={show} onDraw={handleDraw}/>
            </Box>
        </Container>
      </Box>
      </>
    )
}