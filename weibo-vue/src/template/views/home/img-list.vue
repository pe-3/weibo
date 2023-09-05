<template>
  <div class="img-list">
    <div :class="['img-item', itemClass]" v-for="(img, index) in list" :key="index">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "img-list",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {
    itemClass() {
      if (this.list.length === 1) {
        return "one-list";
      } else if (this.list.length === 2) {
        return "two-list";
      } else {
        return "max-list";
      }
    },
  },
};
</script>

<style scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.img-item {
  padding-right: 5px;
  padding-bottom: 2px;
}
.img-item img {
  width: 100%;
  border: 1px solid #f1f3f5;
}
.max-list {
  width: 33%;
}
.two-list {
  width: 50%;
}
.one-list {
  width: 50%;
}
</style>
