<template>
  <div class="signin">
    <weibo-logo  class="weibo-logo" /> 
    <input type="text" placeholder="用户账号" v-model="username"/>
    <input type="password" placeholder="用户密码" v-model="password" />
    <button :disabled="isEmpty" @click="signin">登陆</button>
    <line-text 
      line-color="#"
      class="to-signin"
    >
      <a @click="$router.push('/sign/signup')">去注册</a>
    </line-text>
  </div>
</template>

<script>
import lineText from '../../../../template/components/universal/line-text.vue';
import weiboLogo from '../../../../template/components/universal/weibo-logo.vue';
import { useRequest } from "../../../../requests/index.js";
import { signin } from "../../../../requests/user.js";
import { mapMutations } from 'vuex'

export default {
  name: "signin",
  components: {
    lineText,
    weiboLogo
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    isEmpty() {
      return !this.username || !this.password
    }
  },
  methods: {
    ...mapMutations('auth', ['setToken']),
    signin() {
      const { username, password } = this;
      return useRequest.call(
        this,
        signin,
        { username, password },
        ({ token }) => {
          this.setToken(token);
          this.$router.replace('/');
        }
      )
    }
  }
};
</script>

<style scoped>
.signin {
  width: 400px;
  background: white;
  position: relative;
  padding: 25px 20px;
  padding-bottom: 40px;
  border-radius: 5px;
}

.title {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.signin input {
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 10px 20px;
}

.signup input:fist-child {
  margin-top: 10px;
}

button {
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
}

div.to-signin.line-text {
  font-size: 14px;
  position: absolute;
  width: calc(100% - 40px);
  top: calc(100% + 10px);
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: rgb(65, 145, 195);
}

a {
  color: rgb(97, 159, 200);
}
</style>
