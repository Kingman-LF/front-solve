<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>舆情趋势</p>
    </div>
    <div id="yqqs"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.yqqs();
      }, 500);
    });
  },
  methods: {
    // 舆情趋势
    yqqs() {
      let yqqs = document.getElementById("yqqs");
      let yqqsChart = echarts.init(yqqs);
      function getZhexian(charts) {
        charts.clear();
        let option = {
          title: {
            show: false,
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            icon: "rect",
            itemWidth: 13,
            itemHeight: 13,
            left: "right",
            textStyle: {
              fontSize: 14,
              fontFamily: "PingFang",
              fontWeight: "bold",
              color: "#FFFFFF",
            },
            data: ["正面", "中性", "负面"],
          },
          grid: {
            top: "20%",
            bottom:0,
            left: "3%",
            right: "4%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#fff",
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            data: ["2021/5/23", "2021/5/24", "2021/5/25", "2021/5/26", "2021/5/27", "2021/5/28", "2021/5/29", "2021/5/30"],
          },
          yAxis: {
            type: "value",
            splitLine: {
              type: "dashed",
              lineStyle: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
          },
          series: [
            {
              name: "正面",
              type: "line",
              smooth: true,
              color: "#00F0FF",
              showSymbol: false,
              data: [10,20,20,10,20,30,40,10],
            },
            {
              name: "中性",
              type: "line",
              smooth: true,
              color: "#2FA768",
              showSymbol: false,
              data: [20,30,10,50,15,6,8,4],
            },
            {
              name: "负面",
              type: "line",
              smooth: true,
              color: "#F74849",
              showSymbol: false,
              data: [2,6,8,7,9,10,22,12],
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      getZhexian(yqqsChart);
    },
  },
};
</script>
<style lang="scss" scoped>
.yqqs {
  height: 25.42rem;
  background-size: 100% 100%;
  background-image: url("~@/assets/images/shouye/jx8.png");
}
#yqqs {
  margin-top: 1rem;
  height: 20rem;
}
</style>
