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
      <div v-for="item in lvList" :key="item.id" @click="showtk(true,item.text)">
        <span>{{ item.text }}</span>
        <span>{{ item.number }}</span>
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
      topList: [
        {
          id: Math.random(),
          name:'HZS',
          text: "湖州市",
          number:"",
          tjcgl:'',
          bjygd:'',
          clz:'',
          dbl:''
        },
        {
          id: Math.random(),
          name:'WXQ',
          text: "吴兴区",
          number:"",
          tjcgl:'',
          bjygd:'',
          clz:'',
          dbl:''
        },
        {
          id: Math.random(),
          name:'NXQ',
          text: "南浔区",
          number:"",
          tjcgl:'',
          bjygd:'',
          clz:'',
          dbl:''
        },
        {
          id: Math.random(),
          name:'DQX',
          text: "德清县",
          number:"",
          tjcgl:'',
          bjygd:'',
          clz:'',
          dbl:''
        },
        {
          id: Math.random(),
          name:'CXX',
          text: "长兴县",
          number:"",
          tjcgl:'',
          bjygd:'',
          clz:'',
          dbl:''
        },
        {
          id: Math.random(),
          name:'AJX',
          text: "安吉县",
          number:"",
          tjcgl:'',
          bjygd:'',
          clz:'',
          dbl:''
        },
        {
          id: Math.random(),
          name:'NTHXQ',
          text: "南太湖新区",
          number:"",
          tjcgl:'',
          bjygd:'',
          clz:'',
          dbl:''
        },
      ],
      lvList: [
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "投诉举报",
          number: "6993",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "调解成功率",
          number: "63.23%",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "办结已归档",
          number: "8281",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "处理中",
          number: "28",
        },
        {
          id: Math.random() + new Date().valueOf() + "",
          text: "待办理",
          number: "18",
        },
      ]
    };
  },
  mounted() {
    this.getData()
    
  },
  methods: {
    getData(){
      complaintRate({startTime: getYearStartDate(),endTime: getNowDate()}).then(res => {
        for (const i in res.data) {
          this.topList.forEach((v,j) => {
            if(i===v.name){
              v.number=res.data[i].tsjb
              v.tjcgl=res.data[i].tjcgl
              v.bjygd=res.data[i].bjygd
              v.clz=res.data[i].clz
              v.dbl=res.data[i].dbl
            }
          });
        }
      })
    },
    showtk(boll,text){
      // console.log(this.topList[this.tabIndex].text);
      var data = {
        tsProcessingDept: this.topList[this.tabIndex].text,
        tsHandlingStatus:text,
      }
      this.$emit("tkshow", boll,data);
    },
    clickF(item, index) {
      this.tabIndex = index;
      this.$data.lvList[0].number=this.$data.topList[index].number||0
      this.$data.lvList[1].number=this.$data.topList[index].tjcgl||0
      this.$data.lvList[2].number=this.$data.topList[index].bjygd||0
      this.$data.lvList[3].number=this.$data.topList[index].clz||0
      this.$data.lvList[4].number=this.$data.topList[index].dbl||0
      // console.log(this.$data.topList[index].number);
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

