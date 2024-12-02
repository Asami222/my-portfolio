import dedent from "dedent";

const projectData = [
	{
		title: "Gray Mickey",
		period: "２ヶ月",
        image: "mickey",
		text: dedent`世の中の理不尽なこと、問題、課題などを取り上げ情報共有を目的としたサイトです。少しでもより良い世の中になってほしいという思いで制作しました。簡単な性格診断ができるページもあります。`,
        category: [ "Next.js","Original"]
	},
    {
		title: "NATURE EXCELA",
		period: "２ヶ月",
        image: "nature",
		text: dedent`自然派化粧品の通販サイトを制作しました。
                    Dynamic Routesで動的に商品ページを作成しています。カートページを作成し、商品ごとの計、全ての合計金額も算出しています。`,
        category: [ "Next.js","EC site"]
	},
    {
		title: "Christmas Event",
		period: "１ヶ月",
        image: "christmas",
		text: dedent`百貨店の催事の告知シングルページを制作しました。クリスマスのファンタジー感を演出するためiPadで描いたイラストを多く取り入れました。ライブラリーのtsParticleを使用し、降る雪を演出しています。`,
        category: [ "Next.js","Single page"]
	}
]

export default projectData;