<template>
	<li class="p-works-list__item">
		<nuxt-link v-bind:to="{ name: 'works-path', params: { path: path }}" class="p-works-list__link">
			<div class="p-works-list__img">
				<img v-bind:src="image.fields.file.url" :alt="image.fields.title" width="100%" />
			</div>
			<div class="p-works-list__txt">
				<h3 class="p-works-list__ttl">
					{{ title }}
				</h3>
				<p class="p-works-list__body">
					{{body}}
				</p>
			</div>
		</nuxt-link>
	</li>
</template>


<script>
export default {
 props: ['title', 'path', 'image', 'body']
}
</script>