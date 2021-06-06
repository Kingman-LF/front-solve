<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>电梯检验检测不合格单位</p>
    </div>
    <div id="dtjcbhg"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.dtjcbhg();
      }, 500);
    });
  },
  methods: {
    // 电梯检验检测不合格单位
    dtjcbhg() {
      let dtjcbhg = document.getElementById("dtjcbhg");
      let dtjcbhgChart = echarts.init(dtjcbhg);
      // 柱状图
      function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
        let xData = xdata
          ? xdata
          : ["公司1", "公司2", "公司3", "公司4", "公司5", "公司6", "公司7"];
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
      zhuzhuangtu(dtjcbhgChart,null,['公司名称','公司名称','公司名称','公司名称','公司名称','公司名称','公司名称','公司名称','公司名称'],[455,177,890,99,780,673,890,177,666],30);
    },
  },
};
</script>
<style lang="scss" scoped>
#dtjcbhg {
  height: 17rem;
}
.common {
  margin: 0.58rem 0rem 0.67rem 0rem;
  background-size: 100% 100%;
  background-image: url("~@/assets/images/shouye/jx11.png");
}
</style>
