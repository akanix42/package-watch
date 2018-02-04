<template>
  <div :class="$style.container">
    <form
        :class="$style.form"
        @submit="submitScan"
    >
      <div class="col-12">
        <QField
            helper="Git, NPM, or Atmosphere url"
        >
          <QInput v-model="urlToScan" float-label="URL to scan"/>
        </QField>
      </div>
      <div class="row">
        <QBtn type="submit">Check Dependencies</QBtn>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { QBtn, QField, QInput } from 'quasar-framework';
  import { IScan } from '../../../collections/scans';
  import requestScan from '../../../methods/requestScan';

  export default {
    name: 'landing',
    components: {
      QBtn,
      QField,
      QInput,
    },
    data() {
      return {
        scan: null,
        urlToScan: null,
      };
    },
    methods: {
      async submitScan() {
        const result = await requestScan.call({ url: this.urlToScan }) as IScan;
        if (result._id) {
          this.scan = result;
        }

        alert('TODO: subscribe to scan publication');

      },
    },
  }
</script>

<style module>
  .container {
    composes: layout-padding from global;
    width: 800px;
    max-width: 90vw;
  }

  .form {
    composes: flex justify-center from global;
  }
</style>
