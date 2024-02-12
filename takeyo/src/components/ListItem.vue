<template>
    <li class="p-listItem">
        <div>
            <div class="p-listItem__image">
                <img :src="image" alt="" />
            </div>
        </div>
        <div class="p-listItem__title">{{ title }}</div>
    </li>
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
