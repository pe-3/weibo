<template>
  <div class="left-bar">
    <h3>{{ title }}</h3>
    <menu-list
      :list="list"
      vertical
      item-class="bar-menu-item"
      active-class="bar-active-item"
    />
  </div>
</template>

<script>
import menuList from "../../components/universal/menu-list.vue";

export default {
  name: "left-bar",
  components: {
    menuList,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
      default: () => [
        {
          text: String,
          icon: String
        },
      ],
    },
  },
  data() {
    return {
    }
  }
};
</script>

<style scoped>
.left-bar {
  height: 100%;
  width: 100%;
  background: white;
  padding: 20px 5px;
}
.left-bar h3 {
  margin-bottom: 15px;
  padding-left: 15px;
}
</style>
<style>
.bar-menu-item {
  height: 40px;
  align-items: center;
  display: block;
}
.bar-active-item {
  color: #ff8200;
}
.bar-active-item svg {
  fill: #ff8200;
  vertical-align: middle;
}
.bar-menu-item .item-line {
  padding-left: 15px;
  border-radius: 5px;
}
</style>
