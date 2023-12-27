<script setup>
defineProps({
    link: String
})
</script>

<template>
    <a :href="link"
        class="bg-accent max-w-max py-3 px-13 rounded rounded-lg font-700 leading-normal hover:bg-accent/90 hover:cursor-pointer transition-all duration-150">
        <slot></slot>
    </a>
</template>
