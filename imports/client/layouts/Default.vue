<template>
  <QLayout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
    <router-view />
    <TheFooter slot="footer" />
  </QLayout>
</template>

<script>
  import { QLayout, QToolbar, QToolbarTitle } from 'quasar-framework';
  import TheFooter from '../components/TheFooter.vue';

  export default {
    components: {
      QLayout,
      TheFooter,
    },
  }
</script>

<style module>

</style>
