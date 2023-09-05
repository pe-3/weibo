<template>
  <menu-list
    :list="tagList"
    menu-class="tag-list"
    item-class="tag-item"
    active-class="tag-active"
  />
</template>

<script>
import menuList from "./menu-list.vue";
export default {
  name: "tag-list",
  components: {
    menuList,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {
    tagList() {
      return this.list.map((text) => ({ text }));
    },
  },
};
</script>

<style>
.tag-list {
  background: #fff;
}
.tag-item .item-line {
  box-sizing: unset;
  padding: 0 20px;
}
.tag-item .item-line:hover {
  color: #ff8200;
  background: rgba(255, 130, 0, 0.1);
}
.tag-active {
  color: #ff8200;
}
</style>
