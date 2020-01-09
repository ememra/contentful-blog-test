<template>
	<section class="p-profile l-contents">
		<h2 class="c-ttl-main">
			Profile
		</h2>
		<p class="c-lead">
			職務経歴、スキル・資格を紹介します
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
								・PHPの独自フレームワークを使ったCMSテンプレート制作<br />
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
								・CMSを利用した中小規模のWebサイト制作<br />
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
								・Webサイトのテンプレート制作・管理<br />
								・マークアップ<br />
								・CSS設計<br />
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
			<ul class="p-skill-list u-mbm">
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
						運転は苦手。
					</div>
				</li>
			</ul>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					できる・得意なこと
				</h4>
				<p class="p-personality-box__body">
					HTML/CSSを書くのが好きで、仕事ではマークアップ、CSS設計をしています。<br />
					デザインはシンプルで、親しみやすさを考えられたものが好きで、サイトを訪れるユーザーの行動を考えてサイトを設計することにやりがいを感じます。<br />
					アクセシビリティの興味があり、デザインするときやコードを書くときにユーザーがちゃんとアクセスできるのかを心がけています。<br />
					Illustratorでベクターを利用したイラスト・アイコンを作ることが来ます。
				</p>
			</div>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					できない・苦手なこと
				</h4>
				<p class="p-personality-box__body">
					JavascriptやPHPはライブラリやフレームワークを使うことは好きですが、自力では簡単なものしか書くことができません。<br />
					手書きイラストは描けません。
				</p>
			</div>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					やりたいこと
				</h4>
				<p class="p-personality-box__body">
					チームで相談、改善しながら、納得を持ってサイトやサービスを作り上げていきたい。<br />
					ユーザーや企業の利益に還元できる仕事をしたい。<br />
					技術共有や勉強会に積極的に参加したい。デザインからフロントエンドまで幅広く知識をつけたい。<br />
				</p>
			</div>

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
					ギター。DTM。インターネット。アニメ。地味な作業。
				</p>
			</div>
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					苦手なもの
				</h4>
				<p class="p-personality-box__body">
					電話。梅干し。車の運転。
				</p>
			</div>
			<!--
			<div class="p-personality-box">
				<h4 class="c-ttl-sub-s">
					長所であり短所
				</h4>
				<p class="p-personality-box__body">
					人としゃべるのは得意な方ではありませんが、webの特性上、画面上だけでどれだけコミュニケーションが完結できるのかを意識してサイト制作に取り組んでいます。
				</p>
			</div>
			-->
		</section>

		<!--
		<section class="p-personality l-contents-in l-container-s">
			<h3 class="c-ttl-sub">
				名刺
			</h3>
			<div class="card-item" :class="{'is-active': isActive}" @click="cardFlip">
				<div class="card-item__side -front">
					<img src="~/assets/images/business-card-01.jpg" class="card-item__bg" alt="名刺表" />
				</div>
				<div class="card-item__side -back">
					<img src="~/assets/images/business-card-02.jpg" class="card-item__bg" alt="名刺裏" />
				</div>
			</div>
		</section>
		-->

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
	data: function() {
		return {
			isActive: false,
		}
	},
	methods: {
		cardFlip: function() {//@clickしたとき実行される。それぞれの真偽値を逆にする
			this.isActive = !this.isActive;
		}
	},
	components :{
		Profile,
	}
}
</script>


<style lang="scss">
.card-item {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 90px;
  position: relative;
  z-index: 2;
  width: 100%;
  cursor: pointer;

  &.is-active {
    & .card-item__side {
      &.-front {
        transform: perspective(1000px) rotateY(180deg) rotateX(0deg) rotateZ(0deg);
      }
      &.-back {
        transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
      }
    }
  }
}

.card-item__side {
	box-shadow: $shadow;
	transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
	transform-style: preserve-3d;
	transition: all 0.5s cubic-bezier(0.71, 0.03, 0.56, 0.85);
	backface-visibility: hidden;
	height: 100%;

	&.-back {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
	  z-index: 2;
	  padding: 0;
	  height: 100%;

	  .card-item__cover {
	    transform: rotateY(-180deg)
	  }
	}
}



</style>
