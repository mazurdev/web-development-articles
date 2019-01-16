<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/js/three">
				<img src="../../assets/arrow-up.svg" class="arrow arrow-up">
			</router-link>

      <h1>Asynchrony is not a parallelism</h1>

      <p class="subtxt">The most important topic in JavaScript ... Then does not happen immediately after now | “You Don’t Know JS”</p>

      <router-link to="/article/js/objects">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/asynchrony-is-not-a-parallelism/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "JsAsync"
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
  background: url("../../assets/js/async-js.jpg");
  background-size: cover;
}
</style>