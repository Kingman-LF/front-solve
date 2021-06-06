<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>电梯故障数量同比</p>
    </div>
    <div id="dianti"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.dianti();
      }, 500);
    });
  },
  methods: {
    dianti() {
      // 电梯
      let dianti = document.getElementById("dianti");
      let diantiChart = echarts.init(dianti);
      function duidieArea(charts, echarts) {
        charts.clear();
        let option = {
          color: ["#80FFA5", "#00DDFF"],
          title: {
            show:false,
            text: "渐变堆叠面积图",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985",
              },
            },
          },
          legend: {
            top:"5%",
            icon: 'rect',
            itemWidth: 13,
            itemHeight: 13,
            itemGap: 25,
            right: '5%',
            data: ["2021", "2020"],
            textStyle: {
              fontSize:'1.5rem',
              fontFamily: "PingFang",
              fontWeight: "bold",
              color: "#FFFFFF",
            },
          },
          grid: {
            top: "15%",
            left:'3%',
            right:'3%',
            bottom:'5%',
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: "#fff",
                fontfamily: 'PingFang',
                fontweight: 'bold'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
              data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月",],
            },
          ],
          yAxis: [
            {
              type: "value",
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
              },
            },
          ],
          series: [
            {
              name: "2021",
              type: "line",
              smooth: true,
              lineStyle: {
                width: 0,
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(128, 255, 165)",
                  },
                  {
                    offset: 1,
                    color: "rgba(1, 191, 236)",
                  },
                ]),
              },
              emphasis: {
                focus: "series",
              },
              data: [2, 2, 20, 24, 37],
            },
            {
              name: "2020",
              type: "line",
              stack: "总量",
              smooth: true,
              lineStyle: {
                width: 0,
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0, 221, 255)",
                  },
                  {
                    offset: 1,
                    color: "rgba(77, 119, 255)",
                  },
                ]),
              },
              emphasis: {
                focus: "series",
              },
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, ],
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      duidieArea(diantiChart, echarts);
    },
  },
};
</script>
<style lang="scss" scoped>
#dianti {
  height: 41.5rem;
}

</style>
