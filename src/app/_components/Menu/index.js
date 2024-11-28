"use client";

import { useState } from 'react';
import { useRouter,usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Box,Drawer,Typography,Button,Tabs,Tab } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {badScriptFont} from '@/app/theme'

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const menu = [
	{title: 'HOME', href: "/", label: 'home'},
	{title: 'PROJECTS', href: "/projects", label: 'projects'},
	{title: 'ILLUSTS', href: "/illusts", label: 'illusts'},
	{title: 'BLOG', href: "/blog", label: 'blog'},
	{title: 'ABOUT', href: "/about", label: 'about'},
	{title: 'CONTACT', href: "/contact", label: 'contact'},
]

const LinkTab = (props) => {
  
  const router = useRouter();
  const handleTabChange = (e) => {
    e.preventDefault();
    router.push(e.target.href);
  };

  return (
    <StyledTab
      component="a"
      disableFocusRipple
      disableRipple
      onClick={(e) => handleTabChange(e)}
      {...props}
    />
  );
};
export default function Menu({show, onDraw}) {

  const pathname = usePathname();
  
  const pages = ["/", "/projects","/illusts","/blog","/about","/contact"];
  const [value, setValue] = useState(pages.indexOf(pathname));

  const handleChange = (e, v) => {
    setValue(v);
  };

  const handleDraw = () => onDraw();

    return (
      <ThemeProvider theme={badScriptFont}>
              <Tabs
                value={value}
                onChange={(e, v) => handleChange(e, v)}
                role="navigation"
                sx={{
                  ".Mui-selected": {
                  color: 'primary.main',
                  },
                  display: { xs: "none", sm: "block" },
                  minHeight: "48px",
                  height: "48px",
                }}
                selectionFollowsFocus
                aria-label="basic tabs example"
              >
								{menu.map((obj,i) => (
									<LinkTab key={i} label={obj.title} href={pages[i]} aria-label={obj.label} sx={{color:value === i ? 'primary.main':'black', padding: '9px 12px', fontSize: '16px'}}/>
								))}
            </Tabs>
						<Drawer
             anchor='right'
              open={show}
              variant="temporary"
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "#FFE59D"
                }
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }} 
              closeAfterTransition={false}
              hideBackdrop={true}
              >
							<Box sx={{height: '100vh'}} onClick={handleDraw}>
						<Tabs
								orientation="vertical"
                value={value}
                onChange={(e, v) => handleChange(e, v)}
                role="navigation"
                sx={{
                  ".Mui-selected": {
                  color: 'black',
                  },
                  '& .MuiTabs-indicator': { 
                    display: 'none' 
                  },
                  p: 1,
                  mt: 4,
                  '.MuiTabs-indicator': {
                    left: 0,
                  },
                }}
                selectionFollowsFocus
                variant="fullWidth"
                aria-label="full width tabs example"
              >
								{menu.map((obj,i) => (
									<LinkTab 
                  key={i} 
                  label={obj.title} 
                  href={pages[i]}
                  aria-label={obj.label} 
                  sx={{
                    color:value === i ? 'black':'black',
                    backgroundColor:value === i ? 'rgba(210, 25, 28, 0.08)':'',
                    width: '168px',
                    alignItems: 'start',
                    mb: 1,
                    fontSize: '16px'
                  }}/>
								))}
            </Tabs>
						</Box>
						</Drawer>
          </ThemeProvider>
    )
}