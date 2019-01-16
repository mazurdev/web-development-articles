<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo" class="logo">MAZUR.dev</router-link>

          <ul>
            <li v-for="item in itemsNav" :key="item.title">
              <router-link :to="item.link">{{item.title}}</router-link>
            </li>
          </ul>

        </nav>

        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "App",
	computed: {
    itemsNav() {
      let items = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
				{ title: "JavaScript", link: "/javascript" },
				{ title: "Angular", link: "/angular" },
				{ title: "Network", link: "/network" },
				{ title: "Others", link: "/others" }
      ];
      return items;
    }
  }
};
</script>

<style lang="scss">
@import "global";

.logo {
  color: $primary;
  padding-left: 8%;
}
</style>