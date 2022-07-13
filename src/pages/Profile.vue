<template>
  <div class="flex-1 flex">
    <!-- profile section -->
    <div class="flex-1 bg-green-700"></div>
    
    <!-- trend section -->
    <Trends></Trends>
  </div>
</template>

<script>
import Trends from '../components/Trends.vue';
export default {
    components: { Trends }
}
</script>

<style>

</style>