<template>
  <div class="myborder">
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
            itemWidth:15,
            itemHeight:15,
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
      let ajlyfb = document.getElementById("ajlyfb");
      let ajlyfbChart = echarts.init(ajlyfb);
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
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value}`
              
            }
          },
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      xuritu(ajlyfbChart);
    },
  }
};
</script>
<style lang="scss" scoped>
.myborder{
  height: 81.58rem;
  border-radius: 4px;
  #ajzt,#ajlyfb {
    margin-top: 1rem;
    height: 34.5rem;
  }
}
  
</style>

