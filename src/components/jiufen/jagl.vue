<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>积案概览</p>
    </div>
    <div class="gailan">
      <div>
        <span>标题:湖州某房地产公司延迟支付违约金...</span>
        <span>内容分类:住房保障与房地产-房地产开发管理</span>
      </div>
      <div>
        <span>时间:2021-5-21 16:54:00</span>
        <span>地区:吴兴区</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jagl"
}
</script>

<style lang="scss" scoped>
.gailan {
  margin-top: 1rem;
  display: flex;
  padding-left: 2.08rem;
  position: relative;
  justify-content: space-between;
  div {
    padding: 0rem 7.17rem 0rem 6rem;
    box-sizing: border-box;
    span {
      display: block;
      font-size: 2rem;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
      text-align: left;
      margin-bottom: 3.25rem;
      &:last-of-type{
        margin-bottom: 0;
      }
    }
  }
}
</style>
