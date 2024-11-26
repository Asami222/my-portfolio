import { Box, Chip } from '@mui/material';

export default function Category({category}) {
    return (
        <Box sx={{ display: "flex", gap: 1, mt: 2 }} >
            { category.map((chip,i) => (
                <Chip label={chip.label} size="medium" key={i}/>
            ))}
        </Box>
    )
}