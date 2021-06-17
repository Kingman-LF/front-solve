<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>信访状态</p>
    </div>
    <div id="status"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getBarJiaoNang } from "@/utils/getCharts";
import { getYearStartDate, getNowDate, getDate } from "@/utils/date";
import { petitionStatus } from "@/assets/api/jiufen";
export default {
  name: "xfStatus",
  mounted() {
    petitionStatus({
      startTime: getYearStartDate(),
      endTime: getNowDate(),
    }).then((res) => {
      let resdata = res.data;
      console.log(resdata);
      this.list = [];
      resdata.forEach((v, i) => {
        let obj = {};
        obj.name = v.status;
        obj.value = v.value;
        this.list.push(obj);
      });
      this.$nextTick(() => {
        // setTimeout(() => {
        this.status(this.list);
        // }, 500);
      });
    });
  },
  methods: {
    status(list) {
      let thit = this;
      let status = document.getElementById("status");
      let statusChart = echarts.init(status);
      function huanzhuang(charts, showLable, mygraphic, list) {
        let gailanTotal = 197;
        charts.clear();
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth: 0,
            textStyle: {
              fontSize: 26,
            },
            formatter(e) {
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`;
              // console.log(e);
            },
          },
          legend: {
            show: false,
          },
          graphic: mygraphic
            ? [
                {
                  tooltip: {
                    formatter(e) {
                      return `总量：${gailanTotal}`;
                    },
                  },
                  type: "text",
                  left: "center",
                  top: "center",
                  z: 10,
                  style: {
                    fill: "#fff",
                    text: gailanTotal,
                    textAlign: "center",
                    text: ["{value|" + gailanTotal + "}"].join("\n"),
                    rich: {
                      value: {
                        color: "#303133",
                        fontSize: "3.5rem",
                        lineHeight: 30,
                        fontFamily: "digifaw",
                        textShadowColor: "#0096ff",
                        textShadowBlur: "12",
                      },
                      name: {
                        color: "#909399",
                        lineHeight: 30,
                        fontSize: "3rem",
                      },
                    },
                    font: "16px PingFang",
                  },
                },
              ]
            : [],
          series: [
            {
              type: "pie",
              radius: ["55%", "70%"],
              center: ["center", "center"],
              // avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "PingFang Bold",
                fontSize: "2rem",
                // formatter(e){
                //   console.log(e)
                //   return `${e.name}`
                // }
              },
              itemStyle: {
                color: function (params) {
                  var colorlist = [
                    "#0F5ED6",
                    "#79FFB5",
                    "#843DFF",
                    "#4304B1",
                    "#688FD8",
                    "#F25334",
                    "#49A732",
                    "#EB3633",
                    "#FCBD01",
                    "#CAD9F0",
                  ];
                  return colorlist[params.dataIndex];
                },
              },
              labelLine: {
                show: true,
                lineStyle: {
                  width: 2,
                },
                // length: 20,
                // length2: 10
              },
              data: list,
            },
            {},
          ],
        };
        option && charts.setOption(option);
        statusChart.on("click", function (params) {
          thit.dialogTableVisible = true;
          thit.gridData[0] = params.data;
        });
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(statusChart, true, true, list);
    },
  },
};
</script>

<style lang="scss" scoped>
.myborder {
  height: 40rem;
  border-radius: 4px;
  #status {
    margin-top: 1rem;
    height: 32rem;
  }
}
</style>
