<template>
  <div class="q-pa-md q-mx-auto" style="max-width: 500px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        :label="$t('register.label.email') + ' *'"
        :rules="[
          (val) => (val && val.length > 0) || $t('register.error.empty'),
          isValidEmail,
        ]"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        :label="$t('register.label.password') + ' *'"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || $t('register.error.empty'),
        ]"
        :hint="$t('register.hint.password')"
      />

      <q-input
        filled
        type="password"
        v-model="confirmPassword"
        :label="$t('register.label.confirm_password') + ' *'"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || $t('register.error.empty'),
          isPasswordMatched,
        ]"
      />

      <div>
        <q-btn
          class="full-width"
          :label="$t('register.button.submit')"
          type="submit"
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
  name: 'Register',
  setup() {
    const $q = useQuasar();
    const i18n = useI18n();

    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);

    return {
      email,
      password,
      confirmPassword,

      isValidEmail(val: string): boolean | string {
        const pattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return pattern.test(val) || i18n.t('login.error.email');
      },

      isValidPassword(val: string): boolean | string {
        const pattern =
          /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/;
        return pattern.test(val) || i18n.t('login.error.password');
      },

      isPasswordMatched(val: string): boolean | string {
        return (
          val === password.value || i18n.t('register.error.password_match')
        );
      },

      onSubmit() {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: i18n.t('register.alert.success'),
        });
      },
    };
  },
});
</script>
