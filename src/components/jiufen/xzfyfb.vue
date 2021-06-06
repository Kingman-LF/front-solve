<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>行政复议地区分布</p>
    </div>
    <div id="fuyi"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"

export default {
  name: "xzfyfb",
  mounted() {
    let fuyi = document.getElementById("fuyi");
    let fuyiChart = echarts.init(fuyi);
    this.huanzhuang1(fuyiChart);
  },
  methods:{
    huanzhuang1(charts, showLable, mygraphic) {
      charts.clear()
      let gailanTotal = 58
      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false
        },
        graphic: [{
          type: 'text',
          left: 'center',
          top: 'center',
          z: 10,
          style: {
            fill: '#fff',
            textAlign: 'center',
            text: [
              `{name|总计}`,
              '{value|' + gailanTotal + '}',

            ].join('\n'),
            rich: {
              value: {
                color: '#303133',
                fontSize: '1.5rem',
                fontFamily: 'PingFang'
              },
              name: {
                color: '#909399',
                lineHeight:30,
                fontSize: '2rem'
              },
            },
            font: '16px PingFang'
          }
        }],
        series: [
          {
            name: '行政复议',
            type: 'pie',
            radius: ['40%', '65%'],
            center: ['center', 'center'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              color: "#fff",
              fontWeight: 'bold',
              fontFamily: 'PingFang SC',
              fontSize: '1.5rem',
              formatter(e){
                console.log(e)
                return `${e.name}\n${e.value}个 ${e.percent}%`
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
              { value: 3, name: '市本级' },
              { value: 7, name: '吴兴区' },
              { value: 6, name: '长兴县' },
              { value: 19, name: '德清县' },
              { value: 14, name: '安吉县' },
              { value: 4, name: '南太湖新区' },
              { value: 5, name: '南浔区' },
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

<style scoped>
.myborder{
  height: 27.67rem;
}
#fuyi{
  margin-top: 1rem;
  height: 19.62rem;
}
</style>
