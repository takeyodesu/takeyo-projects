<template>
  <main>
    <div class="p-nav-container">
      <div class="p-navBtn" @click="eventClickOpenNav">
        <img :src="getImageUrl('IconHamMenuWhite.svg')" />
      </div>
      <div v-if="showOpenNav" class="p-nav">
        <RouterLink to="/" @click="closeNav">TOP</RouterLink>
        <RouterLink to="/web" @click="closeNav">WEBアプリ</RouterLink>
        <RouterLink to="/shikikakuijou" @click="closeNav">色覚異常</RouterLink>
        <RouterLink to="/poster" @click="closeNav">映画ポスター</RouterLink>
        <RouterLink to="/graphic" @click="closeNav">グラフィック</RouterLink>
        <RouterLink to="/lp" @click="closeNav">動物病院LP</RouterLink>
      </div>
    </div>
    <div class="l-content">
      <RouterView />
    </div>
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