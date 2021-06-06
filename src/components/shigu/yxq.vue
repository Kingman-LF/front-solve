<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>临近有效期/已超有效期</p>
    </div>
    <div class="num">653 5155</div>
  </div>
</template>

<script>
export default {
  name: "yxq"
}
</script>

<style lang="scss" scoped>
.num{
  height: 5rem;
  line-height: 7rem;
  text-align: center;
  font-family: digifaw;
  font-size: 6rem;
  font-weight: 400;
  color: #ffffff;
  box-sizing: border-box;
  text-shadow: 0rem 0rem 0rem #000000;
}
</style>
