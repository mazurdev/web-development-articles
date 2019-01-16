<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/net/one">
        <img src="../../assets/arrow-up.svg" class="arrow arrow-up">
      </router-link>

      <h1>Computer networks under the hood. Part 2</h1>

      <p class="subtxt">We continue. The next step is the transport layer ... It reliably transmits data segments between points on the network. Let's figure it out</p>

      <router-link to="/article/net/three">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/computer-networks-under-the-hood-part-2/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "NetTwo"
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

h1 {
	color: $primary !important;
	font-size: 2.8em !important;
}

.btn-go-to-articles:hover {
	background-color: $primary;
}

.js-preview-article {
  background: url("../../assets/network/network-2.jpg");
  background-size: cover;
}
</style>