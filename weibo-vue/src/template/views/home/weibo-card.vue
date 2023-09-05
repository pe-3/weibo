<template>
  <div class="weibo-card">
    <div class="left">
      <avatar :url="weibo.avatar" />
    </div>
    <div class="right">
      <p class="author-nickname">{{ weibo.nickname }}</p>
      <p class="autor-info">{{ publish_time }} 来自 {{ weibo.device }}</p>
      <p class="weibo-text">
        {{ weibo.article }}
      </p>
      <img-list class="weibo-imgs" v-if="img_list.length" :list="img_list" />
      <div class="btn-list">
        <div class="share">
          <svg-share />
          <span>{{ share.num }}</span>
        </div>
        <div class="comment">
          <svg-comment />
          <span>{{ star.num }}</span>
        </div>
        <div class="like" @click="clickLike" :class="{ clicked: like.click }">
          <svg-like />
          <span>{{ like.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "../../components/universal/avatar.vue";
import imgList from "./img-list.vue";
import svgShare from "../../../assets/svgs/share.svg";
import svgComment from "../../../assets/svgs/comment.svg";
import svgLike from "../../../assets/svgs/like.svg";
import moment from 'moment'

export default {
  name: "weibo-card",
  components: {
    avatar,
    imgList,
    svgShare,
    svgComment,
    svgLike,
  },
  props: {
    weibo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      like: {
        click: false,
        count: this.weibo.like_num,
      },
      share: {
        click: false,
        count: this.weibo.share_num,
      },
      star: {
        click: false,
        count: this.weibo.star_num,
      },
    };
  },
  computed: {
    img_list() {
      if (typeof this.weibo.imgs !== "string") return [];
      return this.weibo.imgs.split(";");
    },
    publish_time() {
      return moment(this.weibo.publish_time).fromNow();
    }
  },
  methods: {
    clickLike() {
      if (this.like.click) {
        this.like.click = false;
        this.like.count--;
        return;
      }
      this.like.click = true;
      this.like.count++;
    },
  },
};
</script>

<style scoped>
.weibo-card {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
}
.left {
  width: 60px;
}
.right {
  flex: 1;
  padding-left: 10px;
}

.author-nickname {
  font-weight: bold;
}
.autor-info {
  color: #939393;
  font-size: 13px;
  line-height: 25px;
}
.weibo-text {
  margin-top: 10px;
  white-space:pre-line;
  margin-bottom: 10px;
}

.weibo-imgs {
  margin-top: 10px;
}

.btn-list {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.btn-list div {
  display: flex;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
}

.btn-list div svg {
  width: 16px;
  margin-right: 5px;
  border-radius: 50%;
  padding: 0 5px;
  box-sizing: unset;
}

.btn-list div:hover {
  color: #ff8200;
}

.btn-list div:hover svg {
  fill: #ff8200;
  background: rgba(255, 130, 0, 0.1);
}

.clicked {
  color: #ff8200;
  fill: #ff8200;
}
</style>
