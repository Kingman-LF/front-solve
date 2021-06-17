<template>
  <div class="myborder">
    <el-row :gutter="12">
      <el-col :span="12">
        <div class="title">
          <img :src="require('@/assets/images/titlelogo.png')" alt="">
          <p>药械化企业检查严重缺陷</p>
        </div>
        <div id="tzsb"></div>
      </el-col>
      <el-col :span="12">
        <div class="title">
          <img :src="require('@/assets/images/titlelogo.png')" alt="">
          <p>药品抽检统计</p>
        </div>
        <div id="ypcj"></div>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="24">
        <div class="title">
          <img :src="require('@/assets/images/titlelogo.png')" alt="">
          <p>医疗器械抽样统计</p>
        </div>
        <div id="yxhcj"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ypcj",
  mounted() {
    this.$nextTick(() => {
      this.tzsb();
      this.getypcj();
      this.getyxhcj()
    }, 500);
  },
  methods:{
    tzsb() {
      let tzsb = document.getElementById("tzsb");
      let tzsbChart = echarts.init(tzsb);
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
              // Use axis to trigger tooltip
              type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
            },
          },
          legend: {
            top:"2%",
            textStyle: {
              color: "rgba(255, 255, 225, 1)",
              fontSize: 20
            },
            itemWidth:30,
            itemHeight:20,
            data: ["药品流通", "药品生产", "医疗器械", "化妆品"],
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
              fontSize:'1.5rem',
              rotate: rotate ? rotate : 0,
              color: "#fff",
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
            data: ["吴兴区", "南浔区", "德清县", "长兴县", "安吉县","南太湖新区"],
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
              fontSize:'1.5rem',
            },
            axisLabel: {
              color: "#fff",
              fontSize:'1.5rem',
            },
          },
          series: [
            {
              name: "药品流通",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [0, 0, 0, 0, 0, 0, 0],
            },
            {
              name: "药品生产",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [0, 0, 0, 0, 0, 0, 0],
            },
            {
              name: "医疗器械",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [0, 0, 0, 0, 0, 0, 0],
            },
            {
              name: "化妆品",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              emphasis: {
                focus: "series",
              },
              data: [4, 0, 5, 0, 0, 3, 0],
            },

          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangDuidie(tzsbChart);
    },
    getypcj(){
      let ypcj = document.getElementById("ypcj");
      let ypcjChart = echarts.init(ypcj);

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
          // formatter(e){
          //   return `${e[0].name}：${e[0].value}`
          //   // console.log(e);
          // }
        },
        legend: {
          top:"2%",
          data: ['计划完成', '实际完成'],
          textStyle: {
            color: "rgba(255, 255, 225, 1)",
            fontSize: 20
          },
          itemWidth:30,
          itemHeight:20,
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
            margin:"20",
            align: "center",
            color: "#fff",
            fontSize:'1.5rem',
            fontFamily: 'PingFang',
            fontWeight: 'bold',
          },
          data: ["市本级", "吴兴区", "南浔区", "德清县", "长兴县", "安吉县","南太湖新区"]
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
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontFamily: 'PingFang',
            fontWeight: 'bold',
            fontSize:"1.5rem"
          },
          type: 'value',
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '5%',
          bottom:'0%',
          containLabel: true
        },
        series: [{
          name:"实际完成",
          data: [19,111,42,22,99,61,129],
          type: 'bar',
          barWidth: "30%",
          color:new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(250, 200, 88, 1)" // 100% 处的颜色
          },{
            offset: 0,

            color: "rgba(250, 200, 88, 0)" // 100% 处的颜色
          }], false),
          // label: {
          //   show: true,
          //   position: 'top',
          //   color: '#fff',
          //   fontSize:'1.5rem',
          // },
        },{
          name:"计划完成",
          data: [30,150,100,70,150,150,150],
          type: 'bar',
          barWidth: "30%",
          color:new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
          },{
            offset: 0,

            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
          }], false),
          // label: {
          //   show: true,
          //   position: 'top',
          //   color: '#fff',
          //   fontSize:'1.5rem',
          // },
        }
        ]
      }
      ypcjChart.setOption(option);
      window.addEventListener("resize", function () {
        ypcjChart.resize();
      });
    },
    getyxhcj(){
      let yxhcj = document.getElementById("yxhcj");
      let yxhcjChart = echarts.init(yxhcj);
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
          // formatter(e){
          //   return `${e[0].name}：${e[0].value}`
          //   // console.log(e);
          // }
        },
        legend: {
          top:"2%",
          data: ['任务数', '已完成'],
          textStyle: {
            color: "rgba(255, 255, 225, 1)",
            fontSize: 25
          },
          itemWidth:40,
          itemHeight:20,
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
            rotate: 18,
            margin:"20",
            align: "center",
            color: "#fff",
            fontSize:'1.5rem',
            fontFamily: 'PingFang',
            fontWeight: 'bold',
          },
          data: ["市本级", "吴兴区", "南浔区", "德清县", "长兴县", "安吉县","南太湖新区"]
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
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontFamily: 'PingFang',
            fontWeight: 'bold',
            fontSize:"1.5rem"
          },
          type: 'value',
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '5%',
          bottom:'0%',
          containLabel: true
        },
        series: [{
          name:"任务数",
          data: [9,11,11,14,12,19,12],
          type: 'bar',
          barWidth: "30%",
          color:new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(200, 250, 100, 1)" // 100% 处的颜色
          },{
            offset: 0,

            color: "rgba(200, 250, 100, 0)" // 100% 处的颜色
          }], false),
          // label: {
          //   show: true,
          //   position: 'top',
          //   color: '#fff',
          //   fontSize:'1.5rem',
          // },
        },{
          name:"已完成",
          data: [6,10,11,14,11,13,10],
          type: 'bar',
          barWidth: "30%",
          color:new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
          },{
            offset: 0,

            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
          }], false),
          // label: {
          //   show: true,
          //   position: 'top',
          //   color: '#fff',
          //   fontSize:'1.5rem',
          // },
        }
        ]
      }
      
      yxhcjChart.setOption(option);
      window.addEventListener("resize", function () {
        yxhcjChart.resize();
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#tzsb{
  height: 30rem;
}
#ypcj{
  height: 31rem;
}
#yxhcj{
  height: 26.2rem;
}
</style>
