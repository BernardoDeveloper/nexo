<script setup>
defineProps({
    imgSrc: String,
    altImg: String,
    titleCard: String,
    description: String,
})
</script>

<template>
    <div
        class="bg-box w-75 h-75 px-7 flex flex-col items-center justify-center rounded-lg border-solid border-[1px] border-dark-white shadow-2xl hover:shadow-none transition duration-150">
        <img :src="imgSrc" :alt="altImg" class="w-15 h-15">

        <h3 class="text-white text-2xl font-400 leading-normal mt-3 mb-7">{{ titleCard }}</h3>

        <p class="text-white/50 text-xl text-center">{{ description }}</p>
    </div>
</template>
