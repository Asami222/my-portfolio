import { formatDate } from '@/app/_libs/utils';
import { Typography } from '@mui/material';

export default function Date({date}) {
    return (
        <Typography gutterBottom variant="subtitle2" component="div" sx={{ color: 'primary.main', mb: 0 }}>
            {formatDate(date)}
        </Typography>
    )
}