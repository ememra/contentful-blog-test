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
		<section class="p-history l-contents-in l-container-s">
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
								大学在学中にWeb制作のスクールに通いながらアルバイトとして勤務。<br />
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
							2014年～
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
								・マークアップ<br />
								・デザイン<br />
								・ワイヤーフレーム設計など
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</section>


		<section class="p-skill l-contents-in l-container-s">
			<h3 class="c-ttl-sub">
				スキル・資格
			</h3>
			<ul class="p-skill-list">
<!-- 				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<img src="~/assets/images/icon-ai.svg" alt="Webデザイン" width="100%" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							Webデザイン
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち2">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['far','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						アクセシビリティを配慮した配色やレイアウトのデザイン
					</div>
				</li> -->
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<img src="~/assets/images/icon-ai.svg" alt="Illustrator" width="100%" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							Illustrator
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち3">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						Webサイトのデザイン、ワイヤーフレームの作成、アイコン・イラストの作成
					</div>
				</li>
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<img src="~/assets/images/icon-ps.svg" alt="Photoshop" width="100%" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							Photoshop
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち3">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						Webサイトのデザイン、切り抜き加工、ドット絵
					</div>
				</li>
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<img src="~/assets/images/icon-xd.svg" alt="XD" width="100%" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							XD
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち2">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['far','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						ワイヤーフレームの作成、アニメーションを使ったプロトタイプの作成
					</div>
				</li>
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<img src="~/assets/images/icon-html5.svg" alt="HTML/CSS" width="100%" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							HTML/CSS
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち2">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						マシンリーダブルを意識したマークアップ、CSS設計、SASSの利用
					</div>
				</li>
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<img src="~/assets/images/icon-js.svg" alt="JavaScript" width="100%" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							JavaScript
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち1">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['far','star']" />
							<font-awesome-icon :icon="['far','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						jQuery、Vue、Nuxtなどを勉強中
					</div>
				</li>
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<img src="~/assets/images/icon-wp.svg" alt="WordPress" width="100%" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							WordPress
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち1">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['far','star']" />
							<font-awesome-icon :icon="['far','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						現職ではほぼ未使用でしたがカスタムフィールドの実装程度が可能
					</div>
				</li>
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<font-awesome-icon :icon="['fas','globe-asia']" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							SEO
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち1">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['far','star']" />
							<font-awesome-icon :icon="['far','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						Googleアナリティクス、サーチコンソールの簡単な操作、ライティング、強豪サイトの調査
					</div>
				</li>
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<font-awesome-icon :icon="['fas','tools']" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							その他ツール
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち2">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['far','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						Backlog、チャットワーク、Slackなど。バージョン管理はサブバージョンを利用。Gitは仕事で使う機会がなかったので勉強中。
					</div>
				</li>
				<li class="p-skill-list__item">
					<div class="p-skill-list__icon">
						<font-awesome-icon :icon="['fas','car']" />
					</div>
					<div class="p-skill-list__ttl">
						<h4 class="p-skill-list__ttl-name">
							自動車運転免許
						</h4>
						<div class="p-skill-list__ttl-star" aria-label="3つ星のうち1">
							<font-awesome-icon :icon="['fas','star']" />
							<font-awesome-icon :icon="['far','star']" />
							<font-awesome-icon :icon="['far','star']" />
						</div>
					</div>
					<div class="p-skill-list__body">
						運転は苦手…
					</div>
				</li>
			</ul>
		</section>


		<section class="p-personality l-contents-in l-container-s">
			<h3 class="c-ttl-sub">
				趣味・性格
			</h3>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					好きなもの・趣味
				</h4>
				<p class="p-personality-box__body">
					ギター。インターネット。アニメ。地味な作業。
				</p>
			</div>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					苦手なもの
				</h4>
				<p class="p-personality-box__body">
					電話。梅干し。
				</p>
			</div>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					長所であり短所
				</h4>
				<p class="p-personality-box__body">
					人としゃべるのは得意な方ではありませんが、webの特性上、画面上だけでどれだけコミュニケーションが完結できるのかを意識してサイト制作に取り組んでいます。
				</p>
			</div>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					Webについて考えていること
				</h4>
				<p class="p-personality-box__body">
					「アクセスできること」を一番大切にしています。<br />
					いかに素晴らしいコンテンツがあったとしても、そこにたどり着けない人がいたり、使うのが難しい人がいることがあります。<br />
					ユーザーの中には<br />
					・怪我や病気などでうまく体をうごかせない<br />
					・生まれ持った体質や年齢などで目が見えない・見にくい、炎天下でディスプレイが見えにくい<br />
					・外で音を出せない、耳が悪く音が聞こえない<br />
					などなど、多くの状態・状況があります。<br />
					Webサイトを作る上でそれらのことを考慮せねばなりません。<br />
					その障壁を少なくし、「使いにくい、使えない」を「使いやすい、使える」状態にすることがWebにおいてとても重要なことだと思っています。<br />
					それらは障害を持っている人だけではなく、自分にとっても使いやすいものとなります。
				</p>
			</div>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					デザインについて考えていること
				</h4>
				<p class="p-personality-box__body">
					人をハッと驚かせるものよりも、地味だけど誰しもが使いやすく迷わないデザインが好きです。<br />
					「誰のためのデザイン」を読み、デザインの捉え方が大きく変わりました。使いにくい物があったとき、それは人が悪いのではなく、デザインが悪い。<br />
					一度ユーザビリティテストを行ったことがありますが、多くのユーザーの前ではきらびやかな装飾よりも堅実で迷わないレイアウトやライティング、サイト設計が重要ということに気付かされました。
				</p>
			</div>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					仕事で心がけていること
				</h4>
				<p class="p-personality-box__body">
					自分の得意分野と隣り合う技術について知識や理解を深める。<br />
					例えば自分はHTML/CSSを書くことが得意ですが、デザインやプログラミングの仕組みを理解して制作に取り組むよう心がけています。
				</p>
			</div>

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
