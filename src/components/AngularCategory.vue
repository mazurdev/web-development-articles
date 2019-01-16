<template>
  <div class="home main-content">
    <div class="left-content slideUp">

			<router-link to="/javascript">
				<img src="../assets/arrow-up.svg" class="arrow arrow-up">
			</router-link>

      <h1>Angular articles</h1>

      <ol>
				<li v-for="item in itemsArticleAngular" :key="item.title">
					<router-link :to="item.link">{{item.title}}</router-link>
				</li>
			</ol>

      <router-link to="/network">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-img"></div>
  </div>
</template>

<script>
export default {
	name: 'AngularCategory',
  computed: {
    itemsArticleAngular() {
      let items = [
        { title: "Angular Performance", link: "/article/angular/performance" }
      ];
      return items;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

h1 {
  color: $pink !important;
}
ol {
	padding: 0 0 0 7%;
  li {
		padding: 2% 0;
    a {
			font-weight: bold;
			color: $primary;
			&:hover{
				color: $pink;
				transition: 0.3s;
			}
    }
  }
}
.js-preview-img {
  background: url("../assets/angular-preview.jpg");
  background-size: cover;
}
</style>