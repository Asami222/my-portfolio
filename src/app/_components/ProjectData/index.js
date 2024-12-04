import dedent from "dedent";

export const projectData = [
	{
		title: "Gray Mickey",
		period: "２ヶ月",
        image: "mickey",
		text: dedent`世の中の理不尽なこと、問題、課題などを取り上げ情報共有を目的としたサイトです。少しでもより良い世の中になってほしいという思いで制作しました。簡単な性格診断ができるページもあります。`,
        category: [ "Next.js","App"],
		category2: [ "next","app"],
		site: "https://gray-mickey.vercel.app",
		link: "graymickey",
	},
    {
		title: "NATURE EXCELA",
		period: "２ヶ月",
        image: "natureExcela",
		text: dedent`自然派化粧品の通販サイトを制作しました。
                    Dynamic Routesで動的に商品ページを作成しています。カートページを作成し、商品ごとの計、全ての合計金額も算出しています。`,
        category: [ "Next.js","EC site"],
		category2: [ "next","ec"],
		site: "https://nature-excela.vercel.app",
		link: "nature",
	},
    {
		title: "Christmas Event",
		period: "１ヶ月",
        image: "christmas",
		text: dedent`百貨店の催事の告知シングルページを制作しました。クリスマスのファンタジー感を演出するためiPadで描いたイラストを多く取り入れました。ライブラリーのtsParticleを使用し、降る雪を演出しています。`,
        category: [ "Next.js","Single page"],
		category2: [ "next","single"],
		site: "https://central-christmas.vercel.app",
		link: "christmas",
	}
]

export const projectDetailData = [
	{
		id: "graymickey",
		title: "Gray Mickey",
		category: "original site | App",
		text: dedent`世の中の理不尽なこと、問題、課題などを取り上げ情報共有を目的としたサイトです。少しでもより良い世の中になってほしいという思いで制作しました。簡単な性格診断ができるページもあります。`,
		image: {
			url: "/project/mickey2.webp",
		},
		link: 'https://gray-mickey.vercel.app',
		card1: {
			title: "slide Animation",
			column: '1fr 1fr',
			media:[
				{
					image:"/project/mickey/1.webp"
				},
				{
					image:"/project/mickey/2.webp"
				},
				{
					image:"/project/mickey/3.webp"
				},
				{
					image:"/project/mickey/4.webp"
				},
			],
			text: "Figmaでコンポーネントを作っておくことで、Next.jsでコンポーネントを作りやすくしました。",
		},
		card2: {
			title: "Form | React Hook Form",
			media: "/project/mickey/5.webp",
			text: "React Hook Formを利用し、検証機能を取り入れています。送信ボタンをクリックすると確認メッセージが下に表示されます。今回は実際に送られることのないことをメッセージに入れています。",
			width: '343',
			small: "100",
		},
	},
	{
		id: "nature",
		title: "NATURE EXCELA",
		category: "Corporate site | EC site",
		text: dedent`自然派化粧品の通販サイトを制作しました。
				Dynamic Routesで動的に商品ページを作成しています。カートページを作成し、商品ごとの計、全ての合計金額も算出しています。`,
		image: {
			url: "/project/nature.webp",
		},
		link: "https://nature-excela.vercel.app",
		card1: {
			title: "Figma | compornents",
			column: '1fr',
			media:[
				{
					image:"/project/nature/1.webp"
				},
			],
			text: "Figmaでコンポーネントを作っておくことで、Next.jsでコンポーネントを作りやすくしました。",
		},
		card2: {
			title: "Form | React Hook Form",
			media: "/project/nature/2.webp",
			text: "React Hook Formを利用し、検証機能を取り入れています。送信ボタンをクリックすると確認メッセージが下に表示されます。今回は実際に送られることのないことをメッセージに入れています。",
			width: "267",
			small: "78",
		},
		card3: {
			title: "Cart | Recoil",
			media: "/project/nature/3.webp",
			text: "ReactのライブラリRecoilを利用し、サイト全体で商品の情報を持てるようにし、クッキーでリロードしてもカート情報が保てるようにしています。RecoilのSelectorで合計金額を算出しています。",
			width: "267",
			small: "78",
		},
	},
	{
		id: "christmas",
		title: "Christmas Event",
		category: "single site | event",
		text: dedent`世の百貨店の催事の告知シングルページを制作しました。クリスマスのファンタジー感を演出するためiPadで描いたイラストを多く取り入れました。ライブラリーのtsParticleを使用し、降る雪を演出しています。`,
		image: {
			url: "/project/christmas2.webp",
		},
		link: "https://central-christmas.vercel.app",
		card1: {
			title: "slide Animation",
			media:[
				{
					image:"/project/mickey/1.webp"
				},
			],
			text: "Figmaでコンポーネントを作っておくことで、Next.jsでコンポーネントを作りやすくしました。",
		},
		card2: {
			title: "Form | React Hook Form",
			media: "/project/mickey/5.webp",
			text: "React Hook Formを利用し、検証機能を取り入れています。送信ボタンをクリックすると確認メッセージが下に表示されます。今回は実際に送られることのないことをメッセージに入れています。",
		},
	},
]