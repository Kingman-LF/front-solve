<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>预警设备地区分布</p>
    </div>
    <el-table
        :header-cell-style="hc"
        :header-row-style="{backgroundColor: 'transparent'}"
        :cell-style="cs"
        :row-style="{backgroundColor: 'transparent'}"
        :data="tableData"
        style="width: 100%;background-color: transparent">
      <el-table-column
          prop="name"
          label="设备名称"
          align="left"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="using"
          label="在用数"
          align="center"
          width="100"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="deactivate"
          label="停用数"
          align="center"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="yibaojian"
          label="在用超期已报检"
          align="center"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="weibaojian"
          label="在用超期未报检"
          align="center"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="baojian"
          label="当月应捡已报检"
          align="center"
          show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { getYearStartDate, getNowDate, getDate } from "@/utils/date";
import { equipmentArea } from "@/assets/api/shigu";
export default {
  data(){
    return {
      hc:{
        height:'3.17rem',
        padding:0,
        textAlign:"center",
        fontSize:"1.5rem",
        fontFamily: "PingFang SC",
        color: "#FFFFFF",
        backgroundColor: "transparent",
        borderBottomColor:"#00F0FF"
      },
      cs:{
        height:'3.15rem',
        padding:0,
        // textAlign:"center",
        fontSize:"1.5rem",
        fontFamily: "PingFang SC",
        color: "#FFFFFF",
        backgroundColor: "transparent"
      },

      tableData: [   
        {name:"锅炉", using:906, deactivate:244, yibaojian:1,weibaojian:5, baojian:21},
        {name:"压力管道", using:1413, deactivate:1, yibaojian:0,weibaojian:0, baojian:0},
        {name:"客运索道", using:2, deactivate:0, yibaojian:0,weibaojian:0, baojian:0},
        {name:"大型游乐设施", using:119, deactivate:9, yibaojian:0,weibaojian:5, baojian:0},
        {name:"压力容器", using:21975, deactivate:4755, yibaojian:1,weibaojian:41, baojian:85},
        {name:"电梯", using:33947, deactivate:2520, yibaojian:"5/14",weibaojian:"9/7", baojian:"519/218"},
        {name:"场内车辆", using:19121, deactivate:966, yibaojian:25,weibaojian:42, baojian:487},
        {name:"起重机械", using:14017, deactivate:3430, yibaojian:10,weibaojian:29, baojian:207},
        {name:"合计", using:91500, deactivate:11925, yibaojian:42,weibaojian:131, baojian:1319},
      ]
    }
  },
  mounted() {
    // equipmentArea({ startTime: getYearStartDate(), endTime: getNowDate() }).then(
    //   (res) => {
    //     let resdata = res.data;
    //     console.log(resdata);
    //   }
    // );
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.box{
  border-radius: 4px;
  height: 40rem;
  #wy {
    height: 32.85rem;
  }

}

</style>
<style lang="scss">
.el-table__footer-wrapper{
  td,th {
    padding: 0;
    background-color: transparent;
  }
}
.el-table::before{
  height: 0;
}
.el-table tr:last-of-type td{
  border-bottom: 0;
}
</style>
