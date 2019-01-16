<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/others/algorithmics-basis">
        <img src="../../assets/arrow-up.svg" class="arrow arrow-up">
      </router-link>

      <h1>CSS. Preload</h1>

      <p class="subtxt">Let's take a look at the new Preload web standard, which will help us improve performance and reduce blocking of page rendering.</p>

      <router-link to="/article/others/pwa">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/css-preload/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "OthersCssPreload"
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

h1 {
  color: $primary !important;
}

.btn-go-to-articles:hover {
	background-color: $primary;
}

.js-preview-article {
  background: url("../../assets/others/css-preload.jpg");
  background-size: cover;
}
</style>