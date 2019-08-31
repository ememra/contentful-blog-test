<template>
	<section class="p-works l-contents">
		<h2 class="c-ttl-main">
			Works
		</h2>
		<p class="c-lead">
			今までに関わった制作案件、趣味作品などをピックアップ
		</p>
		<ul class="p-works-list">
			<card v-for="post in posts"
			 v-bind:key="post.fields.path"
			 :title="post.fields.title"
			 :path="post.fields.path"
			 :body="post.fields.body"
			 :image="post.fields.image"
			/>
		</ul>
	</section>
</template>



<script>
import Card from '~/components/card.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head() {
    return {
      title: '制作実績',
    }
  },
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



<style scoped>
</style>
