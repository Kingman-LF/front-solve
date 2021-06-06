<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>重点监管药品售卖统计</p>
    </div>
    <div id="zdjg"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.zdjg();
      }, 500);
    });
  },
  methods: {
    // 重点监管药品售卖统计
    zdjg() {
      let xData = ["药品A", "药品B", "药品C", "药品D", "药品E"];
      let yData = [19, 90, 56, 70, 10];
      let zdjg = document.getElementById("zdjg");
      let zdjgChart = echarts.init(zdjg);
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
            bottom:'0%',
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
      zhuzhuangtu(zdjgChart, null, xData, yData);
    },
  },
};
</script>
<style lang="scss" scoped>
  #zdjg {
    height: 16rem;
  }
</style>
