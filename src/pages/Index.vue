<template>
  <q-page class="row items-center justify-evenly">
    <q-btn
      :label="$t('index.button.application')"
      type="button"
      color="primary"
      @click="$router.replace('application')"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {};
  },
});
</script>
