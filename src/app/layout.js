
import { Roboto, M_PLUS_1p } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../app/theme';
import "./globals.css";

const roboto = Roboto({
    weight: ['300','400', '500'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

const m_plus_1p = M_PLUS_1p({
    weight: ['400', '500'],
    subsets: ['latin'],
    variable: '--font-m-plus-1p',
    display: 'swap',
})
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${m_plus_1p.variable} ${roboto.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
