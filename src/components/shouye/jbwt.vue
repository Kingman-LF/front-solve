<template>
<!--  <div class="common mypadding">-->
<!--    <span class="innerTitle">-->
<!--      <i></i>-->
<!--      <span class="tc">举报问题类别排行TOP5(年同比)</span>-->
<!--      <span class="minborder"></span>-->
<!--    </span>-->
<!--    <div id="jbwt"></div>-->
<!--  </div>-->
  <div class="box" style="height: 31.075rem;">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>举报问题类别排行TOP5</p>
    </div>
    <div id="jbwt" style="height: 22.63rem"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.jbwt();
      }, 500);
    });
  },
  methods: {
    jbwt() {
      // charts, leftData, rightData, colorlist, data
      let leftData = [
        "广告违法",
        "不正当竞争",
        "产品质量违法",
        "侵害消费者权益",
        "价格违法",
      ];
      let rightData = [
        JSON.stringify({
          state: 0,
          num: 875,
          lv: "30%",
        }),
        JSON.stringify({
          state: 1,
          num: 1154,
          lv: "30%",
        }),
        JSON.stringify({
          state: 1,
          num: 900,
          lv: "30%",
        }),
        JSON.stringify({
          state: 0,
          num: 1300,
          lv: "30%",
        }),
        JSON.stringify({
          state: 0,
          num: 600,
          lv: "30%",
        }),
      ];
      let data = [2225, 1785, 1158, 1999, 788];
      let colorlist = ["#FF4657", "#FF9600", "#FF9600", "#00F0FF", "#43FF55"];
      let jbwt = document.getElementById("jbwt");
      let jbwtChart = echarts.init(jbwt);
      function getBarJiaoNang(charts, leftData, rightData, colorlist, data) {
        charts.clear();
        let dataV = data ? data : [25, 75, 58];
        let clist = colorlist ? colorlist : ["#FF9600", "#43FF55", "#00F0FF"];
        let ldata = leftData ? leftData : ["已办结", "办理中", "待办理"];
        let rdata = rightData
          ? rightData
          : [
              JSON.stringify({
                state: 0,
                num: 875,
                lv: "30%",
              }),
              JSON.stringify({
                state: 1,
                num: 1154,
                lv: "30%",
              }),
              JSON.stringify({
                state: 1,
                num: 900,
                lv: "30%",
              }),
            ];
        // 指定图表的配置项和数据
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "none",
            },
            formatter: "{b}:{c}%",
          },
          xAxis: {
            type: "value",
            show: false,
            axisLabel: {
              color: "#fff",
              fontFamily: "PingFang Bold",
              fontSize:"1.34rem"
            },
          },
          grid: {
            top: "3%",
            left: "3%",
            bottom: "0",
            containLabel: true,
          },
          yAxis: [
            {
              type: "category",
              scale: true,
              axisLine: {
                // 坐标轴 轴线
                show: false, // 是否显示
              },
              data: ldata,
              axisLabel: {
                color: "#fff",
                fontFamily: "PingFang Bold",
                fontSize:"1.34rem"
              },
              axisTick: {
                show: false,
              },
            },
            {
              type: "category",
              scale: true,
              axisLine: {
                // 坐标轴 轴线
                show: false, // 是否显示
              },
              axisLabel: {
                color: "#fff",
                fontFamily: "PingFang Bold",
                fontSize:"1.34rem",
                formatter: function (data) {
                  let obj = JSON.parse(data);
                  let str =
                    obj.state === 0 ? `({b|${obj.lv}})` : `({a|${obj.lv}})`;
                  return obj.num + str;
                },
                rich: {
                  a: {
                    color: "#FF4657",
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                  b: {
                    color: "#43FF55",
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                },
              },
              axisTick: {
                show: false,
              },
              data: rdata,
            },
          ],
          series: [
            {
              data: dataV,
              type: "bar",
              showBackground: true,
              backgroundStyle: {
                borderWidth: 1,
                color: "rgba(255, 255, 255, 0.2)",
                borderRadius: 9,
              },
              itemStyle: {
                // 图形的形状
                normal: {
                  barBorderRadius: 9,
                  color: function (params) {
                    return clist[params.dataIndex];
                  },
                },
              },
              barCategoryGap: 46,
              barWidth: 18,
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      getBarJiaoNang(jbwtChart, leftData, rightData, colorlist, data);
    },
  },
};
</script>
<style lang="scss" scoped>


</style>
