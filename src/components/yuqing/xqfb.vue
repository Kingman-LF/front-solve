<template>
  <div class="myborder">
    <div class="title" @click.stop="xqfbTitle()">
      <img :src="require('../../assets/images/titlelogo.png')" alt="" />
      <p>舆情区县分布</p>
    </div>

    <div id="xqfb"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { sentimentRegion } from "@/assets/api/yuqing";

export default {
  name: "xqfb",
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.sentimentRegion();
      }, 500);
    });
  },
  methods: {
    xqfbTitle() {
      this.$emit("xqfbTitle")
    },
    sentimentRegion() {
      sentimentRegion({}).then((res) => {
        if (res.code === 200) {
          let xqfb = document.getElementById("xqfb");
          let xqfbChart = echarts.init(xqfb);
          this.xqfbZhuzhuang(xqfbChart, "#42cbff",res.data);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    xqfbZhuzhuang(charts, color, data) {
      charts.clear();
      let option = {
        tooltip: {
          trigger: "axis",
          borderWidth: 0,
          textStyle: {
            fontSize: 35,
          },
          axisPointer: {
            type: "shadow",
          },
          formatter(e) {
            return `${e[0].name}：${e[0].value}`;
            // console.log(e);
          },
        },
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

            fontSize: "1.5rem",
            fontfamily: "PingFang Bold",
            fontweight: "bold",
            formatter(e) {
              if (e.length > 5) {
                return e.slice(0, 5) + "...";
              } else {
                return e;
              }
            },
          },
          data: data.map((item) => {
            return item.name;
          }),
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
            fontSize: "1.5rem",
          },
          type: "value",
        },
        grid: {
          top: "15%",
          left: "5%",
          right: "4%",
          height: "85%",
          containLabel: true,
        },
        series: [
          {
            data: data.map((item) => {
            return item.value;
          }),
            type: "bar",
            barWidth: "60%",
            fontSize: "1.5rem",
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 1,
                  color: "rgba(0, 240, 255, 1)", // 100% 处的颜色
                },
                {
                  offset: 0,
                  color: "rgba(0, 240, 255, 0)", // 100% 处的颜色
                },
              ],
              false
            ),
            label: {
              show: true,
              position: "top",
              color: "#fff",
              fontSize: "1.5rem",
            },
          },
        ],
      };
      option && charts.setOption(option);
      window.addEventListener("resize", function() {
        charts.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.myborder {
  height: 40rem;
  border-radius: 4px;
  #xqfb {
    margin-top: 1rem;
    height: 33rem;
    padding-bottom: 2.5rem;
  }
}
</style>
