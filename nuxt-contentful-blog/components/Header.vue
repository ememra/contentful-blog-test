<template>
	<header id="l-header" class="test" :class="{'sticky': position > 0}">
		<h1 class="g-logo">
			Emura Design Portfolio{{title}}
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
	</header>
</template>



<script>
export default {
  data: function(){
  	return {
	    position: 0,
	    title:'Hello',
	}
  },
  ready: function(){
    document.onscroll = function(e){
      this.position = document.documentElement.scrollTop || document.body.scrollTop;
    }
  }
}

</script>


<style lang="scss">
#l-header {
	padding-top: 60px;
	padding-bottom: 60px;
}
.g-logo {
	margin-bottom: 60px;
	font-size: rem(60px);
	font-style: italic;
	font-weight: 900;
	color: #000000;
	text-align: center;
}

.g-main-navi-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-left: 210px;
	margin-right: 210px;
}
.g-main-navi-list__item {
	font-size: rem(30px);
	font-weight: 900;
	font-style: italic;
}
.g-main-navi-list__link {
	position: relative;
	color: #000000;
	&:hover,
	&.nuxt-link-exact-active {
		color: $main-color;
		text-decoration: none;
	}
	&.nuxt-link-exact-active {
		&:before {
			content: "";
			position: absolute;
			bottom: -20px;
			left: 50%;
			margin-left: -4px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: $accent-color;
		}
	}
}


.g-main-navi-btn {
	display: none;
	@include media(sp) {
		display: block;
	}
}
.g-main-navi-btn-close {
	display: none;
	@include media(sp) {
		display: block;
	}
}

</style>
