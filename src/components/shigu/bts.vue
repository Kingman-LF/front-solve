<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>不文明乘梯</p>
    </div>
    <div id="bts"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
          this.bts();
      },500)
    });
  },
  methods: {
    bts() {
      // 检验
      let bts = document.getElementById("bts");
      let btsChart = echarts.init(bts);
      function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
        let xData = xdata
          ? xdata
          : ["起重机", "场(厂)内机动车辆", "压力容器","压力管道","大型游乐设施","电梯","客运索道","锅炉"];
        let yData = ydata ? ydata : [0, 0, 2,0,0,0,0,0];
        let colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false);
        charts.clear();
        let option = {
          tooltip: {
            trigger: "axis",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            axisPointer: {
                type: 'shadow',
            },
            formatter(e){
              return `${e[0].name}：${e[0].value}`
              // console.log(e);
            }
          },
          xAxis: {
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255, 0.1)",
                fontSize:'1.5rem',
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                fontSize:'1.5rem',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show:false,
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
              fontSize:'1.5rem',
            },
            type: "value",
          },
          yAxis: {
            type: 'category',
            axisLine: {
              show:false,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                fontSize:'1.5rem',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: "#fff",
              fontSize:'1.5rem',
              fontfamily: "PingFang Bold",
              fontweight: "bold",
              formatter(e){
                if(e.length>5){
                  return (e.slice(0,5)+"...")
                }else{
                  return e
                }
              }
            },
            data: ["南都物业服务集团股份有限公司湖州分公司", "浙江永成物业管理有限公司长兴分公司", "德信盛全物业服务有限公司德清分公司","湖州市特种设备检测研究院","德清县农业局","湖州健马时装有限公司","浙江省军工集团有限公司"],
            inverse:true,
          },
          grid: {
            top: "5%",
            left: "5%",
            right: "5%",
            bottom:"5%",
            containLabel: true,
          },
          series: [
            {
              data: [4313, 1678, 850,5,0,0,0],
              type: "bar",
              barWidth: "60%",
              fontSize:'1.5rem',
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 1,
                color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
                },{
                offset: 0,
                color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
              }], false),
              label: {
                show: true,
                position: "right",
                color: "#fff",
                fontSize:'1.5rem',
              },
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangtu(btsChart, "#42cbff");
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder{
  height: 40rem;
  border-radius: 4px;
  #bts {
    height: 32rem;
    margin-top: 1rem;
  }
}

</style>
