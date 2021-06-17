<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>舆情监测媒体分布</p>
    </div>

    <div id="mtfb"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mediaDistribution } from "@/assets/api/yuqing";

export default {
  name: "meitifenbu",
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.mediaDistribution();
      }, 500);
    });
  },
  methods: {
    mediaDistribution() {
      mediaDistribution({}).then((res) => {
        if (res.code === 200) {
          let sum = 0;
          res.data.forEach((ele) => {
            sum += Number(ele.value);
          });
          this.mtfb(res.data, sum);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    mtfb(datas, num) {
      let mtfb = document.getElementById("mtfb");
      let mtfbChart = echarts.init(mtfb);
      function huanzhuang(charts, showLable, mygraphic, datas, num) {
        charts.clear();
        let gailanTotal = num;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth: 0,
            textStyle: {
              fontSize: 35,
            },
            formatter(e) {
              return `${e.name}<br> <div style="width:20px;height:20px;border-radius:20px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`;
            },
          },
          grid: {
            top: "5%",
            left: "5%",
            right: "5%",
            bottom:"5%",
            containLabel: true,
          },
          xAxis: {
            data:datas.map(item => {
              return item.name
            }),
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255, 0.1)",
                fontSize:'1.5rem',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                fontSize:'1.5rem',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show:true,
              color: "#fff",
              fontFamily: "PingFang",
              fontWeight: "bold",
              fontSize:'1.5rem',
            },
            type: "category",
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255, 0.1)",
                fontSize:'1.5rem',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                fontSize:'1.5rem',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show:true,
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
              fontSize:'1.5rem',
            },
            type: "value",
          },
          legend: {
            show: false,
          },
          series: [
            {
              data: datas.map(item => {
                return item.value
              }),
              type: "bar",
              barWidth: "60%",
              fontSize:'1.5rem',
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
              },{
                offset: 1,
                color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
              }], false),
              label: {
                show: true,
                position: "top",
                color: "#fff",
                fontSize:'1.5rem',
              },
            },
          //   {
          //     type: "pie",
          //     radius: ["40%", "60%"],
          //     center: ["center", "center"],
          //     // avoidLabelOverlap: false,
          //     label: {
          //       show: true,
          //       color: "#fff",
          //       fontWeight: "bold",
          //       fontFamily: "PingFang Bold",
          //       fontSize: "1.5rem",
          //     },
          //     itemStyle: {
          //       color: function(params) {
          //         var colorlist = [
          //           "#0F5ED6",
          //           "#79FFB5",
          //           "#843DFF",
          //           "#4304B1",
          //           "#688FD8",
          //           "#F25334",
          //           "#49A732",
          //           "#EB3633",
          //           "#FCBD01",
          //           "",
          //           "#CAD9F0",
          //         ];
          //         return colorlist[params.dataIndex];
          //       },
          //     },
          //     labelLine: {
          //       show: true,
          //       lineStyle: {
          //         width: 3,
          //       },
          //     },
          //     data: datas,
          //   },
          //   {},
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function() {
          charts.resize();
        });
      }
      huanzhuang(mtfbChart, true, true, datas, num);
    },
  },
};
</script>

<style scoped lang="scss">
.myborder {
  height: 40rem;
  border-radius: 4px;
  #mtfb {
    margin-top: 1rem;
    height: 33.6rem;
  }
}
</style>
