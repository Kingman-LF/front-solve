<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>售药许可证到期预警</p>
    </div>
    <div class="yaoshi">
      <div class="yaof">
        <span>某某地某某某药房</span>
        <span>xxx区xxx药房...号</span>
        <span>1月内</span>
      </div>
      <div class="yaof">
        <span>某某地某某某药房</span>
        <span>xxx区xxx药房...号</span>
        <span>1月内</span>
      </div>
      <div class="yaof">
        <span>某某地某某某药房</span>
        <span>xxx区xxx药房...号</span>
        <span>1月内</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "yaoshi"
}
</script>

<style lang="scss" scoped>
.yaoshi{
  height: 7.87rem;
  overflow: auto;
}
.yaof {
  width: 95%;
  display: flex;
  padding-left: 4.33rem;
  align-items: center;
  justify-content: space-around;
  position: relative;
  line-height: 4.5rem;
  span {
    font-size: 1.5rem;
    font-family: PingFang;
    font-weight: bold;
    color: #ffffff;
  }
  span:last-child {
    color: #ff4a4a;
  }
  &:after{
    content: "";
    position: absolute;
    bottom: 0.08rem;
    width: 94.17rem;
    height: 0.08rem;
    margin-left: 4.33rem;
    background-image: url("~@/assets/images/fengxian/jx5.png");
    background-size: 100% 100%;
  }
  &:last-of-type:after{
    display: none;
  }
}
</style>
