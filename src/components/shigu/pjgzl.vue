<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>风险单位</p>
    </div>
    <div class="squareChart" id="wuye">
        <div class="wu_dis">
          <div class="county">安吉县</div>
          <div class="company">强龙家具股份有限公司</div>
          <div class="village">安吉县递铺镇范潭工业区</div>
          <div class="mark">91330000147278971M</div>
          <div class="stauts stauts_gao">高风险</div>
        </div>
        <div class="wu_dis">
          <div class="county">安吉县</div>
          <div class="company">永艺家具股份有限公司</div>
          <div class="village">安吉县灵峰灵峰街道永艺西路1号</div>
          <div class="mark">913300007284720000</div>
          <div class="stauts stauts_gao">高风险</div>
        </div>
        <div class="wu_dis">
          <div class="county">德清县</div>
          <div class="company">德华兔宝宝装饰新材股份有限公司</div>
          <div class="village">德清县洛舍镇工业区</div>
          <div class="mark">913300006095805007</div>
          <div class="stauts stauts_gao">高风险</div>
        </div>
        <div class="wu_dis">
          <div class="county">开发区</div>
          <div class="company">浙江红鹰集团股份有限公司</div>
          <div class="village">开发区彩凤路1318号</div>
          <div class="mark">91330000146977551H</div>
          <div class="stauts stauts_gao">高风险</div>
        </div>
        <div class="wu_dis">
          <div class="county">安吉县</div>
          <div class="company">安吉世通竹业有限公司</div>
          <div class="village">安吉县萧峰镇赤坞村</div>
          <div class="mark">9133052370466781c</div>
          <div class="stauts stauts_di">低风险</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.box{
  height: 40rem;
  #wuye {
    height: 30rem;
    .wu_dis{
      width: 100%;
      height: 7rem;
      font-size: 1.5rem;
      font-family: PingFang SC;
      font-weight: bold;
      font-style: italic;
      color: #FFFFFF;
      div{
        float: left;
        line-height: 7rem;
        margin-left: 1.5rem;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow:ellipsis;
      }
      .county{
        width: 5rem;
      }
      .company{
        width: 15rem;
      }
      .village{
        width: 16rem;
      }
      .mark{
        width: 17rem;
      }
      .stauts {
        width: 5rem;
      }
      .stauts_gao{
        color: #EB3633;
      }
      .stauts_zhong{
        color: #FF9000;
      }
      .stauts_di{
        color: #00C6FF;
      }
    }
  }
}

</style>
