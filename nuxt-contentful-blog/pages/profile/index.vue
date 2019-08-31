<template>
	<section class="p-profile l-contents">
		<h2 class="c-ttl-main">
			Profile
		</h2>
		<p class="c-lead">
			職務経歴、スキル・資格、趣味・性格などの自己紹介
		</p>
		<section class="l-contents-in l-container-s">
			<profile />
		</section>
		<section class="l-contents-in l-container-s">
			<h3 class="c-ttl-sub">
				職務経歴
			</h3>
			<table class="c-tbl">
				<tbody class="c-tbl__tbody">
					<tr class="c-tbl__tr">
						<th class="c-tbl__th">
							2005～2009年
						</th>
						<td class="c-tbl__td">
							<h4 class="c-tbl__ttl">
								京都産業大学 経営学部
							</h4>
						</td>
					</tr>
					<tr class="c-tbl__tr">
						<th class="c-tbl__th">
							2008～2011年
							<div class="p-history__term">
								勤続年数：3年
							</div>
						</th>
						<td class="c-tbl__td">
							<h4 class="c-tbl__ttl">
								株式会社ナレッジデザイン
							</h4>
							<p class="c-tbl__body">
								在学中にWeb制作のスクールに通いながらアルバイトとして勤務。<br />
								・ガラケー向け着せ替えアプリの素材制作<br />
								・Webサイト制作（PC・ガラケー）<br />
								・アルバイトメンバーの進行管理など<br />
								倒産のため退職
							</p>
						</td>
					</tr>
					<tr class="c-tbl__tr">
						<th class="c-tbl__th">
							2011～2012年
							<div class="p-history__term">
								勤続年数：2年
							</div>
						</th>
						<td class="c-tbl__td">
							<h4 class="c-tbl__ttl">
								株式会社エニシスアソシエイツ
							</h4>
							<p class="c-tbl__body">
								Webデザイナー 正社員として勤務。<br />
								後に、株式会社KPSのWeb部門となり移籍
							</p>
						</td>
					</tr>
					<tr class="c-tbl__tr">
						<th class="c-tbl__th">
							2012～2014年
							<div class="p-history__term">
								勤続年数：3年
							</div>
						</th>
						<td class="c-tbl__td">
							<h4 class="c-tbl__ttl">
								株式会社KPS
							</h4>
							<p class="c-tbl__body">
								Webデザイナー 正社員として勤務。<br />
								後に、Web部門が株式会社ズコーデザインとして独立
							</p>
						</td>
					</tr>
					<tr class="c-tbl__tr">
						<th class="c-tbl__th">
							2014～2019年
							<div class="p-history__term">
								勤続年数：5年
							</div>
						</th>
						<td class="c-tbl__td">
							<h4 class="c-tbl__ttl">
								株式会社ズコーデザイン
							</h4>
							<p class="c-tbl__body">
								Webデザイナー 正社員として勤務。<br />
								・Webサイトのテンプレート制作<br />
								・Webサイト制作<br />
								・ワイヤーフレーム設計
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</section>


		<section class="l-contents-in l-container-s">
			<h3 class="c-ttl-sub">
				スキル・資格
			</h3>
			<ul class="p-skill-list">
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<div class="p-skill-list__icon-img">
							<img src="~/assets/images/icon-ai.svg" alt="Webデザイン" width="" />
						</div>
						<div class="p-skill-list__icon-star" aria-label="5つ星のうち4">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['far','star']" />
						</div>
					</div>
				</li>
			</ul>
			Webデザイン ★★★★☆ アイコン画像　アクセシビリティを配慮した配色やレイアウトのデザイン
			Illustrator ★★★★☆ アイコン画像　Webサイトのデザイン、ワイヤーフレームの作成、アイコン・イラストの作成
			Photoshop ★★★★☆ アイコン画像　Webサイトのデザイン、ドット絵、切り抜き加工
			XD ★★★☆☆ アイコン画像　ワイヤーフレームの作成、アニメーションを使ったプロトタイプの作成
			HTML/CSS ★★★★★ アイコン画像　マシンリーダブルを意識したマークアップ、CSS設計、SASSの利用
			JavaScript ★★☆☆☆ アイコン画像　jQuery、Gulp、Vue、Nuxtなどを勉強中
			WordPress ★★☆☆☆ アイコン画像　実制作ではほぼ使っていなかったですがカスタムフィールドの実装程度が可能
			SEO ★★★☆☆ アイコン画像　Googleアナリティクス、サーチコンソールの簡単な操作、ライティング、強豪サイトの調査
			バージョン管理 ★★★☆☆ アイコン画像 サブバージョンを利用。Gitは仕事で使う機会がなかったので勉強中。
			その他ツール ★★★☆☆ Backlog、チャットワーク、Slack
			自動車運転免許 ★★☆☆☆ アイコン画像　運転は苦手です
		</section>


		<section class="l-contents-in l-container-s">
			<h3 class="c-ttl-sub">
				趣味・性格
			</h3>
				デザイン
				人をハッと驚かせるものよりも、地味だけど誰しもが使いやすく迷わないデザインが好き。
				「誰のためのデザイン」を読み、デザインの捉え方が大きく変わりました。使いにくい物があったとき、それは人が悪いのではなく、デザインが悪い。
				一度ユーザビリティテストを行ったことがありますが、多くのユーザーの前ではきらびやかな装飾よりも堅実で迷わないレイアウトやライティング、サイト設計が重要ということに気付かされました。

				地味な作業が好き

				*気をつけていること
				自分の得意分野と隣り合う技術について知識や理解を深める
				例えば自分はHTML/CSSを書くことが得意ですが、デザインやプログラミングの仕組みを理解して制作に取り組むよう心がけています。

				苦手

				電話対応

				**長所であり短所
				人としゃべるのは得意な方ではありませんが、webの特性上、画面上でどれだけコミュニケーションが完結できるのかを意識してサイト制作に取り組むことができます。

		</section>
	</section>
</template>




<script>
import Profile from '~/components/profile.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head() {
    return {
      title: 'プロフィール',
    }
  },
  components :{
  	Profile,
  }
}
</script>


<style lang="scss">

</style>
