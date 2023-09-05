<template>
  <div class="edit-list">
    <p>昵称：<input type="text" v-model="nickname" /></p>
    <p>地点：<input type="text" v-model="site" /></p>
    <p>自我介绍：<input type="text" v-model="intro" /></p>
  </div>
</template>

<script>
import { useRequest } from "../../../requests";
import { update } from "../../../requests/user";
import { mapState, mapMutations } from "vuex";
import $bus from "../../../event-bus";

export default {
  name: "info-edit",
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      nickname: "",
      site: "",
      intro: "",
    };
  },
  computed: {
    ...mapState("user", ["user"]),
    isEmpty() {
      return !this.nickname || !this.site || !this.intro;
    },
  },
  methods: {
    ...mapMutations("user", ["setUser"]),
    async updateInfo() {
      if (this.isEmpty) {
        return $bus.warning("请完善信息后再提交吧");
      }
      const { nickname, site, intro } = this;

      await useRequest.call(
        this,
        update,
        { nickname, site, intro }
      );
      
      this.setUser({
        ...this.user,
        ...{ nickname, site, intro }
      });
    },
  },
};
</script>

<style scoped>
.edit-list {
  font-size: 13px;
  color: rgb(147 147 147);
  padding: 0 50px;
  margin-top: 15px;
}
.edit-list p {
  margin-top: 10px;
}
.edit-list p input {
  border: none;
  border-bottom: 0.1px solid rgb(147 147 147);
  outline: none;
  margin-left: 5px;
}
</style>
