<template>
  <div class="l-footer">
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
