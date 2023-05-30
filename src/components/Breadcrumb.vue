<script setup>
defineProps({
    title: String,
    breads: Array,
})
</script>

<template>
    <section class="max-h-52 bg-no-repeat bg-center bg-cover h-[35vh]" style="background: url('https://lh3.googleusercontent.com/fife/APg5EObcPE_ryrT9rTn1dsqlCkuf7FLoFwIPIJGIZXffKyHGpNXJi0w1BHCn9rm8B9-CmzD9evIeVnwsqgPWZIaaKnM1ZIBCgOFSTAsc4mRxaE5d0VeAroA_Fc3mphr-0RmbA52Jb_CnWaUgvg-GMWCYqH3TOHEbzL67MwrTWfseey-lIA-iSxTh_90YbKRuO4z6_fHr23V5vBidfJQ9riZp0DIu3-AyTSIRlSCFn3ZRR_ZeKE1ZRaCv-78VswY0xA1_PGFB07s8LVVj9NE07xNO4pXwTnF_jISfxJ-RdatHM1Z4_zdUts7-HcTcUYGQnaZwiOBWmebWV19JjlmW0zfgKMtfVURm6_ZL5HbdME59KZ53QPJmLh8Efm0ncfuZ3FyRi6pcr4fLOlQICvSD9E2k1teNC74n2b44m5e77zZD37AaGsa5i8C13jcKjeeyE0dqvzr81MFhf54qRwfaE7C43U6a7So5Ldury_DM74-tRfwFqGDQ5scBv5kiMhp3Sm-BTWRDFYlOhWzRe89cGlUjBKe2WGDeV03981H69JKGGsFh6sNoxm3mEDILktT6yLpYes-llYexrhJ0_fV91bbjvXfqZTqEcUuXR0Bi6x7oD4-3-iCsGDChaNZjJIwDltoTX8DRLphHcnDkulXmO5yX3PP2xqi1mkjrexK8aT5o6YVAn0jotxpFUZW4qnUqrpKrM0g_F4s4c18_Euedmv5wVrzLHY782KZCjfRIv1oOjca9o3GaIkWKDiLGyxwSO3K2SJ0xzAcHw73tQWiVez8jMLd7Ghu8-dHolNhZEUi_g4-rtBRO3UxQee0iPm76CZNVEsvjrRckOB1U9uT5k5MScExg9Gz5iRfwA6hTv9AClzUWHg2P_sbi1DIIZFBBh7-vf8wvxua5LHRBRIl5ccxFQewRCM6r4HsoIJaPqZx27umgwav-1_6Xpx_Y2NztRA2TtLiklekB0X9AV2trFFz2xTgjR0LsPi3REyMr6NepUBJhAxX5bsEXEXiqh9hqE9hpnyMSMAeYO7FGPxiciiBAtHa7LWdHc6kcWt6NkV8ZhwzJG2nqqlt7nnX5IYWS1bCESiEFHIwsDa81zOYTyLQ75VB8waDuTbo0P62BDkTowXgIqaVjkf0Z9ogIYHngSbElzpk0NfiPyNZ7i87l4mS_DBt2mCVjfpjiaasF0n2vm4M7nUImqEk4qAX1MYKwHNX27H_cMAe7vaAimGGN2JnWE0x0XulilO9vaFCeJ-wsrm0Aqjv86VpJ3ArTdZwdtfLu7YLHDbbeplSRLBXvx1S8qN0hNwHoENTdHu0gCIKsvoQIfiveSPEJh0DJizeBqL4TLq_bR_SS04FixUX39K7VGnMVNZB2G5KbNvLBN-hovKrxygWCytgOLhrwJTXqJA4a070XhNx8Omz1hUF29Ro8ZirbV5zHybMJZD_aKRlLGqxYLRnrROdOBJvwOUiV7SMqSjVGRZwQVpb1AHvyLWxkJFQauAQJcxM9TiJyAln4fkEl5RMq0oh6W9wXNNg3oPwuoGQELVfaQCYhyyh-bLpPndc6ervi6zQsMZCO=w1060-h901')">
        <div class="bg-slate-900/60 text-right pt-20 text-white pr-8 max-h-52" style="height: 35vh;">
            <h2 class="font-bold text-xl" v-text="title"></h2>
            <div>
                <router-link :to="bread.to" v-for="(bread, i) in breads" :key="i">
                    {{ bread.name }}
                    <i class="mdi mdi-chevron-right mr-1" v-if="1 + i < breads.length"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>