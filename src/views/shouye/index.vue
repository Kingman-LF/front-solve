<template>
  <div class="box">
    <div class="title">“破五多”综合治理平台</div>
    <div class="content">
      <div class="left">
        <div class="ll">
          <btsgs />
          <cftsv />
          <bjv />
        </div>
        <div class="lr">
          <jbwt />
          <jacontent/>
        </div>
      </div>
      <div class="middle">
        <fenbu />
      </div>
      <div class="right">
        <div class="rl">
          <yqqs />
          <div class="rlm">
            <yqzt />
            <zdjg />
          </div>
          <tzsb />
        </div>
        <div class="rr">
          <scbhg />
          <spcjbhg />
          <dtjcbhg />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import btsgs from "@/components/shouye/btsgs";
import cftsv from "@/components/shouye/cftsv";
import bjv from "@/components/shouye/bjv";
import fenbu from "@/components/shouye/fenbu";
import yqqs from "@/components/shouye/yqqs";
import yqzt from "@/components/shouye/yqzt";
import zdjg from "@/components/shouye/zdjg";
import tzsb from "@/components/shouye/tzsb";
import scbhg from "@/components/shouye/scbhg";
import spcjbhg from "@/components/shouye/spcjbhg";
import dtjcbhg from "@/components/shouye/dtjcbhg";
import jbwt from "@/components/shouye/jbwt";
import jacontent from "@/components/shouye/jacontent";
// jacontent
export default {
  components: {
    btsgs, //被投诉公司排行TOP10
    cftsv, //仪表盘
    bjv, //办结率
    fenbu, //地图分布,
    yqqs, //舆情趋势
    yqzt,
    zdjg,
    tzsb,
    scbhg,
    spcjbhg,
    dtjcbhg,
    jbwt,
    jacontent
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 320rem;
  height: 90rem;
  background: url("~@/assets/images/bg.gif") no-repeat center;
  background-size: cover;
  position: relative;
  .title {
    font-size: 4rem;
    font-style: italic;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    line-height: 6.67rem;
    font-family: PingFang;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.73) 44.7998046875%,
      rgba(15, 94, 214, 0.4) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content {
    display: flex;
    padding: 1.25rem 4.67rem 0rem 4.67rem;
    .left,
    .right {
      display: flex;
      margin-right: 3.92rem;
      .ll {
        width: 49.25rem;
        margin-right: 3.92rem;
      }
      .lr {
        width: 49.25rem;
      }
    }
    .middle {
      width: 100.75rem;
      margin-right: 3.92rem;
    }
    .right {
      .rl,
      .rr {
        width: 48.42rem;
        margin-right: 3rem;
        .rlm {
          display: flex;
          align-items: center;
          height: 22.58rem;
          justify-content: space-between;
          margin: 1rem 0rem 0.92rem 0rem;
        }
      }
    }
  }
}
</style>
