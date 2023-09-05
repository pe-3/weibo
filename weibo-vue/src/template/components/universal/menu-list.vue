<template>
  <div 
    :class="[
      'menu-list',
      menuClass
    ]"
    :style="{
      display: vertical ? '' : 'flex'
    }"
  >
    <div 
      v-for="(item,index) in list" 
      :key="item"
      :class="[
        itemClass,
        {[activeClass]: index === activeIndex}
      ]"
      @click="changeActive(index)"
    >
      <component 
        v-if="item.custom" 
        :is="item.custom"
      />
      <div v-else class="item-line">
        <div v-if="item.text && item.icon" class="svg-wrapper">
          <component :is="item.icon" class="icon-size"/>
        </div>
        <component v-else-if="item.icon" :is="item.icon" class="icon-size"/>
        <span v-if="item.text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-list",
  props: {
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
    itemClass: {
      type: String,
      required: true
    },
    activeClass: {
      type: String,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    menuClass: {
      type: String
    }
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    changeActive(index) {
      if (index === this.activeIndex) return
      this.activeIndex = index
      this.$emit('change', this.list[index])
    }
  }
};
</script>

<style scoped>
.svg-wrapper {
  display: inline-grid;
  height: 40px;
  place-content: center;
  margin-right: 10px;
}
.item-line span{
  display: inline-block;
  height: 40px;
  line-height: 40px;
}

.item-line  {
  display: flex;
  cursor: pointer;
}

.item-line:hover {
  background: #f1f3f5;
}
</style>
