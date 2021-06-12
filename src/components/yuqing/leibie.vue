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

export default {
  name: "leibie",
  mounted() {
    let leibie = document.getElementById("leibie");
    let leibieChart = echarts.init(leibie);
    this.zhuzhuang(leibieChart,"#42cbff");
  },
  methods: {
    zhuzhuang(charts, color, xdata, ydata, rotate) {
      let xData = xdata ? xdata : ['食品', '药品', '特种设备', '产品质量', '消费','价格','违法线索','其他']
      let yData = ydata ? ydata : [700, 600,600, 600, 600, 600, 600, 600]
      let colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
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
            interval: 0,
            color: "#fff",

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
          containLabel: true
        },
        series: [{
          data: yData,
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
      padding-bottom:2.5rem;
    }
  }
</style>