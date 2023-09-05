<script>
import Message from './template/components/universal/message.vue'

export default {
  name: "App",
  components: {
    Message
  },
  props: {},
  setup() {
    return {};
  },
};
</script>

<template>
  <div id="root">
    <Message />
    <router-view></router-view>
  </div>
</template>

<style>
#root {
  height: 100vh;
  overflow: hidden;
}
</style>
