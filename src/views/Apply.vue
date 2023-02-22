<script setup>
import { ref } from 'vue'
import { programs } from '../data';
import Breadcrumb from '../components/Breadcrumb.vue'
import Button from '../components/Button.vue';

const opened = ref(0)

const changeTab = (i) => {
    opened.value = i
}
</script>

<template>
    <Breadcrumb title="Apply for UM iCamp" :breads="[{
        to: '/',
        name: 'Home',
    }, {
        to: `/apply`,
        name: 'How to Apply',
    }]" />

    <section id="apply" class="p-8 lg:p-16 min-h-screen umbg bg-slate-200">
        <h1 class="text-2xl font-bold text-sky-500">How to Apply for KNB 2023</h1>

        <div class="grid grid-cols-3 border-b border-b-sky-400 my-6" data-aos="fade-down">
            <span :class="{
                'bg-sky-400 text-white rounded-t-xl': opened == i,
                'cursor-pointer': opened != i
            }"
            class="text-center p-2 md:p-4"
            v-for="(program, i) in programs"
            :key="i"
            v-text="program.name"
            @click="changeTab(i)" />
        </div>

        <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3 my-8" data-aos="fade-up" v-text="`Prepare all the required documents.`" />

        <div class="p-8 rounded-lg bg-slate-50 shadow-lg shadow-sky-200 mt-4">
            <ol class="list-decimal list-inside mb-6">
                <li v-for="(document, i) in programs[opened].application.documents" :key="i" v-text="document" />
            </ol>

            <h3 class="font-medium text-lg mb-3">Note:</h3>
            
            <ul class="list-disc list-inside">
                <li v-for="(note, i) in programs[opened].application.notes" :key="i" v-text="note" />
            </ul>
        </div>

        <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3 mt-12 mb-8" data-aos="fade-up" v-text="`Steps`" />
        
        <div class="mb-6" v-for="(step, i) in programs[opened].application.steps" :key="i">
            <h3 class="font-medium text lg mb-3" v-text="`Step ${1 + i}: ${ step.name }`" />

            <div class="p-8 rounded-lg bg-slate-50 shadow-lg shadow-sky-200 mb-4 max-w-full prose" v-for="(detail, j) in step.details" :key="j" v-html="detail" />
        </div>
    </section>
</template>