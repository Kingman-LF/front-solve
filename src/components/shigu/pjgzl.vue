<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>风险单位</p>
    </div>
    <div class="squareChart" id="wuye">

        <div class="wu_dis">
          <div class="company">永艺家具股份有限公司</div>
          <div class="county">安吉县</div>

          <!--          <div class="village">安吉县灵峰灵峰街道永艺西路1号</div>-->
<!--          <div class="mark">913300007284720000</div>-->
          <div class="stauts stauts_gao">高风险</div>
          <div class="taskStauts">核实不符</div>
        </div>
        <div class="wu_dis">
          <div class="company">德华兔宝宝装饰新材股份有限公司</div>
          <div class="county">德清县</div>

          <!--          <div class="village">德清县洛舍镇工业区</div>-->
<!--          <div class="mark">913300006095805007</div>-->
          <div class="stauts stauts_gao">高风险</div>
          <div class="taskStauts">核实不符</div>
        </div>
        <!-- <div class="wu_dis wsj">
          没有更多了
        </div> -->
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
  height: 20rem;
  #wuye {
    height: 12.9rem;
    .wu_dis{
      width: 100%;
      height: 6.45rem;
      font-size: 1.5rem;
      font-family: PingFang SC;
      font-weight: bold;
      font-style: italic;
      color: #FFFFFF;
      cursor: pointer;
      &:hover{
        color: #00F0FF;
      }
      div{
        float: left;
        line-height: 6.45rem;
        margin-left: 1.5rem;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow:ellipsis;
      }
      .county{
        width: 10rem;
        text-align: center;

      }
      .company{
        width: 32rem;
      }
      .village{
        width: 25rem;
      }
      .mark{
        width: 17rem;
      }
      .stauts {
        width: 8rem;
      }
      .taskStauts{
        width: 8rem;
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
    .wsj{
      width: 100%;
      text-align: center;
      color: #f1f3f5;
    }
  }
}

</style>
