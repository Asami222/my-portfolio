"use client";

import { useState } from 'react';
import { Box,Drawer,Typography,Button,Tabs,Tab } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {badScriptFont} from '@/app/theme'

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

const menu = [
	{title: 'HOME', href: '/'},
	{title: 'PROJECTS', href: '/Projects'},
	{title: 'ILLUSTS', href: '/Illusts'},
	{title: 'BLOG', href: '/Blog'},
	{title: 'ABOUT', href: '/About'},
	{title: 'CONTACT', href: '/Contact'},
]

export default function Menu({show, onDraw}) {

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  const handleDraw = () => onDraw();

    return (
      <ThemeProvider theme={badScriptFont}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
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
              >
								{menu.map((obj,i) => (
									<LinkTab key={i} label={(<Typography variant="body1">{obj.title}</Typography>)} href={obj.href} sx={{color:value === i ? 'primary.main':'black', padding: '9px 12px'}}/>
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
                onChange={handleChange}
                aria-label="nav tabs example"
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
              >
								{menu.map((obj,i) => (
									<LinkTab 
                  key={i} 
                  label={(<Typography variant="body1">{obj.title}</Typography>)} 
                  href={obj.href} 
                  sx={{
                    color:value === i ? 'black':'black',
                    backgroundColor:value === i ? 'rgba(210, 25, 28, 0.08)':'',
                    width: '168px',
                    alignItems: 'start',
                    mb: 1
                  }}/>
								))}
            </Tabs>
						</Box>
						</Drawer>
          </ThemeProvider>
    )
}