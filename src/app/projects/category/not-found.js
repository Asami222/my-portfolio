import Link from 'next/link'
import { Box,Button,Card,CardContent,CardActions,Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
  return (
		<Box sx={{width: '100vw', height: '100vh', display: 'grid', placeItems: 'center', bgcolor: "#FFFFFF"}}>
    <Card sx={{ maxWidth: 345, margin: "0 auto", }}>
      <CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Not Found
        </Typography>
				<Typography variant="body2">
					Could not find requested resource
        </Typography>
      </CardContent>
			<CardActions sx={{justifyContent: 'center'}}>
        <Button href="/" variant="outlined" startIcon={<HomeIcon />}>Return Home</Button>
      </CardActions>
    </Card>
		</Box>
  )
}