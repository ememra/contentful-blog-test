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
	@include media(sp) {
		padding-top: 60px;
		margin-bottom: 0px;
		font-size: rem(36px);
	}
}
</style>







