<script setup>
defineProps({
    title: String,
})
</script>

<template>
    <div
        class="flex flex-col p-5 space-y-5 border border-orange border-2 rounded-xl w-70 hover:bg-orange hover:cursor-pointer transition-all duration-200">
        <h3 class="text-lg font-semibold">{{ title }}</h3>

        <p class="">
            <slot></slot>
        </p>

        <a href="">Ready more</a>
    </div>
</template>
