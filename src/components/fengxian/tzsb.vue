<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>特种设备超期未检数量</p>
    </div>
    <div id="tzsb"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      this.tzsb();
    });
  },
  methods: {
    //特种设备超期未检数量
    tzsb() {
      let xData = [
        "压力容器",
        "压力管道",
        "锅炉",
        "大型游乐设施",
        "厂内机动车辆",
        "电梯",
        "客运索道",
        "起重机械",
      ];
      let yData = [19, 90, 56, 70, 10, 79, 199, 78];
      let tzsb = document.getElementById("tzsb");
      let tzsbChart = echarts.init(tzsb);
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
      zhuzhuangtu(tzsbChart, null, xData, yData, 30);
    },
  },
};
</script>
<style lang="scss" scoped>
#tzsb {
  height: 19.9rem;
}

</style>
