<template>
  <div class="content">
    <div class="Dtitle" @click="toHome">“破五多”综合治理平台</div>
    <div class="Etitle">
      <p>投诉调处</p>
    </div>
    <div class="con">
      <div class="left">
        <top-list></top-list>
        <div class="middle">
          <shop-type></shop-type>
          <serve-type></serve-type>
        </div>
        <bottom></bottom>
      </div>
      <div class="mid">
        <tousunum></tousunum>
        <div class="middle">
          <tousuwenti></tousuwenti>
          <jubaowenti></jubaowenti>
        </div>
        <tousulist></tousulist>
      </div>
      <div class="right">
        <div class="rightTop">
          <banliState></banliState>
          <chulichaoqi></chulichaoqi>
          <xiaobaowei></xiaobaowei>
        </div>
        <rightbom></rightbom>
      </div>
    </div>
  </div>
</template>
<script>
import TopList from "@/components/tousu/topList.vue";
import ShopType from "@/components/tousu/shopType.vue";
import ServeType from "@/components/tousu/serveType.vue";
import bottom from "@/components/tousu/bottom.vue";
import tousunum from "@/components/tousu/tousunum.vue";
import tousuwenti from "@/components/tousu/tousuwenti.vue";
import jubaowenti from "@/components/tousu/jubaowenti.vue";
import tousulist from "@/components/tousu/tousulist.vue";
import banliState from "@/components/tousu/banliState.vue";
import chulichaoqi from '@/components/tousu/chulichaoqi.vue'
import xiaobaowei from "@/components/tousu/xiaobaowei.vue";
import rightbom from "@/components/tousu/rightbom.vue"
export default {
  methods: {
    toHome() {
      console.log(123);
      this.$router.replace("/home");
    },
  },
  components: {
    TopList,
    ShopType,
    ServeType,
    bottom,
    tousunum,
    tousuwenti,
    jubaowenti,
    tousulist,
    banliState,
    chulichaoqi,
    xiaobaowei,
    rightbom
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 320rem;
  height: 90rem;
  background-image: url("~@/assets/images/bg4.gif");
  background-size: cover;
  position: relative;
  .con {
    @extend .flex-row;
    justify-content: space-around;
    .left {
      width: 117rem;
      @extend .flex-col;
      .middle {
        @extend .flex-row;
      }
    }
    .mid {
      width: 77.67rem;
      .middle {
        @extend .flex-row;
      }
    }
    .right {
      width: 117rem;
      .rightTop {
        @extend .flex-row;
      }
    }
  }
}
</style>
