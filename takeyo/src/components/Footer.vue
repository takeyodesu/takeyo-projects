<template>
  <div class="l-footer">
    <p>より詳細な資料もございます。ご希望の方はお気軽にご連絡ください。</p>
    <p>takeyodesu@gmail.com</p>
    <small>&copy; 2025 takeyodesu. All Rights Reserved.</small>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "About",
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
