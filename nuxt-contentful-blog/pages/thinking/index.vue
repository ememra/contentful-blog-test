<template>
	<section class="p-profile l-contents">
		<h2 class="c-ttl-main">
			Thinking
		</h2>
		<p class="c-lead">
			考えていること
		</p>

		<section class="p-personality l-contents-in l-container-s">
			<div class="p-personality-box">
				<h3 class="c-ttl-sub">
					Webについて考えていること
				</h3>
				<p class="p-personality-box__body">
					いかに素晴らしいコンテンツがあったとしても、そこにたどり着けない人がいたり、使うのが難しい人がいることがあります。<br />
					ユーザーの中には<br /><br />
					・怪我や病気などでうまく体をうごかせない<br />
					・生まれ持った体質や年齢などで目が見えない・見にくい、炎天下でディスプレイが見えにくい<br />
					・外で音を出せない、耳が悪く音が聞こえない<br /><br />
					などなど、多くの状態・状況があります。<br />
					Webサイトを作る上でそれらのことを考慮せねばなりません。<br />
					その障壁を少なくし、「使いにくい、使えない」を「使いやすい、使える」状態にすることがWebにおいてとても重要なことだと思っています。<br />
					アクセシビリティを考慮することは障害を持っている人だけではなく、自分や様々な人にとっても使いやすいものとなります。
				</p>
			</div>
			<div class="p-personality-box">
				<h3 class="c-ttl-sub">
					デザインについて考えていること
				</h3>
				<p class="p-personality-box__body">
					地味だけど誰しもが使いやすく迷わないデザインが好きです。<br />
					「誰のためのデザイン：ドナルド・A・ノーマン」を読み、デザインの捉え方が大きく変わりました。使いにくい物があったとき、それは人が悪いのではなく、デザインが悪い。<br />
					一度ユーザビリティテストを行ったことがありますが、多くのユーザーの前ではきらびやかな装飾よりも堅実で迷わないレイアウトやライティング、サイト設計が重要ということに気付かされました。<br />
					小さな改善をコツコツと繰り返していくことがデザインの本質だと思っています。
				</p>
			</div>
			<div class="p-personality-box">
				<h3 class="c-ttl-sub">
					仕事で心がけていること
				</h3>
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
