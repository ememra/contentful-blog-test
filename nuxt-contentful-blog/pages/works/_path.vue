<template>
	<section class="p-works l-contents">
		<article class="p-works-main">
			<div class="p-works-main__img">
				<img v-bind:src="post.fields.image.fields.file.url" />
				<!-- <img v-bind:src="post.fields.image2.fields.file.url" /> -->
			</div>
			<h2 class="p-works-main__ttl c-ttl-sub">
				{{ post.fields.title }}
			</h2>
			<div class="p-works-main__link">
				<font-awesome-icon :icon="['fas','desktop']" /> {{ post.fields.url }}
<!-- 				<a v-bind:href="post.fields.url" target="_blank" rel="nofollow">
				</a> -->
			</div>

			<div class="p-works-main__body js-md-contents" v-html="$md.render(post.fields.body)">
			</div>

		</article>

		<div class="c-more">
			<nuxt-link to="/works/" class="c-btn">
				Works
			</nuxt-link>
		</div>
<!-- 		<aside class="l-contents-in">
			<h3 class="c-ttl-sub">
				その他の制作実績
			</h3>
			<ul class="p-works-list">
				<card v-for="post in posts"
				 v-bind:key="post.fields.path"
				 :title="post.fields.title"
				 :path="post.fields.path"
				 :body="post.fields.body"
				 :image="post.fields.image"
				/>
			</ul>
		</aside> -->

	</section>
</template>



<script>
import Card from '~/components/card.vue'
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head() {
    return {
      title: '制作実績詳細',
    }
  },
 components: {
   Card,
   VueMarkdown,
 },
 async asyncData ({ env, params }) {
   return await client.getEntries({
     'content_type': env.CTF_PAGE_TYPE_ID,
     'fields.path': params.path,
     order: '-sys.createdAt'
   }).then(entries => {
     return {
       post: entries.items[0],
     }
   })
   .catch(console.error)
 },
}
</script>
