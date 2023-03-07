<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
import Button from '../components/Button.vue'
import { infos, dates, programs, howTos, testimonials, galleries, timelines } from '../data'

const opened = ref(0)

const changeTab = (i) => {
    opened.value = i
}
</script>

<template>
    <div>
        <section id="welcome" class="w-full min-h-screen bg-cover relative text-white bg-[url('/src/assets/background.jpg')] bg-[center_top] bg-no-repeat bg-fixed flex items-center">
            <div class="w-full text-center flex flex-col">
                <div class="flex items-center justify-center">
                    <img src="../assets/white-horizontal.png" class="max-h-28 mb-4" />
                </div>

                <h1 class="text-5xl font-bold" data-aos="fade-down">
                    Broaden Your Vistas, Embrace Cultural Diversity
                </h1>
                <h3 class="font-medium mt-6" data-aos="fade-up">Connecting people through diverse cultures.</h3>

                <!-- <a href="https://knb.kemdikbud.go.id" data-aos="fade-up">
                    <Button class="text-lg">Apply Now</Button>
                </a> -->
            </div>
        </section>

        <section id="about" class="p-8 lg:p-16 min-h-screen umbg bg-yellow-50">
            <h1 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up">Introduction</h1>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
                <template v-for="(info, i) in infos" :key="i">
                    <div v-if="i % 2 == 0" class="flex items-center justify-center mb-6 md:mb-0" data-aos="fade-down">
                        <img v-lazy="info.image" alt="Image" class="max-h-64 rounded-lg">
                    </div>
                    
                    <div class="prose md:col-span-2">
                        <h2 class="text-xl font-semibold mb-4" v-text="info.name" data-aos="fade-right" />
                        
                        <p data-aos="fade-down" v-for="(content, j) in info.contents" :key="j" v-text="content" />

                        <ol class="list-decimal" v-if="info.lists" data-aos="fade-down">
                            <li v-for="(list, j) in info.lists" :key="j" v-text="list" />
                        </ol>
                    </div>

                    <div v-if="i % 2 == 1" class="flex items-center justify-center mb-6 md:mb-0" data-aos="fade-down">
                        <img v-lazy="info.image" alt="Image" class="max-h-64 rounded-lg">
                    </div>

                </template>
            </div>

            <h2 class="text-xl font-bold border-l-4 border-icamp pl-3 mb-4" data-aos="fade-up">UM iCamp Video</h2>

            <div class="flex justify-center">
                <iframe class="aspect-video rounded-lg max-h-80" width="100%" src="https://www.youtube.com/embed/q7iRKjJqRh0" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen="" />
            </div>
        </section>

        <section id="sdg" class="p-8 lg:p-16 min-h-screen umbg">
            <h1 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up">Our Support to SDGs</h1>

            <div class="md:grid md:grid-cols-2 gap-6 w-full mt-6">
                <div class="flex items-center justify-center mb-6 md:mb-0" data-aos="fade-down">
                    <img v-lazy="'sdg/text.png'" alt="SDG" class="max-h-64">
                </div>

                <div>
                    <div class="prose">
                        <p data-aos="fade-down">
                            We proudly present UM iCamp 2023 in order to support United Nations' Agenda for Sustainable Development in 2030 and Indonesia's commitment through Presidential Regulation Number 59 of 2017 concerning the Implementation of Achieving Sustainable Development Goals.
                        </p>
                        
                        <p class="mb-2 pb-0" data-aos="fade-down">
                            We expect to achieve the following goals through UM iCamp:
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-4">
                        <img v-for="(item, index) in [4, 9, 11, 15, 17]" :key="index" v-lazy="`sdg/${item}.png`" alt="SDG" class="max-h-64">
                    </div>
                </div>

            </div>
        </section>

        <section id="programs" class="p-8 lg:p-16 umbg bg-slate-50">
            <h2 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up" v-text="`Programs`" />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
                <template v-for="(program, i) in programs" :key="i">
                    <div v-if="i % 2 == 0" class="flex items-center justify-center mb-6 md:mb-0" data-aos="fade-down">
                        <img v-lazy="program.image" alt="Image" class="max-h-64 rounded-lg">
                    </div>
                    
                    <div class="prose">
                        <h2 class="text-xl font-semibold mb-4" v-text="program.name" data-aos="fade-right" />
    
                        <ol class="list-decimal" v-if="program.lists">
                            <li v-for="(list, j) in program.lists" :key="j" v-text="list" />
                        </ol>
                    </div>
    
                    <div v-if="i % 2 == 1" class="flex items-center justify-center mb-6 md:mb-0" data-aos="fade-down">
                        <img v-lazy="program.image" alt="Image" class="max-h-64 rounded-lg">
                    </div>
                </template>
            </div>

            <h4 class="text-xl font-semibold text-center prose mt-6" data-aos="fade-up">
                Download the flyer <a href="/flyer.jpg" target="_blank">here</a>
            </h4>
        </section>

        <section id="apply" class="p-8 lg:p-16 min-h-screen umbg bg-yellow-50">
            <h2 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up">How to Apply</h2>
            
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div class="prose max-w-full">
                    <ol class="list-[upper-latin]">
                        <li v-for="(howTo, i) in howTos" :key="i">
                            <h3 class="font-semibold" v-html="howTo.name" />
    
                            <ol class="list-decimal" v-if="howTo.lists">
                                <li v-for="(list, j) in howTo.lists" :key="j" v-html="list" />
                            </ol>
                        </li>
                    </ol>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-6 xl:gap-0 items-center">
                    <iframe class="md:col-span-2 xl:col-span-1 rounded-xl shadow-xl w-full aspect-video" height="315" src="https://www.youtube.com/embed/y1PM29mELz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

                    <a href="https://drive.google.com/file/d/11D4f2iOIs1v0M4D9DGW_iaoECDht3rE_/view" target="_blank" class="justify-self-center">
                        <Button>Download for PDF</Button>
                    </a>
                </div>
            </div>
        </section>
        
        <section id="timeline" class="p-8 lg:p-16 umbg bg-slate-50">
            <h2 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up" v-text="`Tentative Timeline`" />

            <h3 class="text-xl font-semibold my-4" v-text="'Important Dates'" data-aos="fade-right" />

            <ul>
                <li class="flex flex-col sm:flex-row sm:justify-between mb-2" v-for="(date, i) in dates" :key="i" data-aos="fade-right">
                    <p v-text="date.title" />
                    <span class="text-icamp font-semibold" v-text="date.date" />
                </li>
            </ul>

            <div class="grid grid-cols 1 md:grid-cols-2 gap-6 mt-6">
                <div v-for="(timeline, i) in timelines" :key="i">
                    <div class="px-4 py-3 bg-icamp rounded-t-xl">
                        <h3 class="text-xl font-semibold" v-text="timeline.title" />
                        <h4 class="font-medium" v-text="timeline.date" />
                    </div>

                    <div class="px-4 py-3 rounded-b-xl border border-icamp">
                        <div class="grid grid-cols-4" v-for="(agenda, j) in timeline.agendas" :key="j" v-if="timeline.agendas.length > 0">
                            <span v-text="agenda.time" />
                            <span class="col-span-3" v-text="agenda.title" />
                        </div>

                        <span v-else v-text="'TBA'" />
                    </div>
                </div>
            </div>
        </section>

        <section id="further" class="bg-[url('/gallery/1.jpg')] bg-[center] bg-no-repeat bg-fixed text-white text-center h-[50vh]">
            <div class="bg-icamp/50 h-full p-8 lg:p-16 flex items-center">
                <div class="w-full">
                    <h2 class="text-3xl font-bold mb-6">Apply Now!</h2>
        
                    <a href="https://seleksi.um.ac.id/intl">
                        <Button>Click Here</Button>
                    </a>
                </div>
            </div>
        </section>

        <section id="testimonials" class="p-8 lg:p-16 umbg">
            <h2 class="text-3xl font-bold border-l-4 border-icamp pl-3 mb-6" data-aos="fade-up" v-text="`What our previous participants say`" />

            <Splide :options="{
                autoplay: true,
                rewind: true,
            }" aria-label="Testimonials carousel">
                <SplideSlide v-for="(testimonial, index) in testimonials" :key="index" class="flex justify-center px-10 md:px-16">
                    <div class="grid grid-cols-4 gap-8 items-center">
                        <img v-lazy="testimonial.image" class="rounded-lg w-full max-h-32">
    
                        <div class="col-span-3">
                            <h3 class="font-semibold text-xl" v-text="testimonial.name" />
                            <h5 class="italic" v-text="testimonial.testi" />
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </section>

        <section id="galleries" class="p-8 lg:p-16 umbg bg-slate-200">
            <h2 class="text-3xl font-bold border-l-4 border-icamp pl-3 mb-6" data-aos="fade-up" v-text="`Gallery`" />

            <div class="grid grid-cols-2 gap-6">
                <a :href="gallery" target="_blank" v-for="(gallery, i) in galleries.slice(0, 4)" :key="i">
                    <img class="block object-cover object-center w-full h-full rounded-lg" v-lazy="gallery" alt="Gallery collections of UM iCamp">
                </a>
            </div>

            <div class="flex justify-center mt-6">
                <router-link to="/galleries">
                    <Button>View More</Button>
                </router-link>
            </div>
        </section>
    </div>
</template>