<template>
  <main>
    <div class="p-nav-container">
      <div v-if="!showOpenNav" class="p-navBtnOpen" @click="eventClickOpenNav">
        <img :src="getImageUrl('IconHamMenuWhite.svg')" />
      </div>
      <div v-if="showOpenNav" class="p-nav">
        <div @click="closeNav" class="p-navBtnClose">
          <img :src="getImageUrl('IconCloseWhite.svg')" />
        </div>
        <div class="p-navList">
          <RouterLink to="/" @click="closeNav">TOP</RouterLink>
          <RouterLink to="/web" @click="closeNav">紙面ビューアー</RouterLink>
          <RouterLink to="/shikikakuijou" @click="closeNav"
            >色覚異常</RouterLink
          >
          <RouterLink to="/poster" @click="closeNav">映画ポスター</RouterLink>
          <RouterLink to="/graphic" @click="closeNav">グラフィック</RouterLink>
          <RouterLink to="/lp" @click="closeNav">動物病院LP</RouterLink>
        </div>
      </div>
    </div>
    <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";

export default {
  name: "TopIndex",
  components: {
    RouterLink,
    RouterView,
  },
  setup() {
    const showOpenNav = ref(false);

    const getImageUrl = (name) => {
      return new URL(`./images/${name}`, import.meta.url).href;
    };

    const eventClickOpenNav = () => {
      //true,falseを切り替え
      showOpenNav.value = !showOpenNav.value;
    };
    const closeNav = () => {
      showOpenNav.value = false;
    };

    return {
      showOpenNav,
      getImageUrl,
      eventClickOpenNav,
      closeNav,
    };
  },
};
</script>
