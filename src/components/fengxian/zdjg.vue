<template>
  <div class="myborder">
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
        let colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false);
        charts.clear();
        let option = {
          tooltip: {
            trigger: "axis",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            axisPointer: {
              type: "shadow", 
            },
            formatter(e){
              return `${e[0].name}：${e[0].value}次`
              // console.log(e);
            }
          },  
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
              rotate: rotate ? rotate : 0,
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
              fontSize:'1.5rem',
            },
            data: xData,
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255, 0.1)",
                fontSize:'1.5rem',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                fontSize:'1.5rem',
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
              barWidth: "60%",
              color: colors,
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
      zhuzhuangtu(zdjgChart, null, xData, yData);
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder{
  border-radius: 4px;
  height: 49.33rem;
  #zdjg {
    margin-top: 1rem;
    height: 39.33rem;
  }
}
  
</style>
