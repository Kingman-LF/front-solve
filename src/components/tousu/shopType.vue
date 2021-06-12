<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>商品类别投诉接收量TOP10</p>
    </div>
    <div id="shopType"></div>
    <!-- <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
        <template>
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            height="53rem"
            style="margin-top:1rem"
            border>
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="categoryName" label="登记编号"></el-table-column>
            <el-table-column prop="complainants" label="投诉方"></el-table-column>
            <el-table-column prop="content" label="内容"></el-table-column>
            <el-table-column prop="complaint" label="被投诉对象"></el-table-column>
            <el-table-column prop="consumptionType" label="消费类型(中类)"></el-table-column>
            <el-table-column prop="start" label="办结状态"></el-table-column>
            <el-table-column prop="feedbackContent" label="反馈内容"></el-table-column>
          </el-table>
        </template>
        <div class="block" style="margin-top:2rem">
            <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="currentPage" 
            :page-sizes="[10,20]" 
            :page-size="pageSize"
            background
            layout="total,sizes, prev, pager, next" 
            :total="tableData.length">
            </el-pagination>
        </div>
    </el-dialog> -->
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  // data() {
  //   return {
  //     dialogTableVisible: false,
  //     tableData: [
  //           {
  //               categoryName:3305230000000202105312269,
  //               complainants:"廖先生",
  //               content:"（信访标题：[来电]浙江省湖州市安吉县；信访编号：HZDH20210528210013）我在网上购买了安吉县孝丰镇狮古桥工业宝蝶竹业有限公司的竹席，商家宣传竹席有刺绣包边，但是收到货并没有刺绣包边，而且竹席做工很差，有很多毛刺，竹席编织的很不紧凑，现在我要求商家退一赔三，请相关单位处理。",
  //               complaint:"宝蝶竹业有限公司",
  //               consumptionType:"一般食品",
  //               feedbackContent:"你好！接到你的投诉后，我局工作人员及时与你进行了联系，了解了相关情况，你所投诉的内容我局工作人员已经在全国12315平台上进行处理了，会按规定在平台上给你相关处理答复，请耐心等待。回复人朱金勇，电话0572-5052627。"
  //           },
  //         ],
  //     currentPage: 1, // 当前页码
  //     total: 20, // 总条数
  //     pageSize: 10, // 每页的数据条数
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.shopType();
      }, 500);
    });
  },
  methods: {
    // //每页条数改变时触发 选择一页显示多少行
    // handleSizeChange(val) {
    //     // console.log(`每页 ${val} 条`);
    //     this.currentPage = 1;
    //     this.pageSize = val;
    // },
    // //当前页改变时触发 跳转其他页
    // handleCurrentChange(val) {
    //     // console.log(`当前页: ${val}`);
    //     this.currentPage = val;
    // },
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
                    text: ["{value|" + gailanTotal + "}"],
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
            // console.log(params);
            // thit.dialogTableVisible = true;
            thit.$emit("tkshow", true,params);
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