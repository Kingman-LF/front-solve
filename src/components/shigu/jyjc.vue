<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>本月扫码</p>
    </div>
    <div id="cz4"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
          this.jyjc();
      },500)
    });
  },
  methods: {
    jyjc() {
      // 检验
      let jianyan = document.getElementById("cz4");
      let jianyanChart = echarts.init(jianyan);
      function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
        let xData = xdata
          ? xdata
          : ["检验检测", "安全监察", "维保单位", "使用单位", "保险单位", "公众监督"];
        let yData = ydata ? ydata : [0, 0, 38711, 291, 291, 1716];
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
                fontSize:'1.5rem',
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
              fontSize:'1.5rem',
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
              fontSize:'1.5rem',
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
              barWidth: "60%",
              fontSize:'1.5rem',
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
                fontSize:'1.5rem',
              },
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangtu(jianyanChart, "#42cbff");
    },
  },
};
</script>
<style lang="scss" scoped>
.box{
  height: 40rem;
  #cz4 {
    height: 30rem;
  }
}
  
</style>
