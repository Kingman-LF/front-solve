<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>案件来源分布</p>
    </div>
    <div id="ajly"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.ajly();
      });
    });
  },
  methods: {
    // 案件来源分布
    ajly() {
      let ajly = document.getElementById("ajly");
      let ajlyChart = echarts.init(ajly);
      function xuritu(charts) {
        charts.clear();
        let colors = ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"];
        let itemStyle = {
          star5: {
            color: colors[0],
          },
          star4: {
            color: colors[1],
          },
          star3: {
            color: colors[2],
          },
          star2: {
            color: colors[3],
          },
        };
        let data = [
          {
            name: "来源1",
            children: [
              {
                name: "来源1-1",
                value: 15,
              },
              {
                name: "来源1-2",
                value: 15,
              },
              {
                name: "来源1-3",
                value: 15,
              },
            ],
          },
          {
            name: "来源2",
            children: [
              {
                name: "来源2-1",
                value: 15,
              },
              {
                name: "来源2-2",
                value: 15,
              },
              {
                name: "来源2-3",
                value: 15,
              },
            ],
          },
          {
            name: "来源3",
            children: [
              {
                name: "来源3-1",
                value: 15,
              },
              {
                name: "来源3-2",
                value: 15,
              },
              {
                name: "来源3-3",
                value: 15,
              },
            ],
          },
        ];
        let option = {
          series: {
            type: "sunburst",
            data: data,
            radius: [0, "90%"],
            label: {
              rotate: "radial",
              color: "#fff",
            },
          },
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      xuritu(ajlyChart);
    },
  },
};
</script>
<style lang="scss" scoped>
  #ajly {
    height: 30.75rem;
  }
</style>
