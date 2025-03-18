"use client";

import { useState } from 'react';
import { useRouter,usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Box,Drawer,Typography,Button,Tabs,Tab } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {badScriptFont} from '@/app/theme'

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightMedium,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0)',
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const menu = [
	{title: 'Home', href: "/", label: 'home'},
	{title: 'Projects', href: "/projects", label: 'projects'},
	{title: 'Illusts', href: "/illusts", label: 'illusts'},
	{title: 'Blog', href: "/blog", label: 'blog'},
	{title: 'About', href: "/about", label: 'about'},
	{title: 'Contact', href: "/contact", label: 'contact'},
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
  const blogPath = '/blog';
  const projectPath = '/projects';
  const contactPath = '/contact';
  const getCurrentTabIndex = () => {
    if(pathname.startsWith(blogPath)) {
      return pages.indexOf(blogPath);
    } else if(pathname.startsWith(projectPath)) {
      return pages.indexOf(projectPath);
    } else if(pathname.startsWith(contactPath)) {
      return pages.indexOf(contactPath);
    }
    return pages.indexOf(pathname);
  }
  const [value, setValue] = useState(getCurrentTabIndex());

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
									<LinkTab key={i} label={obj.title} href={pages[i]} aria-label={obj.label} sx={{color:value === i ? 'primary.main':'black', padding: '9px 12px', fontSize: '16px', textTransform: 'uppercase'}}/>
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