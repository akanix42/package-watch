<template>
  <div>
    <div>Scan: {{scanId}}</div>
    <ScanProgress :scan="scan"/>
  </div>
</template>

<script>
  import ScanProgress from './ScanProgress';

  export default {
    components: {
      ScanProgress
    },
    name: 'scan'
  }
</script>

<style scoped>

</style>
