<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/others/css-preload">
        <img src="../../assets/arrow-up.svg" class="arrow arrow-up">
      </router-link>

      <h1>PWA and AMP as a way to make the user happy</h1>

      <p class="subtxt">Faster pages give happier visitors. And happier visitors tend to stay, read and accept your content.</p>

    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/pwa-and-amp-user-happy/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "OthersPwa"
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
  background: url("../../assets/others/pwa-and-amp-preview.jpg");
  background-size: cover;
}
</style>