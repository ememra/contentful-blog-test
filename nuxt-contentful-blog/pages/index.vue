<template>
	<div>
		<p>
			Welcome to the website, thank you!
		</p>
		<section class="p-profile l-contents l-container-s">
			<h2 class="c-ttl-main">
				Profile
			</h2>
			<div class="p-profile-intro">
				<div class="p-profile-intro__img">
					<img src="~/assets/images/profile-img.jpg" alt="画像：江村淳一" width="180" />
				</div>
				<div class="p-profile-intro__txt">
					<h3 class="p-profile-intro__name">
						江村 淳一（えむら じゅんいち）
					</h3>
					<div class="p-profile-intro__job">
						Webデザイナー
					</div>
					<div class="p-profile-intro__birth">
						1986年10月25日生まれ
					</div>
					<div class="p-profile-intro__body">
						Web制作に携わり約10年。マークアップ、デザインを主にやっています。アクセシビリティを考慮したデザインを心がけたい。
					</div>
				</div>
			</div>
			<div class="c-more">
				<nuxt-link to="/profile/" class="c-btn">
					Profile
				</nuxt-link>
			</div>
		</section>
		<section class="p-works l-contents">
			<h2 class="c-ttl-main">
				Works
			</h2>
			<ul class="p-works-list">
				<card v-for="post in posts"
				 v-bind:key="post.fields.path"
				 :title="post.fields.title"
				 :path="post.fields.path"
				 :body="post.fields.body"
				 :image="post.fields.image"
				/>
			</ul>
			<div class="c-more">
				<nuxt-link to="/works/" class="c-btn">
					Works
				</nuxt-link>
			</div>
		</section>

	</div>
</template>



<script>
import Card from '~/components/card.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  transition: 'slide-left',
  components: {
    Card
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_PAGE_TYPE_ID,
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>


<style lang="scss">
.p-profile-intro {
	display: flex;
	flex-wrap: wrap;
}
.p-profile-intro__img {
	width: 180px;
	& img {
		border-radius: 50%;
	}
}
.p-profile-intro__txt {
	flex: 1;
	margin-left: 60px;
	line-height: $line-height;
}
.p-profile-intro__name {
	font-weight: bold;
	font-size: rem(21px);
}
.p-profile-intro__job {
	color: $txt-sub;
}
.p-profile-intro__birth {
	color: $txt-sub;
}
.p-profile-intro__body {
	margin-top: 15px;
}



.p-works-list {
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;
}
.p-works-list__item {
	padding-left: 15px;
	padding-right: 15px;
	width: 33.3333%;
}
.p-works-list__link {
	display: block;
	overflow: hidden;
	border-radius: $radius;
	background: #f5f5f5;
	&:hover {
		box-shadow: $shadow;
		text-decoration: none;
	}
}
.p-works-list__txt {
	padding: 20px;
}
.p-works-list__ttl {
	font-size: rem(21px);
	font-weight: bold;
	color: #000000;
}
.p-works-list__body {
	margin-top: 10px;
	color: $txt-main;
}

</style>







