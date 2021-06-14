<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>投诉与举报量走势</p>
    </div>
    <div id="tousunmap"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {getYearStartDate,getNowDate,getDate} from '@/utils/date'
import {tousunum} from "@/assets/api/tousu"

export default {
  mounted() {
    tousunum({startTime: getYearStartDate(),endTime: getNowDate()}).then(res => {
      // console.log(res.data)
      this.monthData=[],
      this.complaint=[],
      this.report=[],
      this.M = new Date().getMonth()+1;
      res.data.complaint.forEach((v,i) => {
        if(i+1<this.M){
          this.monthData.push(v.name)
          this.complaint.push(v.value)
        }
      });
      res.data.report.forEach((v,i) => {
        if(i+1<this.M){
          this.report.push(v.value)
        }
      });
      this.$nextTick(() => {
        // setTimeout(() => {
          this.tousunmap(this.monthData,this.complaint,this.report);
        // }, 500);
      });
    })
    
  },
  methods: {
    tousunmap(monthData,complaint,report){
      var tousunmap = document.getElementById('tousunmap');
      var myChart = echarts.init(tousunmap);
      function huanzhuang(charts, showLable, mygraphic,monthData,complaint,report){
        charts.clear();
        let option = {
            color: ['#00DDFF','#80FFA5', ],
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                borderWidth:0,
                  textStyle: {
                    fontSize:26,
                  },
                formatter(e){
                  return `${e[0].name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e[0].color};display:inline-block"></div>${e[0].seriesName} ${e[0].value}
                          <br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e[1].color};display:inline-block"></div>${e[1].seriesName} ${e[1].value}`
                  // console.log(e);
                },
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
              left:'right',
              data: ['投诉', '举报'],
              textStyle: {
                  color: "rgba(255, 255, 255)",
                  fontSize: 20
              },
              itemWidth:50,
              itemHeight:20,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                      lineStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                      }
                    },
                    axisLabel:{
                      fontSize:"1.5rem"
                    },
                    boundaryGap: false,
                    data: monthData,
                    
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitNumber:2,
                    axisLine: {
                      lineStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                      }
                    },
                    axisLabel:{
                      fontSize:"1.5rem"
                    },
                }
            ],
            series: [
                  {
                    name: '举报',
                    type: 'line',
                    // stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 3
                    },
                    showSymbol: false,
                    areaStyle: {
                        // opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 221, 255,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(77, 119, 255,0)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: report
                },
                {
                    name: '投诉',
                    type: 'line',
                    // stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 3
                    },
                    showSymbol: false,
                    areaStyle: {
                        // opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(128, 255, 165,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(1, 191, 236,0)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: complaint
                },


            ]
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(myChart, true, true,monthData,complaint,report);
    }
  },
}
</script>
<style lang="scss" scoped>
.myborder {
  height: 30rem;
  border-radius: 4px;
  #tousunmap{
    height: 23rem;
    margin-top: 1rem;
  }
}
</style>
