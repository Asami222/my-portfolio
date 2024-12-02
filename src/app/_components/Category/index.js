import { Box, Chip } from '@mui/material';

export function CategoryLink({category,size}) {
    return (
        <Box sx={{ display: "flex", gap: 1 }} >
            { category.map((chip,i) => (
                <Chip key={i} label={chip.name} component="a" href={`/blog/category/${chip.id}`} size={size} clickable/>
            ))}
        </Box>
    )
}

export function CategoryDefault({category,size}) {
     return (
         <Box sx={{ display: "flex", gap: 1 }} >
             { category.map((chip,i) => (
                <Chip key={i} label={chip.name} size={size} />
             ))}
         </Box>
     )
 }

 export function CategoryProject({category,size}) {
    return (
        <Box sx={{ display: "flex", gap: 1 }} >
            { category.map((chip,i) => (
               <Chip key={i} label={chip} size={size} />
            ))}
        </Box>
    )
}

 export function CategoryLabel({category,size}) {
    return (
        <Box pl={{ xs: "0", sm: "8px" }}>
            <Chip label={`${category.name} の一覧`} size={size} variant="outlined"/>
        </Box>
    )
}