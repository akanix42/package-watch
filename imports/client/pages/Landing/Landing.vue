<template>
  <div>
    <form @submit="submitScan">
      <input v-model="urlToScan">
      <button :class="$style.foo" type="submit">Check Dependencies</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'landing',
    data() {
      return {
        urlToScan: null,
      };
    },
    methods: {
      submitScan() {
        alert('scan submitted for a cat and a dog!!' + this.urlToScan);
      },
    },
  }
</script>

<style module>
  .test {
    color: red;
  }

  .test2s {
    color: blue;
  }

  .foo {
    color: deeppink;
  }
</style>
