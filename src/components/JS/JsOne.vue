<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1>Special JavaScript. Part 1</h1>

      <p class="subtxt">We consistently analyze each function in javascript. This will help us to support the theory for future decisions in practice.</p>

      <router-link to="/article/js/two">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/special-javascript-part-1/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "JsOne"
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

h1 {
  color: $pink !important;
}

.btn-go-to-articles:hover {
	background-color: $pink;
}

.js-preview-article {
  background: url("../../assets/js/special-js-1.jpg");
  background-size: cover;
}
</style>