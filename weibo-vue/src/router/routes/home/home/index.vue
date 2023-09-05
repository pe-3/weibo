<template>
  <div class="home-home">
    <div class="left">
      <left-bar
        title="首页"
        :list="[
          { text: '全部关注', icon: icons.svgMenu },
          { text: '最新微博', icon: icons.svgStar },
          { text: '特别关注', icon: icons.svgFllow },
          { text: '好友圈', icon: icons.svgFriend },
        ]"
      />
    </div>
    <div class="center">
      <tag-list :list="['全部', '原创', '视频', '超话', 'V+微博', '群微博']" />
      <div class="weibo-list">
        <weibo-card 
          v-for="item in weibo_list" 
          :key="item"
          :weibo="item"
        />
      </div>
    </div>
    <div class="right">
      <rank-list />
    </div>
  </div>
</template>

<script>
import LeftBar from "../../../../template/views/home/LeftBar.vue";
import menuList from "../../../../template/components/universal/menu-list.vue";
import tagList from "../../../../template/components/universal/tag-list.vue";
import weiboCard from "../../../../template/views/home/weibo-card.vue";
import rankList from "../../../../template/components/home/rank-list.vue";

import svgMenu from "../../../../assets/svgs/menu.svg";
import svgStar from "../../../../assets/svgs/star-circle.svg";
import svgFllow from "../../../../assets/svgs/follow.svg";
import svgFriend from "../../../../assets/svgs/friend-Circle.svg";

import { getWeibo } from "../../../../requests/weibo"
import { useRequest } from "../../../../requests"

const icons = {
  svgMenu,
  svgStar,
  svgFllow,
  svgFriend,
};
export default {
  name: "home-home",
  components: {
    LeftBar,
    menuList,
    tagList,
    weiboCard,
    rankList
  },
  data() {
    return {
      icons,
      weibo_list: []
    };
  },
  mounted(){
    useRequest.call(
      this,
      getWeibo
    )
  }
};
</script>

<style scoped>
.home-home {
  height: 100%;
  display: flex;
}
.left,
.right {
  width: 200px;
  background: white;
}
.right  {
  width: 250px;
}
.center {
  flex: 1;
  padding: 0 20px;
}

.weibo-list {
  height: calc(100% - 40px);
  overflow: auto;
  margin-top: 10px;
}

</style>
