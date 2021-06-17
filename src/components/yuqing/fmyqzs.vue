<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="" />
      <p>负面舆情走势</p>
    </div>

    <div id="fmyqzs"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { negativeSentiment } from "@/assets/api/yuqing";
export default {
  name: "yqxqfb",
  mounted() {
    // this.yqInfo()
    this.$nextTick(() => {
      setTimeout(() => {
        this.negativeSentiment();
      }, 500);
    });
  },
  methods: {
    negativeSentiment() {
      negativeSentiment({}).then((res) => {
        if (res.code === 200) {
          let fmyqzs = document.getElementById("fmyqzs");
          let myChart = echarts.init(fmyqzs);
          this.fmyqzs(myChart, res.data);
        } else {
          this.$message.erroe(res.message);
        }
      });
    },
    fmyqzs(charts, data) {
      charts.clear();
      let option = {
        color: ["#00DDFF", "#80FFA5"],
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
          borderWidth: 0,
          textStyle: {
            fontSize: 35,
          },
          formatter(e) {
            return `${e[0].name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e[0].color};display:inline-block"></div> ${e[0].value}`;
          },
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          left: "right",
          textStyle: {
            color: "rgba(255, 255, 255)",
            fontSize: 20,
          },
          itemWidth: 50,
          itemHeight: 20,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
            axisLabel: {
              fontSize: "1.5rem",
              fontFamily: " PingFang Bold",
              fontWeight: "bold",
              // interval: 0,
              // rotate: 40,
            },
            boundaryGap: false,
            data: data.map((item) => {
              return item.name;
            }),
          },
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 2,
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
            axisLabel: {
              fontSize: "1.5rem",
              fontFamily: " PingFang",
              fontWeight: "bold",
              color: "#FFFFFF",
            },
          },
        ],
        series: [
          {
            type: "line",
            smooth: true,
            lineStyle: {
              width: 3,
            },
            showSymbol: false,
            areaStyle: {
              // opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(0, 221, 255,1)",
                },
                {
                  offset: 1,
                  color: "rgba(77, 119, 255,0)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: data.map((item) => {
              return item.value;
            }),
          },
        ],
      };
      option && charts.setOption(option);
      window.addEventListener("resize", function () {
        charts.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.myborder {
  height: 40rem;
  border-radius: 4px;
  #fmyqzs {
    margin-top: 1rem;
    height: 33rem;
    padding-bottom: 2.5rem;
  }
}
</style>