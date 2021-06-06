<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>办结率</p>
    </div>
    <div id="banjiChart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getBarJiaoNang} from "@/utils/getCharts";

export default {
  name: "xfStatus",
  mounted() {
    this.$nextTick(()=>{
      let banjiChart = document.getElementById("banjiChart");
      let chart = echarts.init(banjiChart);
      this.huanzhuang(chart);
    })
  },
  methods:{
    huanzhuang(charts, showLable, mygraphic) {
      charts.clear()
      let gailanTotal = 3
      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false
        },
        // graphic: [{
        //   type: 'text',
        //   left: '40%',
        //   top: '40%',
        //   z: 10,
        //   style: {
        //     fill: '#fff',
        //     textAlign: 'center',
        //     text: [
        //       `{name|总记}`,
        //       '{value|' + gailanTotal + '}',
        //
        //     ].join('\n'),
        //     rich: {
        //       value: {
        //         color: '#303133',
        //         fontSize: '2rem',
        //         fontWeight: 'bold',
        //         fontFamily: 'PingFang'
        //       },
        //       name: {
        //         color: '#909399',
        //         lineHeight:30,
        //         fontSize: '2rem'
        //       },
        //     },
        //     font: '16px PingFang'
        //   }
        // }],
        series: [
          {
            name: '案件状态',
            type: 'pie',
            radius: ['50%', '75%'],
            center: ['46%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              color: "#fff",
              fontWeight: 'bold',
              fontFamily: 'PingFang Bold',
              fontSize: '2rem',
              formatter(e){
                console.log(e)
                // return `${e.name}\n${e.value}个 ${e.percent}%`
                return `${e.name} ${e.percent}%`
              }
            },
            itemStyle: {
              color: function (params) {
                var colorlist = ['#fc8452', '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272'];
                return colorlist[params.dataIndex];
              },
            },
            labelLine: {
              show: true,
              length: 20,
              length2: 20,
            },
            data: [
              { value: 2, name: '办结' },
              { value: 1, name: '未办结' },
            ]
          }, {

          }
        ]
      }
      option && charts.setOption(option)
      window.addEventListener('resize', function () {
        charts.resize()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
#banjiChart {
  height: 19rem;
}
</style>
