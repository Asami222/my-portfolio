import { Box,Typography,Card,CardHeader,CardContent,Avatar} from '@mui/material';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Sheet from '../_components/Sheet';
import dedent from "dedent";

const data = [
	{
		title: 'Asami',
		text: dedent`コードでビジュアルを表現できることに興味を持ち、これまで独学で3年程Web制作を学んできました。
		現在はフレームワークのNext.jsを使用しWebサイトやアプリを制作することに楽しさを感じています。
		制作したWebサイトは全てイラスト、デザインから実装まで行っています。
		今後はUI/UXやサーバー、より深いJavaScriptのフレームワークやライブラリの知識と技術を学んでいき、付随するWEB関連の知識を増やしていく予定です。`,
		image: [
			{alt: 'Asami Hara', src: '/about/me.png',}
		]
	},
	{
		title: 'Skill',
		text: 'TypeScript、JavaScript、Next.js、React、HTML、CSS',
	},
	{
		title: 'Applications',
		text: 'Visual Studio Code、Figma、Photoshop、Illustrator、Procreate',
	},
	{
		title: 'Favorites',
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
									<Avatar alt="Asami Hara" src="/about/me1.png" sx={{ width: 40, height: 30,}} variant="rounded"/> : ''
								}
								titleTypographyProps={{variant:'h6',fontWeight: "fontWeightRegular" }}
								title={content.title}
								sx={{ paddingBottom: '0'}}
							/>
							<CardContent>
								<Typography variant='body1' sx={{ color: 'text.secondary',whiteSpace: "pre-wrap",textAlign:{xs:'left',sm:'left'} }}>
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