<template>
  <div class="signup">
    <weibo-logo class="weibo-logo" />
    <input type="text" placeholder="用户账号" v-model="username" />
    <input type="password" placeholder="用户密码" v-model="password" />
    <input type="password" placeholder="确认密码" v-model="confirm_password" />
    <button :disabled="isEmpty" @click="signup">注册</button>
    <lineText class="to-signin">
      <a @click="$router.push('/sign')">去登陆</a>
    </lineText>
  </div>
</template>

<script>
import lineText from "../../../../template/components/universal/line-text.vue";
import weiboLogo from "../../../../template/components/universal/weibo-logo.vue";
import { useRequest } from "../../../../requests/index.js";
import { signup } from "../../../../requests/user.js";
import $bus from "../../../../event-bus.js";

export default {
  name: "signin",
  components: {
    lineText,
    weiboLogo,
  },
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
    };
  },
  computed: {
    isEmpty() {
      const { username, password, confirm_password } = this;
      return !username || !password || !confirm_password;
    },
  },
  methods: {
    signup() {
      const { username, password, confirm_password } = this;
      if (password !== confirm_password) {
        return $bus.warning("密码输入不一致");
      }
      return useRequest.call(
        this,
        signup,
        { username, password }
      );
    },
  },
};
</script>

<style scoped>
.signup {
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

.signup input {
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 10px 20px;
}

.signup input:fist-child {
  margin-top: 10px;
}

div.to-signin.line-text {
  font-size: 14px;
  position: absolute;
  width: calc(100% - 40px);
  top: calc(100% + 10px);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

a {
  color: rgb(97, 159, 200);
}

button {
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
