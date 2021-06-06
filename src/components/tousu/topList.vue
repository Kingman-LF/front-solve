<template>
  <div class="box myborder">
    <div class="list">
      <span
        v-for="(item, index) in topList"
        :key="item.id"
        :class="tabIndex === index ? 'current' : ''"
        @click="clickF(item, index)"
        >{{ item.text }}</span
      >
    </div>
    <div class="lv">
      <div v-for="item in lvList" :key="item.id">
        <span>{{ item.text }}</span>
        <span>{{ item.number }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      topList: [
        {
          id: Math.random(),
          text: "湖州市",
        },
        {
          id: Math.random(),
          text: "吴兴区",
        },
        {
          id: Math.random(),
          text: "南浔区",
        },
        {
          id: Math.random(),
          text: "德清县",
        },
        {
          id: Math.random(),
          text: "长兴县",
        },
        {
          id: Math.random(),
          text: "安吉县",
        },
        {
          id: Math.random(),
          text: "南太湖新区",
        },
      ],
      lvList: [
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "投诉举报",
          number: "78.76%",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "调解成功率",
          number: "99.40%",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "初查率",
          number: "92.62%",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "办结率",
          number: "33.33%",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "诉转率",
          number: "100%",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "核查率",
          number: "100%",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "投诉处置率",
          number: "100%",
        },
      ],
    };
  },
  methods: {
    clickF(item, index) {
      this.tabIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 117rem;
  height: 15.58rem;
  @extend .flex-col;
  padding: 1.67rem 1.67rem 2.5rem 1.58rem;
  .list {
    @extend .flex-row;
    span {
      font-size: 2rem;
      font-family: PingFang;
      font-weight: bold;
      font-style: oblique;
      color: #ffffff;
      display: block;
      height: 4rem;
      width: 13.08rem;
      text-align: center;
      line-height: 4rem;
      cursor: pointer;
      box-shadow: inset 0rem 0rem 2rem 0rem #00f0ff;
    }
    span:hover{
      border: 0.17px solid #00fff6;
    }
    .current {
      border: 0.17px solid #00fff6;
    }
  }
  .lv {
    @extend .flex-row;
    div {
      @extend .flex-col;
      align-items: center;
      margin-top: 1.5rem;
      span {
        width: max-content;
      }
      span:nth-child(1) {
        font-size: 2.33rem;
        font-family: PingFang;
        font-weight: bold;
        font-style: italic;
        color: #ffffff;
        line-height: 2.25rem;
      }
      span:nth-child(2) {
        font-size: 2.71rem;
        font-family: digifaw;
        font-weight: 400;
        color: #ffffff;
        line-height: 2.5rem;
        margin-top: 1.5rem;
        text-shadow: .2rem 0rem .5rem #0096ff,-.2rem 0rem .5rem #0096ff,0rem .2rem .5rem #0096ff,0rem -.2rem .5rem #0096ff;
      }
    }
  }
}
</style>
