<template>
  <q-page padding>
    <div class="q-pa-md q-mx-auto" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          outlined
          v-model="firstName"
          :label="$t('application.firstName') + ' *'"
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
          v-model="dob"
          mask="date"
          :label="$t('application.dob') + ' *'"
          lazy-rules
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="dobRef"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="dob">
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      :label="$t('application.close')"
                      color="primary"
                      flat
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-toggle v-model="accept" :label="$t('application.termAndCond')" />

        <div>
          <q-btn
            :label="$t('application.submit')"
            type="submit"
            color="primary"
          />
          <q-btn
            :label="$t('application.reset')"
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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Application',
  setup() {
    const $q = useQuasar();
    const i18n = useI18n();

    const firstName = ref(null);
    const lastName = ref(null);
    const dob = ref(null);
    const accept = ref(false);

    const dobRef = ref(null);

    return {
      firstName,
      lastName,
      dob,
      accept,

      dobRef,

      onSubmit() {
        if (accept.value) {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: i18n.t('application.submitted'),
          });
        } else {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: i18n.t('application.failToSubmit'),
          });
        }
      },

      onReset() {
        firstName.value = null;
        lastName.value = null;
        dob.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
