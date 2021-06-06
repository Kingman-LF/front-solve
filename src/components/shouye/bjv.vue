<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>办结率</p>
    </div>
    <div id="bjv" style="height: 15rem"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.bjv();
      }, 500);
    });
  },
  methods: {
    // 办结率
    bjv() {
      let bjv = document.getElementById("bjv");
      let bjvChart = echarts.init(bjv);
      function getBarJiaoNang(charts, leftData, rightData, colorlist, data) {
        charts.clear();
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
          },
          grid: {
            top: "3%",
            left: "3%",
            bottom: "0%",
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
              data: leftData,
              axisLabel: {
                color: "#fff",
                fontSize: 14,
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
                fontSize: 14,
                fontWeight: "bold",
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
              data: rightData,
            },
          ],
          series: [
            {
              data: data,
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
                    return colorlist[params.dataIndex];
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
      getBarJiaoNang(
        bjvChart,
        ["已办结", "办理中"],
        [
          JSON.stringify({
            state: 0,
            num: 186,
            lv: "99%",
          }),
          JSON.stringify({
            state: 1,
            num: 5,
            lv: "2%",
          }),
        ],
        ["#43FF55", "#FF4657"],
        [ 186,5]
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.bjv {
  height: 22.67rem;
  background-size: 100% 100%;
  background-image: url("~@/assets/images/shouye/jx3.png");
  #bjv {
    height: 18.33rem;
  }
}
</style>
