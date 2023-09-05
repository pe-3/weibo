<template>
  <div class="user-card">
    <div
      class="background"
      :style="{
        backgroundImage: `url(${backImage})`,
      }"
    >
      <div class="back-upload">
        <input
          ref="back_image"
          type="file" 
          :style="{ display: 'none' }"
          @change="upload_back"
        />
        <svg-upload @click="$refs.back_image.click()" />
      </div>
    </div>
    <div class="user-info">
      <avatar circle size="110px" border edit />
      <div class="user-about">
        <div class="user-name">{{ user.nickname || "暂无昵称" }}</div>
        <div class="number">
          粉丝 <span class="fans">{{ user.fans }}</span> 关注
          <span class="follow">{{ user.follows }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "../universal/avatar.vue";
import svgUpload from "../../../assets/svgs/upload.svg";
import { mapMutations, mapState } from 'vuex'
import { useRequest } from '../../../requests'
import { upload } from "../../../requests/upload";
import { update } from "../../../requests/user";

export default {
  name: "user-card",
  components: {
    avatar,
    svgUpload,
  },
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        backImage: String,
        avatar: String,
        fans: Number,
        follow: Number,
        isMale: Boolean,
      }),
    },
  },
  computed: {
    backImage() {
      return this.user.backImage || "http://127.0.0.1:8080/default_back.webp";
    },
  },
  methods: {
    ...mapMutations('user', ['setUser']),
    async upload_back(e) {
      const [back_image] = e.target.files;
      const formData = new FormData();
      formData.append("file", back_image);

      const { path } = await useRequest.call(
        this,
        upload,
        formData
      );

      await useRequest.call(
        this,
        update,
        { backImage: path }
      );

      this.setUser({
        ...this.user,
        ...{ backImage: path }
      });
    }
  }
};
</script>

<style scoped>
.user-card {
  position: relative;
  padding-top: 320px;
}
.background {
  width: 100%;
  height: 360px;
  position: absolute;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 0;
}

.user-info {
  position: relative;
  z-index: 10;
  padding: 0 50px;
  display: flex;
}

.user-about {
  height: 100%;
  padding-top: 50px;
  margin-left: 20px;
}

.user-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}

.number {
  color: rgb(147, 147, 147);
  font-size: 14px;
  margin-top: 5px;
}

.number span {
  margin-left: 5px;
  margin-right: 15px;
  color: #333;
}

.back-upload {
  position: absolute;
  top: 20px;
  right: 20px;
  display: none;
}

.background:hover .back-upload {
  display: block;
}

.back-upload svg {
  fill: white;
  cursor: pointer;
}
</style>
