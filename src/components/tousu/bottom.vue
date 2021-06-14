<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>被投诉对象 TOP10</p>
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>投诉人 TOP10</p>
    </div>
    <div class="list">
      <span
        v-for="(item, index) in topList"
        :key="item.id"
        :class="tabIndex === index ? 'current' : ''"
        @click="clickF(item, index)"
        >{{ item.text }}</span>
    </div>
    <div id="be_complained"></div>
    <div id="complainant"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
import {getYearStartDate,getNowDate,getDate} from '@/utils/date'
import {bottomleft,bottomright} from "@/assets/api/tousu"

export default {
  data() {
    return {
      tabIndex: 0,
      topList: [
        {
          id: Math.random(),
          name:'HZS',
          text: "湖州市",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:[],
          complainantYData:[],
        },
        {
          id: Math.random(),
          name:'WX',
          text: "吴兴区",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:[],
          complainantYData:[],
        },
        {
          id: Math.random(),
          name:'NX',
          text: "南浔区",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:[],
          complainantYData:[],
        },
        {
          id: Math.random(),
          name:'DQ',
          text: "德清县",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:[],
          complainantYData:[],
        },
        {
          id: Math.random(),
          name:'CX',
          text: "长兴县",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:[],
          complainantYData:[],
        },
        {
          id: Math.random(),
          name:'AJ',
          text: "安吉县",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:[],
          complainantYData:[],
        },
        {
          id: Math.random(),
          name:'NTHXQ',
          text: "南太湖新区",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:[],
          complainantYData:[],
        },
      ],
    };
  },
  mounted() {
    bottomleft({startTime: getYearStartDate(),endTime: getNowDate()}).then(res => {
      for (const i in res.data) {
        this.topList.forEach((v,j) => {
          if(i===v.name){
            v.be_complainedXData=res.data[i].names
            v.be_complainedYData=res.data[i].values
          }
        });
      }
      let complained = document.getElementById("be_complained");
      this.complainedChart = echarts.init(complained);
      this.zhuzhuangtu2(this.complainedChart);
    })
    bottomright({startTime: "2021-06-07",endTime: "2021-06-08"}).then(res => {
      for (const i in res.data) {
        this.topList.forEach((v,j) => {
          if(i===v.name){
            v.complainantXData=res.data[i].names
            v.complainantYData=res.data[i].values
          }
        });
      }
      let complainant = document.getElementById("complainant");
      this.complainantChart = echarts.init(complainant);
      this.zhuzhuangtu2(this.complainantChart);
    })
  },
  methods: {
    clickF(item, index) {
      this.tabIndex = index;
      this.zhuzhuangtu2(this.complainedChart);
      this.zhuzhuangtu2(this.complainantChart);
    },
    zhuzhuangtu2(charts, xdata, ydata,color, rotate) {
      if(charts._dom.id==='be_complained'){
        var xData = this.topList[this.tabIndex].be_complainedXData
        var yData = this.topList[this.tabIndex].be_complainedYData
        var colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 1,
              color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
              },{
              offset: 0,
              color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
      }else{
        var xData = this.topList[this.tabIndex].complainantXData
        var yData = this.topList[this.tabIndex].complainantYData
        var colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 1,
              color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
              },{
              offset: 0,
              color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
      }
      charts.clear()
      let option = {
        tooltip: {
          trigger: "axis",
          borderWidth:0,
          textStyle: {
            fontSize:26,
          },
          axisPointer: {
                type: 'shadow',
            },
          formatter(e){
            return `${e[0].name}：${e[0].value}次`
          }
        },  
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.4)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 30,
            fontSize:"1.5rem",
            color: "#fff",
            fontfamily: 'PingFang',
            fontweight: 'bold',
            formatter(e){
                if(e.length>4){
                  return (e.slice(0,4)+"...")
                }else{
                  return e
                }
              }
          },
          nameLocation:"middle",
          data: xData
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.4)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontfamily: 'PingFang',
            fontweight: 'bold',
            fontSize:"1.5rem"
          },
          type: 'value',
          
        },
        
        grid: {
          top: '15%',
          left: '5%',
          right: '4%',
          height: '85%',
          containLabel: true,
          
        },
        
        series: [{
          data: yData,
          type: 'bar',
          barWidth: "60%",
          color: colors,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize:"1.5rem"
          },
          

        }]
      }
      option && charts.setOption(option)
      window.addEventListener('resize', function () {
        charts.resize()
      })

    }
    
  },
  
}
</script>
<style lang="scss" scoped>
.myborder {
  width: 117rem;
  height: 31.83rem;
  border-radius: 4px;
  .list{
    width: 70%;
    height: 4rem;
    margin: 1rem auto;
    span{
      display: block;
      float: left;
      cursor: pointer;
      width: 14.1%;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
      font-size: 1.5rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #969696;
      opacity: 0.8;
    }
    span:hover{
      color: #fff;
      text-shadow:0rem 0rem .5rem #00f0ff;
    }
    .current{
      color: #fff;
      text-shadow:0rem 0rem .5rem #00f0ff;
    }
  }
  #be_complained{
    width: 55rem;
    height: 19.83rem;
    float: left;
  }
  #complainant{
    width: 55rem;
    height: 19.83rem;
    float: right;
  }
}
</style>