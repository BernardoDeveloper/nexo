<script setup>
import Button from './Button.vue';

defineProps({
    title: String,
    buttonText: String,
    imgSrc: String,
    imgAlt: String,
    positionRight: Boolean
})
</script>

<template>
    <div class="flex items-center justify-between space-x-30" :class="(positionRight) ? 'text-right' : 'text-left'">
        <img :src="imgSrc" :alt="imgAlt" class="w-70 h-100 rounded rounded-lg object-cover" :hidden="!positionRight">

        <div class="space-y-10">
            <h3 class="text-white text-2xl font-800 leading-normal">{{ title }}</h3>

            <p class="pb-7 max-w-120">
                <slot></slot>
            </p>

            <Button link="https://wa.me/11969235721">{{ buttonText }}</Button>
        </div>

        <img :src="imgSrc" :alt="imgAlt" class="w-70 h-100 rounded rounded-lg object-cover" :hidden="positionRight">
    </div>
</template>
