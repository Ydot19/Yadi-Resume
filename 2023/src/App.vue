<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import top from './components/top.vue'
import left from './components/left.vue'
import right from './components/right.vue'
import Divider from 'primevue/divider';

</script>

<template>
  <div>
    <top />
  </div>
  <div class="grid">
    <div class="col-8 pr-2">
      <left/>
    </div>
    <Divider layout="vertical mt-3"></Divider>
    <div class="col pl-2">
      <right/>
    </div>
  </div>
</template>

