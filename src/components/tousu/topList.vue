<template>
  <div class="box myborder">
    <div class="list">
      <span
        v-for="(item, index) in areaList"
        :key="item.id"
        :class="tabIndex === index ? 'current' : ''"
        @click="clickF(item, index)"
        >{{ item.name }}</span>
    </div>
    <div class="lv">
      <div @click="showtk(true,'投诉举报')">
        <span>投诉举报</span>
        <span>{{ datalist[areaCode]?datalist[areaCode].tsjb?datalist[areaCode].tsjb:0:0 }}</span>
      </div>
      <div @click="showtk(true,'调解成功率')">
        <span>调解成功率</span>
        <span>{{ datalist[areaCode]?datalist[areaCode].tjcgl?datalist[areaCode].tjcgl:0:'0.00%' }}</span>
      </div>
      <div @click="showtk(true,'办结已归档')">
        <span>办结已归档</span>
        <span>{{ datalist[areaCode]?datalist[areaCode].bjygd?datalist[areaCode].bjygd:0:0 }}</span>
      </div>
      <div @click="showtk(true,'处理中')">
        <span>处理中</span>
        <span>{{ datalist[areaCode]?datalist[areaCode].clz?datalist[areaCode].clz:0:0 }}</span>
      </div>
      <div @click="showtk(true,'待办理')">
        <span>待办理</span>
        <span>{{ datalist[areaCode]?datalist[areaCode].dbl?datalist[areaCode].dbl:0:0 }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {getYearStartDate,getNowDate,getDate} from '@/utils/date'
import {complaintRate} from "@/assets/api/tousu"
export default {
  data() {
    return {
      tabIndex: 0,
      areaCode: "HZS",
      areaList:[
        {name:"湖州市",areaCode:"HZS"},
        {name:"吴兴区",areaCode:"WXQ"},
        {name:"南浔区",areaCode:"NXQ"},
        {name:"德清县",areaCode:"DQX"},
        {name:"长兴县",areaCode:"CXX"},
        {name:"安吉县",areaCode:"AJX"},
        {name:"南太湖新区",areaCode:"NTHXQ"},
      ],
      datalist:{}
    };
  },
  mounted() {
    complaintRate({startTime: getYearStartDate(),endTime: getNowDate()}).then(res => {
        this.datalist=res.data
      })
  },
  methods: {
    showtk(boll,text){
      var data = {
        tsProcessingDept: this.areaList[this.tabIndex].name,
        tsHandlingStatus:text,
      }
      this.$emit("tkshow", boll,data);
    },
    clickF(item, index) {
      this.tabIndex = index;
      this.areaCode=this.areaList[index].areaCode
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
    justify-content: space-around;
    div {
      @extend .flex-col;
      cursor: pointer;
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

