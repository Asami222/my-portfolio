import { Box, Button, ButtonGroup } from '@mui/material';

export default function PageChange({prevUrl='', nextUrl='',}) {
    return (
        <ButtonGroup variant="text" color="inherit" size="large" aria-label="Basic button group" sx={{fontWeight: '400'}}>
            { prevUrl && <Button href={prevUrl}>前へ</Button>}
            <Button href="/blog">一覧へ</Button>
            { nextUrl && <Button href={nextUrl}>次へ</Button>}
        </ButtonGroup>
    )
}