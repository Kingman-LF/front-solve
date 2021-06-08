<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>不合格食品项目</p>
    </div>
    <div class="spcj" id="bhgsp"></div>
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>不合格食品类别</p>
    </div>
    <div class="spcj" id="spcc"></div>

  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    // 不合格食品项目
    let bhgsp = document.getElementById("bhgsp");
    let bhgspChart = echarts.init(bhgsp);
    this.zhuzhuangtu2(bhgspChart);
    // 食品抽查不合格食品类别
    this.$nextTick(() => {
      setTimeout(() => {
        this.spcc();
      }, 500);
    });
  },
  methods: {
    // 食品抽查不合格食品类别
    zhuzhuangtu2(charts, color, xdata, ydata, rotate) {
        let xData = xdata ? xdata : ['龙之梦动...', '太湖古镇...', '浙江唯品...', '龙之梦动...', '龙之梦雅...', '龙之梦钻...', '大润发超市', '湖州宝迪...', '德清开元...', '孔雀城二...']
        let yData = ydata ? ydata : [126, 101, 99, 57, 49, 38, 27, 24, 20, 18]
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
              return `${e[0].name}：${e[0].value}`
            }
          },  
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize:'1.5rem',
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 30,
              fontSize:"1.5rem",
              color: "#fff",
              fontfamily: 'PingFang',
              fontweight: 'bold',
              formatter(e){
                if(e.length>5){
                  return (e.slice(0,5)+"...")
                }else{
                  return e
                }
              }
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
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize:'1.5rem',
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              fontfamily: 'PingFang',
              fontSize:"1.5rem",
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
      // 不合格食品项目
    spcc() {
      function getBarJiaoNang(charts, leftData, rightData, colorlist, data) {
        charts.clear();
        let dataV = data ? data : [25, 75, 58];
        let clist = colorlist ? colorlist : ["#FF9600", "#43FF55", "#00F0FF"];
        let ldata = leftData ? leftData : ["已办结", "办理中", "待办理"];
        let rdata = rightData
          ? rightData
          : [
              JSON.stringify({
                state: 0,
                num: 875,
                lv: "30%",
              }),
              JSON.stringify({
                state: 1,
                num: 1154,
                lv: "30%",
              }),
              JSON.stringify({
                state: 1,
                num: 900,
                lv: "30%",
              }),
            ];
        // 指定图表的配置项和数据
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "none",
            },
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            formatter: "{b}:{c}",
          },
          xAxis: {
            type: "value",
            show: false,
          },
          grid: {
            top: "3%",
            left: "3%",
            bottom: "3%",
            containLabel: true,
          },
          yAxis: [
            {
              type: "category",
              scale: true,
              axisLine: {
                // 坐标轴 轴线
                show: false, // 是否显示
              },
              data: ldata,
              axisLabel: {
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: "bold",
              },
              axisTick: {
                show: false,
              },
            },
            {
              type: "category",
              scale: true,
              axisLine: {
                // 坐标轴 轴线
                show: false, // 是否显示
              },
              axisLabel: {
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: "bold",
                formatter: function (data) {
                  let obj = JSON.parse(data);
                  let str =
                    obj.state === 0 ? `({b|${obj.lv}})` : `({a|${obj.lv}})`;
                  return obj.num + str;
                },
                rich: {
                  a: {
                    color: "#FF4657",
                    fontSize:'1.5rem',
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                  b: {
                    color: "#43FF55",
                    fontSize:'1.5rem',
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                },
              },
              axisTick: {
                show: false,
              },
              data: rdata,
            },
          ],
          series: [
            {
              data: dataV,
              type: "bar",
              showBackground: true,
              backgroundStyle: {
                borderWidth: 1,
                fontSize:'1.5rem',
                color: "rgba(255, 255, 255, 0.2)",
                borderRadius: 9,
              },
              itemStyle: {
                // 图形的形状
                normal: {
                  barBorderRadius: 9,
                  color: function (params) {
                    return clist[params.dataIndex];
                  },
                },
              },
              barCategoryGap: 46,
              barWidth: 18,
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      let leftData = [
        "其他",
        "餐饮具卫生问题",
        "农药残留指标风险",
        "重金属超标风险",
        "食品添加剂超标",
      ];
      let rightData = [
        JSON.stringify({
          state: 0,
          num: 875,
          lv: "30%",
        }),
        JSON.stringify({
          state: 1,
          num: 1154,
          lv: "30%",
        }),
        JSON.stringify({
          state: 1,
          num: 900,
          lv: "30%",
        }),
        JSON.stringify({
          state: 0,
          num: 1300,
          lv: "30%",
        }),
        JSON.stringify({
          state: 0,
          num: 600,
          lv: "30%",
        }),
      ];
      let data = [2225, 1785, 1158, 1999, 788];
      let colorlist = ["#FF4657", "#FF9600", "#FF9600", "#00F0FF", "#43FF55"];
      let spcc = document.getElementById("spcc");
      let spccChart = echarts.init(spcc);
      getBarJiaoNang(spccChart, leftData, rightData, colorlist, data);
    },
  },
};
</script>
<style lang="scss" scoped>
  .box{
    height: 81.58rem;
    .spcj {
      height: 35rem;
    }
  }
  
</style>
