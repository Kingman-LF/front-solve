<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>食品重点不合格项目TOP5</p>
    </div>
    <div id="spzd"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.spzdbhg();
      }, 500);
    });
  },
  methods: {
    // 食品重点不合格项目TOP5
    spzdbhg() {
      let xData = ["酒类", "饮料", "蔬菜制品", "餐饮食品", "农食用产品"];
      let yData = [19, 90, 56, 70, 10];
      let spzd = document.getElementById("spzd");
      let spzdChart = echarts.init(spzd);
      function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
        let xData = xdata
          ? xdata
          : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
              rotate: rotate ? rotate : 0,
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
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
            width: "90%",
            height: "75%",
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
      zhuzhuangtu(spzdChart, null, xData, yData);
    },
  },
};
</script>
<style lang="scss" scoped>
  #spzd {
    height: 30.34rem;
  }

</style>
