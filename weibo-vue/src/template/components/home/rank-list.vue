<template>
  <div class="rank-list">
    <div class="wbpro-side-tit">
      <div class="title">微博热搜</div>
      <span class="reload">
        <svg-reload/>
        点击刷新
      </span>
    </div>
    <div
      class="rank-item"
      v-for="(item, index) in hotSearchItems"
      :key="index"
      :class="[computeItemClass(index)]"
    >
      <span class="rank-number">{{ index + 1 }}</span>
      <span class="keyword wbpro-textcut">{{ item.keyword }}</span>
      <span class="clb">{{ item.popularity }}</span>
      <span class="tag" v-if="item.tag" :style="{ background: item.tag.color }">
        {{ item.tag.text }}
      </span>
    </div>
  </div>
</template>

<script>
import svgReload from '../../../assets/svgs/reload.svg'

export default {
  name: "rank-list",
  components: {
    svgReload
  },
  data() {
    return {
      hotSearchItems: [
        {
          keyword: "城市建设必须把让人民宜居安居放在首位",
          tag: { text: "热", color: "rgb(255, 148, 6)" },
          popularity: 100,
        },
        { keyword: "中元节", popularity: 200 },
        {
          keyword: "华为转让多个姚安娜商标",
          tag: { text: "沸", color: "rgb(248, 100, 0)" },
          popularity: 230,
        },
        {
          keyword: " 城市建设必须把让人民宜居安居放在首位 ",
          tag: { text: "新", color: "rgb(255, 56, 82)" },
          popularity: 240,
        },
        {
          keyword: " 城市建设必须把让人民宜居安居放在首位 ",
          tag: { text: "商", color: "rgb(0, 183, 238)" },
          popularity: 490,
        },
        {
          keyword: " 城市建设必须把让人民宜居安居放在首位 ",
          tag: { text: "商", color: "rgb(0, 183, 238)" },
          popularity: 590,
        },
        {
          keyword: " 城市建设必须把让人民宜居安居放在首位 ",
          popularity: 290,
        },
        {
          keyword: " 城市建设必须把让人民宜居安居放在首位 ",
          popularity: 590,
        },
        {
          keyword: " 城市建设必须把让人民宜居安居放在首位 ",
          popularity: 290,
        },
        {
          keyword: " 城市建设必须把让人民宜居安居放在首位 ",
          popularity: 490,
        },
      ],
    };
  },
  methods: {
    computeItemClass(index) {
      if (index < 3) {
        return "in-three";
      }
      return "out-three";
    },
  },
};
</script>

<style scoped>
.rank-list {
  padding: 15px;
}
.rank-item {
  position: relative;
  height: 40px;
  padding: 0 26px 0 21px;
  box-sizing: unset;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  line-height: 40px;
  align-items: center;
  -webkit-box-align: center;
  display: flex;
}
.rank-item .rank-number {
  color: #ff8200;
  position: absolute;
  top: 50%;
  left: 0;
  width: 20px;
  margin: 0 0 0 -3px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}
.rank-item .keyword {
  margin-right: 10px;
  color: #333;
}
.rank-item .clb {
  color: #939393;
}
.wbpro-side-tit {
  height: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.in-three {
}
.in-three .rank-number {
  font-size: 17px;
  color: #f26d5f;
}
.out-three {
}

.wbpro-textcut {
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
  white-space: nowrap;
}

.clb {
  font-size: 13px;
  line-height: 18px;
}

.tag {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 3px;
  border-radius: 3px;
  height: 1.3em;
  width: 1.3em;
  display: grid;
  place-content: center;
  color: white;
  font-size: 13px;
}

.reload {
  color: #939393;
  font-size: 13px;
  line-height: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.reload svg {
  width: 14px;
  fill: #939393;
  margin-right: 10px;
}


.title {
  font-weight: 500;
  color: #333;
  font-size: 16px;
  line-height: 22px;
}


</style>
