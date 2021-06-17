<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>电梯概览</p>
    </div>
     <div class="disList">
        <div class="filed dis">
          <div class="num">总管辖</div>
          <div class="number">43023 </div>
        </div>
        <div class="in_hand dis">
          <div class="num">在用电梯</div>
          <div class="number">33899 </div>
        </div>
        <div class="coms dis">
          <div class="num">电梯维保中</div>
          <div class="number">27</div>
        </div>
        <div class="filed dis">
          <div class="num">待复核</div>
          <div class="number">2755</div>
        </div>
        <div class="in_hand dis">
          <div class="num">待上传</div>
          <div class="number">0</div>
        </div>
        <div class="coms dis">
          <div class="num">当前困人处置中</div>
          <div class="number">2</div>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  
};
</script>
<style lang="scss" scoped>
.box{
  height: 40rem;
  .disList{
    padding-top: 2rem;
  }
  .dis{
      width: 14rem;
      height: 10rem;
      float: left;
      .num{
        width: 14.67rem;
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
        font-size: 3.33rem;
          font-family: digifaw;
          text-shadow: 0rem 0rem 1rem #fff;
          font-weight: 400;
          color: #FFFFFF;
          margin-left: 1rem;
      }
      
      .filed::after {
          width: 16.33rem;
          height: 0.17rem;
          background: linear-gradient(90deg, rgba(0, 240, 255, 0));
        }
    }
}
  
</style>
