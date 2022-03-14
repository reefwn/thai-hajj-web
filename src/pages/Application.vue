<template>
  <q-page padding>
    <div class="q-pa-md q-mx-auto" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="firstName"
          :label="$t('application.firstName') + ' *'"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || $t('application.error.empty'),
          ]"
        />

        <q-input
          filled
          v-model="lastName"
          :label="$t('application.lastName') + ' *'"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || $t('application.error.empty'),
          ]"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          :label="$t('application.age') + ' *'"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || $t('application.error.empty'),
            (val) =>
              (val > 0 && val < 100) || $t('application.error.age.limit'),
          ]"
        />

        <q-toggle v-model="accept" :label="$t('application.termAndCond')" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  name: 'Application',
  setup() {
    const $q = useQuasar();

    const firstName = ref(null);
    const lastName = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      firstName,
      lastName,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        firstName.value = null;
        lastName.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
