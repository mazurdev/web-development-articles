<template>
  <div class="home main-content">
    <div class="left-content slideUp">

      <h1>Angular Performance</h1>

      <p class="subtxt">Although initially Angular is well optimized, there are still some options that can improve performance.</p>

    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/performance-angular/" target="_blank">READ</a>
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
  color: $red !important;
}

.btn-go-to-articles:hover {
	background-color: $red;
}

.js-preview-article {
  background: url("../../assets/angular/angular-performance.jpg");
  background-size: cover;
}
</style>