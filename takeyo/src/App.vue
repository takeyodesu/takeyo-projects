<template>
    <main class="l-content">
        <div class="p-nav">
            <RouterLink to="/">Top</RouterLink>
            <RouterLink to="/work01">work01</RouterLink>
            <RouterLink to="/work02">work02</RouterLink>
            <RouterLink to="/work03">work03</RouterLink>
            <RouterLink to="/work04">work04</RouterLink>
        </div>
        <RouterView />
    </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import ListItem from "./components/ListItem.vue";
import About from "./components/About.vue";
import { ref, computed } from "vue";
export default {
    name: "TopIndex",
    components: {},
    computed: {
        getImageUrl: () => {
            return (name) => {
                return new URL(`./images/${name}`, import.meta.url).href;
            };
        },
    },
};
</script>
