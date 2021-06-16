<template>
    <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>处理超期区县分布</p>
    </div>
    <div id="chulichao"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
import {overdueArea} from "@/assets/api/tousu"
import {getYearStartDate,getNowDate,getDate} from "@/utils/date"
export default {
  mounted() {
    this.getData()
  },
   methods: {
    getData(){
      overdueArea({startTime:getYearStartDate(),endTime:getNowDate}).then(res => {
        let chulichao = document.getElementById("chulichao"),
            chulichaoChart = echarts.init(chulichao),
            xData = res.data.map(item => {
              return item.name
            }),
            yData = res.data.map(item => {
              return item.value
            });
        this.zhuzhuang(chulichaoChart,xData,yData);
      })
    },
    zhuzhuang(charts,xData,yData) {
      let thit=this;
      charts.clear()
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            fontSize:26,
          },
          formatter(e){
            return `${e[0].name}：${e[0].value}`
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
            fontfamily: 'PingFang',
            fontweight: 'bold',
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
      charts.on('click', function (params) {
            console.log(params);
            // thit.dialogTableVisible = true;
            var data = {
              tsProcessingDept: params.name,
              tsHandlingStatus:"待办理"
            }
            thit.$emit("tkshow", true,data);
        });
      window.addEventListener('resize', function () {
        charts.resize()
      })
    },

  },

}
</script>
<style lang="scss" scoped>
.myborder {
    width: 58rem;
    height: 40rem;
    border-radius: 4px;
    #chulichao{
      margin-top: 1rem;
      height: 33rem;
    }
}
</style>
