<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>产品质量不合格率TOP5</p>
    </div>
    <div class="ggfx" id="cpzl"></div>
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>行业产品质量合格率</p>
    </div>
    <div class="ggfx" id="hyspzl"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    // 行业产品质量合格率
    let hyspzl = document.getElementById("hyspzl");
    let hyspzlChart = echarts.init(hyspzl);
    this.zhuzhuangtu2(hyspzlChart);
    // 产品质量不合格率TOP5
    var cpzlDom = document.getElementById('cpzl');
    var myChart = echarts.init(cpzlDom);
    var option;
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['2021', '2022']
        },
        xAxis: [
            {
                type: 'category',
                data: ['针织服装', '童装', '纸尿裤', '童装', '针织服装'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 100,
                interval: 50,
                axisLabel: {
                    formatter: '{value}%'
                }
            },
            {
                type: 'value',
                interval: 5,
            }
        ],
        series: [
            {
                name: '2021',
                type: 'bar',
                data: [20.0, 40.9, 70.0, 23.2, 25.6]
            },
            {
                name: '2022',
                type: 'bar',
                data: [20.6, 50.9, 90.0, 26.4, 28.7]
            }
        ]
    };
    option && myChart.setOption(option);
  },
  methods: {
    zhuzhuangtu2(charts, color, xdata, ydata, rotate) {
        let xData = xdata ? xdata : ['龙之梦动...', '太湖古镇...', '浙江唯品...', '龙之梦动...', '龙之梦雅...', '龙之梦钻...', '大润发超市', '湖州宝迪...', '德清开元...', '孔雀城二...']
        let yData = ydata ? ydata : [126, 101, 99, 57, 49, 38, 27, 24, 20, 18]
        let colors = color ? color : 'rgba(0, 240, 255, 1)'
        charts.clear()
        let option = {
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 20,
              color: "#fff",
              fontfamily: 'PingFang',
              fontweight: 'bold',
            },
            data: xData
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              fontfamily: 'PingFang',
              fontweight: 'bold'
            },
            type: 'value',
            
          },
          grid: {
            top: '15%',
            left: '5%',
            right: '4%',
            height: '80%',
            containLabel: true
          },
          series: [{
            data: yData,
            type: 'bar',
            barWidth: 20,
            color: colors,
            label: {
              show: true,
              position: 'top',
              color: '#fff'
            },
            

          }]
        }
        option && charts.setOption(option)
        window.addEventListener('resize', function () {
          charts.resize()
        })

      },
  },
};
</script>
<style lang="scss" scoped>
.box{
  height: 81.58rem;
  .ggfx {
    height: 35rem;
  }
}
  
</style>
