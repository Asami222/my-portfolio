import dedent from "dedent";

export const projectData = [
	{
		title: "Gray Mickey",
		period: "２ヶ月",
        image: "mickey",
		width: "48%",
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
	},
	{
		title: "Portfolio",
		period: "１ヶ月",
        image: "portfolio",
		text: dedent`Next.js15で制作した個人ポートフォリオです。UIを特に意識したデザインとなっています。
		ヘッドレスCMSを使用したブログやHubSpotを利用したお問い合わせページを取り入れています。`,
        category: [ "Next.js" ],
		category2: [ "next" ],
		site: "https://asami-portfolio.vercel.app",
		link: "portfolio",
	},
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
		card0: {
			title: "Disney characters",
			media: "/project/mickey/0.webp",
			width: 'min(39%, 448px)',
			text: dedent`このサイトではミッキーマウスやその他のディズニーキャラクターを使用していますが、1928年公開のディズニーの短編映画「蒸気船ウィリー」など、同作品のミッキーやミニーマウス、作品そのものの著作権が2023年末に切れ、パブリックドメインとなっています。
			ミッキーマウスのイメージと社会問題という対照性のあるものを同時に扱うことにより、当サイトの趣旨がより引き立つと考え使用しました。`,
		},
		card1: {
			title: "slide Animation | useEffect ",
			media: "/project/mickey/7.webp",
			width: 'min(50%, 568px)',
			text: dedent`トップページのスライドアニメーションは紙芝居をイメージして制作しました。親しみやすいアニメーションを最初に入れることでこのページの趣旨を表しています。useEffectを使用し、setIntervalでページのstate値を動かしています。動的にクラス名をつけそれぞれの中身の配置や大きさを変更しています。
			このサイトのメニューは2つあります。グローバルメニューと記事コンテンツのメニューです。記事コンテンツは雑誌風の見た目にし、記事感を演出しています。共通するところはコンポーネント化しています。クイズページは多くのJSとState値で管理しています。
			このサイトは3つのフェーズがあり、私が興味を持ち、特に作りたいと感じていたものをサイトにしたため、とてもオリジナル感のあるサイトとなったと感じています。`,
		},
		card2: {
			title: "Character Quiz App | useState",
			media: "/project/mickey/5.webp",
			text: "それぞれのクイズの項目ごとにキャラクターと100点満中の点数を割当て、その配列をStateで保持し、結果の画面で合計点と一番点数の高かったキャラクターを算出しています。",
			width: 'min(50%, 568px)',
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
			title: "Figma | Compornents",
			media: "/project/nature/1.webp",
			width: 'min(50%, 568px)',
			text: "Figmaでコンポーネントを作っておくことで、Next.jsでどこをコンポーネントするのかやPropsがわかりやすくなりました。ECサイトのような似たようなページ構造を多く持つサイトで、Figmaで事前にバリアントなどを使用し、設計しておくことで実装しやすさを感じました。",
		},
		card2: {
			title: "Form | React Hook Form",
			media: "/project/nature/2.webp",
			text: "React Hook Formを利用し、検証機能を取り入れています。送信ボタンをクリックすると確認メッセージが下に表示されます。今回は実際に送られることのないことをメッセージに入れています。",
			width: "min(50%, 267px)",
			small: "78",
		},
		card3: {
			title: "Cart | Recoil",
			media: "/project/nature/3.webp",
			text: "ReactのライブラリRecoilを利用し、サイト全体で商品の情報を持てるようにし、クッキーでリロードしてもカート情報が保てるようにしています。RecoilのSelectorで合計金額を算出しています。",
			width: "min(50%, 267px)",
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
			title: "Digital Illustration | iPad",
			width: 'min(38%, 440px)',
			media: "/project/christmas/1.webp",
			text: "百貨店のイベント用のサイトのため、見た目にインパクトとクリスマスらしさを充分に出したいと考え、手書き感のあるデジタルイラストをiPadで描きました。ページ全体に渡り、クリスマスの雰囲気作りを心掛けました。Photoshopで色味やサイズなどを調整してからwebサイト用へ出力しています。",
		},
		card2: {
			title: "Snow | tsParticles",
			media: "/project/christmas/2.webp",
			text: "JavaScriptで制作時は、ライブラリのparticle.jsを使用し、ページ全体に雪を降らせていましたが、Next.jsではバージョンの関係で表示されず、代わりにtsParticlesをインストールすることで解決できました。",
			width: "min(38%, 440px)",
			small: "100",
		},
		card3: {
			title: "Responsive | CSS",
			media: "/project/christmas/3.webp",
			text: "画像や文章量が多いので文字の大きさや画像のレスポンシブにとても苦労しました。CSSのclumpやmin関数などを使用し、サイズを色々工夫しながら調整して仕上げました。",
			width: "274px",
			small: "70",
		},
	},
	{
		id: "portfolio",
		title: "Portfolio",
		category: "Blog | Portfolio",
		text: dedent`Next.js15で制作した個人ポートフォリオです。UIを特に意識したデザインとなっています。
		ヘッドレスCMSを使用したブログやHubSpotを利用したお問い合わせページを取り入れています。`,
		image: {
			url: "/project/portfolio2.webp",
		},
		link: "https://asami-portfolio.vercel.app",
		card9: {
			title: "Form Button",
			media: "/project/portfolio/1.webp",
			width: 'min(50%, 432px)',
			text: dedent`エラー時と送信完了時のボタンデザインを変更することで状況をわかりやすくしました。状態を管理するstateで切り替えています。文字だけでなくアイコンも変更することでより直感的な見た目にしています。`,
		},
		card0: {
			title: "UI",
			media: "/project/portfolio/2.webp",
			width: 'min(50%, 336px)',
			text: dedent`UIを意識し、Mobileのメニューやページネーションなどボタン部分は大きめの文字サイズにしたり、感覚を広く取っています。`,
		},
		card1: {
			title: "MUI",
			width: 'min(50%, 330px)',
			media: "/project/portfolio/3.webp",
			text: "ポートフォリオ自体のデザインはUIを意識したシンプルなものにしました。そのためReactライブラリのMUIを使用しフォントサイズや色、要素の間隔など統一感があり見やすいデザインにしました。MUIのデザインに合うようにfontも少し丸みがあり親しみやすいものにしています。全体のカラーは黄色にしていますが、黄色は昔から好きな色で、太陽が好きなこともあり自分を表すのに合っていると感じています。アクセントカラーの水色も好きな色なのでMUIのprimaryColorを使用しています。",
		},
		card2: {
			title: "Form | MUI & Server Actions & HubSpot",
			media: "/project/portfolio/4.webp",
			text: "MUIとServer Actionsの機能を合わせ、エラー時の表示部分のUIなどはMUIの機能を利用するようにしています。",
			width: "min(50%, 162px)",
			small: "70",
		},
	},
]