<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1>Computer networks under the hood. Part 1</h1>

      <p class="subtxt">As for me, the book by James F. Qurose, “Computer Networks. Top-down approach ”is a must-have for any programmer. We will take it as the basis of this article.</p>

      <router-link to="/article/net/two">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/computer-networks-under-the-hood-part-1/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "NetOne"
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
  background: url("../../assets/network/network-1.jpg");
  background-size: cover;
}
</style>