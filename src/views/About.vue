<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>What is it?</h1>
      <p class="subtxt">This is a preview-service for my articles</p>

      <button class="btn-go-to-articles">
        <router-link to="/javascript">INSPECT</router-link>
      </button>
    </div>
    <div class="right-content">
      <p>This is a preview-service where you can find my articles on development and not only, after reading which you will be one step closer to professional development</p>
      <div class="logo-preview-container">
        <router-link to="/angular">
          <img src="../assets/logo-preview/angular.png" alt="angular-logo">
        </router-link>
        <router-link to="/others">
          <img src="../assets/logo-preview/css.png" alt="css-logo">
        </router-link>
        <router-link to="/others">
          <img src="../assets/logo-preview/errors.png" alt="errors-logo">
        </router-link>
        <router-link to="/javascript">
          <img src="../assets/logo-preview/js.png" alt="js-logo">
        </router-link>
        <router-link to="/network">
          <img src="../assets/logo-preview/network.png" alt="network-logo">
        </router-link>
        <router-link to="/others">
          <img src="../assets/logo-preview/mobile.png" alt="mobile-logo">
        </router-link>
        <router-link to="/others">
          <img src="../assets/logo-preview/read.png" alt="base-logo">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'About',
	
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.left-content {
  background-color: $white;
  .btn-go-to-articles {
    background-color: $primary;
    @include card-shadow();
    @include font-style();
    border: 2px solid $primary;
    font-size: 1.5em;
    margin-top: 5%;
  }

  .btn-go-to-articles:hover {
    background-color: $primary-dark;
    transition: 0.3s;
  }
}

.right-content {
  background: $primary-dark;
  padding: 15% 10%;
  display: block;
  p {
    color: $white;
    text-align: center;
  }
  .logo-preview-container {
    display: flex !important;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 8%;
    a {
			padding: 1%;
      img {
        width: auto;
        max-width: 180px;
        max-height: 100px;
        border-radius: 6px;  
      }
    }
  }
}
.subtxt {
  font-size: 1.5em;
  margin-top: 30px;
}
</style>