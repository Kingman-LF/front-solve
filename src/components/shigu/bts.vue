<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>设备类别预警个数</p>
    </div>
    <div id="bts"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
          this.bts();
      },500)
    });
  },
  methods: {
    bts() {
      // 检验
      let bts = document.getElementById("bts");
      let btsChart = echarts.init(bts);
      function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
        let xData = xdata
          ? xdata
          : ["起重机", "场(厂)内机动车辆", "压力容器","压力管道","大型游乐设施","电梯","客运索道","锅炉"];
        let yData = ydata ? ydata : [1, 2, 3,0,0,0,0,0];
        let colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false);
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
              fontfamily: "PingFang Bold",
              fontweight: "bold",
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
            top: "20%",
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
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false),
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
      zhuzhuangtu(btsChart, "#42cbff");
    },
  },
};
</script>
<style lang="scss" scoped>
.box{
  height: 40rem;
  #bts {
    height: 30rem;
  }
}
  
</style>
