<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>商品类别投诉接收量TOP10</p>
    </div>
    <div id="shopType"></div>
    <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
      <!-- <div class="block">
          <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
          :current-page="currentPage" 
          :page-sizes="[4,8,12,16]" 
          :page-size="pageSize" 
          :background="false"
          layout="total, sizes, prev, pager, next, jumper" 
          :total="tableData.length">
          </el-pagination>
      </div>
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="address" label="提供方"></el-table-column>
            <el-table-column prop="date" label="登记时间"></el-table-column>
            <el-table-column prop="name" label="类型"></el-table-column>
            <el-table-column prop="address" label="办理情况状态"></el-table-column>
            <el-table-column prop="date" label="登记部门"></el-table-column>
            <el-table-column prop="name" label="处理部门"></el-table-column>
            <el-table-column prop="address" label="办理期限"></el-table-column>
            <el-table-column prop="name" label="联系方式"></el-table-column>
            <el-table-column prop="address" label="涉及金额"></el-table-column>
        </el-table> -->
          <div class="block">
            <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="currentPage" 
            :page-sizes="[10,20]" 
            :page-size="pageSize" 
            :background="false"
            layout="total, sizes, prev, pager, next, jumper" 
            :total="tableData.length">
            </el-pagination>
        </div>
        <template>
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            height="53rem"
            style="margin-top:2rem"
            border>
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="address" label="提供方"></el-table-column>
            <el-table-column prop="date" label="登记时间"></el-table-column>
            <el-table-column prop="name" label="类型"></el-table-column>
            <el-table-column prop="address" label="办理情况状态"></el-table-column>
            <el-table-column prop="date" label="登记部门"></el-table-column>
            <el-table-column prop="name" label="处理部门"></el-table-column>
            <el-table-column prop="address" label="办理期限"></el-table-column>
            <el-table-column prop="name" label="联系方式"></el-table-column>
            <el-table-column prop="address" label="涉及金额"></el-table-column>
          </el-table>
        </template>
    </el-dialog>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      dialogTableVisible: false,
      tableData: [
            {
                date: "2016-05-02",
                name: "第一页",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: "2016-05-04",
                name: "第二页",
                address: "上海市普陀区金沙江路 1517 弄"
            },
            {
                date: "2016-05-01",
                name: "第三页",
                address: "上海市普陀区金沙江路 1519 弄"
            },
            {
                date: "2016-05-03",
                name: "第四页",
                address: "上海市普陀区金沙江路 1516 弄"
            },
            {
                date: "2016-05-01",
                name: "第五页",
                address: "上海市普陀区金沙江路 1519 弄"
            },
            {
                date: "2016-05-03",
                name: "第六页",
                address: "上海市普陀区金沙江路 1516 弄"
            },
            {
                date: "2016-05-02",
                name: "第一页",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: "2016-05-04",
                name: "第二页",
                address: "上海市普陀区金沙江路 1517 弄"
            },
            {
                date: "2016-05-01",
                name: "第三页",
                address: "上海市普陀区金沙江路 1519 弄"
            },
            {
                date: "2016-05-03",
                name: "第四页",
                address: "上海市普陀区金沙江路 1516 弄"
            },
            {
                date: "2016-05-01",
                name: "第五页",
                address: "上海市普陀区金沙江路 1519 弄"
            },
            {
                date: "2016-05-03",
                name: "第六页",
                address: "上海市普陀区金沙江路 1516 弄"
            },
            {
                date: "2016-05-02",
                name: "第一页",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: "2016-05-04",
                name: "第二页",
                address: "上海市普陀区金沙江路 1517 弄"
            },
            {
                date: "2016-05-01",
                name: "第三页",
                address: "上海市普陀区金沙江路 1519 弄"
            },
            {
                date: "2016-05-03",
                name: "第四页",
                address: "上海市普陀区金沙江路 1516 弄"
            },
            {
                date: "2016-05-01",
                name: "第五页",
                address: "上海市普陀区金沙江路 1519 弄"
            },
            {
                date: "2016-05-03",
                name: "第六页",
                address: "上海市普陀区金沙江路 1516 弄"
            },
          ],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 10, // 每页的数据条数
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
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.currentPage = 1;
        this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage = val;
    },
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
            // console.log(thit);
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