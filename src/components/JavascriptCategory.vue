<template>
  <div class="home main-content">
    <div class="left-content slideUp">

      <h1>JS articles</h1>

      <ol>
				<li v-for="item in itemsArticleJs" :key="item.title">
					<router-link :to="item.link">{{item.title}}</router-link>
				</li>
			</ol>

      <router-link to="/angular">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-img"></div>
  </div>
</template>

<script>
export default {
	name: 'JavascriptCategory',
  computed: {
    itemsArticleJs() {
      let items = [
        { title: "Special js. Part 1", link: "/article/js/one" },
        { title: "Special js. Part 2", link: "/article/js/two" },
				{ title: "Special js. Part 3", link: "/article/js/three" },
				{ title: "Asynchrony is not a parallelism", link: "/article/js/async" },
				{ title: "Objects and types in javascript", link: "/article/js/objects" },
				{ title: "Ecmascript. Simplify development", link: "/article/js/ecma" }
      ];
      return items;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

h1 {
  color: $orange !important;
}
ol {
	padding: 0 0 0 7%;
  li {
		padding: 2% 0;
    a {
			font-weight: bold;
			color: $primary;
			&:hover{
				color: $orange;
				transition: 0.3s;
			}
    }
  }
}
.js-preview-img {
  background: url("../assets/js-preview.jpg");
  background-size: cover;
}
</style>