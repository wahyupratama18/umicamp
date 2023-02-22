<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="md:ml-36">
      <router-view :key="$route.fullPath" />

      <Footer />
    </main>
  </div>
</template>
