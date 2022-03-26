<template>
  <div class="q-pa-md q-mx-auto" style="max-width: 500px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        :label="$t('login.label.email') + ' *'"
        :rules="[
          (val) => (val && val.length > 0) || $t('login.error.empty'),
          isValidEmail,
        ]"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        :label="$t('login.label.password') + ' *'"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || $t('login.error.empty'),
        ]"
      />

      <div>
        <q-btn
          class="full-width"
          :label="$t('login.button.submit')"
          type="submit"
          color="primary"
        />

        <q-btn
          flat
          class="full-width q-mt-sm"
          :label="$t('login.button.register')"
          type="button"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Login',
  setup() {
    const $q = useQuasar();
    const i18n = useI18n();

    const email = ref(null);
    const password = ref(null);

    return {
      email,
      password,

      isValidEmail(val: string): boolean | string {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || i18n.t('login.error.email');
      },

      onSubmit() {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: i18n.t('login.alert.success'),
        });
      },
    };
  },
});
</script>
