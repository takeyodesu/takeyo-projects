<template>
  <div>
    <div data-scroll-animation="clip" class="p-mv u-sp">
      <img :src="getImageUrl('800x800.png')" />
    </div>
    <section class="l-content">
      <div data-scroll-animation="clip" class="TARGET-DESU">
        <h2 class="u-head">Projects</h2>
      </div>
      <div class="p-list">
        <RouterLink to="/web" class="p-listItem">
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
        <RouterLink to="/lp" class="p-listItem">
          <ListItem
            :image="getImageUrl('05-01.png')"
            title="動物病院LP"
          ></ListItem>
        </RouterLink>
      </div>
      <About></About>
    </section>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import ListItem from "../components/ListItem.vue";
import About from "../components/About.vue";
import { ref, computed, onMounted } from "vue";
import { initializeObserveAnimation } from "../js/SlideIn";

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
  setup() {
    onMounted(() => {
      const targetElements = document.querySelectorAll(
        "[data-scroll-animation]"
      );
      console.log("targetElements in TopView:", targetElements);

      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      initializeObserveAnimation(targetElements, options);
    });
  },
};
</script>
