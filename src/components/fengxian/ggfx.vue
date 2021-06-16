<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>产品质量不合格率TOP5</p>
    </div>
    <div class="ggfx" id="cpzl"></div>
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>行业产品质量不合格率</p>
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
    this.zhuzhuangtu3(myChart)
  },
  methods: {
    zhuzhuangtu2(charts, color, xdata, ydata, rotate) {
        let xData = xdata ? xdata : ['电子行业','纺织行业', '化工行业', '机械行业', '建材行业', '轻工行业', '冶金行业']
        let yData = ydata ? ydata : [0, 12.7, 2.14, 2.61, 2.66, 8.32, 1.93]
        let colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
        charts.clear()
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
            formatter(e){
              return `${e[0].name}：${e[0].value}%`
              // console.log(e);
            }
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize:"1.5rem"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 20,
              color: "#fff",
              fontSize:'1.5rem',
              fontfamily: 'PingFang',
              fontweight: 'bold',
            },
            data: xData
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: 'rgba(255, 255, 255, 0.1)',
                fontSize:'1.5rem',
              }
            },
            min:0,
            max:50,
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)',
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              fontfamily: 'PingFang',
              fontweight: 'bold',
              fontSize:"1.5rem"
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
            barWidth: "60%",
            color: colors,
            label: {
              show: true,
              position: 'top',
              color: '#fff',
              fontSize:'1.5rem',
            },


          }]
        }
        option && charts.setOption(option)
        window.addEventListener('resize', function () {
          charts.resize()
        })

    },
    zhuzhuangtu3(charts, color, xdata, ydata, rotate){
      let xData = xdata ? xdata : ['针织服装', '童装', '纸尿裤', '童装', '针织服装']
      let yData = ydata ? ydata : [80.6, 70.9, 60.0, 40.4, 35.7]
      let colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 1,
          color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
          },{
          offset: 0,
          color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
          }], false)
      charts.clear()
      let options = {
          tooltip: {
              trigger: 'axis',
              borderWidth:0,
              textStyle: {
                fontSize:26,
              },
              formatter(e){
                return `${e[0].name}<br/>${e[0].seriesName}：${e[0].value}<br/>${e[0].seriesName}：${e[1].value}`
                // console.log(e);
              },

              axisPointer: {
                  type: 'shadow',
                  crossStyle: {
                      color: '#fff',
                      fontSize:26,
                  }
              }
          },
          legend: {
              data: ['2020', '2021'],
              textStyle: {
                color: "rgba(255, 255, 225, 1)",
                fontSize: 20
              },
              itemWidth:50,
              itemHeight:20,
          },
          xAxis: [
              {
                  type: 'category',
                  data: xData,
                  axisPointer: {
                      type: 'shadow'
                  },
                axisLabel: {
                  rotate:20,
                  color: "rgba(255, 255, 255, 1)",
                  fontSize:'1.5rem',
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
                      formatter: '{value}%',
                      fontSize:"1.5rem",
                  },
                  axisLabel: {
                    color: "rgba(255, 255, 255, 1)",
                    fontSize:'1.5rem',

                  }
              },
              {
                  type: 'value',
                  interval: 5,
              }
          ],
          series: [
              {
                  name: '2020',
                  type: 'bar',
                  fontSize:'1.5rem',
                  color:new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 1,
                  color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
                  },{
                  offset: 0,

                  color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
                  }], false),
                      data: [70.0, 60.9, 50.0, 30.2, 25.6]
                  },
              {
                  name: '2021',
                  type: 'bar',
                  fontSize:'1.5rem',
                  color:new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 1,
                    color: "rgba(120,255,182, 1)" // 100% 处的颜色
                    },{
                    offset: 0,
                    color: "rgba(120,255,182, 0)" // 100% 处的颜色
                    }], false),
                  data: yData
                }
          ]
      };
      options && charts.setOption(options);
      window.addEventListener('resize', function () {
        charts.resize()
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.myborder{
  height: 81.58rem;
  border-radius: 4px;
  .ggfx {
    height: 35rem;
    margin-top: 1rem;
  }
}

</style>
