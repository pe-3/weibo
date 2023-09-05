<template>
  <div class="user">
    <div class="left">
      <left-bar
        title="首页"
        :list="[
          { text: '我的主页', icon: SvgPeople },
          { text: '我的关注', icon: SvgFllow },
          { text: '我的粉丝', icon: SvgFans },
          { text: '我的收藏', icon: SvgStar },
          { text: '我的赞', icon: SvgLike },
          { text: '创作者中心', icon: SvgSet },
        ]"
      />
    </div>
    <div class="center">
      <user-card :user="user" />
      <template v-if="!edit">
        <info-list :user="user" />
        <button class="info-edit" @click="edit = true">编辑</button>
      </template>
      <template v-else>
        <info-edit :user="user" ref="infoEdit" />
        <button class="info-submit" @click="$refs.infoEdit.updateInfo()">提交修改</button>
      </template>
    </div>
    <!-- 占位 -->
    <div class="right"></div>
  </div>
</template>

<script>
import LeftBar from "../../../../template/views/home/LeftBar.vue";
import userCard from "../../../../template/components/user/user-card.vue";
import infoList from "../../../../template/components/user/info-list.vue";
import infoEdit from "../../../../template/components/user/info-edit.vue";

import SvgPeople from "../../../../assets/svgs/people.svg";
import SvgFllow from "../../../../assets/svgs/follow.svg";
import SvgFans from "../../../../assets/svgs/fans.svg";
import SvgStar from "../../../../assets/svgs/star.svg";
import SvgLike from "../../../../assets/svgs/like.svg";
import SvgSet from "../../../../assets/svgs/setting.svg";

import { mapState } from "vuex";

const icons = {
  SvgPeople,
  SvgFllow,
  SvgFans,
  SvgStar,
  SvgLike,
  SvgSet,
};

export default {
  name: "user",
  components: {
    LeftBar,
    userCard,
    infoList,
    infoEdit
  },
  data() {
    return {
      ...icons,
      edit: false,
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>

<style scoped>
.user {
  height: 100%;
  display: flex;
}
.left,
.right {
  width: 200px;
}
.left,
.center {
  background: #fff;
}
.center {
  flex: 1;
  border-left: 20px solid #f1f3f5;
  border-right: 20px solid #f1f3f5;
  position: relative;
}
.info-edit,.info-submit {
  position: absolute;
  bottom: 20px;
  right: 40px;
  padding: 5px 15px;
}
</style>
