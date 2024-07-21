<template>
  <div>
    <img :src="image" alt="" />
    <div class="p-listItem__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
  computed: {},
};
</script>
