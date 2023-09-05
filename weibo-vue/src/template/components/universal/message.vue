<template>
  <div 
    class="message"
    v-show="show"
  >
    <tiny-alert
      :closable="false"
      :type="type"
      :description="description"
    />
  </div>
</template>

<script>
import $bus from '../../../event-bus.js'

export default {
  name: 'message',
  props: {},
  data() {
    return {
      type: 'success',
      description: '成功！！！',
      show: false,
      timer: null
    }
  },
  methods: {
    showMessage(time = 1000) {
      this.show = true;
      this.timer = setTimeout(() => {
        this.show = false;
      }, time)
    },
    success(msg, time) {
      this.type = 'success';
      this.description = msg;
      this.showMessage(time);
    },
    error(msg, time) {
      this.type = 'error';
      this.description = msg;
      this.showMessage(time);
    },
    info(msg, time) {
      this.type = 'info';
      this.description = msg;
      this.showMessage(time);
    },
    warning(msg, time) {
      this.type = 'warning';
      this.description = msg;
      this.showMessage(time);
    }
  },
  mounted() {
    $bus.on('success', this.success);
    $bus.on('error', this.error);
    $bus.on('info', this.info);
    $bus.on('warning', this.warning);
  },
  beforeDestroy() {
    $bus.off('success', this.success);
    $bus.off('error', this.error);
    $bus.off('info', this.info);
    $bus.off('warning', this.warning);
    clearTimeout(this.timer)
  }
}
</script>

<style scoped>
.message {
  position: absolute;
  width: 400px;
  left: 50%;
  top: 40px;
  transform: translate(-50%, -50%);
  z-index: 99999;
}
</style>