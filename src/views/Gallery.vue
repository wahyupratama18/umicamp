<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import NotFound from './NotFound.vue'
import Table from '../components/Table.vue'
import { ref } from 'vue'

const galleries = [
    {year: 2016, total: 75},
    {year: 2017, total: 98},
    {year: 2018, total: 99},
    {year: 2019, total: 65},
]

const selected = ref(0)

const changeRef = i => {
    selected.value = i
}

const parseImage = i => {
    return `gallery/${ galleries[selected.value].year }/umicamp (${i}).jpg`
}
</script>

<template>
    <Breadcrumb title="Gallery" :breads="[{
        to: '/',
        name: 'Home',
    }, {
        to: `/galleries`,
        name: 'Gallery',
    }]" />

    <section id="galleries" class="p-8 lg:p-16 min-h-screen">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div class="cursor-pointer rounded-xl p-4 text-center"
            v-for="(gallery, i) in galleries" :key="i"
            :class="{'bg-icamp': i == selected}"
            v-text="gallery.year" @click="changeRef(i)" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <a :href="parseImage(i)" v-for="i in Array.from({length: galleries[selected].total }, (x, i) => 1 + i)" :key="i" target="_blank">
                <img v-lazy="parseImage(i)" :alt="`Documentation ${blah}`" class="block object-cover object-center w-full h-full rounded-lg">
            </a>
        </div>
    </section>
</template>