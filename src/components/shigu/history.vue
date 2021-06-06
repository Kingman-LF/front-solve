<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>历史事故</p>
    </div>
    <div class="accidentContent">
      <div class="aclist">
        <div class="acitem d-flex">
          <div class="acitemInfo">2021-5-21 14:44:00</div>
          <div class="acitemInfo">南浔区</div>
          <div class="acitemInfo">电梯故障</div>
          <div class="acitemInfo">处理完毕</div>
        </div>
        <div class="acitem d-flex">
          <div class="acitemInfo">2021-5-21 14:44:00</div>
          <div class="acitemInfo">南浔区</div>
          <div class="acitemInfo">电梯故障</div>
          <div class="acitemInfo">处理完毕</div>
        </div>
        <div class="acitem d-flex">
          <div class="acitemInfo">2021-5-21 14:44:00</div>
          <div class="acitemInfo">南浔区</div>
          <div class="acitemInfo">电梯故障</div>
          <div class="acitemInfo">处理完毕</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {};
</script>
<style lang="scss" scoped>
.d-flex {
  display: flex;
  justify-content: space-between;
}
  .accidentContent {
    height: 13rem;
    margin: 2rem 0 0 2.5rem;
  }
  .acitem {
    height: 3.25rem;
    width: 100%;
    margin-bottom: 1rem;
  }
  .acitemInfo {
    width: 22.5rem;
    font-size: 1.5rem;
    font-family: PingFang Bold;
    line-height: 3.25rem;
    color: #ffffff;
    text-align: center;
  }

</style>
