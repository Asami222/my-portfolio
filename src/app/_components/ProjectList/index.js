import Link from "next/link";
import { Button,Grid2,Card,CardActionArea,CardContent,CardMedia,Typography,CardActions,Divider, Box } from '@mui/material';
import { CategoryProject } from '../Category';

export default function ProjectList({data}) {
	return (
		<Grid2 container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			{ data.map((item,i) => (
			<Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={i}>
				<Card sx={{ maxWidth: 368, margin: '0 auto', bgcolor:'rgba(0, 0, 0, 0.03)' }} >
					<CardActionArea sx={{position: "relative", overflow: "hidden"}}>
						<Link href={`/projects/${item.link}`} passHref>
							{ item.new && 
								<Box sx={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderTop: `64px solid #1976d2 `, borderLeft: "64px solid transparent", zIndex: 2 }}>
									{ item.new &&
									 <Typography 
										gutterBottom 
										sx={{ 
											 	position: "absolute",
												top: "-50px",
												right: "5px",
												transform: "rotate(45deg)",
												color: "#F1F9FF",
												fontSize: "12px",
												fontWeight: "bold",
												whiteSpace: "nowrap",
											}}
										>
											New!
									 </Typography>}
								</Box>
							}
							{ item.down && 
								<Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', position: "absolute", top: 0, left: 0, width: "100%", height: "200px", bgcolor:'rgba(0, 0, 0, 0.3)'}}>
									{item.down && <Typography gutterBottom variant="h6" sx={{ color: '#fff', textAlign: "center",mb: '0px' }}>停止中!</Typography>}
								</Box>
							}
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
								<Typography variant="body2" sx={{ color: 'text.secondary',mb: 2, textAlign: 'justify', wordBreak: 'break-all' }}>{item.text}</Typography>
								<CategoryProject category={item.category} size="small"/>
							</CardContent>
						</Link>
					</CardActionArea>
					<CardActions sx={{ display: "flex", gap: 1 }}>
					{ !item.down &&
					<Link href={item.site} passHref target="_blank">
						<Button size="small" color="primary">
							Go To Site
						</Button>
					</Link>
					}
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