import Link from 'next/link';
import { Box,Typography } from '@mui/material';
import Image from 'next/image';
import { CategoryLink } from '../Category';
import Date from '../Date';
import styles from "./index.module.css";

export default async function Article({data}) {

    const content = data.content.replace(
    /\[icon:(.*?)\]/g,
    '<span class="material-symbols-outlined">$1</span>'
  );

    return (
        <Box 
        component="article" 
        margin="0 auto"  
        maxWidth="964px" 
        sx={{ 
            display: "flex",
            flexDirection: "column", 
            gap:{xs:"16px",sm:'24px'}, 
            bgcolor: "#ffffff", 
            borderRadius: '8px',
            textAlign: 'left',
            paddingTop: {xs: 4, sm: 5, md: 6},
            paddingBottom: {xs: 4, sm: 5, md: 6},
            paddingLeft: {xs: 3, sm: 4, md: 5, lg: 7},
            paddingRight: {xs: 3, sm: 4, md: 5, lg: 7},
            marginBottom: {xs: 5, sm: 8}
            }}>
            <Box>
                <Typography variant="h4" component="h1" sx={{ mb: 1, typography: { xs:'h6', sm:'h5', md:'h4' }}}>{data.title}</Typography>
                <Box sx={{ display: "flex", gap:'16px', alignItems: "center" }}>
                    <Date date={data.publishedAt ?? data.createdAt} />
                        <CategoryLink category={data.category} size="small"/>
                </Box>
            </Box>
            <Box>
            {data.thumbnail && 
                <Image 
                    src={data.thumbnail.url}
                    alt=''
                    className={styles.thumbnail}
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                    sizes="(min-width: 852px) 852px, 83vw"
                    style={{width: '100%',height: 'auto'}}
                    priority
                />
            }
            </Box>
            <Box  
            className={styles.content}
            dangerouslySetInnerHTML={{__html: content,}} //__html: data.contentから、Material Symbolsを使用するために__html: content(変数)へ変更
            sx={{fontSize:{xs:'14px', sm:'16px'}, textAlign: 'justify'}}
            />
        </Box>
    )
}