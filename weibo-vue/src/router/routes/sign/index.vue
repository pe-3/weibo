<template>
  <div class="sign">
    <div class="left">
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign",
  components: {
  }
};
</script>

<style scoped>
.sign {
  display: flex;
  place-content: center;
  height: 100%;
}
.left {
  flex: 0;
  display: grid;
  place-content: center;
}
.right {
  flex: 4;
  display: grid;
  place-content: center;
}

</style>
