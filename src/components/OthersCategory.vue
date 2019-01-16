<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/network">
				<img src="../assets/arrow-up.svg" class="arrow arrow-up">
			</router-link>

      <h1>Others articles</h1>

      <ol>
				<li v-for="item in itemsArticleOthers" :key="item.title">
					<router-link :to="item.link">{{item.title}}</router-link>
				</li>
			</ol>

    </div>

    <div class="right-content js-preview-img"></div>
  </div>
</template>

<script>
export default {
	name: 'OthersCategory',
  computed: {
    itemsArticleOthers() {
      let items = [
				{ title: "Awesome errors", link: "/article/others/errors" },
				{ title: "Algorithmics. Basis", link: "/article/others/algorithmics-basis" },
				{ title: "CSS. Preload", link: "/article/others/css-preload" },
				{ title: "PWA and AMP as a way to make the user happy", link: "/article/others/pwa" }
      ];
      return items;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

h1 {
  color: $red !important;
}
ol {
	padding: 0 0 0 7%;
  li {
		padding: 2% 0;
    a {
			font-weight: bold;
			color: $primary;
			&:hover{
				color: $red;
				transition: 0.3s;
			}
    }
  }
}
.js-preview-img {
  background: url("../assets/others-preview.png");
  background-size: cover;
}
</style>