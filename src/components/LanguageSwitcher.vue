<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="Language"
    borderless
    emit-value
    map-options
    dense
    style="width: 150px"
  />
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'th-TH', label: 'Thai' },
      ],
    };
  },
};
</script>
