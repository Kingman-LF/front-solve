<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>检查统计</p>
    </div>
    <div class="filed dis">
      <div class="num">检查单位</div>
      <div class="number"><span class="p1">3515</span><span class="p2">家</span></div>
    </div>
    <div class="in_hand dis">
      <div class="num">检查设备</div>
      <div class="number"><span class="p1">6900</span><span class="p2">台</span></div>
    </div>
    <div class="filed dis">
      <div class="num">排查隐患</div>
      <div class="number"><span class="p1">887</span><span class="p2">项</span></div>
    </div>
    <div class="coms dis">
      <div class="num">已整改</div>
      <div class="number"><span class="p1">846</span><span class="p2">项</span></div>
    </div>
    <div class="in_hand dis">
      <div class="num">督察指令书</div>
      <div class="number"><span class="p1">474</span><span class="p2">份</span></div>
    </div>
    <div class="coms dis">
      <div class="num">立案数</div>
      <div class="number"><span class="p1">74</span><span class="p2">件</span></div>
    </div>
  </div>
</template>
<script>
export default {


};
</script>
<style lang="scss" scoped>
.box {
  height: 39.92rem;
  .dis{
      width: 14rem;
      height: 10rem;
      float: left;
      .num{
        width: 13.67rem;
        height: 4.7rem;
        line-height: 4.7rem;
        text-align: center;
        font-size: 2rem;
        font-family: PingFang SC;
        font-weight: bold;
        font-style: italic;
        color: #FFFFFF;
      }
      .number{
        width: 13.67rem;
        height: 4.7rem;
        text-align: center;
        line-height: 4.7rem;
        .p1{
          font-size: 3.33rem;
          font-family: digifaw;
          text-shadow: 0rem 0rem 1rem #fff;
          font-weight: 400;
          color: #FFFFFF;
          margin-left: 1rem;
        }
        .p2{
          font-size: 2rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: #FFFFFF;
        }
      }

      .filed::after {
          width: 16.33rem;
          height: 0.17rem;
          background: linear-gradient(90deg, rgba(0, 240, 255, 0));
        }
    }
}
</style>
