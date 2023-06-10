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
    anchor: 'awardees',
    icon: 'seal',
    text: 'Accepted'
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
            <img src="https://lh3.googleusercontent.com/fife/APg5EObxmQs7DK03T4JdhdiH6ImCdvsX99WoncU-nrw1v4G7AhavsD1hRVchCXpf_NllOD7pPpABtAw41Lt4v_4nrDbjXLGpqb-C1gODgTyakaUA0KiYE1PTE8GjkZfniOdyxkB3-yIftAbUGn7wGB6DNV3yo37A_toxkUyw--J1jYDQHRULqY6d7RgbkFt5pAMNUzVwpPlkIFrkikV-4cCRwidE3S-Q7k2l3elR6iu6iKdiwLa6i_xh3LsCmzqJt1PYWQElzr3i_0v5CSRZBXqElFeXDQfu_RSlMjtjw4HU7kbCwbkMZhPpMbWWLBo7iKjflhc9-WiXP5tb1EeRW04PTjBhnSxVEVXUaGte57G61qBg9hkugujlQQNL4bBBqAnrfiUWzMcW7qMQH38TXeS1hsZAnr6slNUguiU67M4QiTGPOqSlB7mb2GKbpMQVfMwy690ZAK9d6kUjG1Z67qA5EFvcKnQHHzQuCxfsqMh8vRak1MhcG9uFi4uoArL0TB22HNvgHHwlzzMeQvq9OtMGis4R8E7otkU61_xwduZ0YUqy3o6LzghAadUDWqwssFqmuEUSmV5tQC-ODF85-T1Y4FLQ4OhjbQE9GJOCswWbkkftrU1f-dyE04-Q2LHNoVgGEtEecp80wzB6226DDSpqRUbgc66tiZOd67v0DvkUycFX1vvkeKiJ99N_V0zJw8QGtKdz0uAmTWXxLYQFZ7DsmKwwtVsRCRi0-Mf83MMQJtUnWX_fQktBIvqLrHNRWPNsP7CZER6dH-nNBElEdwTGKyXKkFyxRt6gNt7XCIlPsOqgHraRic1JTqhre7G5VrGVhrWuEt7FVKGNw2p9ZzGkIYf5bRSS81Ccp2RAXXvau_X8tO1DWq12olmgOXJr3qy2mgnau85U0dRm7o_BjPijaeIIIJgatj1GDPJCargpALOnzxe8aJJvsvBMqMDbc65TO1OyErT409kIsQ9ou_7MIrcqOONoX9XMT0nLBoE0tKs0iPLDKN3ST_BxjssT2ClcyacKMXxpGyZSb2N_IR6jsJJW9Hi_44QAdzyqscQHBQGsHdgXXqcdvmdv2vnvmWY-vfE_dEJDIBc3iWePzZBFYFFwrsabtfPMEKi5LrNI3s1NNTWDi7wLt1JKNMPlBWjWMt6A6pPYagROkL2WJmRNKotqEPKO2vO_YhdzJoFA9kaGSOGHlv7HO_Aku-84XXA2_b91lRGLriFtIqxLO7k63orSdhEZa4fMLPkq16L5tCAkg7kitB9mU4H5NJALTbYcPS9lHONT3-RWERGLYb7-AlEuGA29OnRoxQmOrAICdi33JBoFvIEac73ycFTUWPaeKNG866JnMYN5hTZVQvQJN22GHtaMxXeGGSh56YXskNxCQIqVxUWzFO4HqJ9vbZ0-jRfC16RJeh7Y2jx171T6M-wg4Q-AA972mihBuNc5fIZOTY2iPMCuzdEn0NZW2R4ieBsJ91iz9cncEteO-Wo_kQtQZV63W6mIqXk9uTv72p86m4-1mncSxmIfSwvfpK4fafl-cwxN4fibtwV1H8newvMfrs3OD_U-dlNA=w1060-h901" class="max-h-10" />
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