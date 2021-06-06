<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>信访相关企业分布</p>
    </div>
    <div id="mymap"></div>
    <div class="lbtm">
      <div class="t">
        <img
            class="titlelogo"
            :src="require('@/assets/images/tousu/titlelogo.png')"
        />
        <span class="innerTitle">信访概览</span>
        <span class="border"></span>
      </div>
      <div class="lbcontent">
        <table class="mytable">
          <tbody>
          <tr v-for="item in list" :key="item.name">
            <td>{{item.date}}</td>
            <td>{{item.name}}</td>
            <td>{{item.area}}</td>
            <td>{{item.status1}}</td>
            <td>{{item.status2}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getBarJiaoNang, getZhexian, huanzhuang, sangshen, zhuzhuangtu} from "@/utils/getCharts";

export default {
  name: "qiyemap",
  data(){
    return {
      list:[
        {date:"2021-05-21 14:44:00",name:"企业A",area:'南浔区',status1:'受理申请中',status2:"办理还剩4天"},
        {date:"2021-05-21 14:44:00",name:"企业b",area:'南浔区',status1:'受理申请中',status2:"办理还剩4天"},
        {date:"2021-05-21 14:44:00",name:"企业c",area:'南浔区',status1:'受理申请中',status2:"办理还剩4天"},
        {date:"2021-05-21 14:44:00",name:"企业d",area:'南浔区',status1:'受理申请中',status2:"办理还剩4天"}
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 地图
      let _this = this;
      let hz = [
        {
          lng: 120.18562,
          lat: 30.85816,
          count: 65,
          coordinate: [120.18562, 30.85816],
        },
        {
          lng: 119.97728,
          lat: 30.5427,
          count: 100,
          coordinate: [119.97728, 30.5427],
        },
        {
          lng: 119.91011,
          lat: 31.02663,
          count: 70,
          coordinate: [119.91011, 31.02663],
        },
      ];
      this.map = new AMap.Map("mymap", {
        zoom: 11, //级别
        showLabel: false,
        resizeEnable: true,
        center: [120.102398, 30.867198],
        viewMode: "2D",
        mapStyle: "amap://styles/a03f4197973297fb473b51937f163496",
        // features: ["bg", "point", "road"],
      });
      if (!this.isSupportCanvas()) {
        alert(
            "热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~"
        );
      }
      let layer = new Loca.HeatmapLayer({
        map: _this.map,
      });
      layer.setData(hz, {
        lnglat: "coordinate",
        value: "count",
      });
      layer.setOptions({
        style: {
          radius: 15,
          color: {
            0.5: "rgb(210, 162, 30)",
            0.65: "rgba(210, 162, 30, 0.918)",
            0.7: "rgba(210, 162, 30, 0.718)",
            0.9: "rgba(210, 162, 30, 0.518)",
            1.0: "rgba(210, 162, 30, 0.218)",
          },
        },
      });
      layer.render();
    });
  },
  methods:{
    isSupportCanvas() {
      var elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    },
  }
}
</script>

<style lang="scss" scoped>
  .box{
    padding: 0 !important;
  }
  .title{
    position: absolute;
    z-index: 99;
    border-bottom:0;
    top: 3rem;
    left: 3rem;
  }
  #mymap {
    height: 75rem;
  }


//.left {
//  width: 103.652rem;
//  height: 76.686rem;
//  position: relative;
//  box-sizing: border-box;
//  margin-right: 4.17rem;
//  background: url("~@/assets/images/xfxgqy.png") no-repeat center;
//  background-size: cover;
//  .ltop{
//    position: absolute;
//    top: 2.9rem;
//    left: 4rem;
//    z-index: 2;
//    color: #ffffff;
//  }
//  .titlelogo{
//    width: 2rem;
//    margin-right: 0.5rem;
//  }
//  .innerTitle {
//    background-image: -webkit-linear-gradient(bottom, #3b5ee2, white, white);
//    -webkit-background-clip: text;
//    -webkit-text-fill-color: transparent;
//    font-family: PingFang Bold;
//    font-style: oblique;
//    font-size: 2.32rem;
//    padding-right: 1rem;
//    //position: absolute;
//  }

//  .ltcontent {
//    height: 49rem;
//  }
  .lbtm {
    position: absolute;
    left: 4rem;
    right: 4rem;
    bottom: 20px;
    color: #ffffff;
    .t{
      display: flex;
      align-items: center;
      img{
        width: 2.30rem;
        margin-right: 1.15rem;
      }
      .border{
        height: 2.32rem;
        flex: 1;
        margin: 0 20px 0 5px;
        border-bottom: 1px solid;
        border-image: -webkit-linear-gradient(0deg, rgba(77,163,255,1), rgba(77,163,255,0))0 0 1 0;
        position: relative;
        &:before{
          content: "";
          width: 2rem;
          height: 0.4rem;
          background-color: rgba(77,163,255,1);
          left: 0;
          bottom: 0;
          position: absolute;
        }
      }
    }

    .lbcontent {
      max-height: 13.08rem;
      overflow: auto;
      padding: 0 5rem;
      .mytable {
        width: 100%;
        color: #fff;
        tr {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          &:last-of-type{
            margin-bottom: 0;
          }
          td {
            //width: 16.33rem;
            flex: 1;
            height: 3.25rem;
            line-height: 3.25rem;
            display: inline-block;
            text-align: center;
            font-size: 1.5rem;
            font-family: PingFang Bold;
            font-weight: bold;
            color: #ffffff;
            white-space: pre-line;
            position: relative;
            box-sizing: border-box;
            &::before {
              content: "";
              top: 0px;
              left: 0px;
              width: 1px;
              height: 3.25rem;
              position: absolute;
              background: linear-gradient(
                      0deg,
                      rgba(0, 240, 255, 0) 0%,
                      #00f0ff 50%,
                      rgba(0, 240, 255, 0) 100%
              );
            }
          }
          td:last-child {
            &::after {
              content: "";
              top: 0px;
              right: 0px;
              width: 0.08rem;
              height: 3.25rem;
              position: absolute;
              background: linear-gradient(
                      0deg,
                      rgba(0, 240, 255, 0) 0%,
                      #00f0ff 50%,
                      rgba(0, 240, 255, 0) 100%
              );
            }
          }
        }
      }
    }
  }
//}
</style>
