<template>
  <q-page padding>
    <div class="q-pa-md q-mx-auto" style="max-width: 500px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
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

        <q-input
          filled
          v-model="idCard"
          :label="$t('application.idCard') + ' *'"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || $t('application.error.empty'),
            (val) =>
              (val && val.length === 13) || $t('application.error.length'),
          ]"
        />

        <div class="bg-grey-3 q-mt-md q-mb-lg">
          <q-expansion-item
            v-model="passportExpanded"
            icon="contact_page"
            :label="$t('application.passport.title')"
            :caption="$t('application.passport.description')"
          >
            <q-card class="bg-grey-3">
              <q-card-section>
                <q-input
                  filled
                  v-model="passportNumber"
                  :label="$t('application.passport.number') + ' *'"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || $t('application.error.empty'),
                  ]"
                />

                <q-input
                  filled
                  v-model="passportExiredDate"
                  mask="date"
                  :label="$t('application.passport.expiredDate') + ' *'"
                  lazy-rules
                  :rules="['date']"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="passportExiredDateRef"
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="passportExiredDate">
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
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>

        <div class="q-my-lg">
          <q-uploader
            style="width: 100%"
            url="http://localhost:4444/upload"
            :label="$t('application.selfImage')"
            auto-upload
            multiple
            accept="image/*"
            @rejected="onRejected"
          />
        </div>

        <div class="q-my-lg">
          <q-uploader
            style="width: 100%"
            url="http://localhost:4444/upload"
            :label="$t('application.housingDocument')"
            auto-upload
            multiple
            accept=".pdf, image/*"
            @rejected="onRejected"
          />
        </div>

        <q-toggle v-model="accept" :label="$t('application.termAndCond')" />

        <div class="row justify-between">
          <div>
            <q-btn
              :label="$t('application.submit')"
              type="submit"
              color="primary"
              :loading="submitting"
            >
              <template v-slot:loading>
                <q-spinner-ios />
              </template>
            </q-btn>
            <q-btn
              :label="$t('application.reset')"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
          <div>
            <q-btn
              :label="$t('application.save')"
              type="submit"
              color="primary"
              :loading="submitting"
            >
              <template v-slot:loading>
                <q-spinner-ios />
              </template>
            </q-btn>
          </div>
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
    const idCard = ref(null);
    const passportExiredDate = ref(null);
    const passportNumber = ref(null);
    const accept = ref(false);

    const dobRef = ref(null);
    const passportExpanded = ref(null);
    const passportExiredDateRef = ref(null);

    const submitting = ref(false);

    return {
      firstName,
      lastName,
      dob,
      idCard,
      passportExiredDate,
      passportNumber,
      accept,

      dobRef,
      passportExpanded,
      passportExiredDateRef,

      submitting,

      checkFileType(files: File[]) {
        return files.filter((file) =>
          ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type)
        );
      },

      onRejected() {
        $q.notify({
          type: 'negative',
          message: i18n.t('application.error.upload'),
        });
      },

      onSubmit() {
        if (accept.value) {
          // mock time spend
          submitting.value = true;
          setTimeout(() => {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: i18n.t('application.submitted'),
            });
            submitting.value = false;
          }, 3000);
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
        idCard.value = null;
        passportExiredDate.value;
        passportNumber.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
