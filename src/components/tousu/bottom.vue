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
        v-for="(item, index) in areaList"
        :key="item.id"
        :class="{current:areaCode === item.areaCode,hasData:obj[item.areaCode] && obj[item.areaCode].names.length>0}"
        @click="clickF(item, index)"
        >{{ item.name }}</span>
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
      areaCode: "HZS",
      areaList:[
        {name:"湖州市",areaCode:"HZS"},
        {name:"吴兴区",areaCode:"WX"},
        {name:"南浔区",areaCode:"NX"},
        {name:"德清县",areaCode:"DQ"},
        {name:"长兴县",areaCode:"CX"},
        {name:"安吉县",areaCode:"AJ"},
        {name:"南太湖新区",areaCode:"NTHXQ"},
      ],
      obj:[],
      peo:[],
    };
  },
  mounted() {
    this.getData()
    this.complainedChart = echarts.init(document.getElementById("be_complained"));
    // this.complainantChart = echarts.init(document.getElementById("complainant"));
    this.complainantChart = echarts.init(complainant);
  },
  methods: {
    getData(){
      bottomleft({startTime: getYearStartDate(),endTime: getNowDate()}).then(res => {
        this.obj = res.data
        let xData = this.obj[this.areaCode].names,
            yData = this.obj[this.areaCode].values;
        this.zhuzhuangtu2(this.complainedChart,xData,yData)
      })
      bottomright({startTime: "2021-06-07",endTime: "2021-06-08"}).then(res => {
        this.peo = res.data
        let xData = this.obj[this.areaCode].names,
            yData = this.obj[this.areaCode].values;
        this.zhuzhuangtu2(this.complainantChart,xData,yData)
      })
    },
    clickF(item, index) {
      if(this.obj[item.areaCode].names.length === 0) return
      this.areaCode = item.areaCode;
      let xData1 = this.obj[this.areaCode].names,
          yData1 = this.obj[this.areaCode].values;

      this.zhuzhuangtu2(this.complainedChart,xData1,yData1)
      let xData2 = this.peo[this.areaCode].names,
          yData2 = this.peo[this.areaCode].values;
      this.zhuzhuangtu2(this.complainantChart,xData2,yData2)
    },
    zhuzhuangtu2(charts, xdata, ydata) {
      var colors =new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 1,
              color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
              },{
              offset: 0,
              color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
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
          data: xdata
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
          data: ydata,
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