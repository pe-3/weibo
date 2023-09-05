<template>
  <div class="create">
    <div class="input-wrapper" :class="{ focus }">
      <textarea
        @focus="focus = true"
        @blur="focus = false"
        placeholder="有什么和大家想分享的"
        v-model="article"
      />
    </div>
    <div class="imgs-wrapper">
      <img v-for="(img, index) in imgs" :key="index" :src="img" />
      <div class="file-upload"  @click="$refs.upload_file.click">
        <div class="add">
          <input 
            type="file" 
            ref="upload_file" 
            :style="{ display: 'none' }" 
            @change="addImg"
          />
          <div class="div1"></div>
          <div class="div2"></div>
        </div>
      </div>
    </div>
    <button 
      class="weibo-submit" 
      :disabled="!article"
      @click="addWeibo"
    >发布</button>
  </div>
</template>

<script>
import { useRequest } from '../../../../requests'
import { upload } from '../../../../requests/upload'
import { addWeibo } from '../../../../requests/weibo'

export default {
  name: "create",
  data() {
    return {
      focus: false,
      article: "",
      imgs: []
    };
  },
  methods: {
    async addImg(e) {
      const [img] = e.target.files;
      const formData = new FormData();
      formData.append("file", img);
      const { path } = await useRequest.call(
        this,
        upload,
        formData
      );
      this.imgs.push(path);
    },
    addWeibo() {
      const weibo = {
        article: this.article,
        imgs: this.imgs.join(';'),
        publish_time: new Date()
      }

      useRequest.call(
        this,
        addWeibo,
        weibo
      )
    }
  }
};
</script>

<style scoped>
.create {
  height: 100%;
  background: #fff;
  padding: 20px;
  position: relative;
}
textarea {
  width: 100%;
  height: 100%;
  padding: 0;
  background: transparent;
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  line-height: 24px;
  font-size: 15px;
  color: #333;
  resize: none;
}
.input-wrapper {
  border-radius: 10px;
  background: #f1f3f5;
  padding: 10px;
  border: 1px solid #f1f3f5;
  height: calc(100% - 180px);
}
.focus {
  border-color: #ff8200;
}

.file-upload {
  display: inline-block;
  height: 150px;
  width: 150px;
  border-radius: 20px;
  margin-left: 10px;
  border: 2px solid #f1f3f5;
  position: relative;
  cursor: pointer;
}
.add {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-content: center;
}
.add div {
  height: 5px;
  width: 40px;
  border-radius: 2.5px;
  background: #f1f3f5;
}
.add .div2 {
  transform: rotate(90deg) translateX(-10%);
}

.imgs-wrapper {
  height: 150px;
  display: flex;
  margin-top: 5px;
}

.imgs-wrapper img {
  height: 100%;
  margin-right: 10px;
  border: .1px solid #999;
}
.weibo-submit {
  position: absolute;
  bottom: 20px;
  right: 40px;
  padding: 5px 15px;
}
</style>
