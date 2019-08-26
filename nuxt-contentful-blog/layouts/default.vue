<template>
  <div class="l-container">
    <Header/>
    <main class="l-main">
		<nuxt/>
    </main>
    <Footer/>
  </div>
</template>



<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
}
</script>