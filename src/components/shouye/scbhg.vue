<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>生产不合格产品TOP5</p>
    </div>
    <div id="scbhg"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.scbhg();
      }, 500);
    });
  },
  methods: {
    // 生产不合格产品TOP5
    scbhg() {
      let scbhg = document.getElementById("scbhg");
      let scbhgChart = echarts.init(scbhg);
      function hxzzhedie(charts) {
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
            bottom: "0%",
            data: [
              "吴兴区",
              "长兴县",
              "德清县",
              "南太湖新区",
              "安吉县",
              "南浔区",
            ],
            textStyle: {
              fontFamily: "PingFang",
              fontWeight: "bold",
              color: "#FFFFFF",
            },
          },
          grid: {
            top: "10%",
            left: "3%",
            right: "4%",
            bottom: "15%",
            containLabel: true,
          },
          xAxis: {
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
              fontfamily: "PingFang",
              fontweight: "bold",
            },
          },
          yAxis: {
            type: "category",
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
            data: ["产品1", "产品2", "产品3", "产品4", "产品5"],
          },
          series: [
            {
              name: "吴兴区",
              type: "bar",
              stack: "total",
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [320, 302, 301, 334, 390, 330, 320],
            },
            {
              name: "长兴县",
              type: "bar",
              stack: "total",
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "德清县",
              type: "bar",
              stack: "total",
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "南太湖新区",
              type: "bar",
              stack: "total",
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [150, 212, 201, 154, 190, 330, 410],
            },
            {
              name: "安吉县",
              type: "bar",
              stack: "total",
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320],
            },
            {
              name: "南浔区",
              type: "bar",
              stack: "total",
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320],
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      hxzzhedie(scbhgChart);
    },
  },
};
</script>
<style lang="scss" scoped>
#scbhg {
  height: 21rem;
}
</style>
