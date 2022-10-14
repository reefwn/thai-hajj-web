<template>
  <q-page padding>
    <div class="q-pa-md q-mx-auto text-center" style="max-width: 720px">
      <div class="q-my-md">
        <q-btn
          color="blue-grey"
          label="Take picture (front)"
          @click="captureFrontImg"
        />
        <div class="q-my-md"><q-img :src="frontImg" /></div>
      </div>
      <div class="q-my-md">
        <q-btn
          color="blue-grey"
          label="Take picture (side)"
          @click="captureSideImg"
        />
        <div class="q-my-md"><q-img :src="sideImg" /></div>
      </div>
      <div class="q-my-md">
        <q-btn color="primary" label="Submit" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export default {
  name: 'Selfie',
  setup() {
    const frontImg = ref('');
    const sideImg = ref('');

    const captureImage = async () => {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      console.log(image.webPath);

      return image?.webPath || '';
    };

    const captureFrontImg = async () => {
      frontImg.value = await captureImage();
    };

    const captureSideImg = async () => {
      sideImg.value = await captureImage();
    };

    return {
      frontImg,
      sideImg,
      captureImage,
      captureFrontImg,
      captureSideImg,
    };
  },
};
</script>
