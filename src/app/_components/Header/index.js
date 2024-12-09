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
import Icon from "../Icon";

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
                <Box>
                    <ThemeProvider theme={badScriptFont}>
                      <Link href="/">
                        <Typography variant="h4" component="p" sx={{ color: 'text.primary' }}>Asami</Typography>
                      </Link>
                    </ThemeProvider>
                </Box>
                { icon ?
                <Box>
                    { matches ?
                    <Box width={24} height={24} sx={{display:'grid', placeItems:'center'}} onClick={handleDraw}>
                      <Icon />
                    </Box>
                    :
                    <CustomMenu data={selector}/>
                    }
                </Box>
                :
                <Box sx={{display: { xs: "block", sm: "none" },}}>
                  <Box width={24} height={24} sx={{display:'grid', placeItems:'center'}} onClick={handleDraw}>
                     <Icon />
                  </Box>
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