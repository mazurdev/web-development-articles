<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/js/one">
				<img src="../../assets/arrow-up.svg" class="arrow arrow-up">
			</router-link>

      <h1>Special JavaScript. Part 2</h1>

      <p class="subtxt">We continue. We will discuss the details of such important topics as: asynchrony, objects, lifting variables, scope, and talk about browser environments</p>

      <router-link to="/article/js/three">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/special-javascript-part-2/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "JsTwo"
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
  background: url("../../assets/js/special-js-2.jpg");
  background-size: cover;
}
</style>