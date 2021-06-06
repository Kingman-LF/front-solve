<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>实际维保不合规预警</p>
    </div>
    <div id="sjwh"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.sjwh();
      }, 500);
    });
  },
  methods: {
    sjwh() {
      // 检验
      let sjwh = document.getElementById("sjwh");
      let sjwhChart = echarts.init(sjwh);
      function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
        let xData = xdata
          ? xdata
          : [
              "浙江新奥电梯有限公司",
              "奥的斯电梯（中国）有限公司浙江分公司",
              "日立电梯（中国）有限公司杭州工程有限公司",
              "浙江超胜电梯有限公司",
              "沈阳三洋电梯杭州工程有限公司",
              "安川双菱电梯有限公司",
              "蒂森电梯有限公司杭州分公司",
              "通力电梯有限公司嘉兴分公司",
              "奥的斯机电电梯有限公司嘉兴分公司",
              "浙江朗达机电有限公司"
            ];
        let yData = ydata ? ydata : [2229, 1534, 1334, 1050, 418, 399, 385, 368, 241, 214];
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
              rotate:30,
              formatter(e){
                if(e.length>5){
                  return (e.slice(0,5)+"...")
                }else{
                  return e
                }
              }
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
            bottom:"0%",
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
      zhuzhuangtu(sjwhChart, "#42cbff");
    },
  },
};
</script>
<style lang="scss" scoped>
#sjwh {
  height: 18.25rem;
}
</style>
