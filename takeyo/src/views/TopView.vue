<template>
  <section>
    <h2>works</h2>
    <div class="p-list">
      <RouterLink to="/web">
        <ListItem :image="getImageUrl('01-01.png')" title="WEBアプリ"></ListItem
      ></RouterLink>
      <RouterLink to="/shikikakuijou">
        <ListItem :image="getImageUrl('02-01.png')" title="色覚異常"></ListItem>
      </RouterLink>
      <RouterLink to="/poster">
        <ListItem
          :image="getImageUrl('03-01.png')"
          title="映画ポスター"
        ></ListItem>
      </RouterLink>
      <RouterLink to="/graphic">
        <ListItem
          :image="getImageUrl('04-01.png')"
          title="グラフィック"
        ></ListItem>
      </RouterLink>
      <RouterLink to="/lp">
        <ListItem
          :image="getImageUrl('05-01.png')"
          title="動物病院LP"
        ></ListItem>
      </RouterLink>
    </div>
    <About></About>
  </section>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import ListItem from "../components/ListItem.vue";
import About from "../components/About.vue";

import { ref, computed } from "vue";
export default {
  name: "TopIndex",
  components: {
    ListItem,
    About,
  },
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
