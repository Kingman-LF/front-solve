<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>商品类别投诉接收量TOP10</p>
    </div>
    <div id="shopType"></div>
    <!-- <el-button  type="text" @click="dialogTableVisible = true"></el-button> -->
    <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="name" label="类别"></el-table-column>
        <el-table-column property="value" label="投诉量"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      dialogTableVisible: false,
      gridData: [{}],
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.shopType();
      }, 500);
    });
  },
  methods: {
    shopType() {
      let thit=this;
      let shopType = document.getElementById("shopType");
      let shopTypeChart = echarts.init(shopType);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 4522;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`
              // console.log(e);
            }
          },
          legend: {
            show: false,
          },
          graphic: mygraphic
            ? [
                {
                  tooltip: {
                    formatter(e){
                      return `总量：${gailanTotal}`
                    }
                  },
                  type: "text",
                  left: "center",
                  top: "center",
                  z: 10,
                  style: {
                    fill: "#fff",
                    text: gailanTotal,
                    textAlign: "center",
                    text: ["{value|" + gailanTotal + "}"].join(
                      "\n"
                    ),
                    rich: {
                      value: {
                        color: "#303133",
                        fontSize: '3rem',
                        lineHeight: 30,
                        fontFamily: "digifaw",
                        textShadowColor: "#0096ff",
                        textShadowBlur: "12",
                      },
                      name: {
                        color: "#909399",
                        lineHeight: 30,
                        fontSize: '2rem',
                      },
                    },
                    font: "16px PingFang",
                  },
                },
              ]
            : [],
          series: [
            {
              type: "pie",
              radius: ["45%", "70%"],
              center: ["center", "center"],
              // avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
                // formatter(e){
                //   console.log(e)
                //   return `${e.name}`
                // }
              },
              itemStyle: {
                color: function (params) {
                  var colorlist = [
                    "#0F5ED6",
                    "#79FFB5",
                    "#843DFF",
                    "#4304B1",
                    "#688FD8",
                    "#F25334",
                    "#49A732",
                    "#EB3633",
                    "#FCBD01",
                    "#CAD9F0",
                  ];
                  return colorlist[params.dataIndex];
                },
              },
              labelLine: {
                show: true,
                lineStyle:{
                  width:2
                }
                // length: 20,
                // length2: 10
              },
              data: [
                { value: 890, name: "一般食品" },
                // { value: 848, name: "其他商品" },
                { value: 533, name: "家居用品" },
                { value: 485, name: "服装鞋帽" },
                { value: 355, name: "交通工具" },
                { value: 302, name: "家用电器" },
                { value: 277, name: "装修建材" },
                { value: 165, name: "烟、酒和饮料" },
                { value: 148, name: "首饰" },
                { value: 125, name: "通讯产品" },
                { value: 59, name: "药品9" },
              ],
            },
            {},
          ],
        };
        option && charts.setOption(option);
        shopTypeChart.on('click', function (params) {
            thit.dialogTableVisible = true;
            thit.gridData[0]=params.data
        });
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(shopTypeChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder {
  width: 58rem;
  height: 31.5rem;
  border-radius: 4px;
  #shopType {
    margin-top: 1rem;
    height: 25rem;
  }
  
}
</style>