<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>重点案件地区分布</p>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import huzJson from "@/utils/huz";
import { getYearStartDate, getNowDate, getDate } from "@/utils/date";
import { keyCaseAreas } from "@/assets/api/jiufen";
export default {
  name: "zdaj",
  mounted() {
    keyCaseAreas({ startTime: getYearStartDate(), endTime: getNowDate() }).then(
      (res) => {
        let resdata = res.data;
        console.log(resdata);
        this.datalist = [];
        for (const i in resdata) {
          let obj = {};
          obj.name = i;
          obj.value = resdata[i];
          if (i === "吴兴区") {
            obj.label = { offset: [-70, 40] };
          } else if (i === "南太湖新区") {
            obj.label = { offset: [-20, 0] };
          }
          this.datalist.push(obj);
        }
        this.datalist.push({
          name: "南太湖新区",
          value: 0,
          label: { offset: [-20, 0] },
        });
        this.$nextTick(() => {
          // setTimeout(() => {
          this.mtop(this.datalist);
          // }, 500);
        });
      }
    );
  },
  methods: {
    mtop(list) {
      let mtop = document.getElementById("map");
      let mtopChart = echarts.init(mtop);
      function miduFenbu(charts, echarts, list) {
        charts.clear();
        // charts.showLoading();
        echarts.registerMap("huz", huzJson);
        let option = {
          title: {
            show: false,
          },
          tooltip: {
            trigger: "item",
            borderWidth: "0",
            textStyle: {
              fontSize: 26,
            },
            formatter: "{b} {c}",
          },
          visualMap: {
            show: false,
            min: 0,
            max: 10,
            text: ["High", "Low"],
            realtime: false,
            calculable: true,
            inRange: {
              color: ["#46b1e3", "#0a59f7"],
            },
            textStyle: {
              color: "#ffffff",
            },
          },
          series: [
            {
              name: "区县指数",
              type: "map",
              mapType: "huz", // 自定义扩展图表类型
              label: {
                show: true,
                color: "#ffffff",
                fontSize: "2rem",
                fontFamily: "PingFang Bold",
                emphasis: {
                  //对应的鼠标悬浮效果
                  show: true,
                  textStyle: { color: "#FFFFFF" },
                },
              },

              data: list,
              // 自定义名称映射
              itemStyle: {
                // normal: {
                //   borderWidth: .5,//区域边框宽度
                //   borderColor: '#00f0ff',//区域边框颜色
                //   areaColor:"#DCDCDC",//区域颜色

                // },
                emphasis: {
                  color: "#ffffff",
                  areaColor: "#00ffa3",
                },
              },
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      miduFenbu(mtopChart, echarts, list);
    },
  },
};
</script>

<style lang="scss" scoped>
.myborder {
  height: 60.58rem;
  .title {
    width: 27.17rem;
  }
  #map {
    height: 60.58rem;
    top: -5.3rem;
  }
}
</style>
