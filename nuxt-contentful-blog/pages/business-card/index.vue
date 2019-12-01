<template>
	<section class="p-profile l-contents">
		<h2 class="c-ttl-main">
			Card
		</h2>
		<p class="c-lead">
			名刺です。
		</p>
		<div class="card-item" :class="{'is-active': isActive}" @click="cardFlip">
			<div class="card-item__side -front">
				<img　src="~/assets/images/business-card-01.jpg" class="card-item__bg">
			</div>
			<div class="card-item__side -back">
				<img　src="~/assets/images/business-card-02.jpg" class="card-item__bg">
			</div>
		</div>
		<div class="c-more">
			<button　class="c-btn" @click="cardFlip">
				回転
			</button>
		</div>
	</section>

</template>



<script>

export default {
	head() {
		return {
		  title: '名刺'
		}
	},
	data: function() {
		return {
			isActive: false,
		}
	},
	methods: {
		cardFlip: function() {//@clickしたとき実行される。それぞれの真偽値を逆にする
			this.isActive = !this.isActive;
		}
	}
}
</script>


<style lang="scss">
.card-item {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 90px;
  position: relative;
  z-index: 2;
  width: 100%;
  cursor: pointer;

  &.is-active {
    & .card-item__side {
      &.-front {
        transform: perspective(1000px) rotateY(180deg) rotateX(0deg) rotateZ(0deg);
      }
      &.-back {
        transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
      }
    }
  }
}

.card-item__side {
	box-shadow: $shadow;
	transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
	transform-style: preserve-3d;
	transition: all 0.5s cubic-bezier(0.71, 0.03, 0.56, 0.85);
	backface-visibility: hidden;
	height: 100%;

	&.-back {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
	  z-index: 2;
	  padding: 0;
	  height: 100%;

	  .card-item__cover {
	    transform: rotateY(-180deg)
	  }
	}
}



</style>







