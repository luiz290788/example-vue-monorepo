<template>
  <button v-on:click="$emit('hey')">Click me!</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
});
</script>
