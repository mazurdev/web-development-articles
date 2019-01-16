<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/others/errors">
        <img src="../../assets/arrow-up.svg" class="arrow arrow-up">
      </router-link>

      <h1>Algorithmics. Basis</h1>

      <p class="subtxt">Algorithms are a set of rules that determine the sequence of operations. We will go over the main features and become one more step closer to professional development.</p>

      <router-link to="/article/others/css-preload">
        <img src="../../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/algorithms-the-basis/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "OthersAlgorithmics"
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
  background: url("../../assets/others/algorithmics.jpg");
  background-size: cover;
}
</style>