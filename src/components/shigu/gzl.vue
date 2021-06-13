<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>风险单位地区分布</p>
    </div>
    <div id="gzl"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.spcc();
      }, 500);
    });
  },
  methods: {
    spcc() {
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
          grid: {
            top: "3%",
            left: "3%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            show: false,
          },
          yAxis: [
            {
              type: "category",
              scale: true,
              axisLine: {
                // 坐标轴 轴线
                show: false, // 是否显示
              },
              data: ["南太湖新区", "长兴县", "德清县", "安吉县", "南浔区", "吴兴区"],
              axisLabel: {
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: "bold",
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
                fontSize: "1.5rem",
                fontWeight: "bold",
              },
              axisTick: {
                show: false,
              },
              data: [0,0,0,0,1,1]
            },
          ],
          series: [
            {
              data: [0,0,0,0,1,1],
              type: "bar",
              showBackground: true,
              backgroundStyle: {
                borderWidth: 1,
                fontSize:'1.5rem',
                color: "rgba(255, 255, 255, 0.2)",
                borderRadius: 9,
              },
              itemStyle: {
                // 图形的形状
                normal: {
                  barBorderRadius: 9,
                  color: "#FF4657",
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
      let leftData = [
        "南太湖新区",
        "长兴县",
        "德清县",
        "安吉县",
        "南浔区",
        "吴兴区",
      ];
      let spcc = document.getElementById("gzl");
      let spccChart = echarts.init(spcc);
      getBarJiaoNang(spccChart);
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder{
  height: 40rem;
  border-radius: 4px;
  #gzl {
    margin-top: 1rem;
    height: 33.5rem;
  }
}

</style>
