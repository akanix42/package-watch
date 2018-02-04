<template>
  <div>
    <div>Scan: {{scanId}}</div>
    <div v-if="scan">Status: {{scan.status}}</div>
  </div>
</template>

<script>
  import scanProgress from '../../publications/scanProgress';

  export default {
    props: {
      scanId: {
        type: String,
      },
    },
    data() {
      return {
        scan: null,
      };
    },
    meteor: {
      subscribe: [
        [scanProgress.withData(2)]
      ],
      scan() {
        return scansCollection.find({ _id: this.scanId });
      }
    },
  }
</script>

<style scoped>

</style>
