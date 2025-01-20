<template>
    <div class="grid">
      <div class="col-2 pl-0 ml-0">
        <div class="flex ml-3 justify-content-left">
        <div ref="githubQRCode" class="ml-0 pl-0"></div>
        </div>
      </div>
      <div class="col-8 text-style-extra-light">
        <div class="flex text-center justify-content-center">
          <p class="mt-1 mb-0 margin-bottom-3px text-3xl">Yaadata (<span class="text-style-extra-light-italic">Yadi</span>) Abdalhalim</p>
        </div>
        <div class="block">
          <div class="card flex text-center justify-content-center text-3xs">
            <p class="margin-bottom-3px mt-1">
              Backend Software Engineer
            </p>
            <Divider layout="vertical" class="height-20px mb-0 pb-1"/>
            <p class="text-color-grey margin-bottom-3px mt-1">
              Distributed Systems
            </p>
            <Divider layout="vertical" class="height-20px mb-0 pb-1"/>
            <p class="text-color-grey margin-bottom-3px mt-1">
              Full Stack Engineering
            </p>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="flex justify-content-end">
          <div ref="linkedinQRCode" class="mr-1"></div>
        </div>
      </div>
    </div>
    <Divider class="mt-0 mb-1"/>
</template>

<style scoped>
.height-20px {
  height: 20px;
}

</style>

<script setup>
import Divider from 'primevue/divider';
import { QRCode } from 'easyqrcodejs';
import {ref, onMounted} from 'vue';

const linkedinQRCode = ref(null);
const githubQRCode = ref(null);
onMounted(()=>{
  let linkedinOpts = {
    text: "https://tinyurl.com/yv7j9kc8",
    width: 60,
    height: 60,
    correctLevel: QRCode.CorrectLevel.M,
    logo: 'linkedin.png',
    logoBackgroundTransparent: true,
    logoWidth: 25,
    logoHeight: 25,
    drawer: 'svg'
  };

  let githubOpts = {
    text: "https://tinyurl.com/ybzhfara",
    width: 60,
    height: 60,
    correctLevel: QRCode.CorrectLevel.M,
    logo: 'github.png',
    logoBackgroundTransparent: true,
    logoWidth: 30,
    logoHeight: 30,
    drawer: 'svg'
  }

  new QRCode(linkedinQRCode.value, linkedinOpts);
  new QRCode(githubQRCode.value, githubOpts);
})

</script>