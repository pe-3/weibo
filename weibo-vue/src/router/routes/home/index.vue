<template>
  <div class="home">
    <my-header/>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MyHeader from "../../../template/views/home/Header.vue";
import { info } from '../../../requests/user'
import { useRequest } from "../../../requests";
import { mapMutations } from 'vuex'

export default {
  name: "home",
  components: {
    MyHeader,
  },
  methods: {
    ...mapMutations('user', ['setUser'])
  },
  mounted() {
    useRequest.call(
      this,
      info,
      ({ user }) => {
        this.setUser(user)
      }
    )
  }
};
</script>

<style scoped>
.content {
  height: calc(100vh - 60px);
  padding: 10px 150px;
  padding-bottom: 5px;
}
</style>

