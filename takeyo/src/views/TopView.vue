<template>
  <div>
    <section class="l-content">
      <About></About>
      <h2 class="p-list-head">works</h2>
      <div class="p-list">
        <RouterLink to="/creator-tools" class="p-listItem">
          <ListItem
            :image="getImageUrl('06-01.png')"
            title="ホロアース クリエイターツールズ"
          ></ListItem
        ></RouterLink>
        <RouterLink to="/creator-lp" class="p-listItem">
          <ListItem
            :image="getImageUrl('07-01.png')"
            title="クリエイターツールズLP"
          ></ListItem
        ></RouterLink>
        <RouterLink to="/newspaper" class="p-listItem">
          <ListItem
            :image="getImageUrl('01-01.png')"
            title="紙面ビューアーWEBアプリ"
          ></ListItem
        ></RouterLink>
        <RouterLink to="/shikikakuijou" class="p-listItem">
          <ListItem
            :image="getImageUrl('02-01.png')"
            title="色覚異常"
          ></ListItem>
        </RouterLink>
        <RouterLink to="/poster" class="p-listItem">
          <ListItem
            :image="getImageUrl('03-01.png')"
            title="映画ポスター"
          ></ListItem>
        </RouterLink>
        <RouterLink to="/graphic" class="p-listItem">
          <ListItem
            :image="getImageUrl('04-01.png')"
            title="グラフィック"
          ></ListItem>
        </RouterLink>
        <RouterLink to="/animal-hospital" class="p-listItem">
          <ListItem
            :image="getImageUrl('05-01.png')"
            title="動物病院LP"
          ></ListItem>
        </RouterLink>
      </div>
    </section>
  </div>
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
