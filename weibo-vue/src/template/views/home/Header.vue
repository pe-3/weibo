<template>
  <div class="header">
    <!-- logo -->
    <div class="logo">
      <weiboLogo />
    </div>
    <!-- 搜索 -->
    <div class="search">
      <input type="text" placeholder="搜索微博" />
    </div>
    <!-- 菜单栏 -->
    <div class="my-menu-list">
      <menu-list
        menu-class="top-menu"
        item-class="menu-item"
        active-class="active-item"
        :list="[
          { icon: icons.homeSvg, path: '/' },
          { icon: icons.svgEdit, path: '/create' },
          { custom: avatar, path: '/user' },
        ]"
        @change="$router.push($event.path)"
      />
    </div>
    <!-- 按钮 -->
    <div class="btn-list">
      <div class="svg-list">
        <div class="svg-wrapper">
          <svg-set class="settting" />
        </div>
        <div class="svg-wrapper" @click="$router.push('/sign')">
          <svg-sign-out class="signout"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weiboLogo from "../../../template/components/universal/weibo-logo.vue";
import menuList from "../../../template/components/universal/menu-list.vue";

import homeSvg from "../../../assets/svgs/home.svg";
import playSvg from "../../../assets/svgs/play.svg";
import fireSvg from "../../../assets/svgs/fire.svg";
import mailSvg from "../../../assets/svgs/mail.svg";
import avatar from "../../../template/components/universal/avatar.vue";

import svgEdit from "../../../assets/svgs/edit.svg";
import svgSet from "../../../assets/svgs/setting.svg";
import svgSignOut from '../../../assets/svgs/signout.svg'

const icons = {
  homeSvg,
  playSvg,
  fireSvg,
  mailSvg,
  svgEdit
};

export default {
  name: "my-header",
  components: {
    weiboLogo,
    menuList,
    svgSet,
    svgSignOut
  },
  data() {
    return {
      icons,
      avatar,
    };
  },
};
</script>

<style scoped>
.logo {
  flex: 1;
}

.search {
  flex: 3;
}

.my-menu-list {
  flex: 6;
  height: 100%;
}

.btn-list {
  flex: 4;
  position: relative;
}
.btn-list .svg-list {
  margin-left: 50px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
}

.svg-list svg {
  width: 19px;
  height: 19px;
  fill: #fff;
  stroke: #333;
}

.search {
  padding-left: 15px;
}
.search input {
  padding: 5px 20px;
}

.menu-list {
  padding: 0 20px;
}

svg.settting {
  width: 26px;
  height: 26px;
}

.svg-wrapper {
  height: 30px;
  width: 30px;
  display: grid;
  place-content: center;
  background: #666;
  border-radius: 50%;
  margin-left: 15px;
  cursor: pointer;
}

.svg-wrapper:hover {
  background: #f1f3f5;
}
.svg-wrapper:hover svg {
  fill: #333;
}
</style>

<style>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  background: #fff;
}
.menu-item {
  height: 100%;
  width: 60px;
  display: grid;
  place-content: center;
  cursor: pointer;
}

.menu-item svg {
  width: 28px;
  fill: #000;
}

.top-menu {
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.active-item svg {
  fill: #ff8200;
}

.active-item {
  position: relative;
  border-bottom: 2px solid #ff8200;
}

.menu-item:hover {
  background: #f1f3f5;
}
</style>
