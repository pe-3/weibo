<template>
  <img :src="weiboLogo" alt="" />
</template>

<script>
import weiboLogo from "../../../assets/imgs/weibo-logo.png";
export default {
  name: "weibo-logo",
  data() {
    return {
      weiboLogo,
    };
  },
};
</script>

<style scoped>
img {
  height: 50px;
}
</style>
