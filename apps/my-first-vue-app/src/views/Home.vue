<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MyButton v-on:hey="onHey" />
  </div>
</template>

<script>
import { MyButton } from '@example-vue-monorepo/my-button'

export default {
  name: 'Home',
  components: {
    MyButton
  },
  methods: {
    onHey: () => {
      alert('hey... you clicked me')
    }
  }
};
</script>
