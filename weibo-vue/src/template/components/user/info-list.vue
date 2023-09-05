<template>
  <div class="info-list">
    <p><svg-intro /> {{ user.intro || "暂无介绍" }}</p>
    <p><svg-site /> {{ user.site || "其他" }}</p>
    <p><svg-date /> {{ create_time }} 加入微博</p>
  </div>
</template>

<script>
import SvgIntro from "../../../assets/svgs/intro.svg";
import SvgSite from "../../../assets/svgs/site.svg";
import SvgDate from "../../../assets/svgs/date.svg";
import moment from 'moment'

export default {
  name: "info-list",
  components: {
    SvgIntro,
    SvgSite,
    SvgDate,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    create_time() {
      return moment(this.user.create_time).format('YYYY-MM-DD')
    }
  }
};
</script>

<style scoped>
.info-list {
  margin-top: 15px;
  color: rgb(147 147 147);
  font-size: 13px;
  padding-left: 50px;
}

.info-list p {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.info-list p svg {
  fill: rgb(147 147 147);
  margin-right: 10px;
  width: 13px;
}
</style>
