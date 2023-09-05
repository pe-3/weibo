<template>
  <div class="avatar">
    <img
      :class="{ circle, border }"
      :src="url || userAvatar"
      alt="用户头像"
      :style="{
        width: size,
      }"
    />
    <div v-if="edit" class="edit" @click="selectAvatar">
      <div class="icon-photo">
        <svg-photo />
      </div>
      <input
        ref="avatar_input"
        type="file"
        accept=".png,.jpg,.jpeg,.webp,.svg"
        :style="{ display: 'none' }"
        @change="uploadAvatar"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import svgPhoto from "../../../assets/svgs/photo.svg";
import { upload } from "../../../requests/upload";
import { update } from "../../../requests/user";
import { useRequest } from '../../../requests'

export default {
  name: "weibo-avatar",
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "60px",
    },
    circle: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    svgPhoto,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["user"]),
    userAvatar() {
      return this.user.avatar || "http://127.0.0.1:8080/default_avatar.webp";
    },
  },
  methods: {
    ...mapMutations('user', ['setUser']),
    selectAvatar() {
      this.$refs.avatar_input.click();
    },
    async uploadAvatar() {
      const [avatar] = this.$refs.avatar_input.files;
      const formData = new FormData();
      formData.append("file", avatar);

      const { path } = await useRequest.call(
        this,
        upload,
        formData
      );

      await useRequest.call(
        this,
        update,
        { avatar: path }
      );

      this.setUser({
        ...this.user,
        ...{ avatar: path }
      });
    },
  },
};
</script>

<style scoped>
.avatar {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.avatar img {
  border-radius: 2px;
}

img.circle {
  border-radius: 50%;
}
img.border {
  border: 3px solid #fff;
  box-sizing: unset;
}

.avatar:hover .icon-photo {
  display: grid;
}

.icon-photo {
  display: none;
  place-content: center;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: calc(50% - 3px);
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon-photo svg {
  width: 40px;
  height: 40px;
}
</style>
