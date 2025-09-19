import dedent from "dedent";

export const projectData = [
	{
		title: "Nature Excela App",
		uppercase: 'true',
		period: "３週間",
        image: "nature-img",
		text: dedent`以前制作したNATURE EXCELAに会員ログイン/データベース連携、EC機能、ユーザーページを追加し、ECサイトとしての機能を高めました。
		「ゲストでログイン」ボタンで簡単にお試しできます。`,
        category: [ "Next.js","EC site"],
		category2: [ "next","ec"],
		site: "https://nature-excela-app.vercel.app",
		link: "nature-app",
	},
	{
		title: "Egg or Chicken",
		period: "２ヶ月半",
        image: "eggor2-img",
		text: dedent`OpenWeatherのAPIと天気予測機能を利用し、様々なアイテムをGETして日々の状態推移を楽しむアプリです。App Routerを使用し、グローバルステート管理にJotai、認証やデータベース管理にSupabaseを使用して制作しています。`,
        category: [ "Next.js","TypeScript","App"],
		category2: [ "next","app"],
		site: "https://egg-or-chicken.vercel.app",
		link: "eggor",
	},
	{
		title: "Dreamer",
		period: "３ヶ月",
        image: "dreamer2-img",
		text: dedent`オリジナルTodoアプリをPages Routerで制作しました。このアプリはご褒美機能を追加し、夢や目標に向かって頑張る人へ向けたアプリとなっています。バックエンドにjson-serverとexpressを使って構築したアプリケーションをHerokuにデプロイしています。`,
        category: [ "Next.js","TypeScript","App"],
		category2: [ "next","app"],
		site: "https://dreamer-six.vercel.app",
		link: "dreamer",
	},
	{
		title: "Gray Mickey",
		period: "２ヶ月",
        image: "mickey-img",
		width: "48%",
		text: dedent`世の中の理不尽なこと、問題、課題などを取り上げ情報共有を目的としたサイトです。少しでもより良い世の中になってほしいという思いを込めました。簡単な性格診断ができるページもあります。`,
        category: [ "Next.js"],
		category2: [ "next" ],
		site: "https://gray-mickey.vercel.app",
		link: "graymickey",
	},
    {
		title: "Nature Excela",
		uppercase: 'true',
		period: "２ヶ月",
        image: "nature-img",
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
        image: "christmas-img",
		text: dedent`百貨店の催事告知シングルページを制作しました。クリスマスのファンタジー感を演出するためiPadで描いたイラストを多く取り入れました。ライブラリーのtsParticleを使用し、降る雪を演出しています。`,
        category: [ "Next.js","Single Page"],
		category2: [ "next","single"],
		site: "https://central-christmas.vercel.app",
		link: "christmas",
	},
	{
		title: "Portfolio",
		period: "１ヶ月",
        image: "portfolio-img",
		text: dedent`React UIフレームワークのMUIで制作した個人ポートフォリオです。UIを意識してデザインしました。
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
		category: "original site",
		text: dedent`世の中の理不尽なこと、問題、課題などを取り上げ情報共有を目的としたサイトです。簡単な性格診断ができるゲーム的なページもあります。`,
		image: {
			url: "/project/mickey-mini.webp",
		},
		link: 'https://gray-mickey.vercel.app',
		card1: [
			{
				title: "Disney characters",
				media: "/project/mickey/0.webp",
				width: 'min(39%, 448px)',
				text: dedent`このサイトではミッキーマウスやその他のディズニーキャラクターを使用しています。1928年公開のディズニーの短編映画「蒸気船ウィリー」など、同作品のミッキーやミニーマウス、作品そのものの著作権が2023年末に切れ、パブリックドメインとなっています。
				ミッキーマウスのイメージと社会問題という対照性のあるものを一緒に扱うことにより、サイトの趣旨がより引き立つと考え使用しました。`,
			},
			{
				title: "slide Animation | useEffect ",
				media: "/project/mickey/7.webp",
				width: 'min(50%, 568px)',
				text: dedent`トップページのスライドアニメーションは紙芝居をイメージして制作しました。親しみやすいアニメーションを最初に入れることでこのページの趣旨を表しています。useEffectを使用し、setIntervalでページのstate値を動かしています。動的にクラス名をつけそれぞれの中身の配置や大きさを変更しています。
				このサイトのメニューは2つあります。グローバルメニューと記事コンテンツのメニューです。記事コンテンツは雑誌風の見た目にし、記事感を演出しています。共通するところはコンポーネント化しています。クイズページは多くのJSとState値で管理しています。
				このサイトは3つのフェーズがあり、私が興味を持ち、特に作りたいと感じていたものをサイトにしたため、とてもオリジナル感のあるサイトとなったと感じています。`,
			},
		],
		card2: [
			{
				title: "Character Quiz | useState",
				media: "/project/mickey/5.webp",
				text: "それぞれのクイズの項目ごとにキャラクターと100点満中の点数を割当て、その配列をStateで保持し、結果の画面で合計点と一番点数の高かったキャラクターを算出しています。",
				width: 'min(50%, 568px)',
				small: "100",
			},
		]
	},
	{
		id: "nature",
		title: "Nature Excela",
		uppercase: 'true',
		category: "EC site",
		text: dedent`自然派化粧品の通販サイトを制作しました。
				Dynamic Routesで動的に商品ページを作成しています。カートページを作成し、商品ごとの計、全ての合計金額も算出しています。`,
		image: {
			url: "/project/nature-mini.webp",
		},
		link: "https://nature-excela.vercel.app",
		card1: [
			{
				title: "Figma | Components",
				media: "/project/nature/1.webp",
				width: 'min(50%, 568px)',
				text: "Figmaでコンポーネントを作っておくことで、Next.jsでどこをコンポーネントするのかやPropsがわかりやすくなりました。ECサイトのような似たようなページ構造を多く持つサイトで、Figmaで事前にバリアントなどを使用し、設計しておくことで実装しやすさを感じました。",
			},
		],
		card2: [
			{
				title: "Form | React Hook Form",
				media: "/project/nature/2.webp",
				text: "React Hook Formを使用し、検証機能を取り入れています。送信ボタンをクリックすると確認メッセージが下に表示されます。今回は実際に送られることのないことをメッセージに入れています。",
				width: "min(50%, 267px)",
				small: "78",
			},
			{
				title: "Cart | Recoil",
				media: "/project/nature/3.webp",
				text: "ReactのライブラリRecoilを使用し、サイト全体で商品の情報を持てるようにし、クッキーでリロードしてもカート情報が保てるようにしています。RecoilのSelectorで合計金額を算出しています。",
				width: "min(50%, 267px)",
				small: "78",
			}
		],
	},
	{
		id: "christmas",
		title: "Christmas Event",
		category: "single site | event",
		text: dedent`百貨店の催事の告知シングルページを制作しました。クリスマスのファンタジー感を演出するためiPadで描いたイラストを多く取り入れました。ライブラリーのtsParticleを使用し、降る雪を演出しています。`,
		image: {
			url: "/project/christmas-mini.webp",
		},
		link: "https://central-christmas.vercel.app",
		card1: [
			{
				title: "Digital Illustration | iPad",
				width: 'min(38%, 440px)',
				media: "/project/christmas/1.webp",
				text: "百貨店のイベント用のサイトのため、見た目にインパクトとクリスマスらしさを充分に出したいと考え、手書き感のあるデジタルイラストをiPadで描きました。ページ全体に渡り、クリスマスの雰囲気作りを心掛けました。Photoshopで色味やサイズなどを調整してからwebサイト用へ出力しています。",
			}
		],
		card2: [
			{
				title: "Snow | tsParticles",
				media: "/project/christmas/2.webp",
				text: "JavaScriptで制作時は、ライブラリのparticle.jsを使用し、ページ全体に雪を降らせていましたが、Next.jsではバージョンの関係で表示されず、代わりにtsParticlesをインストールすることで解決できました。",
				width: "min(38%, 440px)",
				small: "100",
			},
			{
				title: "Responsive | CSS",
				media: "/project/christmas/3.webp",
				text: "画像や文章量が多いので文字の大きさや画像のレスポンシブにとても苦労しました。CSSのclumpやmin関数などを使用し、サイズを色々工夫しながら調整して仕上げました。",
				width: "274px",
				small: "70",
			}
		],
	},
	{
		id: "portfolio",
		title: "Portfolio",
		category: "Blog | Portfolio",
		text: dedent`Next.js15で制作した個人ポートフォリオです。UIを特に意識したデザインとなっています。
		ヘッドレスCMSを使用したブログやHubSpotを利用したお問い合わせページを取り入れています。`,
		image: {
			url: "/project/portfolio-mini.webp",
		},
		link: "https://asami-portfolio.vercel.app",
		card1: [
			{
				title: "Form Button",
				media: "/project/portfolio/1.webp",
				width: 'min(50%, 432px)',
				text: dedent`エラー時と送信完了時のボタンデザインを変更することで状況をわかりやすくしました。状態を管理するstateで切り替えています。文字だけでなくアイコンも変更することでより直感的な見た目にしています。`,
			},
			{
				title: "UI",
				media: "/project/portfolio/2.webp",
				width: 'min(50%, 336px)',
				text: dedent`UIを意識し、Mobileのメニューやページネーションなどボタン部分は大きめの文字サイズにしたり、感覚を広く取っています。`,
			},
			{
				title: "MUI",
				width: 'min(50%, 330px)',
				media: "/project/portfolio/3.webp",
				text: "ポートフォリオ自体のデザインはUIを意識したシンプルなものにしました。そのためReactライブラリのMUIを使用しフォントサイズや色、要素の間隔など統一感があり見やすいデザインにしました。MUIのデザインに合うようにfontも少し丸みがあり親しみやすいものにしています。全体のカラーは黄色にしていますが、黄色は昔から好きな色で、太陽が好きなこともあり自分を表すのに合っていると感じています。アクセントカラーの水色も好きな色なのでMUIのprimaryColorを使用しています。",
			},
		],
		card2: [
				{
				title: "Form | MUI & Server Actions & HubSpot",
				media: "/project/portfolio/4.webp",
				text: "MUIとServer Actionsの機能を合わせ、エラー時の表示部分のUIなどはMUIの機能を利用するようにしています。",
				width: "min(50%, 162px)",
				small: "70",
			},
		],
	},
	{
		id: "dreamer",
		title: "Dreamer",
		category: "App | TypeScript",
		text: dedent`Todoを達成すると星を獲得でき、星を集めて設定したご褒美をGETすることができるご褒美機能付きTodoアプリを制作しました。現在画像登録はできず、事前に用意したイラストが振られます。
		（ テスト用_ username: test / password: 111 ）`,
		image: {
			url: "/project/dreamer2-mini.webp",
		},
		link: "https://dreamer-six.vercel.app",
		card0: {
				title: "Figma & StoryBook",
				media: "/project/dreamer/1.webp",
				media2: [
					"/project/dreamer/2.webp",
					"/project/dreamer/3.webp",
				],
				width: 'min(45%, 514px)',
				width2: '15%',
				width3: 'min(19%, 119px)',
				text: dedent`モバイル主体のデザインで制作しました。他のデバイスでは違和感のないよう背景に画像を設置しています。メニューなどのアイテムや文字間をなるべく広めにとりクリックしやすくしました。
				見た目のデザインは、Figmaですべてのページデザインをはじめに作成し、Next.jsでStoryBookを利用して確認しながらコンポーネントを作っていきました。
				MUIのアイコンをいくつか使用しているので、StoryBookでアイコンを一覧で確認できたことやコンポーネントごとに見た目などをリアルタイムに確認できたので、とても便利で取り入れて良かったと感じています。
				Figmaはスペースやサイズなどの確認や画像の書き出しなど、常に確認しながら作業しました。`,
		},
		card2: [
			{
				title: "Backend Framework | json-server & express",
				media: "/project/dreamer/8.webp",
				text: "ログインや新規のサインインの認証登録にjson-serverでexpressを使用しています。レスポンスにcookieを設定し、それをもとにuseContextで現在のユーザーに設定しています。",
				width: "min(23%, 266px)",
				small: "77.5",
			},
			{
				title: "Form | react-hook-form",
				media: "/project/dreamer/9.webp",
				text: "アプリのフォームにはすべてreact-hook-formのバリデーションを設定し必須項目のチェックを行っています。",
				width: "min(23%, 266px)",
				small: "77.5",
			},
		],
		card3: {
			title: "Styling | styled-components、Headless UI、MUI",
			media: "/project/dreamer/4.webp",
			media2: "/project/dreamer/5.webp",
			text: "styled-componentsのThemeProviderを使用しアプリ全体で使うスタイルのthemeを始めに作成し、スタイルの統一と修正や変更のしやすさを取り入れました。コンポーネントと同ファイル内にスタイルを書くことで後から見た時に分かりやすくなりました。アイコンはMUIで統一し、分かりやすいUIを意識しました。ドロップダウンメニューやTodoページのタブにHeadless UIを使用し、動作面でのスムーズさを取り入れました。",
			width: "min(39%, 449px)",
			width2: "66%",
			width3: "min(65.4%, 294px)",
		},
		card4: {
			title: "Front end | useContext & useReducer",
			media: ["/project/dreamer/5.webp","/project/dreamer/6.webp","/project/dreamer/7.webp"],
			text: "このアプリの特徴であるご褒美機能を作るために、useContextとuseReducerを使用し、ユーザーの保持する星の数をアプリ全体で管理しています。ご褒美を獲得した後も、ご褒美獲得記録ページで獲得した日付とともに一覧で見られるようにしています。",
			width: "min(39%, 449px)",
		},
	},
	{
		id: "eggor",
		title: "Egg or Chicken",
		category: "App | TypeScript",
		text: dedent`OpenWeatherの機能を利用した状態変化アプリを作成しました。天候の予報に応じて様々なアイテムを取得して集めて別のアイテムへ変化させ、最終的にレアアイテムをGETするゲーム感覚のアプリです。現在場所に応じた天気予報も見ることができます。`,
		image: {
			url: "/project/eggor2-mini.webp",
		},
		link: "https://egg-or-chicken.vercel.app",
		card2: [
				{
				title: "Styling | Tailwind CSS、Headless UI、React Icons",
				media: "/project/eggorchicken/7.webp",
				text: "styled-componentsがメンテナンスモードとなったため、Tailwind CSSを取り入れました。どこにどのようなスタイルが当たっているのかが分かりやすく書き方も簡略化できるため、今後も利用していきたいと考えています。ダイアログはHeadless UIを利用しました。今回はmapの中の画像に使用するやり方を学ぶことができました。React Iconsは検索アイコンに利用しています",
				width: "min(15.6%, 180px)",
				small: "70",
			},
			{
				title: "Backend Service | Supabase",
				media: "/project/eggorchicken/6.webp",
				text: "認証、データベース管理にSupabaseを利用しています。ソーシャルログインも取り入れました。",
				width: "min(15.6%, 180px)",
				small: "70",
			},
		],
		card4: {
			title: "Figma",
			media: ["/project/eggorchicken/1.webp","/project/eggorchicken/2.webp","/project/eggorchicken/3.webp"],
			text: dedent`APIを利用したアプリを制作したいと考え、今回の内容を思いつき制作しました。
			このアプリはモバイル主体のデザインで制作しました。空の色を連想させる淡いブルーを主体とし、極力文字数を少なくして画面をスッキリ爽やかに見えるようにしました。文字関連は説明書ページを作りまとめました。ナビゲーションなどのアイコン、天気のアイコン、生き物のイラストなどはイラストレーターで自作しています。カラーはTailwind CSSのカラーパレットから選んでいます。`,
			width: "min(39%, 449px)",
		},
		card3: {
			title: "データ取得・管理 | Axios & React Query",
			media: "/project/eggorchicken/4.webp",
			media2: "/project/eggorchicken/5.webp",
			text: "OpenWeatherの取得、管理に使用しています。クライアント内のグローバルステート管理にはJotaiライブラリを使用しています。ローディング中はスケルトンコンポーネントを制作し表示するようにしています。",
			width: "min(23%, 265px)",
			width2: "43%",
			width3: "min(41.5%, 110px)",
		},
	},
	{
		id: "nature-app",
		title: "Nature Excela APP",
		uppercase: 'true',
		category: "EC site",
		text: dedent`以前制作したNATURE EXCELAに会員ログイン/データベース連携、EC機能、ユーザーページを追加し、ECサイトとしての機能を高めました。
		「ゲストでログイン」ボタンで簡単にお試しできます。`,
		image: {
			url: "/project/nature-mini.webp",
		},
		link: "https://nature-excela-app.vercel.app",
		card5: {
				title: "レスポンシブデザイン | CSS Modules・useMediaQuery",
				media1: [
					"/project/nature-app/1.webp",
					"/project/nature-app/2.webp",
				],
				media2: [
					"/project/nature-app/3.webp",
					"/project/nature-app/4.webp",
				],
				width1: 'min(80%, 264px)',
				width2: '70.6%',
				text: dedent`スタイルの細かな指定が行いやすいCSS Modulesでスタイル付けをしました。useMediaQueryを使用するときはHydration Errorが起きやすいため、useEffectを使用しマウント完了後に描画するなどをして対処しました。`,
		},
		card2: [
			{
				title: "お気に入り登録 | useState & DB登録 ",
				media: "/project/nature-app/10.webp",
				text: "サイト内の商品数が増えるに伴い、気に入った商品を探したりページ移動する手間が出てきてしまいます。そのため、ユーザーページを追加しユーザーのお気に入り一覧が見れる機能が欲しいと考えました。そうすることで毎回スムーズに商品を購入できると考えました。useStateを使用し、ハートをクリックすることで、お気に入りに追加できたり外したりできます。ログインしていない場合は、クリックした時にログインページへ推移します。お気に入り商品はDBで管理しています。",
				width: "min(23%, 266px)",
				small: "77.5",
			},
		],
		card3: {
			title: "認証機能 | NextAuth・Prisma・Supabase",
			media: "/project/nature-app/5.webp",
			media2: "/project/nature-app/6.webp",
			text: "styled-componentsのThemeProvデータベースの操作がスムーズにできるPrismaを使用し、SupabaseのDBと連携しています。SupabaseはNext.jsとの相性が良いため選択しました。NextAuthのOAuth、クレデンシャル認証にゲスト用のログインボタンを設置し、バリエーションのあるログイン機能を制作しました。Formはreact-hook-form、zodResolverを使用して入力内容のバリデーションを行っています。",
			width: "min(32.7%, 377px)",
			width2: "74%",
			width3: "min(70.5%, 266px)",
		},
		card4: {
			title: "決済 | Stripe",
			media: ["/project/nature-app/7.webp","/project/nature-app/8.webp","/project/nature-app/9.webp"],
			text: "こ以前制作した当サイトはカートページのみでしたが購入ボタンを設置し、実際に商品を購入できるように変更し、ECサイトである機能性を高めました。Stripeには合計数と合計金額を登録し、購入時にStripeIdと共に商品の個別データをSupabaseへ登録することで、後にユーザーページに購入履歴を追加できるようにしています。",
			width: "min(39.2%, 452px)",
		},
	},
]