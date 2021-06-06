<template>
  <div class="box">
    <div class="top">
      <span class="innerTitle" :class="{active:type === 1}" @click="changeType(1)">被投诉公司排行TOP10</span>
      <span class="innerTitle" :class="{active:type === 2}" @click="changeType(2)">被举报公司排行TOP10</span>
    </div>
    <div class="name">
      <span
        v-for="(item, index) in nameList"
        @click.stop="nameClick(item.id)"
        :key="item.id"
        :class="{active:id === item.id}"
        >{{ item.text }}</span
      >
    </div>
    <div id="btsgs" style="height: 17.73rem;"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      type:1,
      id:1,

      nameList: [
        {
          id: 1,
          text: "湖州市",
        },
        {
          id: 2,
          text: "吴兴区",
        },
        {
          id: 3,
          text: "南浔区",
        },
        {
          id: 4,
          text: "长兴县",
        },
        {
          id: 5,
          text: "德清县",
        },
        {
          id: 6,
          text: "安吉县",
        },
        {
          id: 7,
          text: "南太湖区",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.btsgs();
      }, 500);
    });
  },
  methods: {
    nameClick(id) {
      this.id = id;
      this.btsgs();
    },
    changeType(e){
      this.type = e
      this.btsgs();
    },
    btsgs() {
      // charts, color, xdata, ydata, rotate
      let xData = [
        "公司名称",
        "公司名称",
        "公司名称",
        "公司名称",
        "公司名称",
        "公司名称",
        "公司名称",
        "公司名称",
        "公司名称",
        "公司名称",
      ];
      let yData = [10, 7, 28, 24, 9, 5, 6, 10, 11, 45];
      let btsgsChart = echarts.init(document.getElementById("btsgs"));
      // 柱状图
      function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
        charts.clear();
        // charts.showLoading({
        //   text: "数据正在加载...",
        //   textStyle: { fontSize: 30, color: "#444" },
        //   effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
        // });
        let option = {
          xAxis: {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              rotate: rotate ? rotate : 0,
              color: "#fff",
              fontfamily: "PingFang Bold",
              fontSize:"1.34rem"
            },
            data: xdata,
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              fontfamily: "PingFang Bold",
              fontSize:"1.34rem"
            },
            type: "value",
          },
          tooltip:{

            textStyle: {
              fontSize: 30
            }
          },
          grid: {
            top: "5%",
            bottom:0,
            left: "3%",
            right: "4%",
            containLabel: true,
          },
          series: [
            {
              data: ydata,
              type: "bar",
              barWidth: 20,
              color: color,
              label: {
                show: true,
                position: "top",
                color: "#fff",
                fontSize:"1.53rem"
              },
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangtu(btsgsChart, "#00F0FF", xData, yData, 30);
    },
  },
};
</script>
<style lang="scss" scoped>
.box{
  .top {
    display: flex;
    justify-content: space-between;
    .innerTitle{
      font-size: 1.72rem;
      cursor: pointer;
    }
    .innerTitle.active {
      font-size: 2.5rem;
      border-bottom: 0.38rem solid #00f0ff;
    }
  }
  .name {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 1.72rem;
      font-family: PingFang Bold;
      color: #969696;
      cursor: pointer;
      line-height: 4.75rem;
      &.active{
        color: #ffffff;
        text-shadow: #0099ff 0 0 10px;
      }
    }
  }
}
//.btsgsph {
//  height: 31.75rem;
//  background-size: 100% 100%;
//  background-image: url("~@/assets/images/shouye/jx1.png");
//  .name {
//    display: flex;
//    justify-content: space-between;
//    span {
//      font-size: 1.5rem;
//      font-family: PingFang;
//      font-weight: bold;
//      color: #969696;
//      opacity: 0.8;
//      cursor: pointer;
//      line-height: 4.75rem;
//    }
//  }
//  #btsgs {
//    height: 22.83rem;
//  }
//  .top {
//    display: flex;
//    justify-content: space-between;
//    .innerTitle:nth-child(1) {
//      font-size: 1.5rem;
//    }
//    .innerTitle:nth-child(2) {
//      border-bottom: 0.08rem solid #00f0ff;
//    }
//  }
//}
</style>
