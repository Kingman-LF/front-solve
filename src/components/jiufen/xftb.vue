<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>区县信访量趋势</p>
    </div>
    <div id="qushi"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getYear } from "@/utils/date";
import { trendDistribution } from "@/assets/api/jiufen";
export default {
  name: "xftb",
  mounted() {
    trendDistribution({
      startTime: getYear(),
    }).then((res) => {
      let resdata = res.data;
      console.log(resdata, "new");
      let xData = Object.keys(resdata);
      let yData = [];
      let values = Object.values(resdata);
      let s = [];
      values.forEach((item, index) => {
        var obj = {
          name: xData[index],
          type: "line",
          data: [],
        };
        item.forEach((item1) => {
          if (item.length > yData.length) {
            yData.push(item1.month);
          }
          obj.data.push(item1.value);
        });
        s.push(obj);
      });
      let qushi = document.getElementById("qushi");
      let qushiChart = echarts.init(qushi);
      this.getZhexian(qushiChart, xData, yData, s);
    });
  },
  methods: {
    // 折线图
    getZhexian(charts, xData, yData, datawx) {
      charts.clear();
      let option = {
        title: {
          show: false,
        },
        tooltip: {
          trigger: "axis",
          borderWidth: 0,
          textStyle: {
            fontSize: 25,
          },
          formatter(e) {
            return `${e[0].name}<br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[0].color};display:inline-block"></div>${e[0].seriesName} ${e[0].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[1].color};display:inline-block"></div>${e[1].seriesName} ${e[1].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[2].color};display:inline-block"></div>${e[2].seriesName} ${e[2].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[3].color};display:inline-block"></div>${e[3].seriesName} ${e[3].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[4].color};display:inline-block"></div>${e[4].seriesName} ${e[4].value}
            <br/><div style="width:18px;height:18px;border-radius:18px;background-color:${e[5].color};display:inline-block"></div>${e[5].seriesName} ${e[5].value}`;
            // console.log(e);
          },
        },
        legend: {
          icon: "rect",
          itemWidth: 25,
          itemHeight: 13,
          left: "3%",
          textStyle: {
            fontSize: "1.5rem",
            fontFamily: "PingFang SC",
            fontWeight: "bold",
            color: "#FFFFFF",
          },
          data: xData,
        },
        grid: {
          top: "15%",
          left: "3%",
          right: "4%",
          bottom: 0,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            color: "#fff",
            fontSize: "1.5rem",
            fontFamily: "PingFang SC",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.4)",
            },
          },
          data: yData,
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
            fontSize: "1.5rem",
            fontFamily: "PingFang SC",
          },
          axisLine: {
            show: true,
          },
        },
        series: datawx,
      };
      option && charts.setOption(option);
      window.addEventListener("resize", function () {
        charts.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.myborder {
  height: 40.6rem;
}
#qushi {
  margin-top: 1rem;
  height: 32.6rem;
}
</style>
