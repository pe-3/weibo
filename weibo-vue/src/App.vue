<script>
import Message from './template/components/universal/message.vue'
import TinyVue from '@opentiny/vue-button'

export default {
  name: "App",
  components: {
    Message,
    TinyVue
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
    <tiny-vue tiny_mode="pc">按钮</tiny-vue>
  </div>
</template>

<style>
#root {
  height: 100vh;
  overflow: hidden;
}
</style>
