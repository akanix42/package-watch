<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Package Watch</h1>
    <h6 :class="$style.tagline">Take the hassle out of managing dependencies!</h6>
    <form
        :class="$style.form"
        @submit.prevent="submitScan"
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
    <ScanProgress v-if="scanId" :scanId="scanId"/>
  </div>
</template>

<script lang="ts">
  import { QBtn, QField, QInput } from 'quasar-framework';
  import { IScan } from '../../../collections/scans';
  import requestScan from '../../../methods/requestScan';
  import ScanProgress from '../../components/ScanProgress';
  import { $style } from './Landing.vue';

  export default {
    name: 'landing',
    components: {
      ScanProgress,
      QBtn,
      QField,
      QInput,
    },
    data() {
      return {
        $style,
        scan: null,
        scanId: null,
        urlToScan: null,
      };
    },
    methods: {
      async submitScan() {
        const result = await requestScan.call({ url: this.urlToScan }) as IScan;
        if (result._id) {
          this.scan = result;
        } else {
          this.scanId = result;
        }
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

  .center {
    composes: flex justify-center from global;
  }

  .title {
    composes: center;
  }

  .tagline {
    composes: center;
    /*composes: text-italic from global;*/
  }

  .form {
    composes: center;
  }
</style>
