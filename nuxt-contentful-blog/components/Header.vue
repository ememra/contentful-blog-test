<template>
	<header id="l-header">
		<div class="l-header-in">
			<h1 class="g-logo">
				Emura Design Portfolio
			</h1>
			<nav class="g-main-navi">
				<button class="g-main-navi-btn js-main-navi-btn" aria-controls="menu">
					<img src="{gl.top}/images/menu-btn-sp-l.svg" alt="メニュー" width="100%" />
				</button>

				<div class="g-main-navi-wrap js-main-navi" id="g-menu">
					<ul class="g-main-navi-list">
						<li class="g-main-navi-list__item">
							<nuxt-link to="/" active-class="is-active" class="g-main-navi-list__link" exact>
								Top
							</nuxt-link>
						</li>
						<li class="g-main-navi-list__item">
							<nuxt-link to="/profile/" active-class="is-active" class="g-main-navi-list__link" exact>
								Profile
							</nuxt-link>
						</li>
						<li class="g-main-navi-list__item">
							<nuxt-link to="/works/" active-class="is-active" class="g-main-navi-list__link" exact>
								Works
							</nuxt-link>
						</li>
						<li class="g-main-navi-list__item">
							<nuxt-link to="/thinking/" active-class="is-active" class="g-main-navi-list__link" exact>
								Thinking
							</nuxt-link>
						</li>
					</ul>
					<button class="g-main-navi-btn-close js-main-navi-btn-close">
						<img src="{gl.top}/images/icon-close.svg" alt="" width="15" height="15" /> close
					</button>
				</div><!-- /.main-navi-wrap-->
			</nav>
		</div>
	</header>
</template>



<script>
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

