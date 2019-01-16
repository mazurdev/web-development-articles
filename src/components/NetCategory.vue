<template>
  <div class="home main-content">
    <div class="left-content slideUp">

      <router-link to="/angular">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>

      <h1>Network articles</h1>

      <ol>
        <li v-for="item in itemsArticleNet" :key="item.title">
          <router-link :to="item.link">{{item.title}}</router-link>
        </li>
      </ol>

      <router-link to="/others">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down">
      </router-link>
    </div>

    <div class="right-content js-preview-img"></div>
  </div>
</template>

<script>
export default {
  name: "NetworkCategory",
  computed: {
    itemsArticleNet() {
			let items = [
				{ title: "Computer networks under the hood. Part 1", link: "/article/net/one" },
				{ title: "Computer networks under the hood. Part 2", link: "/article/net/two" },
				{ title: "Computer networks under the hood. Part 3", link: "/article/net/three" }
			];
      return items;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

h1 {
	color: $blue !important;
}
ol {
	padding: 0 0 0 7%;
  li {
    padding: 2% 0;
    a {
      font-weight: bold;
      color: $primary;
      &:hover {
        color: $blue;
        transition: 0.3s;
      }
    }
  }
}
.js-preview-img {
  background: url("../assets/network-preview.jpg");
  background-size: cover;
}
</style>