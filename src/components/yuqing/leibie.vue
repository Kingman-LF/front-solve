<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>舆情类别</p>
    </div>

    <div id="leibie"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getYearStartDate,getNowDate,getDate} from '@/utils/date'
import {yqInfo} from "@/assets/api/yuqing"
import yqsubjectTree from '@/utils/2'
import yqLIst from '@/utils/1'
export default {
  name: "leibie",
  data() {
    return {
      xdatas:[],
      ydata:[],
      yqsubject:{}
    }
  },
  mounted() {
    // let dates=new Date()
    // console.log(dates);
    this.yqInfo()
    // let dates2=new Date()
    // console.log(dates2-dates);

  },
  methods: {
    yqInfo(){
      let yqsubject = {}
      yqsubjectTree.forEach((v,i) => {
        if(v.name==='消费投诉'||v.name==='食品安全'||v.name==='工作作风'||v.name==='药品安全'||v.name==='产品质量'||v.name==='特种设备'||v.name==='违法线索'||v.name==='短视频专题'||v.name==='本地媒体专题'||v.name==='省级信息'){
          let id=v.id
          yqsubject[id]={name:v.name,value:0}
        }
      });
      yqLIst.forEach((vs,is) => {
        if(yqsubject[vs.keyWordId]){
          yqsubject[vs.keyWordId].value++
        }
      });
      this.yqsubject=Object.values(yqsubject)
      let leibie = document.getElementById("leibie");
      let leibieChart = echarts.init(leibie);
      this.zhuzhuang(leibieChart);
    },
    getPorSevenData(){
        const date = new Date();
        let Y = date.getFullYear();
        let M = date.getMonth()+1;
        let D = date.getDate()-7;
        M = M<10?"0"+M:M
        D = D<10?"0"+D:D
        return Y+''+M+''+D
    },
    // 当前时间
    getDate(date){
        const dates = date?new Date(date):new Date();
        let Y = dates.getFullYear();
        let M = dates.getMonth()+1;
        let D = dates.getDate();
        M = M<10?"0"+M:M
        D = D<10?"0"+D:D
        return Y+''+M+''+D
    },
    zhuzhuang(charts) {
      // let xData = xdata ? xdata : ['食品', '药品', '特种设备', '产品质量', '消费','价格','违法线索','其他']
      // let yData = ydata ? ydata : [700, 600,600, 600, 600, 600, 600, 600]
      let colors = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
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
            fontSize:35,
          },
          axisPointer: {
            type: 'shadow',
          },
          formatter(e){
            return `${e[0].name}：${e[0].value}`
            // console.log(e);
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
            margin:20,
            interval: 0,
            color: "#fff",
            rotate:30,
            fontSize:"1.5rem",
            fontfamily: 'PingFang Bold',
            fontweight: 'bold',
            formatter(e){
              if(e.length>5){
                return (e.slice(0,5)+"...")
              }else{
                return e
              }
            }
          },
          data: this.yqsubject.map(item => {
            return item.name
          })
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
          bottom:0,
          containLabel: true
        },
        series: [{
          data: this.yqsubject.map(item => {
            return item.value
          }),
          type: 'bar',
          barWidth: "60%",
          fontSize:"1.5rem",
          // itemStyle:{
          //   normal:{
          //     color:function(params){
          //       var index_color = params.value;
          //       if(index_color >=900){
          //         return 'background: linear-gradient(0deg, #E71515 0%, rgba(231, 21, 21, 0) 100%)'
          //       }else{
          //         return 'color: #00F0FF'
          //       }
          //     }
          //   }
          // },
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
          },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
          }], false),
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

    },
  },
}
</script>

<style lang="scss" scoped>
  .myborder{
    height: 40rem;
    border-radius:4px;
    #leibie{
      margin-top: 1rem;
      height: 33rem;
    }
  }
</style>