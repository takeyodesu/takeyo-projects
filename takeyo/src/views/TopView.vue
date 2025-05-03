<template>
  <div>
    <section class="l-content">
      <About data-scroll-animation="clip"></About>
      <h2 class="p-list-head" data-scroll-animation="clip">works</h2>
      <div class="p-list">
        <RouterLink
          to="/creator-tools"
          class="p-listItem"
          data-scroll-animation="clip"
        >
          <ListItem
            :image="getImageUrl('06-01.png')"
            title="ホロアース クリエイターツールズ"
          ></ListItem
        ></RouterLink>
        <RouterLink
          to="/creator-lp"
          class="p-listItem"
          data-scroll-animation="clip"
        >
          <ListItem
            :image="getImageUrl('07-01.png')"
            title="クリエイターツールズLP"
          ></ListItem
        ></RouterLink>
        <RouterLink
          to="/newspaper"
          class="p-listItem"
          data-scroll-animation="clip"
        >
          <ListItem
            :image="getImageUrl('01-01.png')"
            title="紙面ビューアーWEBアプリ"
          ></ListItem
        ></RouterLink>
        <RouterLink
          to="/shikikakuijou"
          class="p-listItem"
          data-scroll-animation="clip"
        >
          <ListItem
            :image="getImageUrl('02-01.png')"
            title="色覚異常"
          ></ListItem>
        </RouterLink>
        <RouterLink
          to="/poster"
          class="p-listItem"
          data-scroll-animation="clip"
        >
          <ListItem
            :image="getImageUrl('03-01.png')"
            title="映画ポスター"
          ></ListItem>
        </RouterLink>
        <RouterLink
          to="/graphic"
          class="p-listItem"
          data-scroll-animation="clip"
        >
          <ListItem
            :image="getImageUrl('04-01.png')"
            title="グラフィック"
          ></ListItem>
        </RouterLink>
        <RouterLink
          to="/game-color-picker"
          class="p-listItem"
          data-scroll-animation="clip"
        >
          <ListItem
            :image="getImageUrl('08-01.png')"
            title="GameColorPicker"
          ></ListItem>
        </RouterLink>
        <RouterLink
          to="/animal-hospital"
          class="p-listItem"
          data-scroll-animation="clip"
        >
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
        threshold: 0,
      };

      initializeObserveAnimation(targetElements, options);
    });
  },
};
</script>
<style scoped>
/* アニメーション前の状態：左に30pxずれて透明 */
[data-scroll-animation="clip"] {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* アニメーション後の状態：元の位置に戻って透明度100% */
[data-scroll-animation="clip"][data-animated="true"] {
  opacity: 1;
  transform: translateX(0);
}
</style>
