<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Thai Hajj</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Pages</q-item-label>
        <page-link v-for="link in pageLinks" :key="link.title" v-bind="link" />

        <q-item-label header>Social Media</q-item-label>
        <essential-link
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="row reverse q-my-sm">
        <language-switcher />
      </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import PageLink from 'components/PageLink.vue';
import EssentialLink from 'components/EssentialLink.vue';
import LanguageSwitcher from 'components/LanguageSwitcher.vue';

const pageLinks = [
  {
    title: 'Home',
    caption: 'homepage',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Application',
    caption: 'form',
    icon: 'assignment',
    link: 'form',
  },
];

const essentialLinks = [
  {
    title: 'Instagram',
    caption: 'arabnewsinthailand',
    icon: 'instagram',
    link: 'https://www.instagram.com/arabnewsinthailand/',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    PageLink,
    EssentialLink,
    LanguageSwitcher,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      pageLinks,
      essentialLinks,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
