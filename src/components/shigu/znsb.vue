<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>智能识别</p>
    </div>
    <div id="znsb">
      <div class="dis">
        <div class="num">电瓶车次数</div>
        <div class="number"><span class="p1">4501</span></div>
      </div>
      <div class="dis">
        <div class="num">跳跃次数</div>
        <div class="number"><span class="p1">6900</span></div>
      </div>
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
  #znsb{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    height: 32.85rem;
  }
  .dis{
      height: 10rem;
      text-align: center;
      .num{
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
