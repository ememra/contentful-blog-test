<template>
	<header id="l-header">
		<div class="l-header-in">
			<h1 class="g-logo">
				<nuxt-link to="/" exact>
					Emura Design Portfolio
				</nuxt-link>
			</h1>
			<nav class="g-main-navi">
				<button class="g-main-navi-btn" @click="naviOpen" :class="{'is-active': active}" aria-controls="g-menu" aria-label="メニュー">
					<span></span>
					<span></span>
					<span></span>
				</button>

				<div class="g-main-navi-wrap js-main-navi" id="g-menu" :class="{'is-active': navi}">
					<ul class="g-main-navi-list">
						<li class="g-main-navi-list__item">
							<nuxt-link to="/" @click.native="naviOpen" active-class="is-active" class="g-main-navi-list__link" exact>
								Top
							</nuxt-link>
						</li>
						<li class="g-main-navi-list__item">
							<nuxt-link to="/profile/" @click.native="naviOpen" active-class="is-active" class="g-main-navi-list__link" exact>
								Profile
							</nuxt-link>
						</li>
						<li class="g-main-navi-list__item">
							<nuxt-link to="/works/" @click.native="naviOpen" active-class="is-active" class="g-main-navi-list__link" exact>
								Works
							</nuxt-link>
						</li>
						<li class="g-main-navi-list__item">
							<nuxt-link to="/thinking/" @click.native="naviOpen" active-class="is-active" class="g-main-navi-list__link" exact>
								Thinking
							</nuxt-link>
						</li>
<!-- 						<li class="g-main-navi-list__item">
							<nuxt-link to="/thinking/" @click.native="naviOpen" active-class="is-active" class="g-main-navi-list__link" exact>
								Thinking
							</nuxt-link>
						</li> -->
					</ul>
<!-- 					<button class="g-main-navi-btn-close js-main-navi-btn-close">
						<img src="{gl.top}/images/icon-close.svg" alt="" width="15" height="15" /> close
					</button> -->
				</div><!-- /.main-navi-wrap-->
			</nav>
		</div>
	</header>
</template>



<script>
export default {
	data: function() {
		return {
			active: false,
			navi: false,
		}
	},
	methods: {
		naviOpen: function() {//@clickしたとき実行される。それぞれの真偽値を逆にする
			this.active = !this.active;
			this.navi = !this.navi;
		}
	}
}
// export default {
//   data: function(){
//   	return {
// 	    position: 0,
// 	}
//   },
//   mounted: function(){
//     // document.onscroll = function(e){
//     //   this.position = document.documentElement.scrollTop || document.body.scrollTop;
//     // }
// 	document.onscroll = () => {
// 	  this.position = document.documentElement.scrollTop || document.body.scrollTop;
// 	}
//   }
// }

</script>

