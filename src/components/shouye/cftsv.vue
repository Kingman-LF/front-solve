<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>重复投诉率</p>
    </div>
    <div id="choufu" style="height: 17rem"></div>
  </div>

</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.yibiaopan()
      }, 500);
    });
  },
  methods: {
    yibiaopan() {
      let yibiaopan = document.getElementById("choufu");
      let yibiaopanChart = echarts.init(yibiaopan);
      function yibiaoppan(charts, color) {
        charts.clear();
        let option = {
          series: [
            {
              type: "gauge",
              startAngle: 180,
              endAngle: 0,
              radius: "150%",
              center: ["50%", "90%"],
              min: 0,
              max: 100,
              splitNumber: 4,
              itemStyle: {
                color: color,
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
              },
              progress: {
                show: true,
                roundCap: true,
                width: 8,
              },
              pointer: {
                show: false,
              },
              axisLine: {
                roundCap: true,
                lineStyle: {
                  width: 8,
                },
              },
              axisTick: {
                splitNumber: 2,
                lineStyle: {
                  width: 2,
                  color: "#999",
                },
              },
              splitLine: {
                length: 8,
                lineStyle: {
                  width: 2,
                  color: "#999",
                },
              },
              axisLabel: {
                distance: 10,
                color: "#999",
                fontSize: 8,
              },
              title: {
                offsetCenter: [0, "5%"],
                fontSize: 15,
                fontFamily: "PingFang Bold",
                color: "#fff",
                fontStyle: "oblique",
              },
              detail: {
                fontSize: 40,
                fontFamily: "digifaw",
                offsetCenter: [0, "-20%"],
                valueAnimation: true,
                formatter: function (value) {
                  return Math.round(value) + "%";
                },
                color: "#fff",
              },
              data: [
                {
                  value: 70,
                },
              ],
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      yibiaoppan(yibiaopanChart, "#58D9F9");
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
