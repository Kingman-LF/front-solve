<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>案件总体情况结案数分布</p>
    </div>
    <div id="ajzt"></div>
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>案件分析</p>
    </div>
    <div id="ajlyfb"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
    // 案件总体情况结案数分布
      this.ajzt();
    //案件分析 
      this.ajlyfb();
    }, 500);

  },
  methods: {
    ajzt() {
      let ajzt = document.getElementById("ajzt");
      let ajztChart = echarts.init(ajzt);
      function zhuzhuangDuidie(charts, rotate) {
        charts.clear();
        let option = {
          tooltip: {
            trigger: "axis",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            axisPointer: {
              type: "shadow", 
            },
          },
          legend: {
            top:"5%",
            textStyle: {
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
              fontSize:'1.5rem',
            },
            data: ["侵害消费者权益", "食品安全",  "质量领域", "知识产权", "药械化","其它"],
          },
          grid: {
            top: "15%",
            left: "3%",
            right: "4%",
            width: "90%",
            height: "80%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            axisLabel: {
              interval: 0,
              rotate: rotate ? rotate : 0,
              color: "#fff",
              fontSize:'1.5rem',
              rotate: 20,
              fontfamily: "PingFang",
              fontweight: "bold",
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                fontSize:'1.5rem',
              },
            },
            data: ["市本级", "吴兴区", "南浔区", "德清县", "长兴县","安吉县","南太湖新区"],
          },
          yAxis: {
            type: "value",
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
              color: "#fff",
              fontSize:'1.5rem',
            },
          },
          series: [
            {
              name: "侵害消费者权益",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [320, 302, 301, 334, 390, 330, 320],
              
            },
            {
              name: "食品安全",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "质量领域",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "知识产权",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "药械化",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "其它",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangDuidie(ajztChart);
    },
    ajlyfb(){
      var ajlyfbDom = document.getElementById('ajlyfb');
      var ajlyfbChart = echarts.init(ajlyfbDom);
      
      function zhuzhuangajlyfbDom(charts, rotate){
        charts.clear();
        let option = {
          tooltip: {
            trigger: 'axis',
            borderWidth:0,
              textStyle: {
                fontSize:26,
              },
          },
          legend: {
              data: ['罚没款', '大要案数', '移送司法机关', '一般案件'],
              textStyle: {
                color: "rgba(255, 255, 225, 1)",
                fontSize: 20
              },
              itemWidth:50,
              itemHeight:20,
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },

          xAxis: {
              type: 'category',
              boundaryGap: false,
                axisLabel: {
                  color: "rgba(255, 255, 255, 1)",
                  fontSize:'1.5rem',
                },
              data: ['1 月', '6 月', '12 月']
          },
          yAxis: {
              type: 'value',
                axisLabel: {
                  color: "rgba(255, 255, 255, 1)",
                  fontSize:'1.5rem',
                },
          },
          series: [
              {
                  name: '罚没款',
                  type: 'line',
                  stack: '总量',
                  smooth: true,
                  data: [720, 22, 900],
              },
              {
                  name: '大要案数',
                  type: 'line',
                  stack: '总量',
                  smooth: true,
                  smooth: true,
                  data: [220, 882, 191]
              },
              {
                  name: '移送司法机关',
                  type: 'line',
                  stack: '总量',
                  smooth: true,
                  data: [150, 732, 201]
              },
              {
                  name: '一般案件',
                  type: 'line',
                  stack: '总量',
                  smooth: true,
                  data: [820, 400, 901]
              }
          ]
          };
          option && charts.setOption(option);
          window.addEventListener("resize", function () {
              charts.resize();
          });
        }
        zhuzhuangajlyfbDom(ajlyfbChart)
    },
  }
};
</script>
<style lang="scss" scoped>
.box{
  height: 81.58rem;
  #ajzt,#ajlyfb {
    height: 35rem;
  }
}
  
</style>

