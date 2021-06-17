<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="" />
      <p>舆情类别</p>
    </div>

    <div id="leibie"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { sentimentType } from "@/assets/api/yuqing";
export default {
  name: "leibie",
  data() {
    return {
      
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.sentimentType();
      }, 500);
    });
  },
  methods: {
    // 舆情类别
    sentimentType() {
      sentimentType({}).then((res) => {
        if (res.code === 200) {
          let leibie = document.getElementById("leibie");
          let leibieChart = echarts.init(leibie);
          this.zhuzhuang(leibieChart, res.data);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    zhuzhuang(charts, data) {
      charts.clear();
      let option = {
        tooltip: {
          trigger: "axis",
          borderWidth: 0,
          textStyle: {
            fontSize: 35,
          },
          axisPointer: {
            type: "shadow",
          },
          formatter(e) {
            return `${e[0].name}：${e[0].value}`;
            // console.log(e);
          },
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.4)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 20,
            interval: 0,
            color: "#fff",
            rotate: 30,
            fontSize: "1.5rem",
            fontfamily: "PingFang Bold",
            fontweight: "bold",
            formatter(e) {
              if (e.length > 5) {
                return e.slice(0, 5) + "...";
              } else {
                return e;
              }
            },
          },
          data: data.map((item) => {
            return item.name;
          }),
        },
        yAxis: {
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
            fontSize: "1.5rem",
          },
          type: "value",
        },
        grid: {
          top: "15%",
          left: "5%",
          right: "4%",
          bottom: 0,
          containLabel: true,
        },
        series: [
          {
            data: data.map((item) => {
              return item.value;
            }),
            type: "bar",
            barWidth: "60%",
            fontSize: "1.5rem",
            // itemStyle:{
            //   normal:{
            //     color:function(params){
            //       var index_color = params.value;
            //       if(index_color >=900){
            //         return 'background: linear-gradient(0deg, #E71515 0%, rgba(231, 21, 21, 0) 100%)'
            //       }else{
            //         return 'color: #00F0FF'
            //       }
            //     }
            //   }
            // },
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 1,
                  color: "rgba(0, 240, 255, 1)", // 100% 处的颜色
                },
                {
                  offset: 0,
                  color: "rgba(0, 240, 255, 0)", // 100% 处的颜色
                },
              ],
              false
            ),
            label: {
              show: true,
              position: "top",
              color: "#fff",
              fontSize: "1.5rem",
            },
          },
        ],
      };
      charts.on("click", (params) => {
        this.$emit("typeTitle",{keyWordId:params.name});
      });
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
  #leibie {
    margin-top: 1rem;
    height: 33rem;
    color: #2078dd;
  }
}
</style>
