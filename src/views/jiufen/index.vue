<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">“破五多”综合治理平台</div>
    <div class="Etitle">
      <p>纠纷化解模块</p>
    </div>
    <div class="con">
      <div class="left">
      <div class="left-top">
        <div class="international myborder">
          <div class="gj-title">
            <div class="title-">
              <img :src="require('@/assets/images/titlelogo.png')" alt="" />
              <div class="t-txt f-fam">国际积案概览</div>
            </div>
            <div class="title-txt">
              <div class="txt f-fam"><span>2</span> 件</div>
              <div class="txt f-fam">化解率 100%</div>
            </div>
          </div>
          <div class="gj-list">
            <div class="list-item">
              标题：湖州某房地产公司延迟支付违约金致人死亡等等等aaa
            </div>
            <div class="list-item">
              内容分类：住房保障与房地产-房地产开发管理
            </div>
            <div class="list-item">地区：吴兴区 时间：2021-5-21 16:54:00</div>
          </div>
        </div>
        <div class="international myborder">
          <div class="gj-title">
            <div class="title-">
              <img :src="require('@/assets/images/titlelogo.png')" alt="" />
              <div class="t-txt f-fam">国际积案概览</div>
            </div>
            <div class="title-txt">
              <div class="txt f-fam"><span>2</span> 件</div>
              <div class="txt f-fam">化解率 100%</div>
            </div>
          </div>
          <div class="gj-list">
            <div class="list-item">
              标题：湖州某房地产公司延迟支付违约金等等等aaaaa
            </div>
            <div class="list-item">
              内容分类：住房保障与房地产-房地产开发管理
            </div>
            <div class="list-item">
              <div>地区：吴兴区</div>
              <div>时间：2021-5-21 16:54:00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-bottom myborder">
        <gzl></gzl>
      </div>
    </div>
    <div class="moddle myborder">

    </div>
    <div class="right myborder"></div>
    </div>
  </div>
</template>
<script>
import qiyemap from "@/components/jiufen/qiyemap";
import xfTotal from "@/components/jiufen/xfTotal";
import ja from "@/components/jiufen/ja";
import xfStatus from "@/components/jiufen/xfStatus";
import jagl from "@/components/jiufen/jagl";
import xftb from "@/components/jiufen/xftb";
import xfmd from "@/components/jiufen/xfmd";
import xzssfb from "@/components/jiufen/xzssfb";
import xzfyfb from "@/components/jiufen/xzfyfb";
import ssgl from "@/components/jiufen/ssgl";
import fyay from "@/components/jiufen/fyay";
import fyjg from "@/components/jiufen/fyjg";
// import gzl from "@/components/jiufen/gzl";

export default {
  name: "home",
  data() {
    return {
      map: null,
      heatmap: null,
      text1: "2021-5-21\n14:44:00",
      text2: "流转还剩4天\n办理还剩8天",
    };
  },
  methods: {
    isSupportCanvas() {
      var elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    },
    toHome() {
      console.log(123);
      this.$router.replace("/home");
    },
  },
  mounted() {},
  components: {
    qiyemap,
    xfTotal,
    ja,
    xfStatus,
    jagl,
    xftb,
    xfmd,
    xzssfb,
    xzfyfb,
    ssgl,
    fyay,
    fyjg,
    // gzl
  }
};
</script>
<style lang="scss" scoped>
  .f-fam {
    font-family: PingFang Bold;
    font-weight: bold;
    font-style: italic;
    color: #ffffff;
    background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.73) 44.7998046875%,
    rgba(15, 94, 214, 0.4) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
.con{
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  .left {
  width: 107.33rem;
  height: 82.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .left-top {
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: space-between;

    .international {
      width: 53.08rem;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // align-items: center;
      .gj-title {
        width: 49.75rem;
        height: 5.33rem;
        margin-left: 1.67rem;
        border-bottom: 0.17rem solid #00f0ff;
        display: flex;
        justify-content: space-between;
        .title- {
          display: flex;
          justify-content: flex-start;
          line-height: 7rem;
          img {
            width: 2rem;
            height: 1.92rem;
            margin: 2.6rem 0.41rem 0 0.41rem;
          }
          .t-txt {
            font-size: 3rem;
          }
        }
        .title-txt {
          font-size: 2rem;
          display: flex;
          justify-content: flex-start;
          line-height: 7.5rem;
          .txt {
            &:last-child {
              margin-left: 1rem;
            }
          }
        }
      }
      .gj-list {
        width: 53.08rem;
        height: 14.5rem;
        padding: 0 4.75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .list-item {
          width: 43.5rem;
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:last-child {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
  .left-bottom {
    width: 100%;
    height: 60.58rem;
  }
}
.moddle{
  width: 82.25rem;
  height:81.92rem;
}
.right{
  width: 103.34rem;
  height: 82.25rem;
}
}
</style>
