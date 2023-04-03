<script setup>
import { ref } from 'vue'
import Sider from './Sider.vue'
import { programs } from '../data'

const sidebar = ref(false)

const determineOverflow = () => {
    document.querySelector('body').style.overflow = sidebar.value ? 'hidden' : null
}

const toggleSidebar = () => {
    sidebar.value = ! sidebar.value
    determineOverflow()
}

const closeSidebar = () => {
    sidebar.value = false
    determineOverflow()
}

const menus = [{
    to: '/',
    anchor: 'welcome',
    icon: 'home-outline',
    text: 'Home'
}, {
    to: '/',
    anchor: 'about',
    icon: 'information-outline',
    text: 'Introduction'
}, {
    to: '/',
    anchor: 'sdg',
    icon: 'trending-up',
    text: 'SDGs'
}, {
    to: '/',
    anchor: 'programs',
    icon: 'format-list-text',
    text: 'Programs'
}, {
    to: '/',
    anchor: 'requirements',
    icon: 'clipboard-list-outline',
    text: 'Requirements'
}, {
    to: '/',
    anchor: 'apply',
    icon: 'location-enter',
    text: 'Apply'
}, {
    to: '/',
    anchor: 'fees',
    icon: 'cash',
    text: 'Fee'
}, {
    to: '/',
    anchor: 'payments',
    icon: 'credit-card-outline',
    text: 'Payment'
}, {
    to: '/',
    anchor: 'timeline',
    icon: 'calendar-cursor',
    text: 'Timeline'
}, {
    to: '/',
    anchor: 'footer',
    icon: 'human-greeting-proximity',
    text: 'Contact'
}, {
    to: '/galleries',
    anchor: 'galleries',
    icon: 'image-area',
    text: 'Galleries'
}]
</script>

<template>
    <nav class="fixed bottom-[4.75rem] md:top-0 left-0 w-full md:h-full md:w-40 py-6 bg-slate-100 rounded-t-2xl md:rounded-r-2xl shadow-xl z-[15]">
        <!-- <button type="button" @click="toggleSidebar()" @keydown.esc="closeSidebar()">
            <i class="mdi mdi-dots-grid text-xl" />
        </button> -->

        <router-link to="/" v-scroll-to="'#welcome'" class="flex items-center justify-center gap-x-2 px-4 ">
            <img src="../assets/logo-horizontal.png" class="max-h-10" />
        </router-link>

    </nav>

    <div class="fixed bg-slate-100 bottom-0 md:left-0 h-20 md:h-[calc(100%-8rem)] md:inset-y-20 overflow-y-auto z-[16] w-full md:w-40">
        <div class="grid grid-rows-4 sm:grid-rows-3 grid-flow-col md:grid-flow-row md:grid-cols-1">
            <router-link v-for="(menu, i) in menus" :key="i" v-scroll-to="`#${ menu.anchor }`" :to="menu.to" class="text-icamp p-3 hover:bg-icamp hover:text-slate-100 hover:font-semibold flex flex-col justify-center items-center">
                <i :class="`mdi mdi-${menu.icon} mdi-24px`"/>
                <span v-text="menu.text" />
            </router-link>
        </div>
    </div>

    <!-- <div v-if="sidebar" @click="closeSidebar()" class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <Transition name="slide-fade" mode="in-out" :duration="{ enter: 500, leave: 800 }">
        <aside
        v-if="sidebar"
        class="fixed left-0 z-20 h-screen w-56 pt-20 bg-slate-50 shadow overflow-y-auto">
            <Sider :menus="menus"></Sider>
        </aside>
    </Transition> -->
    
</template>