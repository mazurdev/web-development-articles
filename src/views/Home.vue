<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>Development articles</h1>

      <h3>Read and develop</h3>
      <p
        class="subtxt"
      >Here you will find my articles on development, features and more. Become a blogger to pro-development</p>
    </div>

    <div class="right-content home-preview-img">
      <button class="btn-go-to-articles">
        <router-link to="/javascript">GO</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins';



.home-preview-img {
  background: url("../assets/home-preview.jpg");
  background-size: cover;
}
</style>