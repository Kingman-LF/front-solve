<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>舆情专题分析</p>
    </div>
    <div id="yqzt"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.yqzt();
      }, 500);
    });
  },
  methods: {
    // 舆情专题分析 yqzt zdjg
    yqzt() {
      let yqzt = document.getElementById("yqzt");
      let yqztChart = echarts.init(yqzt);
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
            name: "专题1",
            children: [
              {
                name: "已处置",
                value: 15,
              },
              {
                name: "未处置",
                value: 10,
              },
            ],
          },
          {
            name: "专题2",
            children: [
              {
                name: "已处置",
                value: 15,
              },
              {
                name: "未处置",
                value: 10,
              },
            ],
          },
          {
            name: '专题3',
            children: [
              {
                name: "已处置",
                value: 15,
              },
              {
                name: "未处置",
                value: 10,
              },
            ],
          },
          {
            name: '专题4',
            children: [
              {
                name: "已处置",
                value: 15,
              },
              {
                name: "未处置",
                value: 10,
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
            itemStyle: {
              borderWidth: 0,
            }
          },
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      xuritu(yqztChart);
    },
  },
};
</script>
<style lang="scss" scoped>
#yqzt {
  height: 17rem;
}
.yqzt {
  height: 22.58rem;
  width: 23.42rem;
  background-size: 100% 100%;
  padding-top: 2.33rem;
  background-image: url("~@/assets/images/shouye/jx10.png");
  box-sizing: border-box;
  .innerTitle {
    display: block;
    text-align: center;
  }
}
</style>
