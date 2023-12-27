<script setup>
import { ref } from 'vue';
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import Service from './components/Service.vue';
import CartTest from './components/Cart-Test.vue';
import ServiceAlternative from './components/ServiceAlternative.vue';

const cardData = ref([
    {
        titleCard: 'Sólido',
        description: 'Um serviço que não será instável.',
        imgSrc: '/solid.svg',
        altImg: 'quadrado em 3d',
    },
    {
        titleCard: 'Crescimento',
        description: 'Seu sucesso não vai despencar. Pelo contrário.',
        imgSrc: '/flight.svg',
        altImg: 'avião 2d visão superior'
    },
    {
        titleCard: 'Estabilidade',
        description: 'Sem te dar dores de cabeça.',
        imgSrc: '/coffee.svg',
        altImg: 'caneca de café'
    }
])
</script>

<template>
    <div
        class="bg-background text-white w-screen h-full px-50 font-sans leading-normal flex flex-col items-center space-y-10">
        <header class="flex flex-col items-center space-y-15">
            <span class="absolute -top-100 w-[800px] h-[200px] bg-accent/40 blur-[350px] rounded-full" />

            <h1 class="text-3xl  font-700 max-w-min text-center">Nexo</h1>

            <p class="text-white/50 text-center">
                A qualidade e controle que faltava, para você. Tudo <br /> pensando na sua melhor experiência!
            </p>

            <Button :link="'#products'">Conhecer</Button>
        </header>

        <section class="max-w-full">
            <div class="grid grid-rows-1 grid-flow-col gap-7">
                <div v-for="data in cardData">
                    <Card :title-card="data.titleCard" :description="data.description" :img-src="data.imgSrc"
                        :alt-img="data.altImg" />
                </div>
            </div>
        </section>

        <article id="products" class="w-full flex flex-col space-y-15">
            <CartTest title="Assistência Virtual" button-text="Vamos arrumar?" img-src="/assistence.jpg"
                img-alt="Tela de computador com código de programação">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illo at itaque nulla aliquam in provident
                blanditiis vitae! Consequatur, pariatur. Ad rem velit fuga suscipit voluptate repudiandae quos itaque porro?
            </CartTest>

            <ServiceAlternative title="Code">
                Building ideas!
            </ServiceAlternative>
        </article>
    </div>
</template>
