import { Box,Typography,Card,CardHeader,CardContent,Avatar} from '@mui/material';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Sheet from '../_components/Sheet';
import dedent from "dedent";

const data = [
	{
		title: 'ASAMI',
		text: dedent`独学で3年程WEB制作を学んできました。現在はフレームワークのNext.jsを利用し、WEBサイト制作に取り組んでいます。
		好きな言語はJavaScriptです。TypeScriptを只今勉強中です。
		今後も学びを続けWEB関連の技術や知識を増やしていきたいです。`,
		image: [
			{alt: 'Asami Hara', src: '/about/me.png',}
		]
	},
	{
		title: 'Apps used',
		text: 'Visual Studio Code,  Figma,  Photoshop,  Illustrator,  Procreate',
	},
	{
		title: 'My favorite',
		text: '映画鑑賞、散歩、美術館、冒険、デザイン、太陽、星、自然、動物',
	},
]

export default function About() {
    return (
		<>
		<Header />
		<Sheet>
			<Box padding={{xs: '100px 0 0', sm: '64px 0 0',}}>
						<Card sx={{ bgcolor: "#FFE59D" }}>
						{ data.map((content,i) => (
							<Box key={i} component="div">
							<CardHeader	
								avatar={ content.image ?
									<Avatar alt="Asami Hara" src="/about/me.png" sx={{ width: 40, height: 40 }} variant="rounded"/> : ''
								}
								titleTypographyProps={{variant:'h6',fontWeight: "fontWeightRegular" }}
								title={content.title}
								sx={{ paddingBottom: '0'}}
							/>
							<CardContent>
								<Typography variant='body1' sx={{ color: 'text.secondary',objectFit: "cover" }}>
								{content.text}
								</Typography>
							</CardContent>
							</Box>
						))}
						</Card>
			</Box>
		</Sheet>
		<Footer />
		</>
    )
}