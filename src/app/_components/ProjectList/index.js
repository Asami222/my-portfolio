import Link from "next/link";
import { Button,Grid2,Card,CardActionArea,CardContent,CardMedia,Typography,CardActions,Divider } from '@mui/material';
import { CategoryProject } from '../Category';

export default function ProjectList({data}) {
	return (
		<Grid2 container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 1}}>
			{ data.map((item,i) => (
			<Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={i}>
				<Card sx={{ maxWidth: 368, margin: '0 auto', bgcolor:'rgba(0, 0, 0, 0.03)' }} >
					<CardActionArea>
						<Link href={`/projects/${item.link}`} passHref>
							<CardMedia
								component="img"
								height="200"
								image={`/project/${item.image}.webp`}
								alt={`${item.title} website`}
							/>
							<Divider />
							<CardContent sx={{pb: 1}}>
								<Typography gutterBottom variant="subtitle2" fontWeight="300">{`制作期間 ${item.period}`}</Typography>
								{item.uppercase ?
									<Typography gutterBottom variant="h5" component="h3" textAlign={{ xs: 'left' }} style={{textTransform: "uppercase" }}>{item.title}</Typography>
									:
									<Typography gutterBottom variant="h5" component="h3" textAlign={{ xs: 'left' }}>{item.title}</Typography>
								}
								<Typography variant="body2" sx={{ color: 'text.secondary',mb: 2 }}>{item.text}</Typography>
								<CategoryProject category={item.category} size="small"/>
							</CardContent>
						</Link>
					</CardActionArea>
					<CardActions sx={{ display: "flex", gap: 1 }}>
					<Link href={item.site} passHref target="_blank">
						<Button size="small" color="primary">
							Go To Site
						</Button>
					</Link>
					<Link href={`/projects/${item.link}`} passHref>
						<Button size="small" color="primary">
							Detail
						</Button>
					</Link>
					</CardActions>
				</Card>
			</Grid2>
			))}
		</Grid2>
	)
}