<template>
  <main>
    <div class="p-nav-container">
      <div v-if="!showOpenNav" class="p-navBtnOpen" @click="eventClickOpenNav">
        <img :src="getImageUrl('IconHamMenuWhite.svg')" />
      </div>
      <transition name="slide-nav">
        <div v-if="showOpenNav" class="p-nav">
          <div @click="closeNav" class="p-navBtnClose">
            <img :src="getImageUrl('IconCloseWhite.svg')" />
          </div>
          <div class="p-navList">
            <RouterLink to="/" @click="closeNav">TOP</RouterLink>
            <RouterLink to="/holoearth-shop" @click="closeNav"
              >ホロアースWEBショップ</RouterLink
            >
            <RouterLink to="/creator-tools" @click="closeNav"
              >クリエイターツールズ</RouterLink
            >
            <RouterLink to="/creator-lp" @click="closeNav"
              >マーケットプレイスLP</RouterLink
            >
            <RouterLink to="/newspaper" @click="closeNav"
              >紙面ビューアー</RouterLink
            >
            <RouterLink to="/shikikakuijou" @click="closeNav"
              >色覚異常</RouterLink
            >
            <RouterLink to="/poster" @click="closeNav">映画ポスター</RouterLink>
            <RouterLink to="/graphic" @click="closeNav"
              >グラフィック</RouterLink
            >
            <RouterLink to="/animal-hospital" @click="closeNav"
              >動物病院LP</RouterLink
            >
          </div>
        </div>
      </transition>
    </div>
    <RouterView />
    <Footer />
  </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";
import Footer from "./components/Footer.vue";

export default {
  name: "TopIndex",
  components: {
    RouterLink,
    RouterView,
    Footer,
  },
  setup() {
    const showOpenNav = ref(false);

    const getImageUrl = (name) => {
      return new URL(`./images/${name}`, import.meta.url).href;
    };

    const eventClickOpenNav = () => {
      //true,falseを切り替え
      showOpenNav.value = true;
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
<style scoped>
/* slide-nav transition */
.slide-nav-enter-from,
.slide-nav-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-nav-enter-active,
.slide-nav-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-nav-enter-to,
.slide-nav-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
