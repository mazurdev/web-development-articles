<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1>Awesome errors</h1>

      <p class="subtxt">This post will increase as you find and resolve errors that will occur in the development</p>

      <router-link to="/article/others/algorithmics-basis">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/awesome-errors/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "OthersErrors"
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
  background: url("../../assets/others/errors.jpg");
  background-size: cover;
}
</style>