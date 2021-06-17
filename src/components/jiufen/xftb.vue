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
    // trendDistribution({
    //   startTime: getYearStartDate(),
    //   endTime: getNowDate(),
    // }).then((res) => {
    //   let resdata = res.data;
    //   // console.log(resdata, "new");
    //   let xData = Object.keys(resdata);
    //   let yData = [];
    //   let values = Object.values(resdata);
    //   let s = [];
    //   values.forEach((item, index) => {
    //     var obj = {
    //       name: xData[index],
    //       type: "line",
    //       data: [],
    //     };
    //     item.forEach((item1) => {
    //       if (item.length > yData.length) {
    //         yData.push(item1.month);
    //       }
    //       obj.data.push(item1.value);
    //     });
    //     s.push(obj);
    //   });
    let qushi = document.getElementById("qushi");
    let qushiChart = echarts.init(qushi);
    // console.log('x',xData,'y', yData, s);

    this.getZhexian(qushiChart);
    // });
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
          data: [
            "吴兴区",
            "南浔区",
            "德清县",
            "长兴县",
            "安吉县",
            "南太湖新区",
          ],
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
            rotate: 30,
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
          data: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
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
        series: [
          { name: "吴兴区", type: "line", data: [3, 4, 3, 8, 12] },
          { name: "南浔区", type: "line", data: [3, 1, 3, 2, 2] },
          { name: "德清县", type: "line", data: [0, 1, 3, 1, 1] },

          { name: "长兴县", type: "line", data: [8, 2, 4, 5, 3] },
          { name: "安吉县", type: "line", data: [5, 6, 4, 5, 3] },
          { name: "南太湖新区", type: "line", data: [4, 1, 8, 8, 3] },
        ],
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
