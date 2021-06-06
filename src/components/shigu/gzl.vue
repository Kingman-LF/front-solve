<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>故障量分布</p>
    </div>
    <div id="gzl"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import huzJson from "./huz";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.gzl();
      },500);
    });
  },
  methods: {
    gzl() {
      let gzl = document.getElementById("gzl");
      let gzlChart = echarts.init(gzl);
      function miduFenbu(charts, echarts) {
        charts.clear();
        charts.showLoading();
            charts.hideLoading();
            echarts.registerMap("huz", huzJson);
            charts.setOption({
                title: {
                  show: false,
                },
                tooltip: {
                  trigger: "item",
                  // formatter: "{b}<br/>{c} (p / km2)",
                },
                visualMap: {
                  min: 800,
                  max: 50000,
                  // text: ['最高', '最低'],
                  realtime: false,
                  calculable: true,
                  inRange: {
                    color: ['lightskyblue', '#6ab82b', 'orangered']
                  },
                  textStyle:{
                    color:'#ffffff'
                  }

                },
                series: [
                  {
                    name:"电梯故障分布",
                    type: "map",
                    mapType: "huz", // 自定义扩展图表类型
                    label: {
                      show: false,
                      color:'#ffffff',
                      fontSize:16,
                      fontFamily:'PingFang Bold',
                      emphasis: {//对应的鼠标悬浮效果
                        show: true,
                        textStyle:{color:"#FFFFFF"}
                      }
                    },
                    data: [
                      { name: "吴兴区", value: 42400 },
                      { name: "南浔区", value: 3 },
                      { name: "长兴县", value: 26058 },
                      { name: "德清县", value: 10800 },
                      { name: "南太湖新区", value: 320 },
                      { name: "安吉县", value: 2 },
                    ],
                    // 自定义名称映射
                    itemStyle: {
                      areaColor: "rgba(0, 0, 0, 0.37)",
                    },
                  },
                ],
              })
        // option && myChart.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      miduFenbu(gzlChart,echarts)
    },
  },
};
</script>
<style lang="scss" scoped>
#gzl {
  height: 29rem;
}
</style>
