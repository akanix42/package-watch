<template>
  <div>
    <div>Scan: {{scanId}}</div>
    <div v-if="scan">
      Scan: {{scan}}
      Status: {{scan.status}}
    </div>
  </div>
</template>

<script>
  import scansCollection from '../../collections/scans';
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
    created() {
      // scanProgress.withData(this.scanId).subscribe();
    },
    meteor: {
      $subscribe: {
        scans() {
          return [scanProgress.withData(this.scanId)];
        },
      },
      scan() {
        return scansCollection.findOne({ _id: this.scanId });
      },
    },
  }
</script>

<style scoped>

</style>
