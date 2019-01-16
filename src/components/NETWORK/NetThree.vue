<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/net/two">
        <img src="../../assets/arrow-up.svg" class="arrow arrow-up">
      </router-link>

      <h1>Computer networks under the hood. Part 3</h1>

      <p class="subtxt">In parts 1 and 2, we studied the applied and transport levels. Now let's consider a more familiar level - the network, which is responsible for determining the data transmission paths.</p>

    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/computer-networks-under-the-hood-part-3/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "NetThree"
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
  background: url("../../assets/network/network-3.jpg");
  background-size: cover;
}
</style>