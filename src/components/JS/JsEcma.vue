<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/article/js/objects">
				<img src="../../assets/arrow-up.svg" class="arrow arrow-up">
			</router-link>

      <h1>Ecmascript. Simplify development</h1>

      <p class="subtxt">EcmaScript is a specification with which anyone can create a js implementation. Let's quickly go through its main advantages and, thus, slightly simplify its development</p>
    </div>

    <div class="right-content js-preview-article">
			<button class="btn-go-to-articles">
        <a href="https://mazurdev.com/ecmascript-simplify-development/" target="_blank">READ</a>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: "JsEcma"
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
  background: url("../../assets/js/ecma-fast.jpg");
  background-size: cover;
}
</style>