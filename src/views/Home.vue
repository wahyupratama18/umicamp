<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
import Button from '../components/Button.vue'
import { infos, dates, programs, howTos, schemes, fees, payments, testimonials, galleries, timelines, requirements } from '../data'
import Table from '../components/Table.vue'

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
                    <img src="https://lh3.googleusercontent.com/fife/APg5EOams8tZlgN2YEOMGqSnMHr62sn7j-pyuBT30ed29DmMoTrLhLE2X20FaGAihilHvEGTXXhImnkzdX4HV8Wo6_WzwwpurNoN_Q0S_zW6cqPUz1IBL8j_O1Cplg8myuZxMOrUPZ01zZ7xeoKlYbLbijYwQhhoKIAPaIVWA-L9K3mqA5K0ZJUCI3MdDjubh3ibvEvUzXmfskAJRJWZUgCWw2ar3oSY-J7VerrMAbwmdup7Kvw9B9RQ8enhApzA72Hv7lLn0h2mslPMQwDT65Ec-xcXdyujqAuH0qN6rjR4bSc92nMjTn_rs9vh4Drm5piNJOCxocqdMk1hloS35BhH25f3xH4h54uYdT2YDZB0SF1kivhbNCsy4PGBot6UmG7etXcyhKjS8c_zrcqPNjz3Hqik_A9SL6XP5PXeZKPNDxHWq-Xf5eL0mCCqm8-piACIJt_V0o12M0m6n2UczAzXdhxIjfO8mvFVI30rU7WsF5SWR6vBUWlFrgI-eqbK3zB2nTMPutK7uRxJ5zKo4bOyXrZwiMBsbbRj4NzR8lwa1IFfSpJI6ilCfvkMYPLa8_4f0_aZXXibebjltDbSslRrMfleosfFkpsRuQg43b5EZOqnIs3ZyI3UiIX-5TNliBEolmoV_6FqOswnRbwmghiYC4HZh-5t1EwW9sOZV9X-m3XwRvmIi68-_cZl8-eRgYrGlOGQAGsLp5vU60dIZK255zEDbK62UAQwLcfBj3Gx-Z7TfbTAkwb2nXCvifi51jnhkGwcKnW-NwfBwN-fX0nQvdECKqA16coG-DfkjDUMZX8dYC4Oj6INCQp9hruQh2wd1onCz5yVjLXVA3ZKZIY_6BjE7SOW1u2gtZO1nAUtfVN16zsH1s_Tr7iKSBpUayEGvMQrpp4PxFDUu19LuMfZdycet_0ViE5Sj1m22MIA3xCEWq8B083iqeGXJ5ASYMeNWltFyrls8nBtJa3MORzDi643uFYKAINQoEjmBH_QQ0zxfkLJ4Hy2Y41qX6FrxxGQWjK-O6GNMSFrsO9tFk9yO2Y310CJ1W46lbjkcDLtgFqeQSmuR-SNiiYdpXkiqoKcOQm90u4ihd5kJwBfYbhpZFClQ0Ud2bAzs1n2ZOGloJ4tc0usZxuplBztFFpdDQZ1nLMaZ-ShvBaDb5KtxQ3lszTdIWlKwO_FJAEgRKlLzIMGAGPtMyh-Wu3zmpOzxteIkK5mm9gLgYQdeLAz_JMUVcLy69qVlFtoMSMpjp4j2Q-MrsjJI-9rGWZOkay7J0o9T1z61NxvChu4W_Ew4_q55-dylt3ZXBmATzNidOLG8FlXmSq_fkrg163bSvEG_W1SWAqRbfXFtSulDinz6fyF2MQXVgjRfJYYUgICn__AbpwOO1QKoDJVwFFqlz0kGmWYZe9lBu2aG2-UVuuTnwfM1WB5fUucBHysGjU8fF-dNVVLUoWKoh08YFeQ_DmdZX3MTUi01RLmCffIywwGBl2ssPNIaOi25qbVdKmCrPTSmjo6UMGCoh5EXlRBpuIakT6QorbFjS9oMYDZS0DsjarIm9YZJSCQsygb-QLX=w1060-h901" class="max-h-28 mb-4" />
                </div>

                <h1 class="text-5xl font-bold" data-aos="fade-down">
                    Broaden Your Vistas, Embrace Cultural Diversity
                </h1>
                <h3 class="font-medium my-6" data-aos="fade-up">Connecting people through diverse cultures.</h3>

                <a href="https://forms.gle/vsSexyb18hLYzix29" data-aos="fade-up">
                    <Button class="text-lg rounded-full">Apply Now!</Button>
                </a>
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
                <iframe class="aspect-video rounded-lg" width="100%" src="https://www.youtube.com/embed/VNB3LPIgcPI" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen="" />
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

        <section id="awardees" class="p-8 lg:p-16 umbg bg-yellow-50 prose max-w-full">
            <h2 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up" v-text="`Selected UM iCamp Participants`" />

            <p>
                The announcement you've been waiting for is finally here! We are pleased to announce the selected & reserved participants of UM iCamp 2023 at the following buttons:
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                <a href="https://bit.um.ac.id/umicamp23_acc" target="_blank" class="text-center">
                    <Button class="text-lg rounded-full">Accepted</Button>
                </a>
                <a href="https://bit.um.ac.id/umicamp23_rsv" target="_blank" class="text-center">
                    <Button class="text-lg rounded-full">Reserved</Button>
                </a>
            </div>

            <p>
                To all accepted participants, please complete all the confirmation steps before <b>June 12, 2023</b>! Check the instructions sent to your email. 
            </p>
            <p>
                To reserved participants, you will be offered a spot <b>once</b> a participant from the accepted list declines the offer. Otherwise, refer to the instruction sent to your e-mail to skip all the waiting and join us in UM iCamp 2023 right away!
            </p>
        </section>

        <section id="requirements" class="p-8 lg:p-16 umbg bg-slate-100">
            <h1 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up">Requirements</h1>

            <div class="prose max-w-full">
                <ol class="list-[upper-latin]">
                    <li v-for="(requirement, i) in requirements" :key="i">
                        <span v-html="requirement" />
                    </li>
                </ol>
            </div>
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

                <!-- <a href="https://drive.google.com/file/d/11D4f2iOIs1v0M4D9DGW_iaoECDht3rE_/view" target="_blank" class="justify-self-center">
                    <Button>Download Booklet (PDF)</Button>
                </a> -->
                <!-- <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-6 xl:gap-0 items-center">
                    <iframe class="md:col-span-2 xl:col-span-1 rounded-xl shadow-xl w-full aspect-video" height="315" src="https://www.youtube.com/embed/y1PM29mELz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

                </div> -->
            </div>
        </section>

        <section id="fees" class="p-8 lg:p-16 umbg bg-slate-100">
            <h2 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up" v-text="`Program Fee`" />

            <Table>
                <thead>
                    <tr class="bg-icamp">
                        <th v-text="'Coverage'" />
                        <th v-for="(scheme, i) in schemes" :key="i" v-text="scheme" />
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(fee, i) in fees" :key="i">
                        <td>
                            <ol class="list-disc ml-4" data-aos="fade-down">
                                <li v-for="(coverage, j) in fee.coverages" :key="j" v-text="coverage" />
                            </ol>
                        </td>
                        <td v-for="(scheme, j) in fee.schemes" :key="j" v-text="scheme" data-aos="fade-down" />
                    </tr>
                </tbody>
            </Table>
        </section>
        
        <section id="payments" class="p-8 lg:p-16 umbg">
            <h2 class="text-3xl font-bold border-l-4 border-icamp pl-3" data-aos="fade-up" v-text="`Payment`" />

            <Table>
                <tbody>
                    <tr v-for="(payment, i) in payments" :key="i" data-aos="fade-down">
                        <td v-text="payment.name" />
                        <td v-text="':'" />
                        <td v-text="payment.value" />
                    </tr>
                </tbody>
            </Table>
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
                        <ol class="list-decimal list-inside">
                            <!-- <span v-text="agenda.time" /> -->
                            <li v-text="agenda.title" v-for="(agenda, j) in timeline.agendas" :key="j" />
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section id="further" class="bg-[url('https://lh3.googleusercontent.com/fife/APg5EObeYRBvLz6Ea3o2shYjMznXbq2-pLLLo0JWsBpjMz44LTxn6TOUV4WnLaHOfV6pG7Wh0FMTCjcZg-OZ2NQUIR7P21jgg1jhAwm2p962FW9dKSBjfANmyT8h3TEj1k2xXiTJLsFF35mKYAJQcVPnzaZaMFRUshhzIi_9efiRNVzUyLlMvlsRVq9WCBmGTMb6wRI6QJTFZ3O2bxH4Rrs9o94ABJN20Ze1u0ekUdLSt8F4dr4gowA_G_SWFo9eCHR6PuedcuI6VrOiilmF_e7_K6YNUPeLzUFYd5MJPuENnYIlvpa8umW00I8KvDTp_pPJnMCquhuSp1v49viWI7_9bO2_r8PZN72075iUnFpS2E623lbOCtoM3s1tDLLWTWRNfrMwoRAXXd9gsCohiGyfpHczUmRoozBjpVeroiBW6CS0pwKHg2oyllTNoO45EThsOVLFjA5MmPBg0lbFOLgaQl9oDWTLRYhJhEjgXU0VmB3AsZYwRTJfH6iIdBwTfZ5GNPMj3ercNyJnvXwNFCBnMs882eeDlv3sx6WldZa-5-TltzzG9Bt1AN275g3tCyK4OE6osJPyj7RbWzf3--WBnAodTjcEtUVLqlmZ6LU8EzM6UfhqcP4T0Gbrcmwnx2225tZKuXEIjPsrXSlByVUHuDr95GwsrYsSceGF1wzV8iYzzjMuD-htzpii-OxwbnQMmWzQIqSzlSOyRq1dVTVfx8s9Sl8sLzhrMqcTZCAVIeslPGi6e582L5A-4o4tKK8HVhHrKTsC3PJwHIIX2ZTQlhw8kQKj4otMUKlelilAeplzrAqobgBd4jlZs2GoWpM8SgwpXgjCluPcIB3uo9yjyzCXTauoKwH1fxm38x-yvl0aTGg3QbUnZ45XSNPefP7ByqZEVcg3JtRNwLFYGcuDh6t4k-Vw3I74NnwFm1SkbEkv78r10FRokHlpVsw2j0rMrI52RQc-vKKqF1PILXAiJsMtJVzkf4t-ISnis45Xmywyy_r6e6W6_P5iHeodhcAINJsi4SlFvE_XuUEZyfsrSoUOAr6F4asw7Zrw7-XYSiMKnGDWxGuUg2snESqn8aQyISSMbrz0drB8KH8jRKuMu2-45xB6uytHllLTXfbLTUzcjaFIqQLP7i8I4VjOCUNVfw6kMkJVAqZI3mmv5nU-S52VYhprRiLb0cxwLjtLl5DpnMd9AbW-9aYa3erJkR5bEAX-zmTW-nOYITVwgusyKEzSuRXNek3CnGWzLcBEtE3pC4RomPszKXnfjbveqKg7GxnEmCWg0QBDO3dCFpl5AjK_b0_tJzNXm9HHLXGrCj0xz-lI-gW-W9GUNGopcUBSNe2zYoltH-rnJlwqaf-vbARR198NfxvqD_DaABMV4JEqRNqvM40VuOwMaf1N4OM6NaLfgvg-__yiq_6RgEjS26BYWFEHL1ZjkRuoTWBxi_dwVqCrFqII-Br50Z3XH1zDDPS8RstJ2m0lZi9f1b_fjhub6MJtLRXugiezC6zt5eVA2spxBYts4chFjUspYIZYLTCf1ZRZXFbmZxJAPlvN2GC5x1F8GofQw9hm=w1060-h901')] bg-[center] bg-no-repeat bg-fixed text-white text-center h-[50vh]">
            <div class="bg-icamp/50 h-full p-8 lg:p-16 flex items-center">
                <div class="w-full">
                    <h2 class="text-3xl font-bold mb-6">Apply Now!</h2>
        
                    <a href="https://forms.gle/vsSexyb18hLYzix29" disabled>
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
                    <div class="grid md:grid-cols-4 gap-8 items-center">
                        <div class="flex justify-center items-center">
                            <img v-lazy="testimonial.image" class="rounded-lg aspect-square max-h-32">
                        </div>
    
                        <div class="md:col-span-3">
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