<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/js/two">
				<img src="../../assets/arrow-up.svg" class="arrow arrow-up">
			</router-link>

      <h1>Special JavaScript. Part 3</h1>

      <p class="subtxt">Now let's look at some more features in JavaScript, which did not have time in the first 2 parts. Historical features - Type conversion - Memoization etc.</p>

      <router-link to="/article/js/async">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/special-javascript-part-3/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "JsThree"
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
  background: url("../../assets/js/special-js-3.jpg");
  background-size: cover;
}
</style>