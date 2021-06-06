<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>投诉问题及处置情况</p>
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
      }, 500);
    });
  },
  methods: {
    bts() {
      // 检验
      let bts = document.getElementById("bts");
      let btsChart = echarts.init(bts);
      function zhuzhuangDuidie(charts, rotate) {
        charts.clear();
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // Use axis to trigger tooltip
              type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
            },
          },
          legend: {
            left:'right',
            textStyle: {
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
            },
            data: ["及时", "不及时"],
          },
          grid: {
            top: "15%",
            left: "3%",
            right: "4%",
            bottom:'0%',
            containLabel: true,
          },
          xAxis: {
            type: "category",
            axisLabel: {
              interval: 0,
              color: "#fff",
              fontfamily: "PingFang Bold",
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
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            data: [
              "操作按钮失灵",
              "电梯运行异响",
              "使用登记标志超期",
              "其他",
              "电梯运行抖动",
              "运行中出现下坠情况",
              "开关门不正常",
              "故障多无法正常使用",
              "电梯管理差",
              "紧急呼叫按钮无人接听"
            ],
          },
          yAxis: {
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
          series: [
            {
              name: "及时",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [19, 28, 2, 23, 21, 4, 22, 10, 8, 1],
              itemStyle:{
                color:"#00f0ff"
              }
            },
            {
              name: "不及时",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [37, 86, 14, 42, 41, 10, 58, 21, 21, 10],
              itemStyle:{
                color:"#ff9600"
              }
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangDuidie(btsChart);
    },
  },
};
</script>
<style lang="scss" scoped>
  #bts {
    height: 18.25rem;
  }
</style>
