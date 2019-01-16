<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/js/async">
				<img src="../../assets/arrow-up.svg" class="arrow arrow-up">
			</router-link>

      <h1>Objects and types in javascript</h1>

      <p class="subtxt">Simple and complex primitives, embedded objects, data and behaviors, encapsulation, polymorphism.. Let's go in order.</p>

      <router-link to="/article/js/ecma">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/objects-and-types-in-javascript/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "JsObjects"
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
  background: url("../../assets/js/objects-js.jpg");
  background-size: cover;
}
</style>