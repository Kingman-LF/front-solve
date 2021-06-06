<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>食品抽检不合格原因分析</p>
    </div>
    <div id="spcjbhg"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.spcjbhg();
      }, 500);
    });
  },
  methods: {
    // 食品抽检不合格原因分析
    spcjbhg() {
      let spcjbhg = document.getElementById("spcjbhg");
      let spcjbhgChart = echarts.init(spcjbhg);
      // 柱状图
      function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
        let xData = xdata
          ? xdata
          : ["重金属超标风险", "农药残留指标风险", "餐饮具卫生问题", "食品添加剂超标", "其他"];
        let yData = ydata ? ydata : [120, 220, 150, 80, 70, 110, 130];
        let colors = color ? color : "#00F0FF";
        charts.clear();
        let option = {
          xAxis: {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
              rotate:10
            },
            data: xData,
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
            },
            type: "value",
          },
          grid: {
            top: "15%",
            left: "3%",
            right: "4%",
            bottom:0,
            containLabel: true,
          },
          series: [
            {
              data: yData,
              type: "bar",
              barWidth: 20,
              color: colors,
              label: {
                show: true,
                position: "top",
                color: "#fff",
              },
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
    
      zhuzhuangtu(spcjbhgChart,null,['重金属超标风险','农药残留指标风险','餐饮具卫生问题','食品添加剂超标','其它'],[666,777,888,167,783,100],30);
    },
  },
};
</script>
<style lang="scss" scoped>
#spcjbhg {
  height: 17rem;
}
</style>
