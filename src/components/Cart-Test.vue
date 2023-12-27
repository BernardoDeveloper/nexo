<script setup>
import Button from './Button.vue';

defineProps({
    title: String,
    buttonText: String,
    imgSrc: String,
    imgAlt: String,
    isInactive: Boolean
})
</script>

<template>
    <div class="bg-box w-75 rounded-lg border-solid border-[1px] border-dark-white shadow-2xl">
        <img :src="imgSrc" :alt="altImg" class="w-full h-48 rounded-t-lg object-cover">

        <div class="py-5 px-5 flex flex-col justify-between items-center space-y-3">
            <h3 class="text-white text-2xl font-400 leading-normal">{{ title }}</h3>

            <p class="text-white/50 text-sm text-justify">
                <slot></slot>
            </p>

            <Button>{{ buttonText }}</Button>
        </div>
    </div>
</template>
