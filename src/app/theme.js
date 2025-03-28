'use client';
import { createTheme } from '@mui/material/styles';
/*
export const robotoFont = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)'
  },
});
*/

const tabHeight = '42px'

export const theme = createTheme({
    typography: {
      fontFamily: `"Roboto", "M PLUS 1p", serif`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      h4: {
        fontSize: '34px',
        textAlign: "left",
        '@media (max-width:600px)': {
            fontSize: '24px',
          },
      },
      h6: {
        '@media (max-width:600px)': {
            fontSize: '18px'
          },
      },
      button: { // Here is where you can customise the button
        fontWeight: 400,
      },
    },
    components: {
      MuiCardContent: {
        styleOverrides: {
          root: {
            ":last-child": {
              paddingBottom: '16px',
            }
          }
        }
      },
    },
});

export const badScriptFont = createTheme({
  typography: {
	fontFamily: "Bad Script",
  fontWeightRegular: 400,
  h4: {
  fontSize: '34px',
    '@media (max-width:600px)': {
        fontSize: '20px',
      },
    }
},});



