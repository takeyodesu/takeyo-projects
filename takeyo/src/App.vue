<template>
  <main class="l-content">
    <div class="p-nav">
      <RouterLink to="/">TOP</RouterLink>
      <RouterLink to="/web">WEBアプリ</RouterLink>
      <RouterLink to="/shikikakuijou">色覚異常</RouterLink>
      <RouterLink to="/poster">映画ポスター</RouterLink>
      <RouterLink to="/graphic">グラフィック</RouterLink>
      <RouterLink to="/lp">動物病院LP</RouterLink>
    </div>
    <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import ListItem from "./components/ListItem.vue";
import About from "./components/About.vue";
import { ref, computed } from "vue";
export default {
  name: "TopIndex",
  components: {},
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`./images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
