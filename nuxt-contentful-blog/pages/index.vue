<template>
	<div>
		<div class="p-top-message">
			<p class="p-top-message__body">
				Welcome to the website, thank you!
			</p>
		</div>
		<section class="p-profile l-contents">
			<div class="l-container-s">
				<h2 class="c-ttl-main">
					Profile
				</h2>
				<profile />
				<div class="c-more">
					<nuxt-link to="/profile/" class="c-btn">
						Profile
					</nuxt-link>
				</div>
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
import Profile from '~/components/profile.vue'
import Card from '~/components/card.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head() {
    return {
      title: 'Emura Design Portfolio',
      titleTemplate: '',
    }
  },
  transition: 'slide-left',
  components: {
    Card,
    Profile,
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
.p-top-message__body {
	padding-top: 180px;
	margin-bottom: 60px;
	font-size: rem(48px);
	font-weight: 900;
	color: $main-color;
	font-style: italic;
	text-align: center;
}


.p-works-list {
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;
}
.p-works-list__item {
	margin-bottom: 30px;
	padding-left: 15px;
	padding-right: 15px;
	width: 50%;
}
.p-works-list__link {
	display: block;
	overflow: hidden;
	border-radius: $radius;
	background: #ffffff;
	box-shadow: $shadow-light;
	&:hover {
		box-shadow: $shadow;
		text-decoration: none;
		transform: scale(1.02);
	}
}
.p-works-list__txt {
	padding: 20px;
	border-top: 1px solid #eeeeee;
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







