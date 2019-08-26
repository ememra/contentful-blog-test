<template>
 <section class="path">
   <h1 class="path_title">しょうさい：{{ post.fields.title }}</h1>
   <img class="path_image" v-bind:src="post.fields.image.fields.file.url"/>
   <vue-markdown>{{post.fields.body}}</vue-markdown>
 </section>
</template>



<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
 transition: 'slide-left',
 components: {
   VueMarkdown
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
 }
}
</script>